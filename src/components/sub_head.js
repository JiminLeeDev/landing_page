import styles from "./sub_head.module.css";

function SubHead({ content }) {
  return (
    <div className={styles.wrapper}>
      <h2>{content}</h2>
    </div>
  );
}

export default SubHead;
