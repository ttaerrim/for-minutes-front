import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Main.css";
import FirstView from "./FirstView.js";
import Contact from "./Contact.js";

import M_history from "assets/M_history.PNG";
import M_contact from "assets/M_contact.PNG";
import M_fv from "assets/M_fv.PNG";
import M_post from "assets/M_post.PNG";
import M_team from "assets/M_team.PNG";
import M_participate from "assets/M_participate.PNG";
import M_ml from "assets/M_ml.PNG";
import M_footer from "assets/M_footer.PNG";
import M_info from "assets/M_info.PNG";
import M_script from "assets/M_script.PNG";

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <FirstView />
      <div className="bg wrapper">
        <div className="main-contents">
          <div className="grids">
            <div data-aos="fade-up" className="boxes">
              <section id="nino-story">
                <div className="container">
                  <h2 className="nino-sectionHeading">
                    A Little Bit Of Information
                  </h2>
                  <p className="nino-sectionDesc">
                    <strong>
                      Artificial intelligence meeting minutes summary service
                    </strong>
                  </p>
                  <p className="nino-sectionDesc">
                    "인공지능 회의 요약 서비스" 서비스
                  </p>
                </div>
              </section>
            </div>

            <div data-aos="fade-up" className="boxes">
              <div className="gallery">
                <div className="img">
                  <img src={M_fv} />
                </div>
                <div className="img">
                  <img src={M_history} />
                </div>
                <div className="img">
                  <img src={M_contact} />
                </div>
                <div className="img">
                  <img src={M_team} />
                </div>
                <div className="img">
                  <img src={M_participate} />
                </div>
                <div className="img">
                  <img src={M_post} />
                </div>
                <div className="img">
                  <img src={M_ml} />
                </div>
                <div className="img">
                  <img src={M_footer} />
                </div>
                <div className="img">
                  <img src={M_info} />
                </div>
                <div className="img">
                  <img src={M_script} />
                </div>
              </div>
            </div>

            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
