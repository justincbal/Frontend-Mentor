import { useState } from "react";
import "../styles/Output.css";

const Output = (props) => {
  const reset = () => {
    props.setTip(0);
    props.setAmount(0);
    props.setPeople(1);

    const custom = document.querySelector(".customInput");
    const input = document.querySelectorAll(".input");
    custom.value = "";

    input.forEach((i) => {
      i.value = "";
    });
  };

  return (
    <>
      <div className="outputSection">
        <div className="output">
          <div className="ouputHeadings">
            <h2 className="outputHeader">Tip Amount</h2>
            <h3 className="outputSubhead">/ person</h3>
          </div>
          <h2 className="price">${props.displayTip.toFixed(2)}</h2>
        </div>
        <div className="output">
          <div className="ouputHeadings">
            <h2 className="outputHeader">Total</h2>
            <h3 className="outputSubhead">/ person</h3>
          </div>
          <h2 className="price">${props.displayTotal.toFixed(2)}</h2>
        </div>
        <button className="reset" onClick={() => reset()}>
          RESET
        </button>
      </div>
    </>
  );
};

export default Output;
