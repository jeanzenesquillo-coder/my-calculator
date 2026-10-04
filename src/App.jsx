import { useState } from 'react';
import './App.css';

function App() {
  const [expression, setExpression] = useState('0');

  const appendValue = (value) => {
    if (expression === '0' || expression === 'Error') {
      if (value === '.') {
        setExpression('0.');
      } else {
        setExpression(value);
      }
    } else {
      setExpression(expression + value);
    }
  };

  const clearAll = () => {
    setExpression('0');
  };

  const backspace = () => {
    if (expression.length > 1) {
      setExpression(expression.slice(0, -1));
    } else {
      setExpression('0');
    }
  };

  const calculateResult = () => {
    try {
      let mathExpression = expression.replace(/×/g, '*').replace(/÷/g, '/');
      // eslint-disable-next-line no-eval
      let result = eval(mathExpression);

      if (result === undefined || result === null || isNaN(result)) {
        setExpression('Error');
      } else {
        setExpression(result.toString());
      }
    } catch (error) {
      setExpression('Error');
    }
  };

  return (
    <>
      <div className="calculator">
        <div className="top-tabs">
          <button className="tab active">BASIC</button>
        </div>

        <div className="screen">
          <span className="emoji">🌸</span>
          <div id="display">{expression}</div>
        </div>

        <div className="buttons">
          <button className="btn action" onClick={clearAll}>AC</button>
          <button className="btn action" onClick={backspace}>⌫</button>
          <button className="btn paren" onClick={() => appendValue('(')}>(</button>
          <button className="btn paren" onClick={() => appendValue(')')}>)</button>

          <button className="btn num" onClick={() => appendValue('7')}>7</button>
          <button className="btn num" onClick={() => appendValue('8')}>8</button>
          <button className="btn num" onClick={() => appendValue('9')}>9</button>
          <button className="btn op" onClick={() => appendValue('/')}>÷</button>

          <button className="btn num" onClick={() => appendValue('4')}>4</button>
          <button className="btn num" onClick={() => appendValue('5')}>5</button>
          <button className="btn num" onClick={() => appendValue('6')}>6</button>
          <button className="btn op" onClick={() => appendValue('*')}>×</button>

          <button className="btn num" onClick={() => appendValue('1')}>1</button>
          <button className="btn num" onClick={() => appendValue('2')}>2</button>
          <button className="btn num" onClick={() => appendValue('3')}>3</button>
          <button className="btn op" onClick={() => appendValue('-')}>-</button>

          <button className="btn num" onClick={() => appendValue('0')}>0</button>
          <button className="btn num" onClick={() => appendValue('.')}>.</button>
          <button className="btn op" onClick={() => appendValue('+')}>+</button>
          <button className="btn equal" onClick={calculateResult}>=</button>
        </div>
      </div>

      <div className="instructions">
        <h3>Paano Gamitin 🎀</h3>
        <ul>
          <li><strong>I-click ang mga numero</strong> (0-9) para mag-input.</li>
          <li><strong>Operators:</strong> ÷ (divide), × (multiply), - (subtract), + (add).</li>
          <li><strong>Parentheses ( ):</strong> Para sa grouping ng operations.</li>
          <li><strong>AC:</strong> I-clear lahat at mag-umpisa muli.</li>
          <li><strong>⌫:</strong> I-delete ang huling na-type mo (Backspace).</li>
          <li><strong>=:</strong> Pindutin para makuha ang sagot.</li>
        </ul>
      </div>
    </>
  );
}

export default App;