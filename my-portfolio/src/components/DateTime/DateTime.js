import React, { useState, useEffect } from 'react';
import './DateTime.css'

export default function DateTime() {
    const [currentTime, setCurrentTime] = useState({
      date: '',
      time: ''
    });
  
    useEffect(() => {
      // Function to update the date and time
      const updateTime = () => {
        const now = new Date();
        const date = now.toLocaleDateString('en-US');
        const time = now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true, // 24-hour format
        });
  
        // Format time (HH:MM:SS)
        /*const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
        setCurrentTime(now.toLocaleDateString(undefined, timeOptions));*/
  
        setCurrentTime({ date, time });
      };
  
      // update time every second
      const timer = setInterval(updateTime, 1000);
  
      // initialize time on mount
      updateTime();
  
      return () => clearInterval(timer);
    }, []);
  
    return(
      <div className='time-container'>
        <p className="local-date">{ currentTime.date }</p>
        <p className="local-time">{ currentTime.time }</p>
      </div>
    );
};