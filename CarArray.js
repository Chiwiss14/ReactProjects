import React, {useState} from 'react';

function CarArray(){
    const [cars, setCars] = useState([]);
    const[carYear, setCarYear] = useState(new Date().getFullYear());
    const[carMake, setCarMake] = useState('');
    const [carModel, setCarModel] = useState('');

    function handleAddCar(){
        const newCar = {year: carYear, make: carMake, model: carModel};
        setCars(c=>[...c, newCar]);
        setCarYear(new Date().getFullYear());
        setCarMake('');
        setCarModel('');
    }

    function handleRemoveCar(index){
        setCars(c=> c.filter((_, i) => i !== index));
    }

    function handleCarYearChange(e){
        setCarYear(e.target.value);
    }

    function handleCarModelChange(e){
        setCarModel(e.target.value);
    }

    function handleCarMakeChange(e){
        setCarMake(e.target.value);
    }

    return(<div>
        <h2>Car Inventory</h2>
        <ul>
       {cars.map((car, index) => <li key={index} onClick={()=>handleRemoveCar(index)} >
                                {car.year} {car.make} {car.model}</li>)}
        </ul>
        <input type='number' value={carYear} onChange={handleCarYearChange}></input><br/>

        <input type='text' value={carMake} onChange={handleCarMakeChange} 
                                 placeholder='Enter Car Make'></input><br/>

           <input type='text' value={carModel} onChange={handleCarModelChange} 
                                 placeholder='Enter Car Model'></input><br/>

        <button onClick={handleAddCar}>Add Car</button>
                       

    </div>)

}

export default CarArray;