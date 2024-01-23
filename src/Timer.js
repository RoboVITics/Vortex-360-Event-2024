import React, { useEffect, useState } from "react";
import "./Timer.css"; // Make sure to create a CSS file for styling

const Timer = () => {


  const [targetDate, setTargetDate] = useState(() => {
    // Set the target date to February 2, 2024, at 00:00:00
    const now = new Date(2024, 1, 2, 0, 0, 0);
    return now;
  });
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const countdownTimer = setInterval(() => {
      const updatedComplete = updateAllSegments();
      setIsComplete(updatedComplete);

      if (updatedComplete) {
        clearInterval(countdownTimer);
      }
    }, 1000);

    return () => {
      clearInterval(countdownTimer);
    };
  }, []); // Run only once on component mount

  function getTimeSegmentElements(segmentElement) {
    const segmentDisplay = segmentElement.querySelector(".segment-display");
    const segmentDisplayTop = segmentDisplay.querySelector(
      ".segment-display__top"
    );
    const segmentDisplayBottom = segmentDisplay.querySelector(
      ".segment-display__bottom"
    );

    const segmentOverlay = segmentDisplay.querySelector(".segment-overlay");
    const segmentOverlayTop = segmentOverlay.querySelector(
      ".segment-overlay__top"
    );
    const segmentOverlayBottom = segmentOverlay.querySelector(
      ".segment-overlay__bottom"
    );

    return {
      segmentDisplayTop,
      segmentDisplayBottom,
      segmentOverlay,
      segmentOverlayTop,
      segmentOverlayBottom,
    };
  }

  function updateSegmentValues(displayElement, overlayElement, value) {
    displayElement.textContent = value;
    overlayElement.textContent = value;
  }

  function updateTimeSegment(segmentElement, timeValue) {
    const segmentElements = getTimeSegmentElements(segmentElement);

    if (
      parseInt(segmentElements.segmentDisplayTop.textContent, 10) === timeValue
    ) {
      return;
    }

    segmentElements.segmentOverlay.classList.add("flip");

    updateSegmentValues(
      segmentElements.segmentDisplayTop,
      segmentElements.segmentOverlayBottom,
      timeValue
    );

    function finishAnimation() {
      segmentElements.segmentOverlay.classList.remove("flip");
      updateSegmentValues(
        segmentElements.segmentDisplayBottom,
        segmentElements.segmentOverlayTop,
        timeValue
      );

      segmentElements.segmentOverlay.removeEventListener(
        "animationend",
        finishAnimation
      );
    }

    segmentElements.segmentOverlay.addEventListener(
      "animationend",
      finishAnimation
    );
  }

  function updateTimeSection(sectionID, timeValue) {
    const firstNumber = Math.floor(timeValue / 10) || 0;
    const secondNumber = timeValue % 10 || 0;
    const sectionElement = document.getElementById(sectionID);
    const timeSegments = sectionElement.querySelectorAll(".time-segment");

    updateTimeSegment(timeSegments[0], firstNumber);
    updateTimeSegment(timeSegments[1], secondNumber);
  }

  function getTimeRemaining(targetDateTime) {
    const nowTime = Date.now();
    const timeDifference = targetDateTime - nowTime;

    if (timeDifference <= 0) {
      // Countdown is complete
      return {
        complete: true,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    } else {
      // Countdown is still in progress
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
      const seconds = Math.floor((timeDifference / 1000) % 60);

      return {
        complete: false,
        days,
        hours,
        minutes,
        seconds,
      };
    }
  }

  const updateAllSegments = () => {
    const timeRemainingBits = getTimeRemaining(new Date(targetDate).getTime());

    updateTimeSection("days", timeRemainingBits.days);
    updateTimeSection("hours", timeRemainingBits.hours);
    updateTimeSection("minutes", timeRemainingBits.minutes);
    updateTimeSection("seconds", timeRemainingBits.seconds);

    return timeRemainingBits.complete;
  };

  const [showTimer, setShowTimer] = useState(false);

  const handleButtonClick = () => {
    setShowTimer((prevShowTimer) => !prevShowTimer);
  };
  // button feature
  const [days, setDays] = useState(0);

  const TargetDate = new Date(2024, 1, 1); // Feb 2nd, 2024
  useEffect(() => {
    const calculateDaysRemaining = () => {
      const currentDate = new Date();
      const targetDateTime = new Date(TargetDate).getTime();
      const difference = targetDateTime - currentDate.getTime();
      const remainingDays = Math.ceil(difference / (1000 * 60 * 60 * 24));

      setDays(remainingDays);
    };

    calculateDaysRemaining(); // Initial calculation

    // Update days remaining every midnight (adjustable)
    const intervalId = setInterval(calculateDaysRemaining, 1000 * 60 * 60 * 24);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [targetDate]);

  return (
    <>
      
        <p onClick={handleButtonClick} id="timer_text">{days} DAYS TO GO<img src="./Robot_arm.png"></img></p>
      <div
        onClick={handleButtonClick}
        className={`countdown ${
          showTimer ? "countdown_visible" : "countdown_hidden"
        }`}
      >
        <div className="time-section" id="days">
          <div className="time-group">
            <div className="time-segment">
              <div className="segment-display">
                <div className="segment-display__top"></div>
                <div className="segment-display__bottom"></div>
                <div className="segment-overlay">
                  <div className="segment-overlay__top"></div>
                  <div className="segment-overlay__bottom"></div>
                </div>
              </div>
            </div>
            <div className="time-segment">
              <div className="segment-display">
                <div className="segment-display__top"></div>
                <div className="segment-display__bottom"></div>
                <div className="segment-overlay">
                  <div className="segment-overlay__top"></div>
                  <div className="segment-overlay__bottom"></div>
                </div>
              </div>
            </div>
          </div>
          <p>Days</p>
        </div>

        <div className="time-section" id="hours">
          <div className="time-group">
            <div className="time-segment">
              <div className="segment-display">
                <div className="segment-display__top"></div>
                <div className="segment-display__bottom"></div>
                <div className="segment-overlay">
                  <div className="segment-overlay__top"></div>
                  <div className="segment-overlay__bottom"> </div>
                </div>
              </div>
            </div>
            <div className="time-segment">
              <div className="segment-display">
                <div className="segment-display__top"></div>
                <div className="segment-display__bottom"></div>
                <div className="segment-overlay">
                  <div className="segment-overlay__top"></div>
                  <div className="segment-overlay__bottom"></div>
                </div>
              </div>
            </div>
          </div>
          <p>Hours</p>
        </div>

        <div className="time-section" id="minutes">
          <div className="time-group">
            <div className="time-segment">
              <div className="segment-display">
                <div className="segment-display__top"></div>
                <div className="segment-display__bottom"></div>
                <div className="segment-overlay">
                  <div className="segment-overlay__top"></div>
                  <div className="segment-overlay__bottom"></div>
                </div>
              </div>
            </div>
            <div className="time-segment">
              <div className="segment-display">
                <div className="segment-display__top"></div>
                <div className="segment-display__bottom"></div>
                <div className="segment-overlay">
                  <div className="segment-overlay__top"></div>
                  <div className="segment-overlay__bottom"></div>
                </div>
              </div>
            </div>
          </div>
          <p>Minutes</p>
        </div>

        <div className="time-section" id="seconds">
          <div className="time-group">
            <div className="time-segment">
              <div className="segment-display">
                <div className="segment-display__top"></div>
                <div className="segment-display__bottom"></div>
                <div className="segment-overlay">
                  <div className="segment-overlay__top"></div>
                  <div className="segment-overlay__bottom"></div>
                </div>
              </div>
            </div>
            <div className="time-segment">
              <div className="segment-display">
                <div className="segment-display__top"></div>
                <div className="segment-display__bottom"></div>
                <div className="segment-overlay">
                  <div className="segment-overlay__top"></div>
                  <div className="segment-overlay__bottom"></div>
                </div>
              </div>
            </div>
          </div>
          <p>Seconds</p>
        </div>
      </div>
    </>
  );
};

export default Timer;
