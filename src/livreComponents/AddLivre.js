import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addLivreAction } from "../redux/actions/livreActions"
import ListLivre from "./ListLivre"

function AddLivre(){
    const [id,setId]=useState(1)
    const [titre,setTitre]=useState("")
    const [categorie,setCategorie]=useState("")
    
    const dispath = useDispatch()
    const navigate = useNavigate()
    function handleAddLivre(){
        dispath(addLivreAction({id:id, titre:titre, categorie:categorie}))
        navigate("/")
    }
    
    return(        
        <>
            <input onChange={(e)=>{setId(parseInt(e.target.value))}}></input>
            <input onChange={(e)=>{setTitre(e.target.value)}}></input>
            <input onChange={(e)=>{setCategorie(e.target.value)}}></input>
            <button onClick={handleAddLivre}>Ajouter livre</button>
        </>
    )
}
export default AddLivre