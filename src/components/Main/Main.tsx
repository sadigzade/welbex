import React from "react";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.main__wrapper}>
        <div className={styles.main__header}>
          <h1 className={styles["main__header-title"]}>
            Зарабатывайте больше <br /> <span>с WELBEX</span>
          </h1>
          <p className={styles["main__header-description"]}>
            Развиваем и контролируем продажи за вас
          </p>
        </div>
        <div className={styles.main__info}>
          <h2 className={styles["main__info-title"]}>
            <span>Вместе с</span> бесплатной консультацией <span>мы дарим:</span>
          </h2>
          <ul className={styles["main__info-list"]}>
            <li className={styles.list__item}>
              <h3 className={styles["list__item--mobile"]}>Skype ауди</h3>
              <h3 className={styles["list__item--desktop"]}>Skype ауди</h3>
              <p>отдела продаж и CRM системы</p>
            </li>
            <li className={styles.list__item}>
              <h3 className={styles["list__item--mobile"]}>30 виджетов</h3>
              <h3 className={styles["list__item--desktop"]}>Виджеты</h3>
              <p>30 готовых решений</p>
            </li>
            <li className={styles.list__item}>
              <h3 className={styles["list__item--mobile"]}>Dashboard</h3>
              <h3 className={styles["list__item--desktop"]}>Dashboard</h3>
              <p>с показателями вашего бизнеса</p>
            </li>
            <li className={styles.list__item}>
              <h3 className={styles["list__item--mobile"]}>Месяц аmoCRM</h3>
              <h3 className={styles["list__item--desktop"]}>35 дней</h3>
              <p>использования CRM</p>
            </li>
          </ul>
          <button className={styles["main__info-btn"]}>Получить консультацию</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
