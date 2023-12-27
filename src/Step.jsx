import { useState } from "react";
import "./Step.css";

const getImg = () => {
  const id = Math.round(Math.random() * 200) + 1;
  return `https://picsum.photos/id/${id}/500/500`;
};

function Step() {
  const [step, setStep] = useState(1);
  const arr = new Array(10).fill(" ");
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
          {arr.map((_, num) => (
            <p
              key={num}
              className={step === num + 1 && "active"}
              onClick={() => setStep(num + 1)}
            >
              {num + 1}
            </p>
          ))}
        </div>
        <div className="message">
          <img src={getImg()} alt="" />
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
