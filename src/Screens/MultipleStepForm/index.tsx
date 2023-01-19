import React, { useState } from "react";
import Stepper, { Step } from "Components/ui/Stepper";
import UserInfo from "./userInfo";

const STEPS: Step[] = [
  { label: "Profile", value: "profile" },
  { label: "National card", value: "nationalCard" },
  { label: "Working", value: "working" },
  { label: "Terms & Privacy", value: "privacyTerm" },
];

// validate user buy stuff
// step 1: user info
// step 2: upload national card
// step 3: work information
// step 4: accept term and submit buy
const MultipleStepForm = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div>
      <Stepper
        steps={STEPS}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
      />

      <UserInfo />
    </div>
  );
};

export default MultipleStepForm;
