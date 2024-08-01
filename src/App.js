import "./App.css";
import TopRight from "./TopRight";
import TopMid from "./TopMid";
import Web from "./Web";
import Profile from "./Profile";
import { Text } from "./Text";
import { Docs } from "./Docs";
import { Btn } from "./Btn";
import { Arrow } from "./Arrow";

function App() {
  return (
    <>
      <div className="bg">
        <div className="container">
          <div className="centerd">
            <Web />
            <Profile />
          </div>
          <TopMid />
          <TopRight />
        </div>
        <div className="hr_green"></div>
        <img
          alt="hero"
          src="https://i.ibb.co/T07TXJm/svgviewer-png-output-12.png"
          className="full_width"
        />
        <div className="translate">
          <div className="translate_top">
            <div className="text">
              <Text />
            </div>
            <div className="docs">
              <Docs />
            </div>
          </div>
          <div className="container1">
            <div className="top-section">
              <button className="btn">Arabic</button>
              <button className="btn">
                <Btn />
              </button>
              <button className="btn">
                <span className="btn_English">
                  <span>English</span>
                  <span>
                    <Arrow />
                  </span>
                </span>
              </button>
            </div>

            <div className="bottom-section">
              <textarea
                className="text-area borderRight"
                placeholder="Text area 1"
              ></textarea>
              <textarea
                className="text-area"
                placeholder="Text area 2"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="footer_right">
            <span className="">خدمة الترجمة الآلية مقدمة من شركة ترجمه</span>
            <span className="">- سياسة الخصوصية والاستخدام - اتصل بنا</span>
          </div>
          <div className="footer_left">
            ﺟﻤﻴﻊ اﻟﺤﻘﻮق اﻟﻔﻜﺮﻳﺔ واﻟﻤﻠﻜﻴﺔ ﻣﺤﻔﻮﻇﺔ ﻟﻠﺪﻳﻮان اﻟﻤﻠﻜﻲ ﻟﻠﻤﻤﻠﻜﺔ اﻟﻌﺮﺑﻴﺔ
            اﻟﺴﻌﻮدية © 1443
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
