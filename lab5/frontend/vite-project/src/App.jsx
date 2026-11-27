import {useState} from "react";
import MyButton from "./MyButton";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  const [isLogin, setLogin] = useState(true);
// if-else by ternary o/p
  // return isLogin ? <Home/> : <Login/>;

  // Agar ye hai to wo hoga
  return isLogin && <Home/>;

  
}


export default App;
