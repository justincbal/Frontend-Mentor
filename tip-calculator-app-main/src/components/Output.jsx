import "../styles/Output.css";

const Output = () => {
  return (
    <>
      <div className="outputSection">
        <div className="output">
          <div className="ouputHeadings">
            <h2 className="outputHeader">Tip Amount</h2>
            <h3 className="outputSubhead">/ person</h3>
          </div>
          <h2 className="price">${}4.27</h2>
        </div>
        <div className="output">
          <div className="ouputHeadings">
            <h2 className="outputHeader">Total</h2>
            <h3 className="outputSubhead">/ person</h3>
          </div>
          <h2 className="price">${}4.27</h2>
        </div>
        <button className="reset">RESET</button>
      </div>
    </>
  );
};

export default Output;
