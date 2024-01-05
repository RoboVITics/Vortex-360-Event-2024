import React, { useState, useEffect } from "react";
import "./Timer.css"




const Timer = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    const eventDateTime = new Date("2023-12-29T12:00:00"); // year-month-date T time as HH:MM:SS formate

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const getTimeDifference = (eventDateTime, currentDateTime) => {
        const timeDiff = eventDateTime - currentDateTime;
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    };

    const { days, hours, minutes, seconds } = getTimeDifference(eventDateTime, currentDateTime);



    return (
        <>
            {/* <h2>Current Time: {currentDateTime.toLocaleTimeString()}</h2>
            <p>Event Date and Time: {eventDateTime.toLocaleString()}</p>
            <p>Time Until Event:</p>
            <p>{days} days, {hours} hours, {minutes} minutes, {seconds} seconds</p> */}
            <div id="timer_bg">
                <div id="title">Time till Vortex</div>
                <div id="contain">

                    <div class="timer_container">
                        <div class="timer_label">Days</div>
                        <div class="timer_time">
                            <p class="timer_display">{days}</p>
                        </div>
                    </div>
                    <div class="timer_container">
                        <div class="timer_label">Hours</div>
                        <div class="timer_time">
                            <p class="timer_display">{hours}</p>
                        </div>
                    </div>
                    <div class="timer_container">
                        <div class="timer_label">Minutes</div>
                        <div class="timer_time">
                            <p class="timer_display">{minutes}</p>
                        </div>
                    </div>
                    <div class="timer_container">
                        <div class="timer_label">Seconds</div>
                        <div class="timer_time">
                            <p class="timer_display">{seconds}</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Timer;