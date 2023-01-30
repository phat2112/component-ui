import { useCallback, useState } from "react";
import axios from "axios";
import useAsync from "Components/hooks/useAsync";
import Slide from "Components/Slide";
import { useEffect } from "react";

const ReactExperiments = () => {
  const [country, setCountry] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const asyncCallback = (searchValue: string) => {
    return axios.get(
      `http://localhost:8000/product/search-product?query=${searchValue}`
    );
  };

  const { data, status, error, run } = useAsync();

  useEffect(() => {
    if (!searchValue) {
      return;
    }

    run(asyncCallback(searchValue));
  }, [run, searchValue]);

  console.log({ data, status, error });
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

      <div>
        <h1>Test Async Hook </h1>

        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ReactExperiments;
