
import styles from './button.module.css';

const Button = ({ text, icon, isOutlined }) => {
  return (
    <button className={isOutlined ? styles.outline_btn : styles.primary_btn}>
      {icon}
      {text}
    </button>
  );
};
  
export default Button;