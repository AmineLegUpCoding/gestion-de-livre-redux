const initState = {
    livres:[
        {id:1, titre:"React redux", categorie:"front-end"},
        {id:2, titre:"LARAVEL", categorie:"back-end"}
    ],
    //Load api data using thunk middleware
    users:[]
}
const livreReducer = (state=initState, action) =>{
    
    switch (action.type){
        case "AJOUTER_LIVRE": 
            return {...state,livres : [...state.livres,action.payload]}
            
        case "MODIFIER_LIVRE":
                
            const livres = state.livres.map(function(livre){
                if (livre.id === parseInt(action.payload.id)){
                    return action.payload
                }
                return livre
            })                                 
            
            return {...state,livres : livres}
                     
        
        case "SUPPRIMER_LIVRE":            
            return {...state,livres:[...state.livres.filter(function(livre){
                return livre.id !== action.payload
            })]}

          
        case "CHERGER_USERS":
            return {...state,users : action.payload} 
                
        default:
            return state 
    }
    
}
export default livreReducer