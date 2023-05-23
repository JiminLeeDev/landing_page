import styles from "./badge_list.module.css";

function BadgeList({ contents, is_pc, is_tablet, is_mobile }) {
  return (
    <div className={styles.wrapper}>
      {contents.map((content) => (
        <span className={styles.badge}>{content}</span>
      ))}
    </div>
  );
}

export default BadgeList;
