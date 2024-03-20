import '../styles/Output.css';

const Output = () => {
    return (
        <>
            <div className="outputSection">
                <div className="output">
                    <h2 className="outputHeader">Tip Amount</h2>
                    <h3 className="outputSubhead">/ person</h3>
                </div>
                <div className="output"></div>
                <button className="reset">RESET</button>
            </div>
        </>
    )
}

export default Output;