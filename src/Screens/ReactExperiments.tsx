import { useState } from "react";
import Slide from "Components/Slide";

const ReactExperiments = () => {
  const [country, setCountry] = useState("");
  return (
    <div>
      <div>
        <h1>list Ref using ref callback</h1>
        <Slide />
      </div>
      <div>
        <h1>Test Key Props</h1>
        <select name="country" onChange={(e) => setCountry(e.target.value)}>
          <option value="">Hay chon 1 nuoc</option>
          <option value="vn">Viet Nam</option>
          <option value="us">My</option>
          <option value="fr">Phap</option>
        </select>
      </div>

      <input type="text" key={country} value={country} />
    </div>
  );
};

export default ReactExperiments;
