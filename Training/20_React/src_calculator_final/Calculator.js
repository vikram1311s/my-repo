import './Calculator.css';
import {useState} from 'react'

function Calculator() {

    const [output, setOutput] = useState('');
    const [operator, setOperator] = useState(null);


    const handleArthematic = (type) => {
        if(type == 'C'){
            setOutput('');
            return;
        }
        let o = output;
        o += type;
        setOutput(o)
        setOperator(type)
    }

    const handleResult = () => {
       const splitString = output.split(operator);
       if(operator == '+'){
        const finalOutput = parseInt(splitString[0]) + parseInt(splitString[1]) 
        setOutput(finalOutput);
       } else if (operator == '-'){
        const finalOutput = parseInt(splitString[0]) - parseInt(splitString[1]) 
        setOutput(finalOutput);
       } else if (operator == '*'){
        const finalOutput = parseInt(splitString[0]) * parseInt(splitString[1]) 
        setOutput(finalOutput);
       }

       console.log(splitString);
    }

    return <div className="main-calc">
        <input type="text" name="calc" value={output} onChange={(e) => setOutput(e.target.value)} className="input-cls" />

        <div className="operations-block">
            <div className="left">
                <div className="child-left">
                    <div className="operation" onClick={() => handleArthematic('C')}>C</div>
                    <div className="operation" onClick={() => handleArthematic('+')}>+</div>
                    <div className="operation" onClick={() => handleArthematic('*')}>*</div>
                    <div className="operation" onClick={() => handleArthematic('-')}>-</div>
                </div>

            </div>
            <div className="right">
                <div className="equal" onClick={() => handleResult()}>=</div>
            </div>
        </div>

    </div>
}

export default Calculator;