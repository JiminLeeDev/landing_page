import styles from "./main_content.module.css";

function MainContent({ content }) {
  return (
    <div>
      <p className={styles.content}>{content}</p>
    </div>
  );
}

export default MainContent;
