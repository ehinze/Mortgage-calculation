import React from "react"

export default function Result({result }) {
    return (
       <div className="result">
        
        <h1>The result is shown here</h1>
        <h3>Total Repayment Amount: $ {result}</h3>
       </div>
    )
}