import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { deleteLivreAction } from "../redux/actions/livreActions"
function ListLivre(){
    const listBooks = useSelector((state)=>state.livreReducer.livres) 
    console.log(listBooks)


    
    const dispath = useDispatch()
    const handleDelete = (id)=>{
        dispath(deleteLivreAction(id))
    }
    return(
        <>        
            <Link to="/addlivre"><button>Ajouter LIVRE</button></Link>
            {listBooks.map(function(livre){
                return(
                    <p key={livre.id}>{livre.id}  | {livre.titre} | {livre.categorie}
                        <Link to = {`/updatelivre/${livre.id}`}><button>Update</button></Link>
                        <button onClick={()=>handleDelete(livre.id)}>Delete</button>
                    </p>)
            })}
        </>
    )
}
export default ListLivre