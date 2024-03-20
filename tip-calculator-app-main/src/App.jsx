import "./styles/App.css";
import Form from "./components/Form";
import Output from "./components/Output";

function App() {
  return (
    <>
      <h1 className="header">
        <div className="topHead">SPLI</div>
        <div className="bottomHead">TTER</div>
      </h1>
      <div className="main">
        <Form />
        <Output />
      </div>
    </>
  );
}

export default App;
