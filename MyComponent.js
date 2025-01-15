import React, {useState} from 'react';

function MyComponent() {

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = ()=> {
        setName ("Onyekachi");
    }

    const incrementAge = () => {
        setAge(age + 1);
    }

    const toggleEmployedstatus = () => {
        setIsEmployed(!isEmployed);
    }
    return(<div>
        <p>Name:{name} </p>
        <button onClick={()=> updateName("Onyekachi")}>Set Name</button>

        <p>Name:{age} </p>
        <button onClick={()=> incrementAge()}>Increment Age</button>

        <p>isEmployed:{isEmployed ? "Yes" : "No"} </p>
        <button onClick={()=> toggleEmployedstatus()}>Toggle Status</button>


    </div>);
}

export default MyComponent;