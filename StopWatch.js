import React, { useState, useEffect } from 'react';

function StopWatch() {

    const [time, setTime] = useState(new Date());

    useEffect(()=>{
        const interval = setInterval(()=>{
            setTime(new Date());
        }, 1000);

        return ()=>clearInterval(interval);
    },[]);

    function formatTime(){
        let hours= time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const Meridiem = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12 || 12;

        return `${Padzero(hours)}:${minutes}:${Padzero(seconds)} ${Padzero(Meridiem)}`;


    }
    
    function Padzero(number){
        return (number < 10 ? '0' : "") + number;

    }

    return(
      <div className='countwatch stopwatch-container'>
        <div className='clock'>
            <span>{formatTime()}</span>

        </div>

      </div>
    );

}

export default StopWatch;