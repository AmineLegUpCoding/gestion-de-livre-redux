import axios from "axios"
//créateur d'action
export const addLivreAction = (newLivre)=>{
   return({
        type:"AJOUTER_LIVRE",
        payload:newLivre
    }) 
}

export const updateLivreAction = (newLivre) => {
    return(
       {
            type:"MODIFIER_LIVRE",
            payload:newLivre
       }
    )
}

export const deleteLivreAction = (livreId) =>{
  return({
        type:"SUPPRIMER_LIVRE",
        payload:livreId
    })  
}

export const chargerUsersAction = () => {
    return function(dispatch,getState){
        axios.get("https://jsonplaceholder.typicode.com/users").then
        ((response)=>{
            dispatch (
                {
                    type:"CHERGER_USERS",
                    payload:response.data
                }
                )
            }   
        ) 
    }

        
    

                        
    }


// API DATA WITH THUNK


export const chargerUsersAction2 = () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response)=>{
                return(
                {
                    type:"CHERGER_USERS",
                    payload:response.data
                }
            )
        })
    
}
