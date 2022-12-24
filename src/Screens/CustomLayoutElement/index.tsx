import LiquidInput from "Components/LiquidInput";
import LiquidWrapper from "Components/LiquidWrapper";
import LiquidButton from "Components/LiquidButton";
import ButtonEffect from "Components/ButtonEffect";
import "./CustomLayoutElement.scss";

const CustomLayoutElement: React.FC = () => {
  return (
    <div>
      <h1>Liquid Element</h1>
      <LiquidWrapper size={450}>
        <h1>demo custom</h1>

        <div className="input-container">
          <LiquidInput placeholder="Username" />
        </div>
        <div className="input-container">
          <LiquidInput placeholder="Password" />
        </div>

        <div className="button-container">
          <LiquidButton text="Submit" />
        </div>
      </LiquidWrapper>
    </div>
  );
};

export default CustomLayoutElement;
