import React from "react";
import styles from "./Checkout.module.css";

const Checkout = ({ setStep, active, addonArray, checkedPlan, planPrice }) => {
  const [total, setTotal] = React.useState(planPrice);
  const handleClick = () => {
    setStep(2);
  };

  if (addonArray.length === 1) {
    setTotal(planPrice);
  } else {
    const mappedArray = addonArray.slice(1).map((addon) => addon.price);
    const result = mappedArray.reduce((sum, num) => sum + num);
    setTotal(result + planPrice);
  }

  // const mappedArray = addonArray.slice(1).map((addon) => addon.price);
  // const result = mappedArray.reduce((sum, num) => sum + num);
  // setTotal(result + planPrice);

  return (
    <div className={styles.container}>
      <div className={styles.coloredBox}>
        <div className={styles.topSection}>
          <div className={styles.topSectionLeft}>
            <h1 className={styles.heading}>
              {checkedPlan} ({active})
            </h1>
            <h3 className={styles.subHeading} onClick={handleClick}>
              Change
            </h3>
          </div>
          <div className={styles.topSectionRight}>
            <h1 className={styles.price}>
              ${planPrice}/{active === "Monthly" ? "mo" : "yr"}
            </h1>
          </div>
        </div>
        <hr className={styles.line}></hr>
        <div className={styles.bottomSection}>
          {addonArray.slice(1).map((addon) => {
            return (
              <div className={styles.checkoutItem}>
                <h2 className={styles.checkoutItemName}>{addon.name}</h2>
                <h2 className={styles.checkoutItemPrice}>
                  +${addon.price}/{active === "Monthly" ? "mo" : "yr"}
                </h2>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.checkoutTotal}>
        <h2 className={styles.checkoutTotalText}>
          Total (per {active === "Monthly" ? "month" : "year"})
        </h2>
        <h2 className={styles.checkoutTotalPrice}>
          +${total}/{active === "Monthly" ? "mo" : "yr"}
        </h2>
      </div>
    </div>
  );
};
export default Checkout;
