import React,{useState} from "react";
import 'firebase/auth';
import { useFirebaseApp } from "reactfire";
import style from "./Login.css"
import image from "./handshake.png"




export default (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const submit = ()=>{
       console.log(email,password);
    }

    return(
        <div className="login-wrapper">

                <h1>Login</h1>
                <label htmlFor="email">Correo Electronico</label>
                <input type="email" id="email" onChange={ (ev)=> setEmail(ev.target.value) }/>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={ (ev)=> setPassword(ev.target.value)}/>
                <p></p>
                <button onClick={submit} className="button">Iniciar sesion</button>
        </div>
    )
}
