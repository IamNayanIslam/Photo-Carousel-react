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
          <p className={step === 1 && "active"} onClick={() => setStep(1)}>
            1
          </p>
          <p className={step === 2 && "active"} onClick={() => setStep(2)}>
            2
          </p>
          <p className={step === 3 && "active"} onClick={() => setStep(3)}>
            3
          </p>
          <p className={step === 4 && "active"} onClick={() => setStep(4)}>
            4
          </p>
          <p className={step === 5 && "active"} onClick={() => setStep(5)}>
            5
          </p>
          <p className={step === 6 && "active"} onClick={() => setStep(6)}>
            6
          </p>
          <p className={step === 7 && "active"} onClick={() => setStep(7)}>
            7
          </p>
          <p className={step === 8 && "active"} onClick={() => setStep(8)}>
            8
          </p>
          <p className={step === 9 && "active"} onClick={() => setStep(9)}>
            9
          </p>
          <p className={step === 10 && "active"} onClick={() => setStep(10)}>
            10
          </p>
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
