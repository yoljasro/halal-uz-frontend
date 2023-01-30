import { FC } from "react";
//sass
import styles from "./index.module.sass";

type MainPageTitlePropsType = {
  subtitle: string;
  description?: string;
};

export const MainPageTitle: FC<MainPageTitlePropsType> = ({
  subtitle,
  description,
}) => {
  return (
    <div className={styles.title}>
      <h4 className={styles.title__subtitle}>{subtitle}</h4>
      <div className={styles.title__eventText}>
        <h1 className={styles.title__eventText__description}>{description}</h1>
      </div>
    </div>
  );
};
