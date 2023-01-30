import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomHook from "Screens/CustomHook";
import DesignPattern from "Screens/DesignPattern";
import ReactExperiments from "Screens/ReactExperiments";
import CustomLayoutElement from "Screens/CustomLayoutElement";
import MultipleStepForm from "Screens/MultipleStepForm";
import AdvancedPatterns from "Screens/AdvancedPatterns/layout";
import {
  CompoundComponent,
  PropsGetters,
  StateReducer,
  ControlProps,
  StateInitializer,
} from "Screens/AdvancedPatterns";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/custom-hook" element={<CustomHook />} />
          <Route path="/design-pattern" element={<DesignPattern />} />
          <Route path="/react-experiment" element={<ReactExperiments />} />
          <Route path="/custom-layout" element={<CustomLayoutElement />} />
          <Route path="/multiple-step-form" element={<MultipleStepForm />} />
          <Route path="/advanced-patterns">
            <Route index element={<AdvancedPatterns />} />
            <Route
              index={false}
              path="compound"
              element={<CompoundComponent />}
            />
            <Route
              index={false}
              path="props-getter"
              element={<PropsGetters />}
            />
            <Route
              index={false}
              path="state-reducer"
              element={<StateReducer />}
            />
            <Route
              index={false}
              path="control-props"
              element={<ControlProps />}
            />
            <Route
              index={false}
              path="state-initialization"
              element={<StateInitializer />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
