import React, { useState, useEffect, useRef } from 'react';
import "./mouse.css";

const Mouse = () => {

    // const [isMouseMoving, setIsMouseMoving] = useState(false);

    // useEffect(() => {
    //     const circles = document.querySelectorAll('.circle');

    //     // Set initial opacity for all circles
    //     circles.forEach(circle => {
    //         circle.style.opacity = 1;
    //     });

    //     // Function to handle mouse movement
    //     const handleMouseMove = () => {
    //         setIsMouseMoving(true);
    //         // Reset opacity to 1 for all circles when the mouse moves
    //         circles.forEach(circle => {
    //             circle.style.opacity = 1;
    //         });
    //     };

    //     // Function to check mouse movement and set opacity to 0 if not moving
    //     const checkMouseMovement = () => {
    //         if (!isMouseMoving) {
    //             // Set opacity to 0 for all circles if the mouse is not moving
    //             circles.forEach(circle => {
    //                 circle.style.opacity = 0;
    //             });
    //         }
    //         setIsMouseMoving(false); // Reset the flag
    //     };

    //     // Add event listeners for mouse movement
    //     document.addEventListener('mousemove', handleMouseMove);

    //     // Set interval to check mouse movement every millisecond
    //     const intervalId = setInterval(checkMouseMovement, 1);

    //     // Clean up event listeners on component unmount
    //     return () => {
    //         document.removeEventListener('mousemove', handleMouseMove);
    //         clearInterval(intervalId);
    //     };
    // }, [isMouseMoving]);

    const coords = { x: 0, y: 0 };
    const circles = useRef([]);

    const colors = [
        "#000000", "##000000", "##000000", "##000000", "##000000", "##000000",
        "#130214", "#130214", "#130214", "#130214", "#130214", "#130214",
        "#3D0841", "#3D0841", "#3D0841", "#3D0841", "#3D0841", "#3D0841",
        "#6C1173", "#6C1173", "#6C1173", "#6C1173", "#6C1173", "#6C1173",
        "#881691", "#881691", "#881691", "#881691", "#881691", "#881691",
        "#A91DB5", "#A91DB5", "#A91DB5", "#A91DB5", "#A91DB5", "#A91DB5",
        "#C123CF", "#C123CF", "#C123CF", "#C123CF", "#C123CF", "#C123CF",
        "#EB2BFC", "#EB2BFC", "#EB2BFC", "#EB2BFC", "#EB2BFC", "#EB2BFC",
    ];





    useEffect(() => {
        circles.current = document.querySelectorAll(".circle");

        circles.current.forEach(function (circle, index) {
            circle.x = 0;
            circle.y = 0;
            circle.style.backgroundColor = colors[index % colors.length];
        });

        window.addEventListener("mousemove", function (e) {
            coords.x = e.clientX;
            coords.y = e.clientY;
        });

        function animateCircles() {
            let x = coords.x;
            let y = coords.y;

            circles.current.forEach(function (circle, index) {
                circle.style.left = x - 12 + "px";
                circle.style.top = y - 12 + "px";

                circle.style.transform = `scale(${(circles.current.length - index) / circles.current.length})`;

                circle.x = x;
                circle.y = y;

                const nextCircle = circles.current[index + 1] || circles.current[0];
                x += (nextCircle.x - x) * 0.3;
                y += (nextCircle.y - y) * 0.4;
            });

            requestAnimationFrame(animateCircles);
        }

        animateCircles();
    }, [colors]);

    return (
        <>
            {Array.from({ length: 48 }, (_, index) => (
                <div className="circle" key={index}></div>
            ))}
        </>
    );
};

export default Mouse;
