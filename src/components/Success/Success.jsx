import styles from "./Success.module.css";

const Success = () => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={"/images/icon-thank-you.svg"}/>
      <h1 className={styles.heading}>Thank you!</h1>
      <h3 className={styles.subHeading}>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com
      </h3>
    </div>
  );
};
export default Success;
