import "../styles/Buttons.css";

const Buttons = () => {
  return (
    <>
      <div className="buttons">
        <button className="buttonInput">7</button>
        <button className="buttonInput">8</button>
        <button className="buttonInput">9</button>
        <button className="buttonInput blueButton">DEL</button>
        <button className="buttonInput">4</button>
        <button className="buttonInput">5</button>
        <button className="buttonInput">6</button>
        <button className="buttonInput">+</button>
        <button className="buttonInput">1</button>
        <button className="buttonInput">2</button>
        <button className="buttonInput">3</button>
        <button className="buttonInput">-</button>
        <button className="buttonInput">.</button>
        <button className="buttonInput">0</button>
        <button className="buttonInput">/</button>
        <button className="buttonInput">x</button>
        <button className="buttonInput resetButton blueButton">RESET</button>
        <button className="buttonInput equalButton">=</button>
      </div>
    </>
  );
};

export default Buttons;
