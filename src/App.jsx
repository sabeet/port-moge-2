import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [rotation, setRotation] = useState(6);
  const [isUppercase, setIsUppercase] = useState(true);
  const [dynamicClassName, setDynamicClassName] = useState("item-5-uppercase");

  useEffect(() => {
    const handle = setInterval(() => {
      const el = document.querySelector(".item-5");

      // el.style.transform = `rotate(${rotation}deg)`;

      // el.classList.toggle("item-5-uppercase");
      // el.classList.toggle("item-5-lowercase");

      console.log(el.classList);
      if (el.classList.contains("item-5-uppercase")) {
        setDynamicClassName("item-5-lowercase");
      } else {
        setDynamicClassName("item-5-uppercase");
      }

      // setRotation((prev) => prev + 6);
    }, 1000);

    return () => {
      // *** Clear the interval on unmount
      clearInterval(handle); // ***
    };
  }, []);

  useEffect(() => {
    const handle = setInterval(() => {
      const el = document.querySelector(".item-5");

      el.style.transform = `rotate(${rotation}deg)`;

      setRotation((prev) => prev + 6);
    }, 1000);

    return () => {
      // *** Clear the interval on unmount
      clearInterval(handle); // ***
    };
  }, [rotation]);

  // setInterval(function(){
  // }, 1000);

  // setInterval(function(){
  //   document.querySelector('.item-5').style.textTransform = "lowercase";
  //   document.querySelector('.item-5').style.color = "orange";
  // }, 2000);

  // setInterval(function(){
  //   document.querySelector('.item-5').style.color = "black";
  // }, 3000);

  return (
    <div className="parent">
      <div className="top"></div>
      <div className="grid-special">
        <span className="item">S</span>
        <span className="item">A</span>
        <span className="item">B</span>
        <span className="item">E</span>
        <span className={dynamicClassName + " item item-5"}>E</span>
        <span className="item">T</span>
        <span className="item">.</span>
        <span className="item">m</span>
        <span className="item">e</span>
      </div>
      <div className="bottom">
        <span href="#">
          <a
            target="_blank"
            href="https://github.com/sabeet/resume/blob/main/Sabeet_Chowdhury_Resume_July_2023_v2.pdf"
          >
            Résumé
          </a>
        </span>
      </div>
    </div>
  );
};

export default App;
