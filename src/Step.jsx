import { useState } from "react";
import "./Step.css";

const getImg = () => {
  const id = Math.round(Math.random() * 200) + 1;
  return `https://picsum.photos/id/${id}/500/500`;
};

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
          {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
            <p
              key={num}
              className={step === num && "active"}
              onClick={() => setStep(num)}
            >
              {num}
            </p>
          ))}
        </div>
        <div className="message">
          {/* <img src={`/${step}unsplash.jpg`} alt="" /> */}
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
