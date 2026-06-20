import { BrowserRouter,Routes,Route } from "react-router-dom";
import Signup from "./Authenication/signup.jsx";
import Signin from "./Authenication/signin.jsx";
import Register from "./pages/Register.jsx";
import App from "./App.jsx";

export default function Layout(){
    return( <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/signin" element={<Signin/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/" element={<App/>}></Route>
      </Routes>
    </BrowserRouter>);
}