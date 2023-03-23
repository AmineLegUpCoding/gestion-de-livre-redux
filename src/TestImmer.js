import produce from "immer"

function TestImmer(){
    
    
    let listeA = [{id:1, name:'Youssef'}] 

    const listeB = produce(listeA, (draft) =>{
        draft.push({id:2, name:'test array'})
    } )

    console.log(listeA)
    console.log(listeB)
    


    

    return(
    <>
        <h1>Immer test</h1>
    </>
    )
}
export default TestImmer