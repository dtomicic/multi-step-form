import plansStyles from "./Plans.module.css";

const Plans = ({ step }) => {
  return (
    <div className={plansStyles.container}>
      <div className={plansStyles.steps}>
        <div className={plansStyles.stepItem}>
          <div
            className={
              step === 1
                ? `${plansStyles.step} ${plansStyles.stepFocus}`
                : `${plansStyles.step}`
            }
          >
            <div className={plansStyles.stepNumber}>1</div>
          </div>
          <div className={plansStyles.stepHeader}>
            <h3 className={plansStyles.stepSubHeading}>Step 1</h3>
            <h1 className={plansStyles.stepHeading}>Your info</h1>
          </div>
        </div>
        <div className={plansStyles.stepItem}>
          <div
            className={
              step === 2
                ? `${plansStyles.step} ${plansStyles.stepFocus}`
                : `${plansStyles.step}`
            }
          >
            <div className={plansStyles.stepNumber}>2</div>
          </div>
          <div className={plansStyles.stepHeader}>
            <h3 className={plansStyles.stepSubHeading}>Step 2</h3>
            <h1 className={plansStyles.stepHeading}>Select plan</h1>
          </div>
        </div>
        <div className={plansStyles.stepItem}>
          <div
            className={
              step === 3
                ? `${plansStyles.step} ${plansStyles.stepFocus}`
                : `${plansStyles.step}`
            }
          >
            <div className={plansStyles.stepNumber}>3</div>
          </div>
          <div className={plansStyles.stepHeader}>
            <h3 className={plansStyles.stepSubHeading}>Step 3</h3>
            <h1 className={plansStyles.stepHeading}>Add-ons</h1>
          </div>
        </div>
        <div className={plansStyles.stepItem}>
          <div
            className={
              step === 4
                ? `${plansStyles.step} ${plansStyles.stepFocus}`
                : `${plansStyles.step}`
            }
          >
            <div className={plansStyles.stepNumber}>4</div>
          </div>
          <div className={plansStyles.stepHeader}>
            <h3 className={plansStyles.stepSubHeading}>Step 4</h3>
            <h1 className={plansStyles.stepHeading}>Summary</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Plans;
