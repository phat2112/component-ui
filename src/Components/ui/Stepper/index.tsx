import { Dispatch, SetStateAction } from "react";
import cn from "classnames";
import { AiOutlineCheck } from "react-icons/ai";
import "./index.scss";

export interface Step {
  label: string;
  value: string;
}

interface Props {
  steps: Step[];
  activeStep: number;
  setActiveStep: Dispatch<SetStateAction<number>>;
}

const Stepper: React.FC<Props> = ({ steps, setActiveStep, activeStep }) => {
  const handleNavigateStep = (index: number) => {
    setActiveStep(index);
  };

  return (
    <div className="stepper">
      {steps.map((step, index) => (
        <div
          key={step.value}
          onClick={() => handleNavigateStep(index)}
          className={cn("stepper__item", {
            "stepper__item--active": activeStep >= index,
          })}
        >
          <p className="stepper__label">{step.label}</p>
          <div className="stepper__step">
            {activeStep > index ? <AiOutlineCheck /> : index}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stepper;
