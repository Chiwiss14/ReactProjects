import profilepic from './assets/profilepic.jpg';
function Card() {
    return(
        <div className="card"> 
        <img className='card-image' src={profilepic} alt="profile picture"></img>
        <h2 className='card-title'>Confidence Nsirim</h2>
        <p className='card-text'> I am a web dev enthusiast</p>
        </div>
    );

}
export default Card;