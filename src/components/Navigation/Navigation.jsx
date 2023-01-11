import styles from "./Navigation.module.css";

const Navigation = ({ step, setStep }) => {
  const nextPage = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const prevPage = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className={styles.container}>
      <h3
        className={
          step >= 2
            ? `${styles["backButton"]} ${styles["visible"]}`
            : `${styles["backButton"]}`
        }
        onClick={prevPage}
      >
        Go back
      </h3>
      {step < 4 ? (
        <button className={styles.nextButton} onClick={nextPage}>
          Next step
        </button>
      ) : (
        <button className={styles.nextButton}>Confirm</button>
      )}
    </div>
  );
};
export default Navigation;
