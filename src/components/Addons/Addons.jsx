import styles from "./Addons.module.css";
import data from "../../data/data.json";

const Addons = ({ active, addonArray, handleAdd }) => {
  return (
    <>
      {data.addons.map((addon) => {
        return (
          <div
            className={
              addonArray.filter(e => e.name === addon.name).length > 0
                ? `${styles["container"]} ${styles["checkedContainer"]}`
                : `${styles["container"]}`
            }
            key={addon.name}
            onClick={active === 'Monthly' ? () => handleAdd(addon.name, addon.monthPrice) : () => handleAdd(addon.name, addon.yearPrice)}
          >
            <div className={styles.containerLeft}>
              <div
                className={
                  addonArray.filter(e => e.name === addon.name).length > 0
                    ? `${styles["containerLeftCheck"]} ${styles["checkedBox"]}`
                    : `${styles["containerLeftCheck"]}`
                }
              ></div>
              <div className={styles.containerLeftText}>
                <h1 className={styles.heading}>{addon.name}</h1>
                <h3 className={styles.subHeading}>{addon.desc}</h3>
              </div>
            </div>
            <div className={styles.containerRight}>
              <h1 className={styles.price}>
                {active === "Monthly"
                  ? `+$${addon.monthPrice}/mo`
                  : `+$${addon.yearPrice}/yr`}
              </h1>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Addons;
