import Protypes from 'prop-types'
function UserGreeting(props) {
    //const welcomeMessage = <h1>Welcome back, {props.username}!</h1>
    //const loginPrompt = <h1>Please sign up.</h1>
    if (props.isLoggedIn) {
      return <h1 className="welcome-message">Welcome back, {props.username}!</h1>
      //return{props.isLoggedIn ? <h1>Welcome back, {props.username}!</h1> : <h2>Please log in to continue!</h2>}
    }
    else {
      return <h1 className="login-propmt">Please sign up.</h1>
      // return <h1>Welcome, Guest!</h1>
    }
}
UserGreeting.propTypes = {
    isLoggedIn: Protypes.bool,
    username: Protypes.string
}

export default UserGreeting