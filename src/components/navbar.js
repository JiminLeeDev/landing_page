import styles from "./navbar.module.css";
import Portrait from "./portrait";
import HamburgerMenu from "./hamburger_menu";

function NavBar({ is_pc, items, set_menu_clicked, menu_clicked }) {
  return (
    <nav className={styles.nav_bar}>
      <div className={styles.logo_icon_wrapper}>
        <Portrait src="./logo_icon.png" width="100%" is_round={false} />
      </div>

      {is_pc ? (
        <div className={styles.nav_item_wrapper}>
          <div className={styles.vertical_center_align}>
            {items.map((item) => (
              <span className={styles.nav_item}>
                <a href={`#${item.link}`}>{item.text}</a>
              </span>
            ))}
          </div>
        </div>
      ) : (
        <div
          className={styles.nav_item_wrapper}
          style={{ width: "80px", zIndex: 5, cursor: "pointer" }}
          onClick={() => set_menu_clicked(!menu_clicked)}
        >
          <HamburgerMenu width={"100%"} clicked={menu_clicked} />
        </div>
      )}
    </nav>
  );
}

export default NavBar;
