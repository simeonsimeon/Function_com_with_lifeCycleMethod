import logo from './logo.svg';
import './App.css';

import { useState,useEffect } from "react"
function App1(){
    useEffect(()=>{
        return ()=>{
            <div>First</div>
            console.log("first component will unmount");
        }
    },[]);
    return <div>First</div>;
}
function App (){
    const [name,setName] = useState ("Simeon");
    const [age,setAge] = useState ("22");
    const [dept,setDept] = useState ("Mech");
    const [show,setShow] = useState("true");

    useEffect(() =>{
        console.log("componentDidmount");
    },[name,dept]);

    return (
        <div>{name} {age} {dept}
        <button onClick={ () =>setName("Mugesh")}>updatename</button>
        <button onClick={() => setAge("23")}>updateage</button>
        <button onClick={() =>setDept("Civil")}>updatedept</button>
        <button onClick={( ) => setShow(!show)}>Click</button>
        {show ? <App1 /> :null}
        </div>
       
    );
}
export default App;
