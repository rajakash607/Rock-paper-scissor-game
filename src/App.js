import React, { useState } from "react";
import "./styles.css";

function Icon(props) {
  return (
    <div>
      <img
        src={props.img}
        alt="avatar"
        height={props.height}
        width={props.width}
        onClick={props.onClick}
        className={`hover ${props.c}`}
      />
    </div>
  );
}

export default function App() {
  const [scissorSelected, setscissorSelected] = useState(false);
  const [paperSelected, setpaperSelected] = useState(false);
  const [rockclicked, setrockClicked] = useState(false);
  const [userCount, setuserCount] = useState(0);
  const [computerCount, setcomputerCount] = useState(0);

  const handleRockClick = () => {
    setrockClicked(true);
    setTimeout(() => {
      setrockClicked(false);
    }, 1000);
    const randomNumber = Math.floor(Math.random() * 2);
    randomNumber === 0
      ? (setpaperSelected(true),
        setcomputerCount(computerCount + 1),
        setTimeout(() => {
          setpaperSelected(false);
        }, 1000))
      : (setscissorSelected(true),
        setuserCount(userCount + 1),
        setTimeout(() => {
          setscissorSelected(false);
        }, 1000));
  };

  const handlePaperClick = () => {
    setpaperSelected(true);
    setTimeout(() => {
      setpaperSelected(false);
    }, 1000);
    const randomNumber = Math.floor(Math.random() * 2);
    randomNumber === 0
      ? (setscissorSelected(true),
        setcomputerCount(computerCount + 1),
        setTimeout(() => {
          setscissorSelected(false);
        }, 1000))
      : (setrockClicked(true),
        setuserCount(userCount + 1),
        setTimeout(() => {
          setrockClicked(false);
        }, 1000));
  };

  const handleScissorClick = () => {
    setscissorSelected(true);
    setTimeout(() => {
      setscissorSelected(false);
    }, 1000);
    const randomNumber = Math.floor(Math.random() * 2);
    randomNumber === 0
      ? (setrockClicked(true),
        setcomputerCount(computerCount + 1),
        setTimeout(() => {
          setrockClicked(false);
        }, 1000))
      : (setpaperSelected(true),
        setuserCount(userCount + 1),
        setTimeout(() => {
          setpaperSelected(false);
        }, 1000));
  };

  function refresh() {
    window.location.reload("Refresh");
  }

  return (
    <div className="App">
      <div id="heading">
        <h1>The Classic! Game</h1>
        <h1>Rock Paper Scissors</h1>
      </div>
      <div className="score">
        <div>
          <h2>Player's score - {userCount}</h2>
        </div>
        <div>
          <h2>Computer's score - {computerCount}</h2>
        </div>
      </div>

      <input type="button" value="New Game" onClick={refresh} />

      <h2>Rules you know, Just select one</h2>
      <div id="rock">
        <Icon
          img="https://www.rock-paper-scissors-game.com/i/rock.png"
          height="200"
          onClick={handleRockClick}
          c={rockclicked === true ? "sad" : null}
        />
        <Icon
          img="https://www.rock-paper-scissors-game.com/i/shadow.png"
          width="200"
        />
      </div>
      <div id="paper">
        <Icon
          img="https://www.rock-paper-scissors-game.com/i/paper.png"
          height="200"
          c={paperSelected === true ? "sad" : null}
          onClick={handlePaperClick}
        />
        <Icon
          img="https://www.rock-paper-scissors-game.com/i/shadow.png"
          width="200"
        />
      </div>
      <div id="scissor">
        <Icon
          c={scissorSelected === true ? "sad" : null}
          img="https://www.rock-paper-scissors-game.com/i/scissors.png"
          height="200"
          onClick={handleScissorClick}
        />
        <Icon
          img="https://www.rock-paper-scissors-game.com/i/shadow.png"
          width="200"
        />
      </div>
    </div>
  );
}
