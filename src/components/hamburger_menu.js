import styles from "./hamburger_menu.module.css";

function HamburgerMenu({ width, clicked }) {
  return (
    <span style={{ width: width }}>
      <span className={clicked ? styles.line1_rotate : styles.line1} />
      <span className={clicked ? styles.line2_fadeout : styles.line2} />
      <span className={clicked ? styles.line3_rotate : styles.line3} />
    </span>
  );
}

export default HamburgerMenu;
