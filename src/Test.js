const state = {
        livres:[
            {id:1, titre:"React redux", categorie:"front-end"},
            {id:2, titre:"LARAVEL", categorie:"back-end"}
        ],
        
        user:{id:1, name:"Amine"}
    }

    let client = [...state.livres]

    console.log(state.livres)
    console.log(client)





