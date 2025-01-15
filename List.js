function List() {
    //const fruits = ['apple', 'banana', 'orange', 'grape', 'melon'];
   const fruits = [{id: 1 ,name:'apple',calories:95},
     {id: 2 ,name:'banana',calories:105}, 
      {id: 3,name:'orange',calories:62}, 
     {id: 4,name:'grape' , calories: 62},
      {id: 5,name:'melon' , calories: 50}];

    //fruits.sort((a, b)=> a.name - localeCompare(b.name)); appends the list in alphabetical order
    //fruits.sort((a, b)=> a.name - localeCompare(a.name)); appends the list in reverse alphabetical order

    //fruits.sort((a, b)=> a.calories - b.calories); appends the list in ascending order
    //fruits.sort((a, b)=> b.calories - a.calories); appends the list in descending order

    const lowCalFruits= fruits.filter((fruit)=> fruit.calories < 100);


   // const listItems = fruits.map((fruit) => <li>{fruit}</li>)
     const listItems = lowCalFruits.map((lowCalFruit) => <li> key={lowCalFruit.id} 
                                            {lowCalFruit.name}: &nbsp;
                                          <b>{lowCalFruit.calories}</b></li>)
  
    return (<ol>{listItems}</ol>)
}
export default List