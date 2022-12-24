import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomHook from "Screens/CustomHook";
import DesignPattern from "Screens/DesignPattern";
import ReactExperiments from "Screens/ReactExperiments";
import CustomLayoutElement from "Screens/CustomLayoutElement";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/custom-hook" element={<CustomHook />} />
          <Route path="/design-pattern" element={<DesignPattern />} />
          <Route path="/react-experiment" element={<ReactExperiments />} />
          <Route path="/custom-layout" element={<CustomLayoutElement />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
