import Plans from "../Plans/Plans";
import StepContent from "../StepContent/StepContent";
import boxStyles from "./Box.module.css";

const Box = ({ step, setStep }) => {
  const mql = window.matchMedia("(min-width: 1024px)");
  let desktopView = mql.matches;
  return (
    <>
      {desktopView === false ? (
        <div className={boxStyles.container}>
          <div className={boxStyles.box}>
            <StepContent step={step} setStep={setStep} />
          </div>
        </div>
      ) : (
        <div className={boxStyles.container}>
          <div className={boxStyles.box}>
            <Plans step={step} />
            <StepContent step={step} setStep={setStep} />
          </div>
        </div>
      )}
    </>
  );
};
export default Box;
