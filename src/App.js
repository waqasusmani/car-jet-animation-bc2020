import "./App.css";
import { useEffect } from "react";
import playerJet from "./images/player_jet.png";
import playerCar from "./images/player_car.png";
import enemyCar1 from "./images/enemy_car_1.png";
import enemyCar2 from "./images/enemy_car_2.png";

function App() {
  
useEffect(() => {
    setTimeout(() => {
      document.querySelector("#ecar1").style.right = "10vw";
      document.querySelector("h3").style.visibility = "visible";
    }, 5000);

    setTimeout(() => {
      document.querySelector("#ecar2").style.right = "20vw";
    }, 10000);

    var ecar1 = document.querySelector("#ecar1");
    var ecar2 = document.querySelector("#ecar2");

    setInterval(() => {
      if (ecar1.style.display == "none" && ecar2.style.display == "none") {
        document.querySelector("h3").innerText =
          "Both enemy cars destroyed. Hit Reload to play again.";
      }
    }, 500);

    var clouds = document.querySelectorAll(".clouds");
    var roadLines = document.querySelectorAll(".road-lines");
    var roadLinesNext = document.querySelectorAll(".road-lines-next");
    var trees = document.querySelectorAll(".trees");
    var treesNext = document.querySelectorAll(".trees-next");

    var frames = [
      { transform: "translateX(120vw)" },
      { transform: "translateX(0vw)" },
    ];

    var framesRoadLinesNext = [
      { transform: "translateX(0vw)" },
      { transform: "translateX(-20vw)" },
    ];

    var framesTrees = [
      { transform: "translateX(120vw)" },
      { transform: "translateX(-100vw)" },
    ];

    var framesTreesNext = [
      { transform: "translateX(90vw)" },
      { transform: "translateX(-200vw)" },
    ];

    var timing = {
      duration: 5000,
      iterations: Infinity,
      //direction: "alternate"
    };

    var timing2 = {
      duration: 2500,
      iterations: Infinity,
    };

    var timing3 = {
      duration: 250,
      iterations: Infinity,
    };

    for (var a = 0; a < 2; a++) {
      clouds[a].animate(frames, timing);
    }

    for (var a = 2; a < 4; a++) {
      clouds[a].animate(frames, timing2);
    }

    for (var a = 0; a < roadLines.length; a++) {
      roadLines[a].animate(frames, timing2);
    }

    for (var a = 0; a < roadLinesNext.length; a++) {
      roadLinesNext[a].animate(framesRoadLinesNext, timing3);
    }

    for (var a = 0; a < trees.length; a++) {
      trees[a].animate(framesTrees, timing2);
    }

    for (var a = 0; a < treesNext.length; a++) {
      treesNext[a].animate(framesTreesNext, {
        duration: 3000,
        iterations: Infinity,
      });
    }

    var missile = null;

    document.addEventListener("click", () => {
      var missile = document.querySelector("#missile");
      var explosion1 = document.querySelector("#explosion1");
      var explosion2 = document.querySelector("#explosion2");

      missile.style.transition = "2s linear";

      if (ecar2.style.right == "20vw" && ecar2.style.display != "none") {
        missile.style.top = "80vh";
        missile.style.left = "70vw";
      } else if (ecar1.style.right == "10vw" && ecar1.style.display != "none") {
        missile.style.top = "80vh";
        missile.style.left = "80vw";
      }

      setTimeout(() => {
        missile.style.transition = "none";
        missile.style.maxWidth = "0vw";
        missile.style.top = "20vh";
        missile.style.left = "10vw";
        missile.style.maxWidth = "10vw";
        if (ecar2.style.right == "20vw" && ecar2.style.display != "none") {
          explosion2.style.maxWidth = "20vw";
          setTimeout(() => (ecar2.style.display = "none"), 500);
          setTimeout(() => (explosion2.style.maxWidth = "0vw"), 1500);
        } else if (
          ecar1.style.right == "10vw" &&
          ecar1.style.display != "none"
        ) {
          explosion1.style.maxWidth = "20vw";
          setTimeout(() => (ecar1.style.display = "none"), 500);
          setTimeout(() => (explosion1.style.maxWidth = "0vw"), 1500);
        }
      }, 2000);
    });
  });

  return (
    <div className="App">
      <h3>Click anywhere to hit enemy cars</h3>
      <img id="pjet" src={playerJet} alt="Player Jet" />
      <img id="pcar" src={playerCar} alt="Player Car" />
      <img id="ecar1" src={enemyCar1} alt="Enemy Car 1" />
      <img id="ecar2" src={enemyCar2} alt="Enemy Car 2" />
      <img
        id="missile"
        src={require("./images/missile.png").default}
        alt="Missile"
      />
      <img
        id="explosion1"
        src={require("./images/explosion.png").default}
        alt="Explosion 1"
      />
      <img
        id="explosion2"
        src={require("./images/explosion.png").default}
        alt="Explosion 2"
      />
      <img
        className="clouds"
        id="cloud1"
        src={require("./images/cloud1.png").default}
        alt="Cloud 1"
      />
      <img
        className="clouds"
        id="cloud2"
        src={require("./images/cloud2.png").default}
        alt="Cloud 2"
      />
      <img
        className="clouds"
        id="cloud3"
        src={require("./images/cloud3.png").default}
        alt="Cloud 3"
      />
      <img
        className="clouds"
        id="cloud4"
        src={require("./images/cloud4.png").default}
        alt="Cloud 4"
      />
      <img
        className="trees"
        id="tree1"
        src={require("./images/tree1.png").default}
        alt="Tree 1"
      />
      <img
        className="trees"
        id="tree2"
        src={require("./images/tree2.png").default}
        alt="Tree 2"
      />
      <img
        className="trees"
        id="tree3"
        src={require("./images/tree3.png").default}
        alt="Tree 3"
      />
      <img
        className="trees"
        id="tree4"
        src={require("./images/tree4.png").default}
        alt="Tree 4"
      />
      <img
        className="trees-next"
        id="tree5"
        src={require("./images/tree3.png").default}
        alt="Tree 5"
      />
      <img
        className="trees-next"
        id="tree6"
        src={require("./images/tree4.png").default}
        alt="Tree 6"
      />
      <hr className="road-lines" id="rl1"></hr>
      <hr className="road-lines" id="rl2"></hr>
      <hr className="road-lines" id="rl3"></hr>
      <hr className="road-lines" id="rl4"></hr>
      <hr className="road-lines" id="rl5"></hr>
      <hr className="road-lines" id="rl6"></hr>
      <hr className="road-lines" i d="rl7"></hr>
      <hr className="road-lines-next" id="rl8"></hr>
      <hr className="road-lines-next" id="rl9"></hr>
      <hr className="road-lines-next" id="rl10"></hr>
      <hr className="road-lines-next" id="rl11"></hr>
      <hr className="road-lines-next" id="rl12"></hr>
      <hr className="road-lines-next" id="rl13"></hr>
      <hr className="road-lines-next" id="rl13"></hr>
    </div>
  );
}

export default App;
