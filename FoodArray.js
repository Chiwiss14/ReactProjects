import React, {useState} from 'react';

function FoodArray(){

    const[foods, setFoods] = useState(["Rice", "Beans", "Yam", "Plantain"]);

    function handleAddFood(){
        const newFood = document.getElementById('foodinput').value;
        document.getElementById('foodinput').value = '';

        setFoods(f=>[...f,newFood]);

    }

    function handleRemoveFood(index){
        setFoods(foods.filter((_, i) => i !== index));    }

    return(<div> 
        <h1>Food Menu</h1>
        <ul>
            {foods.map((food, index) => <li key={index} 
            onClick={()=>handleRemoveFood(index)}>{food}</li>)}
        </ul>
        <input type='text' id='foodinput' placeholder='Enter Food Name'></input>
        <button onClick={handleAddFood}>Add Food</button>
        <button onClick={handleRemoveFood}>Remove Food</button>
    </div>);
}

export default FoodArray;