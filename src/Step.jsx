import { useState } from "react";
import "./Step.css";

const messages = ["Hello World", "How are you?", "What are you doing?"];

function Step() {
  const [step, setStep] = useState(1);

  const stepUp = () => {
    if (step < 10) setStep((prevStep) => prevStep + 1);
  };

  const stepDown = () => {
    if (step > 1) setStep((prevStep) => prevStep - 1);
  };
  return (
    <div className="wrap">
      <div className="step">
        <div className="steps">
          <p className={step === 1 && "active"}>1</p>
          <p className={step === 2 && "active"}>2</p>
          <p className={step === 3 && "active"}>3</p>
          <p className={step === 4 && "active"}>4</p>
          <p className={step === 5 && "active"}>5</p>
          <p className={step === 6 && "active"}>6</p>
          <p className={step === 7 && "active"}>7</p>
          <p className={step === 8 && "active"}>8</p>
          <p className={step === 9 && "active"}>9</p>
          <p className={step === 10 && "active"}>10</p>
        </div>
        <div className="message">
          {/* <p>
            Step {step}: {messages[step - 1]}
          </p> */}
          <img src={`/${step}unsplash.jpg`} alt="" />
        </div>
        <div className="buttons">
          <button onClick={stepDown}>Previous</button>
          <button onClick={stepUp}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default Step;
