import MyButton from "./MyButton";
import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";

// const User=()=>{
//   const data={
// name:"Ankit jukku",
// age:20,
// isAdmin:false,
// theme:"dark",
//   };
//   return (
//     <>
//     <h1>Name:{data.name}</h1>
//     <h2>Age:{data.age}</h2>
//     </>
//   );
// };

// const Book=(props)=>{
//   return (
//     <>
//       <h1>Book name: {props.name}</h1>
//       <h2>Price: {props.price}</h2>
//       <h3>Author: {props.author}</h3>
//     </>
//   );
// };

function App() {
  // const bookData={
  //   name:"Let us java",
  //   author:"Yashwant kanitkar",
  //   price:750,
  // }
  const [isLogin, setLogin] = useState(false);
  return isLogin ? <Home setLogin={setLogin} /> : <Login setLogin={setLogin} />;
  // if true then load other
  // return isLogin && <Home/>;

  // if false then load other
  // return isLogin || <Login/>
}
export default App;
