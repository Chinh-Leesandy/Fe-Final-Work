import React from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import vnFlag from "../../../Asset/VN.png";
import usFlag from "../../../Asset/EN.png";
import "./chage.css"
const Chage = () => {
    const { t, i18n } = useTranslation();
  
    const handleChangeLang = (lang) => {
      i18n.changeLanguage(lang);
    };
  
    const currentLang = i18n.language;
    console.log(currentLang)
  return (
    <OverlayTrigger
      rootClose={true}
      trigger={"click"}
      placement="bottom"
      overlay={
        <Popover
          className="change-lang-pop-over"
          id={`popover-positioned-bottom`}
        >
          <Popover.Body className="popover-bodyy">
            <ul className="lang-list">
              <li
                className='lang-option'
                onClick={() => handleChangeLang('en')}>
                <div
                  className='lang-thumbnail'
                  style={{
                    backgroundImage: `url(${usFlag})`,
                    }}
                  ></div>
                <span className="lang-tt">
                  {t("content.lang_en")}‌󠁢󠁢󠁢󠁣󠁨󠁢󠁢󠁢󠁦󠁵󠁢󠁢󠁢󠁦󠁮󠁢󠁢󠁢󠁣󠁰󠁢󠁢󠁢󠁣󠁯󠁢󠁢󠁢󠁥󠁷󠁢󠁢󠁢󠁦󠁩󠁢󠁢󠁢󠁦󠁨󠁢󠁢󠁢󠁦󠁮󠁢󠁢󠁢󠁥󠁹󠁢󠁢󠁢󠁦󠁨󠁢󠁢󠁢󠁦󠁮󠁢󠁢󠁢󠁣󠁶󠁢󠁢󠁢󠁦󠁦󠁢󠁢󠁢󠁥󠁵󠁢󠁢󠁢󠁦󠁨󠁢󠁢󠁢󠁥󠁿󠁢󠁢󠁢󠁥󠁳󠁢󠁢󠁢󠁥󠁹󠁢󠁢󠁢󠁦󠁨󠁢󠁢󠁢󠁣󠁯󠁢󠁢󠁢󠁣󠁱󠁢󠁢󠁢󠁦󠁷󠁢
                </span>
              </li>
              <li
                className='lang-option'
                onClick={() => handleChangeLang('vi')}>
                <div
                  className='lang-thumbnail'
                  style={{
                    backgroundImage: `url(${vnFlag})`,
                    }}
                  ></div>
                <span className="lang-tt"> {t("content.lang_vn")} </span>
              </li>
            </ul>
          </Popover.Body>
        </Popover>
      }
    >
      <div
        className="change-lang-btn lang-thumbnail lang-img"
        style={{
          backgroundImage: `url(${currentLang === "en" ? usFlag : vnFlag})`,

        }}
      ></div>
    </OverlayTrigger>
  );
};

export default Chage;
