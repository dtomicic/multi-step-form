import Form from "../Form/Form";
import Navigation from "../Navigation/Navigation";
import PlanBox from "../PlanBox/PlanBox";
import styles from "./StepContent.module.css";
import data from "../../data/data.json";
import SubToggle from "../SubToggle/SubToggle";
import React from "react";

const StepContent = ({ step, setStep }) => {
  const [active, setActive] = React.useState("Monthly");
  const content = ["Monthly", "Yearly"];
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {step === 1 ? (
          <>
            <h1 className={styles.headerHeading}>Personal info</h1>
            <p className={styles.headerDescription}>
              Please provide your name, email address, and phone number
            </p>
          </>
        ) : step === 2 ? (
          <>
            <h1 className={styles.headerHeading}>Select your plan</h1>
            <p className={styles.headerDescription}>
              You have the option of monthly or yearly billing
            </p>
          </>
        ) : step === 3 ? (
          <>
            <h1 className={styles.headerHeading}>Pick add-ons</h1>
            <p className={styles.headerDescription}>
              Add-ons help enhance your gaming experience
            </p>
          </>
        ) : step === 4 ? (
          <>
            <h1 className={styles.headerHeading}>Finishing up</h1>
            <p className={styles.headerDescription}>
              Double-check everything looks OK before confirming
            </p>
          </>
        ) : null}
      </div>
      {step === 1 ? (
        <Form />
      ) : step === 2 ? (
        <>
          <div className={styles.planBoxContainer}>
            <PlanBox active={active} />
          </div>
          <SubToggle setActive={setActive} content={content} active={active} />
        </>
      ) : null}
      <Navigation step={step} setStep={setStep} />
    </div>
  );
};
export default StepContent;
