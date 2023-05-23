import styles from "./menu.module.css";

function Menu({ items, open, is_pc }) {
  return (
    <div
      style={{
        zIndex: open && !is_pc ? 4 : 0,
        opacity: open && !is_pc ? "0.45" : "0",
        visibility: open && !is_pc ? "initial" : "hidden",
      }}
      className={styles.wrapper}
    >
      {items.map((item) => (
        <h1 className={styles.item}>
          <a href={`#${item.link}`} className={styles.link_item}>
            {item.text}
          </a>
        </h1>
      ))}
    </div>
  );
}

export default Menu;
