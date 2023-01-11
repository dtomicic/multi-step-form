import Form from "../Form/Form";
import Navigation from "../Navigation/Navigation";
import PlanBox from "../PlanBox/PlanBox";
import styles from "./StepContent.module.css";
import SubToggle from "../SubToggle/SubToggle";
import React from "react";
import Addons from "../Addons/Addons";
import Checkout from "../Checkout/Checkout";

const StepContent = ({ step, setStep }) => {
  const [active, setActive] = React.useState("Monthly");
  const [addonArray, setAddonArray] = React.useState([{}]);
  const content = ["Monthly", "Yearly"];
  const [checkedPlan, setCheckedPlan] = React.useState("Arcade");
  const [planPrice, setPlanPrice] = React.useState(9);

  const handleCheckPlan = (x, y) => {
    setCheckedPlan(x);
    setPlanPrice(y);
  };

  const handleAdd = (x, y) => {
    if (addonArray.filter((e) => e.name === x).length > 0) {
      setAddonArray(addonArray.filter((item) => item.name !== x));
    } else {
      setAddonArray([...addonArray, { name: x, price: y }]);
    }
  };
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
            <PlanBox
              active={active}
              handleCheckPlan={handleCheckPlan}
              checkedPlan={checkedPlan}
            />
          </div>
          <SubToggle
            setActive={setActive}
            content={content}
            active={active}
            setAddonArray={setAddonArray}
          />
        </>
      ) : step === 3 ? (
        <>
          <div className={styles.addonsContainer}>
            <Addons
              active={active}
              addonArray={addonArray}
              handleAdd={handleAdd}
            />
          </div>
        </>
      ) : step === 4 ? (
        <>
          <Checkout
            setStep={setStep}
            active={active}
            addonArray={addonArray}
            checkedPlan={checkedPlan}
            planPrice={planPrice}
          />
        </>
      ) : null}
      <Navigation step={step} setStep={setStep} />
    </div>
  );
};
export default StepContent;
