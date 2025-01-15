function Secondbutton() {

    const handleClick = () => console.log("Button clicked");
    const handleClick2 = (name) => console.log(`${name} stop clicking me`);

    return(
        <button onClick={()=>handleClick2('Chiwiss')}>Click me</button>
    )


}

export default Secondbutton;