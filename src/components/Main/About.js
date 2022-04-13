import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "./About.module.scss";
import CardItem from "components/Cards/CardItem";

import OH_1 from "assets/OH_1.jpg";
import OH_2 from "assets/OH_2.jpg";
import OH_3 from "assets/OH_3.PNG";
import OH_6 from "assets/OH_6.jpg";
import PI_1 from "assets/PI_1.PNG";
import PI_2 from "assets/PI_2.PNG";
import PI_3 from "assets/PI_3.PNG";
import T_JJ from "assets/T_JJ.jpg";
import T_HY from "assets/T_HY.jpg";
import T_TR from "assets/T_TR.jpg";
import T_SJ from "assets/T_SJ.jpg";
import JDJS from "assets/JDJS.jpg";
import Aug from "assets/888.jpg";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <div className={styles.grids}>
        <div data-aos="fade-up" className={styles.boxes}>
          <section id={styles["nino-latestBlog"]}>
            <div className="container">
              <h2 className={styles["nino-sectionHeading"]}>Our History</h2>
              <div className="sectionContent">
                <div className="row">
                  <div className="col-md-4 col-sm-4">
                    <article>
                      <div className={styles.articleThumb}>
                        <img src={OH_1} alt="" />
                        <div className={styles.date}>
                          <span className={styles.number}>27</span>
                          <span className={styles.text}>Mar</span>
                        </div>
                      </div>
                      <h3 className={styles.articleTitle}>
                        <div>프로젝트 기획 발표</div>
                      </h3>
                      <p className={styles.articleDesc}>
                        인공지능 회의 요약 서비스 'For-Minutes' 기획 <br /> 적용
                        기술에 대한 자료 수집
                      </p>
                    </article>
                  </div>
                  <div className="col-md-4 col-sm-4">
                    <article>
                      <div className={styles.articleThumb}>
                        <img src={OH_2} alt="" />
                        <div className={styles.date}>
                          <span className={styles.number}>6</span>
                          <span className={styles.text}>May</span>
                        </div>
                      </div>
                      <h3 className={styles.articleTitle}>
                        <div>프로젝트 진행 및 회의</div>
                      </h3>
                      <p className={styles.articleDesc}>
                        프로젝트의 전반적인 기반 구축과 각 담당 포지션
                        프로그래밍 진행
                      </p>
                    </article>
                  </div>
                  <div className="col-md-4 col-sm-4">
                    <article>
                      <div className={styles.articleThumb}>
                        <img src={OH_3} alt="" />
                        <div className={styles.date}>
                          <span className={styles.number}>21</span>
                          <span className={styles.text}>June</span>
                        </div>
                      </div>
                      <h3 className={styles.articleTitle}>
                        <div>캡스톤 1학기 가전시</div>
                      </h3>
                      <p className={styles.articleDesc}>
                        프로젝트 진행 상황 발표
                      </p>
                    </article>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <br />
              <div className="sectionContent">
                <div className="row">
                  <div className="col-md-4 col-sm-4">
                    <article>
                      <div className={styles.articleThumb}>
                        <img src={Aug} alt="" />
                        <div className={styles.date}>
                          <span className={styles.number}>14</span>
                          <span className={styles.text}>Aug</span>
                        </div>
                      </div>
                      <h3 className={styles.articleTitle}>
                        <div>여름 방학 스터디 </div>
                      </h3>
                      <p className={styles.articleDesc}>
                        캡스톤 디자인 수업 진행 사항 보고 및 발표 준비
                      </p>
                    </article>
                  </div>
                  <div className="col-md-4 col-sm-4">
                    <article>
                      <div className={styles.articleThumb}>
                        <img src={JDJS} alt="" />
                        <div className={styles.date}>
                          <span className={styles.number}>27</span>
                          <span className={styles.text}>Sep</span>
                        </div>
                      </div>
                      <h3 className={styles.articleTitle}>
                        <div>졸업작품전시회 준비 </div>
                      </h3>
                      <p className={styles.articleDesc}>
                        졸업작품전시회 단체 프로필 촬영
                      </p>
                    </article>
                  </div>
                  <div className="col-md-4 col-sm-4">
                    <article>
                      <div className={styles.articleThumb}>
                        <img src={OH_6} alt="" />
                        <div className={styles.date}>
                          <span className={styles.number}>27</span>
                          <span className={styles.text}>Oct</span>
                        </div>
                      </div>
                      <h3 className={styles.articleTitle}>
                        <div>배포 및 졸업작품전시회 </div>
                      </h3>
                      <p className={styles.articleDesc}>
                        [For-minutes] 서비스 배포와 10월 졸업 작품 전시회
                      </p>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div data-aos="fade-up" className={styles.boxes}>
          <section id={styles["nino-story"]}>
            <div className="container">
              <h2 className={styles["nino-sectionHeading"]}>Paticipate In</h2>
              <p className={styles["nino-sectionDesc"]}>
                인공지능 회의 요약 서비스 "For-minutes"
                <br />
                참여 중인 프로젝트
              </p>
              <div className="sectionContent">
                <div className={`row ${styles["nino-hoverEffect"]}`}>
                  <div className="col-md-4 col-sm-4">
                    <div className={styles.item}>
                      <a className={styles.overlay}>
                        <span className={styles.content}>
                          <i
                            className={`mdi mdi-account-multiple ${styles["nino-icon"]}`}
                          ></i>
                          덕성여자대학교 <br />
                          졸업 작품 프로젝트
                        </span>
                        <img src={PI_1} alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4">
                    <div className={styles.item}>
                      <a className={styles.overlay}>
                        <span className={styles.content}>
                          <i
                            className={`mdi mdi-image-filter-center-focus-weak ${styles["nino-icon"]}`}
                          ></i>
                          한이음 ICT 멘토링
                        </span>
                        <img src={PI_2} alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4">
                    <div className={styles.item}>
                      <a className={styles.overlay}>
                        <span className={styles.content}>
                          <i
                            className={`mdi mdi-airplay ${styles["nino-icon"]}`}
                          ></i>
                          한국방송 미디어 공학회 <br />
                          2021년 추계학술대회
                        </span>
                        <img src={PI_3} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div data-aos="fade-up" className={styles.boxes}>
          <section id="work">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  <div
                    className="wow fadeInUp section-title"
                    data-wow-delay="0.2s"
                  >
                    <h2 className={styles["nino-sectionHeading"]}>Team JDJS</h2>
                  </div>
                </div>
                <CardItem />
              </div>
            </div>
          </section>
        </div>

        <div data-aos="fade-up" className={styles.boxes}>
          <div className="container">
            <h2 className={styles["nino-sectionHeading"]}>What we say</h2>
            <section id={styles["nino-happyClient"]}>
              <div className="sectionContent">
                <div className="row">
                  <div className="col-md-6">
                    <div className={styles.item}>
                      <div className={styles["nino-avatar fsr"]}>
                        <img
                          className={styles["img-circle"]}
                          src={T_TR}
                          alt=""
                        />
                      </div>
                      <div className="info">
                        <h4 className={styles.name}>Lee Tae Rim</h4>
                        <span className={styles.regency}>Frontend</span>
                        <p className="desc">
                          올해 초부터 쉼 없이 달려온 우리 팀, 정말 수고 많았어!
                          졸업 작품을 완성할 수 있을지도 의문이 들었던
                          시작이었지만 우리의 노력 하나하나가 모여 드디어 결실을
                          맺을 수 있게 된 것 같아. 2021년이 끝나더라도 우리의
                          여정은 이제부터 시작이니 언제 어디서든 항상 행복하길
                          바랄게. 부족한 팀장을 믿고 따라 줘서 고마워!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className={styles.item}>
                      <div className="nino-avatar fsr">
                        <img
                          className={styles["img-circle"]}
                          src={T_JJ}
                          alt=""
                        />
                      </div>
                      <div className={styles.info}>
                        <h4 className={styles.name}>Yoo Jin Joo</h4>
                        <span className={styles.regency}>Frontend</span>
                        <p className="desc">
                          우리 졸업할 수 있을까? 했던 날이 엊그제 같은데 어느새
                          10월이 되어 우리가 졸업전시회를 하다니 너무 뿌듯하다^^
                          나에게 많은 용기와 발전을 가져다준 태림이, 수지,
                          하연이 우리 멋진 팀원들 너무 고맙고 고생 많았어. 졸업
                          축하하고 우리 집단 지성하고 싶은 거 다 해:) <br />{" "}
                          There is no reason not to follow your heart♡
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className={styles.item}>
                      <div className="nino-avatar fsr">
                        <img
                          className={styles["img-circle"]}
                          src={T_SJ}
                          alt=""
                        />
                      </div>
                      <div className={styles.info}>
                        <h4 className={styles.name}>Kang Su Ji</h4>
                        <span className={styles.regency}>Backend</span>
                        <p className="desc">
                          쉼쉼없는 여름 방학을 지나 가을이 다 되어가는 지금까지
                          함께 고생해준 우리 팀원 모두 너무 고마워 ! 어려움도
                          있었지만 함해 어느 때보다 성장할 수 있었던
                          프로젝트였어 잊지 못할꺼야 ! 모두의 앞날을 응원해
                          화이팅 :)
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className={styles.item}>
                      <div className="nino-avatar fsr">
                        <img
                          className={styles["img-circle"]}
                          src={T_HY}
                          alt=""
                        />
                      </div>
                      <div className={styles.info}>
                        <h4 className={styles.name}>Lee Ha Yeon</h4>
                        <span className={styles.regency}>Backend</span>
                        <p className="desc">
                          우리 1년 동안 참 고생했다!! 리더 태림이, react 장인
                          진주 언니, 깃 장인 수지 정말 다들 최고야 너무너무
                          고마워 덕분에 재밌었어! 중간중간에 마주한 고난도 다
                          같이 애써준 덕분에 잘 해결할 수 있었어. 집단지성이라
                          가능했다!! 프로젝트도 우려했던 것보다 잘 끝맺어서
                          다행이야. 모두 정말 고생했고 우리 집단지성 최고야
                          사랑해!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
