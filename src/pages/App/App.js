import styles from "./App.module.css";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import Portrait from "../../components/portrait";
import Menu from "../../components/menu";
import BadgeList from "../../components/badge_list";
import NavBar from "../../components/navbar";
import SubHead from "../../components/sub_head";
import MainContent from "../../components/main_content";

function App() {
  const isMobile = useMediaQuery({
    maxWidth: 768,
  });
  const isTablet = useMediaQuery({
    minWidth: 768,
    maxWidth: 900,
  });
  const isPc = useMediaQuery({
    minWidth: 900,
  });

  const [menuClicked, setMenuClicked] = useState(false);

  return (
    <div>
      <Menu
        items={[
          { text: "Introduce", link: "Intro" },
          { text: "About", link: "about" },
          { text: "Contact", link: "contact" },
          { text: "References", link: "references" },
        ]}
        open={menuClicked}
        is_pc={isPc}
      />

      <div className={styles.horizon_center_align}>
        <div className={styles.pc_body}>
          <NavBar
            is_pc={isPc}
            items={[
              { text: "Introduce", link: "Intro" },
              { text: "About", link: "about" },
              { text: "Contact", link: "contact" },
              { text: "References", link: "references" },
            ]}
            menu_clicked={menuClicked}
            set_menu_clicked={setMenuClicked}
          />

          <div id="Intro">
            <div className={styles.intro_box}>
              <div>
                <SubHead content="Jimin Lee's Portfolio"></SubHead>

                <MainContent
                  content="안녕하세요. 저는 더 나은 것들을 만들기 위해서 노력하는 과정을
                  즐기는 프론트엔드 개발자, 이지민입니다."
                />
              </div>

              <Portrait
                src="./profile_image.jpg"
                width="min(100%, 400px)"
                is_round={true}
              />
            </div>

            <SubHead content="사용할 수 있는 기술들" />

            <BadgeList
              contents={["node js", "react", "css", "responsive web"]}
              is_pc={isPc}
              is_tablet={isTablet}
              is_mobile={isMobile}
            />
          </div>

          <div id="about" style={{ marginTop: "30%" }}>
            <SubHead content="About" />

            <img
              src="https://mblogthumb-phinf.pstatic.net/20160818_292/klhkyy_1471507514952aGtaW_JPEG/Screenshot_2016-04-07-02-59-53.jpg?type=w800"
              alt=""
              width="100%"
            />

            <MainContent
              content="벤 스틸러가 감독이자 주연으로 출연한 영화, 월터의 상상은 현실이 된다의
        명대사입니다. 그리고 저의 좌우명이기도 합니다. 당연히 인간에겐 한계가
        존재하기에 모든 것을 보고 알수는 없겠지만, 저는 어제보다 조금 더
        무언가에 대해 알아가고 느끼는 것이 즐거우며 저의 삶의 방식이라고
        생각합니다."
            />
          </div>

          <div
            style={{
              marginTop: "30%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            id="contact"
          >
            <SubHead content="Contact" />

            {[
              {
                text: "GitHub",
                onClick: () => window.open("https://github.com/JiminLeeDev"),
              },
            ].map((item) => (
              <div
                onClick={item.onClick}
                style={{
                  cursor: "pointer",
                  fontSize: "1rem",
                }}
              >
                <p style={{ margin: "0", padding: "0" }}>{item.text}</p>
              </div>
            ))}
          </div>

          <div id="references" style={{ marginTop: "10%" }}>
            <SubHead content="references" />

            <a
              href="https://www.flaticon.com/kr/free-icon/jm_10041004"
              title="지엠 아이콘"
              style={{ color: "white" }}
            >
              지엠 아이콘 제작자: shohanur.rahman13 - Flaticon
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
