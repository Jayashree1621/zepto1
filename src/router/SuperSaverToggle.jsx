import React, { useState } from 'react';
import styles from '../router/SuperSaverToggle.module.css';

const SuperSaverToggle = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(prev => !prev);
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.toggleSwitch} ${isActive ? styles.active : ''}`}
        onClick={handleToggle} >
        {isActive && (
          <img
            src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/13.4.0/images/super-saver/super-saver-active.svg"
            alt="Super Saver Active"
            className={styles.icons}
          />
        )}

        <div className={`${styles.circle} ${isActive ? styles.right : styles.left}`}></div>

        {!isActive && (
          <img
            src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/13.4.0/images/super-saver/super-saver-inactive.svg"
            alt="Super Saver Inactive"
            className={styles.icon}
          />
        )}
        <div className={`${styles.circle} ${isActive ? styles.right : styles.left}`}>
          {isActive && <span className={styles.rupee}><div className={styles.red}>₹</div></span>}
        </div>
      </div>
    </div>
  );
};

export default SuperSaverToggle;
