import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { chargerUsersAction } from "../redux/actions/livreActions"

function ListUsers(){
    const dispatch = useDispatch()
    const usersList = useSelector((state)=>state.livreReducer.users)
    console.log(usersList)
    useEffect(()=>{
        dispatch(chargerUsersAction())
    },[])
    return(
        <>
            <h1>Users !!!!</h1>
            
        </>
    )
}

export default ListUsers