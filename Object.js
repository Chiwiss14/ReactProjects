import React, {useState} from 'react';

function Object() {
 const[car, setCar] = useState({name: "Toyota", 
                                model: "Camry", 
                                year:    2020});
      
        function handleYearChange(event) { 
            setCar(c=>({...c, year: event.target.value}));

        } 
          
        function handleNameChange(event) { 
         setCar(c=>({...c, name: event.target.value}));
        }

        function handleModelChange(event) { 
            setCar(c=>({...c, model: event.target.value}));
        }

       return(<div>
         <p>Your Favourite Car: {car.name} {car.model} {car.year}</p>
         <input type='number' value={car.year} onChange={handleYearChange}></input><br/>
         <input type='text' value={car.name} onChange={handleNameChange}></input><br/>
         <input type='text' value={car.model} onChange={handleModelChange}></input><br/>

       </div>);                         

}

export default Object;