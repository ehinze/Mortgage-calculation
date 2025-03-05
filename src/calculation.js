import React from "react"

export default function Calculation({ setResult }) {
    const [formData, setFormData] = React.useState(
        {
            mortgagetype: "",
            mortgageAmount: "",
            mortgageTerm: "",
            interestRate: "",
            mortgagetype: "",
        }
    )

    function handleChange(event) {
        const { name, value, type } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
            //   It dynamically assigns a key to an object based on the name variable.
        }));
    }  // It ensures that user input updates the state in real-time.

    function handleClear() {
        setFormData({
            mortgageAmount: "",
            mortgageTerm: "",
            interestRate: "",
            mortgagetype: "",
        });

        setResult("");
    }

    function calculateRepayment(event) {
        event.preventDefault();

        const { mortgageAmount, mortgageTerm, interestRate, mortgagetype } = formData; //formData is the state variable that holds all form inputs.
        const amount = parseFloat(mortgageAmount);
        const term = parseFloat(mortgageTerm);
        const rate = parseFloat(interestRate);
        const monthlyr = parseFloat(rate / (100 * term))
        let finalrepayment = 0
        if (mortgagetype === "Repayment") {
            finalrepayment = (amount * monthlyr * ((1 + monthlyr) ^ term)) * rate;
            //   alert(`Your repayment amount is: $${finalrepayment.toFixed(2)}`); 
        }
        else if (mortgagetype === "interest") {
            finalrepayment = amount * (rate / 100);
        }
        finalrepayment = finalrepayment.toFixed(3);
        setResult(finalrepayment);
    }
    return (
        <div className="main">
            <nav>
                <h2>Mortgage Calculator</h2>
                <p onClick={handleClear}>Clear All</p>
            </nav>
            <form>
                <label>Mortgage Amount </label>
                <div className="align">
                    <span className="span">$</span>
                    <input
                        className="no-spinner"
                        type="number"
                        required
                        name="mortgageAmount"
                        value={formData.mortgageAmount}
                        onChange={handleChange} />
                    {/* is a built-in React event handler that detects when an input field's value changes. */}
                </div>
                <div className="column">
                    <div className="mortageterm">
                        <label>MortgageTerm </label>
                        <div className="aligns">
                            <input
                                className="input no-spinner"
                                type="number"
                                required
                                name="mortgageTerm"
                                value={formData.mortgageTerm}
                                onChange={handleChange}
                            />
                            <span className="term">years</span>

                        </div>
                    </div>
                    <div className="mortageterm">
                        <label>Interest Rate</label>
                        <div className="aligns">
                            <input
                                className="input no-spinner"
                                type="number"
                                required
                                name="interestRate"
                                value={formData.interestRate}
                                onChange={handleChange}
                            />
                            <span className="term">%</span>
                        </div>
                    </div>

                </div>
                <div className="check">
                    <label>Mortgage Type</label>
                    <div className="type ">
                        <input type="radio"
                            id="Repayment"
                            name="mortgagetype"
                            value="Repayment"
                            checked={formData.mortgagetype === "Repayment"}
                            onChange={handleChange} />
                        <label className="">Repayment</label>
                    </div>
                    <div className="type">
                        <input type="radio"
                            id="interest"
                            name="mortgagetype"
                            value="interest"
                            checked={formData.mortgagetype === "interest"}
                            // unlike  checkbox  that accepts a boolean , raido does not, that is why we are making it a boolean like the way it is the unemplyed is  becase of the value.
                            onChange={handleChange} />
                        <label className="">Interest Only</label>
                    </div>
                </div>
                <button type="submit" onClick={calculateRepayment}>&#x1F4B2; Calculate payment</button>

            </form>

        </div>
    )
}
