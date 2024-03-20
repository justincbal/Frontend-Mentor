import "./styles/App.css";
import Form from "./components/Form";
import Output from "./components/Output";
import { useEffect, useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState(1);

  const [displayTotal, setDisplayTotal] = useState(0);
  const [displayTip, setDisplayTip] = useState(0);

  useEffect(() => {
    if (tip) {
      setDisplayTotal((amount * tip) / people);

      let diff = amount * tip - amount;
      setDisplayTip(diff / people);
    } else {
      setDisplayTotal(amount / people);
      setDisplayTip(tip);
    }
  }, [amount, tip, people]);

  return (
    <>
      <h1 className="header">
        <div className="topHead">SPLI</div>
        <div className="bottomHead">TTER</div>
      </h1>
      <div className="main">
        <Form
          amount={amount}
          setAmount={setAmount}
          tip={tip}
          setTip={setTip}
          setPeople={setPeople}
        />
        <Output
          displayTotal={displayTotal}
          displayTip={displayTip}
          setAmount={setAmount}
          setTip={setTip}
          setPeople={setPeople}
        />
      </div>
    </>
  );
}

export default App;
