import Box from "./components/Box/Box";
import Plans from "./components/Plans/Plans";
import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const mql = window.matchMedia("(min-width: 1024px)");
  let desktopView = mql.matches;

  return (
    <div>
      {desktopView === false ? (
        <>
          <Plans step={step} />
          <Box step={step} setStep={setStep} />
        </>
      ) : (
        <>
          <Box step={step} setStep={setStep} />
        </>
      )}
    </div>
  );
}

export default App;
