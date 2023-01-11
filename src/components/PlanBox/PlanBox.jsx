import styles from "./PlanBox.module.css";
import data from "../../data/data.json";
import React from "react";

const PlanBox = ({ active, handleCheckPlan, checkedPlan }) => {
  return (
    <>
      {data.plans.map((plan) => (
        <div
          className={
            checkedPlan === plan.name
              ? `${styles["container"]} ${styles["clicked"]}`
              : `${styles["container"]}`
          }
          onClick={active === "Monthly" ? () => handleCheckPlan(plan.name, plan.monthPrice) : () => handleCheckPlan(plan.name, plan.yearPrice)}
          key={plan.name}
        >
          <div className={styles.containerLeft}>
            <img src={plan.image} />
          </div>
          <div className={styles.containerRight}>
            <h1 className={styles.heading}>{plan.name}</h1>
            {active === "Monthly" ? (
              <h3 className={styles.subHeading}>${plan.monthPrice}/mo</h3>
            ) : (
              <>
                <h3 className={styles.subHeading}>${plan.yearPrice}/yr</h3>
                <h3 className={styles.headingDescription}>2 months free</h3>
              </>
            )}
          </div>
        </div>
      ))}
    </>
  );
};
export default PlanBox;
