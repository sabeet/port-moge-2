import React from "react";
import "./App.css";

const App = () => {
  setInterval(function () {
    document.querySelector(".item-5").style.transform += "rotate(6deg)";
  }, 1000);

  // setInterval(function(){
  //   document.querySelector('.item-5').style.color = "gray";
  //   document.querySelector('.item-5').style.textTransform = "uppercase";
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
        <div className="item">S</div>
        <div className="item">A</div>
        <div className="item">B</div>
        <div className="item">E</div>
        <div className="item item-5">E</div>
        <div className="item">T</div>
        <div className="item">.</div>
        <div className="item">m</div>
        <div className="item">e</div>
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
