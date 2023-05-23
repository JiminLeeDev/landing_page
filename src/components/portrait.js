import styles from "./portrait.module.css";

function Portrait({ src, width, is_round }) {
  return (
    <span style={{ width: width }}>
      <div style={{ position: "relative", paddingBottom: "100%" }}>
        <img
          src={src}
          alt=""
          className={styles.img}
          style={{ borderRadius: is_round ? "100%" : "0%" }}
        />
      </div>
    </span>
  );
}

export default Portrait;
