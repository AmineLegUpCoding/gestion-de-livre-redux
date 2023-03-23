import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { updateLivreAction } from "../redux/actions/livreActions"

function UpdateLivre(){
    const {id} = useParams()

    const livre = useSelector((state => state.livreReducer.livres.find(function(livre){
        return livre.id === parseInt(id)
    })))
    console.log(livre.titre)
    const [titre,setTitre]=useState(livre.titre)
    const [categorie,setCategorie]=useState(livre.categorie)    
    
    const dispath = useDispatch()
    const navigate = useNavigate()    

    function handleUpdateLivre(){
        dispath(updateLivreAction({id:id,titre:titre, categorie:categorie}))
        navigate("/")
    }
    
    return(        
        <>
            <input readOnly value={id}></input>
            <input value={titre} onChange={(e)=>{setTitre(e.target.value)}}></input>
            <input value={categorie} onChange={(e)=>{setCategorie(e.target.value)}}></input>
            <button onClick={handleUpdateLivre}>Modifier livre</button>
        </>
    )
}
export default UpdateLivre