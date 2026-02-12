import React, { useState } from "react";
import confetti from "canvas-confetti";
import "./App.css"; 

function App() {
  const [yesClicked, setYesClicked] = useState(false);
  const [yesSize, setYesSize] = useState({ width: 100, height: 50 });

  const [noStyle, setNoStyle] = useState({
    width: "100px",
    height: "50px",
    fontSize: 16, 
  });

  const handleYesClick = () => {
    setYesClicked(true);
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const noMessages = [
    "NO",
    "TRY AGAIN",
    "ARE YOU SURE?",
    "LAST CHANCE",
    "REALLY?",
    "NOW",
    "THIS",
    "IS",
    "MEAN",
    "JUST",
    "HIT",
    "YES",
    "DAMMIT",
  ];

 const handleNoClick = () => {
    setNoStyle((prev) => ({
      ...prev,
      position: "absolute",
      top: Math.random() * 80 + 10 + "%",
      left: Math.random() * 80 + 10 + "%",
      width: parseInt(prev.width) * 0.9 + "px",
      height: parseInt(prev.height) * 0.9 + "px",
      fontSize: prev.fontSize * 0.9,

    }));

    setYesSize({ width: yesSize.width * 1.1, height: yesSize.height * 1.1 });
    setNoIndex((prev) => (prev + 1) % noMessages.length);
  };

  // const refreshPage = () => {
  //   window.location.reload();
  // };

  const [noIndex, setNoIndex] = useState(0);

  return (
    <div className="App">
      <div className="container">
        {!yesClicked && (
          <div className="header1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suit-heart-fill" viewBox="0 0 16 16">
              <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1"/>
            </svg>
            <h1>Will you be my Valentines?</h1>
          </div>
        )}

        {!yesClicked ? (
          <div className="button-container">
            <button
              className="yesBttn"
              style={{ width: yesSize.width, height: yesSize.height }}
              onClick={handleYesClick}
            >
              YES
            </button>

            <button
              className="no-button"
              style={{
                position: noStyle.position || "relative",
                top: noStyle.top,
                left: noStyle.left,
                width: noStyle.width,
                height: noStyle.height,
                fontSize: noStyle.fontSize + "px", 
                backgroundColor: "white", 
                color: "#ff1a1a",          
                border: "2px solid #ff1a1a"
              }}
              onClick={handleNoClick}
            >
              {noMessages[noIndex]}
            </button>
          </div>
        ) : (
          <div className="celebrate">
            <h1>YAY!</h1>
            <h2>Happy Valentine's day my love</h2>
             <p>awwaaachoo</p>
            <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGcwdG9ydmtlemxkYjA5eDdwcXNub29qOHB2bXd5YTk1cTZibDBtdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/12UlfHpF05ielO/giphy.gif" alt="celebration" />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
