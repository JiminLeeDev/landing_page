import styles from "./badge_list.module.css";

function BadgeList({ contents, is_pc, is_tablet, is_mobile }) {
  return (
    <div className={styles.wrapper}>
      {contents.map((content) => (
        <span
          className={styles.badge}
          style={{
            fontSize: is_pc
              ? "2rem"
              : is_tablet
              ? "1.5rem"
              : is_mobile
              ? "1rem"
              : "0.5rem",
          }}
        >
          {content}
        </span>
      ))}
    </div>
  );
}

export default BadgeList;
