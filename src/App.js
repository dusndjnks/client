import { Routes , Route } from "react-router-dom";
import Home from "./pages/Home";
import Update from "./pages/Update";
import Delete from "./pages/Delete";
import CreateTask from "./pages/CreateTask";


function App() {
  return (
    <div className="App">
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/" element={<Update/>}/>
    <Route path="/" element={<CreateTask/>}/>
    <Route path="/" element={<Delete/>}/>
   </Routes>
    </div>
  );
}

export default App;
