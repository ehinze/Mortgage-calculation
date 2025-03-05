import Calculation from "./calculation"
import Result from "./result"
import React from 'react';

function App() {
  const [result, setResult] = React.useState(null)
    return(
        <div className="container">
          <Calculation setResult={setResult}/>
          <Result result={result} />
        </div>
      ) 
}

export default App;
