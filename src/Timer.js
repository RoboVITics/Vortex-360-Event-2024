import React, { useState, useEffect } from "react";
import "./Timer.css";

const Timer = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    const eventDateTime = new Date("2024-01-10T23:00:00"); // year-month-date T time as HH:MM:SS format

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

    const closeTimer = () => {
        let timer=document.getElementById("timer_bg");
        timer.style.opacity=0;
        timer.style.zIndex=-10;
    };


    return (
        <>
            <div id="timer_bg">
                {/* Cancel Icon */}
                <i className="cancel-icon" onClick={closeTimer}>
                    X
                </i>

                <div id="title">Time till Vortex</div>
                <div id="contain">
                    <div className="timer_container">
                        <div className="timer_label">Days</div>
                        <div className="timer_time">
                            <p className="timer_display">{days}</p>
                        </div>
                    </div>
                    <div className="timer_container">
                        <div className="timer_label">Hours</div>
                        <div className="timer_time">
                            <p className="timer_display">{hours}</p>
                        </div>
                    </div>
                    <div className="timer_container">
                        <div className="timer_label">Minutes</div>
                        <div className="timer_time">
                            <p className="timer_display">{minutes}</p>
                        </div>
                    </div>
                    <div className="timer_container">
                        <div className="timer_label">Seconds</div>
                        <div className="timer_time">
                            <p className="timer_display">{seconds}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Timer;
