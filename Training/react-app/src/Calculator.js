import './Calculator.css';

function Calculator() {
    return <div className="main-calc">
        <input type="text" name="calc" className="input-cls" />
        <div className="operations-block">
            <div className="left">
                <div className="child-left">
                    <div className="operation">C</div>
                    <div className="operation">+</div>
                    <div className="operation">*</div>
                    <div className="operation">-</div>
                </div>

            </div>
            <div className="right">
                <div className="equal">=</div>
            </div>
        </div>

    </div>
}

export default Calculator;