import styles from './ProgressBar.module.scss';
import React from "react";

interface progressBarPropsInterface {
  goal: number,
  done: number,
  isScssProgressMode: boolean
}

const progressBar: React.FC<progressBarPropsInterface> = ({goal, done, isScssProgressMode}) => {
  return(
    <div className={styles.container}>
      {isScssProgressMode ? (
        <>
          <svg className={styles.circle} viewBox="0 0 63 64" transform="rotate(-90)">
            <circle />
            <circle />
          </svg>
          <div className={styles.progress}>
            {`${done}/${goal}`}
          </div>
        </>
      ) : (
        <>
          <svg width="60" height="60" viewBox="0 0 63 64" fill="none" xmlns="http://www.w3.org/2000/svg"
               strokeDashoffset={186} strokeDasharray={186} transform="rotate(-90)">
            <circle cx="30" cy="30" r="29.5" strokeDashoffset={0} stroke="#FFFFFF" opacity="0.5" strokeWidth="1"/>
            <circle cx="30" cy="30" r="29.5" strokeDashoffset={186 - (186 * done) / goal} stroke="#FFFFFF"
                    strokeWidth="2"/>
          </svg>
          <div className={styles.progress}>
            {`${done}/${goal}`}
          </div>
        </>
      )}
    </div>
  );
}

export default progressBar;