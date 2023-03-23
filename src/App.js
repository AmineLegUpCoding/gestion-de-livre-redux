import { Route, Routes } from "react-router-dom";
import AddLivre from "./livreComponents/AddLivre";
import ListLivre from "./livreComponents/ListLivre";
import Posts from "./livreComponents/Posts";
import UpdateLivre from "./livreComponents/UpdateLivre";
import TestImmer from "./TestImmer";


function App() {
  return (
    <>
    
      <TestImmer />
      <Posts />
      <Routes>
        <Route path="/" element={<ListLivre/>}></Route>
        <Route path="/addlivre" element={<AddLivre/>}></Route>
        <Route path="/updatelivre/:id" element={<UpdateLivre/>}></Route>
      </Routes>
      
    </>
  );
}

export default App;
