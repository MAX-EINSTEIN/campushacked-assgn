import brandLogo from '../assets/images/brand-logo.svg';
import * as styles from './SplashScreen.module.css';

const SplashScreen = () => {
  return (
    <div className={styles.content}>
      <img src={brandLogo} className={styles.logo} alt="logo" />
      <h2 className={styles.heading}>No tasks found</h2>
      <h5>You can add task using the + above.</h5>
    </div>
  );
};

export default SplashScreen;