import Header  from "./Header";
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card";
import Button from "./Button/Button";
import Student from "./Student";
import UserGreeting from "./UserGreeting";
import List from "./List";
import Secondbutton from "./Secondbutton";
import ProfilePicture from "./ProfilePicture";
import MyComponent from './MyComponent';
import Counter from "./Counter";
import Onchange from "./Onchange";
import ColorPicker from "./ColorPicker";
import Object from "./Object";
import FoodArray from "./FoodArray";
import CarArray from "./CarArray";
import ToDoList from "./ToDoList";
import StopWatch from "./StopWatch";
import ComponentA from "./ComponentA";
import Hooks from "./Hooks";
import Stopwatches from "./Stopwatches";

function App() {
  return (
    <div>
      <Header />
      <Footer />
      <Food />
      <Card />
      <Button />
      <Student name="spoogeboob" age={30} isStudent={true} />
      <Student name="chiwiss" age={60} isStudent={false} />
      <Student name="chiboy" age={20} isStudent={true} />
      <Student name="ONYEKACHI" age={22} isStudent={true} />
      <Student/>
      <div className="user-greeting">
      <UserGreeting isLoggedIn={false} username= "onyekachi"/>
      </div>
      <List/>
      <Secondbutton/>
      <ProfilePicture/>
      <MyComponent/>
      <Counter/>
      <Onchange/>
      <ColorPicker/>
      <Object/>
      <FoodArray/>
      <CarArray/>
      <ToDoList/>
      <StopWatch/>
      <ComponentA/>
      <Hooks/>
      <Stopwatches/>

    </div>
  );
  
}

export default App;
