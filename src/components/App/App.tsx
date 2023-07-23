import React from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import purpleBallSvg from "../../assets/images/purple-ball.svg";
import redBallSvg from "../../assets/images/red-ball.svg";

import styles from "./App.module.css";
import Main from "../Main/Main";

const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.app__wrapper}>
        <Header />
        <main className={styles.app__main}>
          <Main />
        </main>
        <Footer />
      </div>
      <div className={styles.app__balls}>
        <div className={styles["app__balls-purple"]}>
          <img src={purpleBallSvg} alt="Purple Ball" />
        </div>
        <div className={styles["app__balls-red--big"]}>
          <img src={redBallSvg} alt="Red Ball" />
        </div>
        <div className={styles["app__balls-red--small"]}>
          <img src={redBallSvg} alt="Red Ball" />
        </div>
      </div>
    </div>
  );
};

export default App;
