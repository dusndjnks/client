import { Routes , Route } from "react-router-dom";
import Home from "./pages/Home";
import Update from "./pages/Update";
import CreateTask from "./pages/CreateTask";


function App() {
  return (
    <div className="App" >
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="update" element={<Update/>}/>
    <Route path="create" element={<CreateTask/>}/>
   </Routes>
    </div>
  );
}

export default App;
