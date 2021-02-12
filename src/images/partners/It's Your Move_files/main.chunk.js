(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/css/Styles.css":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/css/Styles.css ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html,\nbody {\n  font-family: \"Open Sans\", sans-serif;\n  color: #d63b2f;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  color: #da0001;\n}\n\nh1 {\n  font-size: 72px;\n  font-weight: 500;\n  text-align: center;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  text-shadow: 0px 2px 4px rgba(214, 59, 47, 0.25);\n  margin-top: 115px;\n}\n\nh2 {\n  text-align: center;\n  font-size: 36px;\n  font-weight: 600;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);\n}\n\np {\n  line-height: 1.6;\n  margin: 20px 0;\n}\n\na {\n  color: #ffffff;\n  text-decoration: none;\n}\na:hover, a:active, a:focus {\n  color: #da0001;\n  text-decoration: none;\n}\n\n.Content-Section {\n  display: flex;\n  margin: auto;\n  text-align: center;\n  justify-content: center;\n}\n\n.Nav-Bar {\n  padding: 10px 80px;\n  margin-bottom: 40px;\n  background-color: #2d2d2c;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 1;\n}\n.Nav-Bar .Nav-Bar-Title {\n  display: flex;\n  align-items: center;\n  justify-content: left;\n  flex-wrap: wrap;\n  object-fit: cover;\n}\n.Nav-Bar .Nav-Bar-Title a:hover, .Nav-Bar .Nav-Bar-Title a:active, .Nav-Bar .Nav-Bar-Title a:focus {\n  text-shadow: 0px 2px 4px rgba(218, 0, 1, 0.3);\n}\n.Nav-Bar .Nav-Bar-Title a img {\n  width: 350px;\n}\n.Nav-Bar .Nav-Bar-Content {\n  text-align: right;\n  display: flex;\n  flex-wrap: wrap;\n  flex-flow: row wrap;\n  align-items: center;\n  justify-content: flex-end;\n}\n.Nav-Bar .Nav-Bar-Content .Nav-Bar-Content-Item {\n  padding: 10px;\n  width: -webkit-min-content;\n  width: -moz-min-content;\n  width: min-content;\n  transition: transform 400ms;\n}\n.Nav-Bar .Nav-Bar-Content .Nav-Bar-Content-Item:hover, .Nav-Bar .Nav-Bar-Content .Nav-Bar-Content-Item:active, .Nav-Bar .Nav-Bar-Content .Nav-Bar-Content-Item:focus {\n  transform: scale(1.1);\n}\n.Nav-Bar .Nav-Bar-Content .Nav-Bar-Content-Item .Nav-Bar-Content-Link {\n  text-transform: uppercase;\n  font-weight: 500;\n  letter-spacing: 1.5px;\n  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);\n}\n\n@media only screen and (max-width: 1125px) {\n  h1 {\n    margin-top: 30px !important;\n  }\n\n  .Nav-Bar {\n    position: relative !important;\n    z-index: 0 !important;\n  }\n}\n@media only screen and (max-width: 956px) {\n  h1 {\n    margin-top: 33px !important;\n  }\n\n  .Nav-Bar {\n    position: relative !important;\n    z-index: 0 !important;\n  }\n  .Nav-Bar .Nav-Bar-Title {\n    justify-content: center !important;\n  }\n  .Nav-Bar .Nav-Bar-Content {\n    flex-flow: column wrap !important;\n  }\n  .Nav-Bar .Nav-Bar-Content .Nav-Bar-Content-Item {\n    padding: 3px 0 !important;\n  }\n}\n@media only screen and (max-width: 650px) {\n  .Nav-Bar .Nav-Bar-Title {\n    padding-right: 60px;\n  }\n}\n@media only screen and (max-width: 575px) {\n  .Nav-Bar .Nav-Bar-Title {\n    padding-right: 0px;\n  }\n}\n.Live-Event {\n  padding: 40px 80px;\n  padding-bottom: 40px;\n  margin: auto;\n  margin-top: -20px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n.Live-Event .Live-Event-Map-Box {\n  background: #ffffff;\n  box-shadow: 0px 4px 20px #00000026, 0px 4px 4px rgba(0, 0, 0, 0.05);\n  border-radius: 6px;\n  overflow: hidden;\n  min-height: 500px;\n  max-width: 1000px;\n  min-width: 500px;\n  flex-shrink: 3;\n  flex-grow: 3;\n  align-self: stretch;\n  margin-right: 20px;\n  margin-bottom: 20px;\n}\n.Live-Event .Live-Event-Map-Box .Map {\n  padding: 0;\n  margin: 0;\n  width: calc(100% + 30px);\n  margin-left: -15px;\n}\n.Live-Event .Live-Event-Map-Box .Garmin-Map {\n  padding: 0;\n  margin: 0;\n  width: 104%;\n  margin-left: -15px;\n  margin-bottom: -10px;\n  margin-top: 6px;\n}\n.Live-Event .Live-Event-Feed-Box {\n  background: #ffffff;\n  box-shadow: 0px 4px 20px #00000026, 0px 4px 4px rgba(0, 0, 0, 0.05);\n  border-radius: 6px;\n  overflow-y: scroll;\n  min-height: 500px;\n  min-width: 300px;\n  max-width: 300px;\n  margin-bottom: 20px;\n  flex-shrink: 0;\n  flex-grow: 0;\n  height: 500px;\n}\n\n@media only screen and (max-width: 520px) {\n  .Live-Event-Map-Box {\n    display: none !important;\n  }\n}\n.Event-Gallery {\n  padding: 0 80px;\n  padding-bottom: 10px;\n  max-width: 1200px;\n  margin: auto;\n  display: flex;\n  flex-wrap: wrap;\n  flex-flow: column wrap;\n  justify-content: center;\n}\n.Event-Gallery .Event-Gallery-Card-Container {\n  margin: auto;\n  margin-bottom: 30px;\n  min-width: 283px;\n  max-width: 375px;\n}\n.Event-Gallery .Event-Gallery-Card-Container .Event-Gallery-Card {\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.05);\n  border-radius: 6px;\n  overflow: hidden;\n  width: 100%;\n  transition: transform 400ms;\n}\n.Event-Gallery .Event-Gallery-Card-Container .Event-Gallery-Card .Event-Gallery-Card-Image {\n  height: 200px;\n  width: 100%;\n  object-fit: cover;\n}\n.Event-Gallery .Event-Gallery-Card-Container .Event-Gallery-Card .Event-Gallery-Card-Info {\n  padding: 25px 5px;\n  background: #2d2d2c;\n  text-align: center;\n}\n.Event-Gallery .Event-Gallery-Card-Container .Event-Gallery-Card .Event-Gallery-Card-Info .Event-Gallery-Card-Name {\n  display: block;\n  font-size: 20px;\n  margin-bottom: 5px;\n  margin-top: 0;\n  color: #ffffff;\n}\n.Event-Gallery .Event-Gallery-Card-Container .Event-Gallery-Card .Event-Gallery-Card-Info .Event-Gallery-Card-Bio {\n  display: block;\n  color: #a7a7a7;\n  font-size: 14px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-weight: 600;\n}\n.Event-Gallery .Event-Gallery-Card-Container .Event-Gallery-Card:hover, .Event-Gallery .Event-Gallery-Card-Container .Event-Gallery-Card:active, .Event-Gallery .Event-Gallery-Card-Container .Event-Gallery-Card:focus {\n  transform: scale(1.1);\n}\n.Event-Gallery .Event-Gallery-Card-Container .Event-Gallery-Card:hover .Event-Gallery-Card-Name, .Event-Gallery .Event-Gallery-Card-Container .Event-Gallery-Card:active .Event-Gallery-Card-Name, .Event-Gallery .Event-Gallery-Card-Container .Event-Gallery-Card:focus .Event-Gallery-Card-Name {\n  color: #da0001;\n}\n\n.Partners {\n  width: 1200px;\n  margin: 0px 80px;\n  padding-bottom: 35px;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.Partners .Partners-Box {\n  background: #ffffff;\n  box-shadow: 0px 4px 20px #29292926, 0px 4px 4px rgba(0, 0, 0, 0.15);\n  border-radius: 6px;\n  overflow: hidden;\n  height: 350px;\n  max-width: 600px;\n  text-align: center;\n  margin: auto;\n  margin-bottom: 10px;\n}\n.Partners .Partners-Box .Partners-Logo {\n  height: 200px;\n  width: 100%;\n  object-fit: scale-down;\n  padding: 20px;\n}\n.Partners .Partners-Box .Partners-Text {\n  color: #2d2d2c;\n  font-size: 20px;\n  padding: 10px;\n  padding-top: 10px;\n  font-weight: 300;\n}\n\n@media only screen and (max-width: 1000px) {\n  .Partners .Partners-Box {\n    margin: 9px 50px;\n  }\n}\n@media only screen and (max-width: 820px) {\n  .Partners .Partners-Text {\n    padding-top: 0 !important;\n  }\n}\n@media only screen and (max-width: 695px) {\n  .Partners-Box {\n    height: 200px !important;\n    width: auto !important;\n    margin: 9px 20px !important;\n  }\n  .Partners-Box .Partners-Text {\n    display: none !important;\n  }\n}\n@media only screen and (max-width: 414px) {\n  .Partners-Box {\n    height: 100px !important;\n    width: auto !important;\n    margin: 9px 10px !important;\n  }\n  .Partners-Box .Partners-Logo {\n    height: 100px !important;\n    padding: 10px !important;\n  }\n}\n@media only screen and (max-width: 350px) {\n  .Partners {\n    display: none;\n  }\n}\n.Pledge-Tracker {\n  margin: auto;\n  padding: 0px 80px;\n  margin-top: 130px;\n  text-align: center;\n  max-width: 1480px;\n}\n.Pledge-Tracker .Pledge-Tracker-Description {\n  font-weight: 500;\n  font-size: 20px;\n  letter-spacing: 2px;\n  color: #2d2d2c;\n  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);\n}\n\n.Footer {\n  background: #2d2d2c;\n  color: #a7a7a7;\n  font-size: 14px;\n  font-weight: bold;\n  text-transform: uppercase;\n  text-align: center;\n  letter-spacing: 1px;\n  padding: 10px 0;\n}\n\n.Video-Header {\n  text-align: center;\n}\n.Video-Header video {\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n}\n.Video-Header .Video-Header-Content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 700px;\n  left: 0;\n}\n.Video-Header .Video-Header-Content .Video-Header-Content-Text {\n  color: #ffffff;\n  text-shadow: 0px 0px 3px rgba(255, 255, 255, 0.4);\n  opacity: 0.7;\n  text-transform: uppercase;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.4;\n  font-size: 2vw;\n  text-align: center;\n  padding: 20px 40px;\n}\n.Video-Header .Video-Header-Content .Pledge-Button {\n  margin: 0 10px;\n  font-size: 100px;\n  width: 120px;\n  text-align: center;\n  cursor: pointer;\n  opacity: 0.7;\n}\n\n@media only screen and (max-width: 1750px) {\n  .Video-Header .Video-Header-Content {\n    top: 550px;\n  }\n}\n@media only screen and (max-width: 1400px) {\n  .Video-Header .Video-Header-Content {\n    top: 450px;\n  }\n}\n@media only screen and (max-width: 1200px) {\n  .Video-Header {\n    position: relative !important;\n    z-index: 0 !important;\n  }\n  .Video-Header .Video-Header-Content {\n    top: 400px;\n  }\n}\n@media only screen and (max-width: 1125px) {\n  .Nav-Bar {\n    margin-bottom: 0px;\n  }\n\n  .Video-Header .Video-Header-Content {\n    top: 300px;\n  }\n}\n@media only screen and (max-width: 900px) {\n  .Video-Header .Video-Header-Content {\n    top: 250px;\n  }\n}\n@media only screen and (max-width: 800px) {\n  .Video-Header .Video-Header-Content .Video-Header-Content-Text {\n    font-size: 24px;\n  }\n  .Video-Header .Video-Header-Content .Pledge-Button {\n    display: none !important;\n  }\n}\n@media only screen and (max-width: 670px) {\n  .Video-Header .Video-Header-Content {\n    top: 150px;\n  }\n  .Video-Header .Video-Header-Content .Video-Header-Content-Text {\n    font-size: 20px;\n  }\n}\n@media only screen and (max-width: 500px) {\n  .Video-Header .Video-Header-Content {\n    top: 100px;\n  }\n  .Video-Header .Video-Header-Content .Video-Header-Content-Text {\n    font-size: 16px;\n  }\n}\n.Info {\n  text-align: center;\n  margin-top: 40px;\n  margin-bottom: -40px;\n}\n.Info .Info-Subheading {\n  display: block;\n  font-size: 14px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-weight: 600;\n  margin-top: -10px;\n}\n.Info .Info-Content {\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 0;\n}\n.Info .Info-Image {\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.05);\n  border-radius: 6px;\n  overflow: hidden;\n  width: -webkit-min-content;\n  width: -moz-min-content;\n  width: min-content;\n  width: 450px;\n  margin-bottom: 50px;\n}\n\n@media only screen and (max-width: 500px) {\n  .Info .Info-Image {\n    width: 300px;\n  }\n}\n.Learn-More {\n  text-align: center;\n  padding: 20px 80px;\n  padding-top: 100px;\n}\n.Learn-More .Learn-More-Content {\n  font-size: 16px;\n  letter-spacing: 0px;\n  font-weight: 500;\n  margin-top: 10px;\n}\n.Learn-More a {\n  color: #da0001;\n}\n.Learn-More a:hover, .Learn-More a:active, .Learn-More a:focus {\n  color: #ffffff;\n}\n.Learn-More .Learn-More-Logo {\n  width: 120px;\n}\n\n.About-Content {\n  text-align: left;\n  padding: 0 80px;\n}\n.About-Content p {\n  text-indent: 50px;\n}\n\n@media only screen and (max-width: 956px) {\n  .About-Content {\n    text-align: center;\n  }\n  .About-Content p {\n    text-indent: 0;\n    font-size: 18px;\n  }\n}\n.Social-Button-Box {\n  text-align: center;\n  padding: 0 80px;\n}\n.Social-Button-Box .Social-Button-Header {\n  font-size: 26px;\n  padding-bottom: 15px;\n  padding-top: 40px;\n}\n.Social-Button-Box a {\n  color: #2d2d2c;\n}\n.Social-Button-Box a:hover, .Social-Button-Box a:active, .Social-Button-Box a:focus {\n  color: #da0001;\n}\n.Social-Button-Box .Social-Button {\n  padding-bottom: 40px;\n  margin: 0 10px;\n  font-size: 100px;\n  width: 120px;\n}\n\n@media only screen and (max-width: 575px) {\n  .Social-Button-Box {\n    padding: 0 40px;\n  }\n  .Social-Button-Box .Social-Button {\n    margin: 10px 10px;\n  }\n}\n@media only screen and (max-width: 500px) {\n  .Social-Button-Box .Social-Button {\n    margin: 10px 45px;\n    padding-bottom: 0px;\n  }\n}\n.Athlete-Info {\n  padding: 40px 80px;\n  padding-bottom: 40px;\n  max-width: 1200px;\n  margin: auto;\n  margin-top: -20px;\n  margin-bottom: 30px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n.Athlete-Info .Athlete-Info-Photo-Box {\n  text-align: center;\n}\n.Athlete-Info .Athlete-Info-Photo-Box .Athlete-Info-Photo {\n  background: #ffffff;\n  box-shadow: 0px 4px 20px #00000026, 0px 4px 4px rgba(0, 0, 0, 0.15);\n  border-radius: 6px;\n  overflow: hidden;\n  height: 500px;\n}\n.Athlete-Info .Athlete-Info-Bio-Box {\n  text-align: left;\n  min-width: 400px;\n  margin-bottom: 20px;\n  flex-shrink: 0;\n  flex-grow: 0;\n}\n\n.crt-feed-window {\n  z-index: 0;\n  margin-top: 20px;\n}\n.crt-feed-window .crt-feed .crt-list-post-image {\n  display: none !important;\n}\n.crt-feed-window .crt-feed .crt-list-post .crt-post-header .crt-post-fullname {\n  margin-top: -10px;\n  margin-bottom: -10px;\n  font-size: 24px;\n}\n.crt-feed-window .crt-feed .crt-list-post a {\n  color: #da0001;\n}\n.crt-feed-window .crt-feed .crt-list-post a:hover, .crt-feed-window .crt-feed .crt-list-post a:active, .crt-feed-window .crt-feed .crt-list-post a:focus {\n  color: #707070;\n}\n.crt-feed-window .crt-feed .crt-list-post-text-wrap {\n  color: #2d2d2c;\n}\n\n.Parallax {\n  /*background-image: url(\"backdrop.jpg\");*/\n  height: 100%;\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: repeat;\n  background-size: cover;\n}\n\n.Dropdown {\n  margin: 9px 0;\n}\n.Dropdown .Dropdown-Toggle {\n  margin-left: 10px;\n  text-transform: uppercase;\n  font-weight: 500;\n  letter-spacing: 1.5px;\n  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);\n  background: linear-gradient(135deg, #da0001, 50%, #f17e7e);\n  border: none;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  max-width: 160px;\n  padding-bottom: 7px;\n  padding-top: 9px;\n}\n.Dropdown .Dropdown-Toggle:hover, .Dropdown .Dropdown-Toggle:active, .Dropdown .Dropdown-Toggle:focus {\n  background: linear-gradient(315deg, #da0001, 50%, #f17e7e);\n}\n.Dropdown .Dropdown-Menu {\n  text-align: left;\n  background-color: #ffffff;\n  transition: height 500ms ease-out;\n}\n.Dropdown .Dropdown-Menu .Dropdown-Item {\n  font-weight: 500;\n  font-size: 14px;\n  letter-spacing: 1.5px;\n  padding: 5px 0px;\n  padding-right: 20px;\n  text-align: right;\n}\n.Dropdown .Dropdown-Menu .Dropdown-Item:hover, .Dropdown .Dropdown-Menu .Dropdown-Item:active, .Dropdown .Dropdown-Menu .Dropdown-Item:focus {\n  text-decoration: none;\n  color: #da0001;\n  background-color: #f2f2f2;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/css/stylesheet.css":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/css/stylesheet.css ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700);", ""]);

// module
exports.push([module.i, "a.underLine{ \n    color: inherit; border-bottom: 1px dashed #b7b7b7;\n  }\n  \n  a.underLine:hover, a.underLine:active, a.underLine:focus{ \n    color: inherit; text-decoration: none; border-bottom: 1px solid black; outline: none;\n  }\n  \n  #body{\n    height:100%;\n    padding-bottom: 30px;\n  }\n  \n  #quote{\n    position: relative;\n    text-align: center;\n    font-size: 15px;\n    bottom: 0rem;\n    margin-top: 4rem;\n    font-style: italic;\n  }\n  \n  #footer{\n    position: relative;\n    text-align: right;\n    right: 15px;\n    bottom: 0;\n    height: 45px;\n    font-size: 13.5px;\n    font-family: Poppins, sans-serif;\n    font-style: italic;\n    color: gray;\n  }\n  \n  .wrapper {\n    display: flex;\n    align-items: stretch;\n    perspective: 1500px;\n    width: 100%;\n  }\n  \n  #sidebar {\n    min-width: 250px;\n    max-width: 250px;\n    background: #eb6864;\n    color: #fff;\n    transition: all o.6s cubic-bezier(0.945, 0.02, 0.27, 0.665);\n    transform-origin: center left;\n    min-height: 100vh;\n  }\n  \n  #sidebarCollapse {\n    width: 40px;\n    height: 40px;\n    background: #f5f5f5;\n  }\n  \n  #sidebarCollapse span {\n    height: 80%;\n    height: 2px;\n    margin: 0 auto;\n    display: block;\n    background: block;\n    background: #555;\n    transition: all 0.8s cubic-bezier(0.81, -0.33, 0.345, 1.375);\n  }\n  \n  #sidebarCollapse span:first-of-type {\n    transform: rotate(45deg) translate(2px, 2px);\n  }\n  #sidebarCollapse span:nth-of-type(2) {\n    opacity: 0;\n  }\n  #sidebarCollapse span:last-of-type {\n    transform: rotate(-45deg) translate(1px, -1px);\n  }\n  \n  #sidebarCollapse.active span {\n    transform: none;\n    opacity: 1;\n    margin: 5px auto;\n  }\n  \n  #sidebar.active {\n    margin-left: -250px;\n    transform: rotateY(100deg);\n  }\n  \n  a[data-toggle=\"collapse\"] {\n    position: relative;\n  }\n  \n  .dropdown-toggle::after {\n    display: block;\n    position: absolute;\n    top: 50%;\n    right: 20px;\n    transform: translateY(-50%);\n  }\n  \n  .index-title {\n    font-size: 28px;\n    font-weight: bold;\n    text-align: center;\n    color: whitesmoke;\n  }\n  \n  .fade-enter {\n    opacity: 0.01;\n  }\n  \n  .fade-enter-active {\n    opacity: 1;\n    transition: opacity 500ms ease-in;\n  }\n  \n  .fade-exit {\n    opacity: 1;\n  }\n  \n  .fade-exit-active {\n    opacity: 0.01;\n    transition: opacity 500ms ease-in;\n  }\n  \n  @media (max-width: 768px) {\n    #HeadImg{\n      display: none;\n    }\n    #HeadImg_Link{\n      display: none;\n    }\n    #footer{\n      display: none;\n    }\n    #sidebar {\n      margin-left: -250px;\n      transform: rotateY(100deg);\n    }\n    #sidebar.active {\n      margin-left: 0;\n      transform: none;\n    }\n    #sidebarCollapse span:first-of-type,\n    #sidebarCollapse span:nth-of-type(2),\n    #sidebarCollapse span:last-of-type {\n      transform: none;\n      opacity: 1;\n      margin: 5px auto;\n    }\n    #sidebarCollapse.active span {\n      margin: 0 auto;\n    }\n    #sidebarCollapse.active span:first-of-type {\n      transform: rotate(45deg) translate(2px, 2px);\n    }\n    #sidebarCollapse.active span:nth-of-type(2) {\n      opacity: 0;\n    }\n    #sidebarCollapse.active span:last-of-type {\n      transform: rotate(-45deg) translate(1px, -1px);\n    }\n  }\n  \n  body {\n    font-family: \"Poppins\", sans-serif;\n    background: #fafafa;\n  }\n  \n  p {\n    font-family: \"Poppins\", sans-serif;\n    font-size: 1.1em;\n    font-weight: 300;\n    line-height: 1.7em;\n    color: #7b7b7b;\n  }\n  \n  a,\n  a:hover,\n  a:focus {\n    color: inherit;\n    text-decoration: none;\n    transition: all 0.3s;\n  }\n  \n  #content {\n    width: 100%;\n    padding: 20px;\n    min-height: 100vh;\n    transition: all 0.3s;\n  }\n  \n  .navbar-btn {\n    box-shadow: none;\n    outline: none !important;\n    border: none;\n    margin-left: -15px;\n  }\n  \n  #sidebar {\n    background: #eb6864;\n    color: #fff;\n    transition: all 0.3s;\n  }\n  \n  #sidebar .sidebar-header {\n    padding: 20px;\n    background: #eb6864;\n  }\n  \n  #sidebar ul.components {\n    padding: 20px 0;\n    border-bottom: 1px solid #eb6864;\n  }\n  \n  #sidebar ul p {\n    color: #fff;\n    padding: 10px;\n  }\n  \n  #sidebar ul li a {\n    padding: 10px;\n    font-size: 1.1em;\n    display: block;\n  }\n  \n  #sidebar ul li a:hover {\n    color: #ec4f5f;\n    background: #fff;\n  }\n  \n  #sidebar ul li.active > a,\n  a[aria-expanded=\"true\"] {\n    color: #fff;\n    background: #ec4f5f;\n  }\n  ul ul a {\n    font-size: 0.9em !important;\n    padding-left: 30px !important;\n    background: #ec4f5f;\n  }\n  \n  ul ul a.underLine {\n    padding-left: 0px !important;\n    background: transparent;\n    color: inherit; border-bottom: 1px dashed #b7b7b7;\n  }\n  \n  html {\n    font-size: 21px;\n    line-height: 1.58;\n    color: #333;  \n    overscroll-behavior-y: auto;\n    overflow: auto;\n  }\n\n  #header {\n    text-align: center;\n    font-size: 18px;\n    background: transparent;\n    color: #777;\n    margin-bottom: 30px;\n    padding-top: 50px;\n  }\n  #header-bar {\n    color: #333;\n    background: transparent;\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 0;\n    margin: 0 auto;\n    z-index: 10;\n    opacity: 0.99;\n  }\n  #header-bar-wrap {\n    max-width: 1000px;\n    margin: 0 auto;\n    position: relative;\n  }\n  #header-bar-wrap span {\n    line-height: 50px;\n    letter-spacing: 0px;\n    font-weight: bold;\n    font-size: 30px;\n    display: block;\n  }\n  @media (max-width: 1000px) {\n    .main-menu, .main-contact { display: none; }\n    \n  }\n\n  .main-contact:hover {\n    background: whitesmoke;\n  }\n  .main-menu {\n    position: absolute;\n    left: 0;\n    top: 0;\n    margin: 5px;\n  }\n  .main-selected {font-weight: bold;}\n  .main-sub-option {\n    position: absolute;\n    margin-top: 20px;\n    margin-left: 14px;\n    font-size: 12px;\n    white-space: nowrap;\n  }\n  .main-menu > div {\n    display: inline-block;\n    margin-right: 5px;\n  }\n  \n  \n  ", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store */ "./src/store.js");
/* harmony import */ var _css_stylesheet_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./css/stylesheet.css */ "./src/css/stylesheet.css");
/* harmony import */ var _css_stylesheet_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_css_stylesheet_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/Home */ "./src/pages/Home.js");
/* harmony import */ var _pages_Pledge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/Pledge */ "./src/pages/Pledge.js");
/* harmony import */ var _pages_About__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/About */ "./src/pages/About.js");
/* harmony import */ var _pages_Samarth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/Samarth */ "./src/pages/Samarth.js");
/* harmony import */ var _pages_Fraissard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/Fraissard */ "./src/pages/Fraissard.js");
/* harmony import */ var _pages_Oops__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/Oops */ "./src/pages/Oops.js");
/* harmony import */ var _pages_Haase__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/Haase */ "./src/pages/Haase.js");
/* harmony import */ var _pages_MacDonald__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/MacDonald */ "./src/pages/MacDonald.js");
/* harmony import */ var _pages_Cross__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/Cross */ "./src/pages/Cross.js");
/* harmony import */ var _pages_Hering__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/Hering */ "./src/pages/Hering.js");





var _jsxFileName = "/home/reed/Web/IYM/raam-webapp/src/App.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





 // import before pages or style gets funky












var App = /*#__PURE__*/function (_Component) {
  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(App, _Component);

  var _super = _createSuper(App);

  function App() {
    Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    return _super.apply(this, arguments);
  }

  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_7__["Provider"], {
        store: _store__WEBPACK_IMPORTED_MODULE_8__["default"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["BrowserRouter"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Switch"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/",
        component: _pages_Home__WEBPACK_IMPORTED_MODULE_10__["default"],
        exact: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 13
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/Pledge",
        component: _pages_Pledge__WEBPACK_IMPORTED_MODULE_11__["default"],
        exact: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 13
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/About",
        component: _pages_About__WEBPACK_IMPORTED_MODULE_12__["default"],
        exact: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 13
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/Samarth",
        component: _pages_Samarth__WEBPACK_IMPORTED_MODULE_13__["default"],
        exact: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 13
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/Fraissard",
        component: _pages_Fraissard__WEBPACK_IMPORTED_MODULE_14__["default"],
        exact: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 13
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/Haase",
        component: _pages_Haase__WEBPACK_IMPORTED_MODULE_16__["default"],
        exact: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 13
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/MacDonald",
        component: _pages_MacDonald__WEBPACK_IMPORTED_MODULE_17__["default"],
        exact: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 13
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/Cross",
        component: _pages_Cross__WEBPACK_IMPORTED_MODULE_18__["default"],
        exact: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 13
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/Hering",
        component: _pages_Hering__WEBPACK_IMPORTED_MODULE_19__["default"],
        exact: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 13
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/Oops",
        component: _pages_Oops__WEBPACK_IMPORTED_MODULE_15__["default"],
        exact: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 13
        }
      }))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/Components/AboutContent.jsx":
/*!*****************************************!*\
  !*** ./src/Components/AboutContent.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/Styles.css */ "./src/css/Styles.css");
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_Styles_css__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/home/reed/Web/IYM/raam-webapp/src/Components/AboutContent.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var AboutContent = /*#__PURE__*/function (_Component) {
  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(AboutContent, _Component);

  var _super = _createSuper(AboutContent);

  function AboutContent() {
    Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AboutContent);

    return _super.apply(this, arguments);
  }

  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AboutContent, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "About-Content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 9
        }
      }, "It\u2019s Your Move was created after seeing the impact of physical isolation and social disruption on friends and family and our world at large. At the same time, a half a world away, Ultra cyclist Dr. Amit Samarth was planning an inspiring Ride Around India. Yes, all of it. 6,000 kilometers on the famed Golden Quadrilateral connecting Mumbai, Chennai, Kolkata, and Delhi. A partnership was born."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 9
        }
      }, "Today, \u201CIt\u2019s Your Move\u201D athletes include 3 men, 3 women and adventures that span 4 continents and 5 countries. They include ultradistance road cycling, gravel cycling, dogsled mushing, and snowshoe running. It\u2019s a global project for health and wellbeing and for a world alive with purpose, healthy both physically and mentally, and connected to each other."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 9
        }
      }, "We are building a technical platform that can share these adventures like never before. Not only will we map their routes and aggregate social media, we will be streaming live biometric and performance data to the cloud and right to you, our followers. We invite you to use their perspiration, heartbeats, and commitment to inspire your pledge of exercise, mindfulness, or social connection."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 9
        }
      }, "Please share your pledge with your social followers with the hashtag #itsyourmove2021 and tag three friends."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 9
        }
      }, "Our technology team is supported by technology, fitness, and health leaders Mapbox, The Weather Company (an IBM Business), Narrative Science, Garmin, Moxy, CORE, and HealthIO (Milliman). Project leadership and programming is provided by UW-Madison Computer, Data, and Information Science Undergraduate Project Lab."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 9
        }
      }, "We are confident that this is the future of sports. The future of fitness. The future of health and wellbeing; Live contextual, biometric and performance data."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 9
        }
      }, "Thanks for being here. And thanks for sharing with others."));
    }
  }]);

  return AboutContent;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AboutContent);

/***/ }),

/***/ "./src/Components/AthleteInfo.jsx":
/*!****************************************!*\
  !*** ./src/Components/AthleteInfo.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/Styles.css */ "./src/css/Styles.css");
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_Styles_css__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/home/reed/Web/IYM/raam-webapp/src/Components/AthleteInfo.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var AthleteInfo = /*#__PURE__*/function (_Component) {
  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(AthleteInfo, _Component);

  var _super = _createSuper(AthleteInfo);

  function AthleteInfo() {
    Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AthleteInfo);

    return _super.apply(this, arguments);
  }

  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AthleteInfo, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "Athlete-Info row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col Athlete-Info-Photo-Box",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        className: "Athlete-Info-Photo",
        src: this.props.img,
        alt: this.props.name,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col Athlete-Info-Bio-Box",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(this.props.bio, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }
      })));
    }
  }]);

  return AthleteInfo;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AthleteInfo);

/***/ }),

/***/ "./src/Components/AthleteLiveData.jsx":
/*!********************************************!*\
  !*** ./src/Components/AthleteLiveData.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/Styles.css */ "./src/css/Styles.css");
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_Styles_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Biometrics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Biometrics */ "./src/Components/Biometrics.jsx");
/* harmony import */ var _LiveEvent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LiveEvent */ "./src/Components/LiveEvent.jsx");
/* harmony import */ var _Map_MapBoxSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Map/MapBoxSection */ "./src/Components/Map/MapBoxSection.jsx");





var _jsxFileName = "/home/reed/Web/IYM/raam-webapp/src/Components/AthleteLiveData.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var DEFAULT_FEED = "https://cdn.curator.io/published/9f9e3fe1-73a0-40c2-a822-81500b89790d.js";

var AthleteLiveData = /*#__PURE__*/function (_Component) {
  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(AthleteLiveData, _Component);

  var _super = _createSuper(AthleteLiveData);

  function AthleteLiveData(props) {
    var _this;

    Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AthleteLiveData);

    _this = _super.call(this, props);

    _this.getData = function () {
      console.log("Fetch data");
      fetch("https://c0hjtg8xa3.execute-api.us-west-2.amazonaws.com/dev/").then(function (res) {
        return res.json();
      }).then(function (result) {
        for (var i = 0; i < result.features.length; i++) {
          if (result.features[i].properties.id === _this.props.id) {
            _this.setState({
              isLoaded: true,
              index: i,
              items: result.features
            });
          }
        }
      }, function (error) {
        _this.setState({
          isLoaded: true,
          error: error
        });
      });
    };

    _this.state = {
      error: null,
      isLoaded: false,
      index: 0,
      items: []
    };
    return _this;
  }

  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AthleteLiveData, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getData();
      this.intervalID = setInterval(this.getData.bind(this), 10000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.intervalID);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          error = _this$state.error,
          isLoaded = _this$state.isLoaded,
          index = _this$state.index,
          items = _this$state.items;

      if (error) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "errorMsg",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 14
          }
        }, "ERROR");
      } else if (!isLoaded) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "loadingMsg",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 14
          }
        }, "Loading...");
      } else if (this.props.isHome) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_LiveEvent__WEBPACK_IMPORTED_MODULE_8__["default"], {
          athleteLat: items[index].geometry.coordinates[1],
          athleteLong: items[index].geometry.coordinates[0],
          feedID: this.props.feedID || DEFAULT_FEED,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 9
          }
        });
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 9
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Map_MapBoxSection__WEBPACK_IMPORTED_MODULE_9__["default"], {
          id: this.props.id,
          athleteLat: items[index].geometry.coordinates[1],
          athleteLong: items[index].geometry.coordinates[0],
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 11
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 11
          }
        }, "Live Data"), items[index].properties.device.testing && !this.props.isHome ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "testingMsg",
          style: {
            textAlign: "center"
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }
        }, "This athlete's data is in the testing stage") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Biometrics__WEBPACK_IMPORTED_MODULE_7__["default"], {
          hr: items[index].properties.sensors.hr !== undefined ? items[index].properties.sensors.hr : undefined,
          speed: items[index].properties.speed !== undefined ? items[index].properties.speed : undefined,
          cadence: items[index].properties.sensors.cadence !== undefined ? items[index].properties.sensors.cadence : undefined,
          power: items[index].properties.sensors.power !== undefined ? items[index].properties.sensors.power : undefined,
          altitude: items[index].properties.altitude !== undefined ? items[index].properties.altitude : undefined,
          temp: items[index].properties.sensors.temp !== undefined ? items[index].properties.sensors.temp : undefined,
          mo2: items[index].properties.sensors.mo2 !== undefined ? items[index].properties.sensors.mo2.mo2Saturation : undefined,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }
        }));
      }
    }
  }]);

  return AthleteLiveData;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AthleteLiveData);

/***/ }),

/***/ "./src/Components/Bio/CrossBio.jsx":
/*!*****************************************!*\
  !*** ./src/Components/Bio/CrossBio.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../css/Styles.css */ "./src/css/Styles.css");
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_Styles_css__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/home/reed/Web/IYM/raam-webapp/src/Components/Bio/CrossBio.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var CrossBio = /*#__PURE__*/function (_Component) {
  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(CrossBio, _Component);

  var _super = _createSuper(CrossBio);

  function CrossBio() {
    Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CrossBio);

    return _super.apply(this, arguments);
  }

  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CrossBio, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 9
        }
      }, "Bio"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 9
        }
      }, "Accomplishments: 2020 Jr Iditarod 2nd Place"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 9
        }
      }, "Adventure: Dogsledding"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 9
        }
      }, "Country: Canada"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 9
        }
      }, "Profession: Student"));
    }
  }]);

  return CrossBio;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CrossBio);

/***/ }),

/***/ "./src/Components/Bio/FraissardBio.jsx":
/*!*********************************************!*\
  !*** ./src/Components/Bio/FraissardBio.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../css/Styles.css */ "./src/css/Styles.css");
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_Styles_css__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/home/reed/Web/IYM/raam-webapp/src/Components/Bio/FraissardBio.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var FraissardBio = /*#__PURE__*/function (_Component) {
  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(FraissardBio, _Component);

  var _super = _createSuper(FraissardBio);

  function FraissardBio() {
    Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FraissardBio);

    return _super.apply(this, arguments);
  }

  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FraissardBio, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 9
        }
      }, "Bio"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 9
        }
      }, "Totem: The Fox"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 9
        }
      }, "Adventure: Journey Around Rwanda"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 9
        }
      }, "Country: France"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 9
        }
      }, "Sport: Gravel Cycling"));
    }
  }]);

  return FraissardBio;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (FraissardBio);

/***/ }),

/***/ "./src/Components/Bio/HaaseBio.jsx":
/*!*****************************************!*\
  !*** ./src/Components/Bio/HaaseBio.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../css/Styles.css */ "./src/css/Styles.css");
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_Styles_css__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/home/reed/Web/IYM/raam-webapp/src/Components/Bio/HaaseBio.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var HaaseBio = /*#__PURE__*/function (_Component) {
  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HaaseBio, _Component);

  var _super = _createSuper(HaaseBio);

  function HaaseBio() {
    Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HaaseBio);

    return _super.apply(this, arguments);
  }

  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(HaaseBio, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 9
        }
      }, "Bio"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 9
        }
      }, "Accomplishments: RAAM veteran and several time top American finisher."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 9
        }
      }, "Adventure: Ultracycling"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 9
        }
      }, "Country: USA"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 9
        }
      }, "Profession: Bike Shop Owner"));
    }
  }]);

  return HaaseBio;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (HaaseBio);

/***/ }),

/***/ "./src/Components/Bio/HeringBio.jsx":
/*!******************************************!*\
  !*** ./src/Components/Bio/HeringBio.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../css/Styles.css */ "./src/css/Styles.css");
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_Styles_css__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/home/reed/Web/IYM/raam-webapp/src/Components/Bio/HeringBio.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var HeringBio = /*#__PURE__*/function (_Component) {
  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HeringBio, _Component);

  var _super = _createSuper(HeringBio);

  function HeringBio() {
    Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HeringBio);

    return _super.apply(this, arguments);
  }

  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(HeringBio, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 9
        }
      }, "Bio"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 9
        }
      }, "Favorite Phrase: \"Love life and don't take anything for granted.\""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 9
        }
      }, "Adventure: Snowshoe Running"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 9
        }
      }, "Country: USA"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 9
        }
      }, "Profession: Professional Triathlete, Coach, Race Director"));
    }
  }]);

  return HeringBio;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (HeringBio);

/***/ }),

/***/ "./src/Components/Bio/MacDonaldBio.jsx":
/*!*********************************************!*\
  !*** ./src/Components/Bio/MacDonaldBio.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../css/Styles.css */ "./src/css/Styles.css");
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_Styles_css__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/home/reed/Web/IYM/raam-webapp/src/Components/Bio/MacDonaldBio.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var MacDonaldBio = /*#__PURE__*/function (_Component) {
  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(MacDonaldBio, _Component);

  var _super = _createSuper(MacDonaldBio);

  function MacDonaldBio() {
    Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MacDonaldBio);

    return _super.apply(this, arguments);
  }

  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MacDonaldBio, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 9
        }
      }, "Bio"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 9
        }
      }, "Accomplishments: World record holder, Only Scottish Solo RAAM finisher."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 9
        }
      }, "Sport: Cycling"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 9
        }
      }, "Country: Scotland"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 9
        }
      }, "Profession: Technology"));
    }
  }]);

  return MacDonaldBio;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MacDonaldBio);

/***/ }),

/***/ "./src/Components/Bio/SamarthBio.jsx":
/*!*******************************************!*\
  !*** ./src/Components/Bio/SamarthBio.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../css/Styles.css */ "./src/css/Styles.css");
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_Styles_css__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/home/reed/Web/IYM/raam-webapp/src/Components/Bio/SamarthBio.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var SamarthBio = /*#__PURE__*/function (_Component) {
  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(SamarthBio, _Component);

  var _super = _createSuper(SamarthBio);

  function SamarthBio() {
    Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SamarthBio);

    return _super.apply(this, arguments);
  }

  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SamarthBio, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 9
        }
      }, "Bio"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 9
        }
      }, "Favorite Phrase: \"Be your own hero\""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 9
        }
      }, "Adventure: Ride Across India"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 9
        }
      }, "Country: India"));
    }
  }]);

  return SamarthBio;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SamarthBio);

/***/ }),

/***/ "./src/Components/Biometrics.jsx":
/*!***************************************!*\
  !*** ./src/Components/Biometrics.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/Styles.css */ "./src/css/Styles.css");
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_Styles_css__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/home/reed/Web/IYM/raam-webapp/src/Components/Biometrics.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var Biometrics = /*#__PURE__*/function (_Component) {
  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Biometrics, _Component);

  var _super = _createSuper(Biometrics);

  function Biometrics() {
    Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Biometrics);

    return _super.apply(this, arguments);
  }

  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Biometrics, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "liveData",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("table", {
        align: "center",
        className: "liveDataTable",
        style: {
          marginBottom: 25
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tbody", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        className: "liveDataCell",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 15
        }
      }, "Heart rate:\u2003"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        className: "liveDataCell",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 15
        }
      }, this.props.hr !== undefined ? this.props.hr + " bpm" : "No data")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        className: "liveDataCell",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 15
        }
      }, "Speed:\u2003"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        className: "liveDataCell",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 15
        }
      }, this.props.speed !== undefined ? this.props.speed * 3.6 + " km/hr" : "No data")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        className: "liveDataCell",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 15
        }
      }, "Cadence:\u2003"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        className: "liveDataCell",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 15
        }
      }, this.props.cadence !== undefined ? this.props.cadence + " rpm" : "No data")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        className: "liveDataCell",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 15
        }
      }, "Power:\u2003"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        className: "liveDataCell",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 15
        }
      }, this.props.power !== undefined ? this.props.power + " watts" : "No data")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        className: "liveDataCell",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 15
        }
      }, "Altitude:\u2003"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        className: "liveDataCell",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 15
        }
      }, this.props.altitude !== undefined ? this.props.altitude + " meters" : "No data")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        className: "liveDataCell",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 15
        }
      }, "Temperature:\u2003"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        className: "liveDataCell",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 15
        }
      }, this.props.temp !== undefined ? this.props.temp + "\xB0 C" : "No data")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        className: "liveDataCell",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 15
        }
      }, "MO", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("sub", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 19
        }
      }, "2"), ":\u2003"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        className: "liveDataCell",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 15
        }
      }, this.props.mo2 !== undefined ? this.props.mo2 + "%" : "No data")))));
    }
  }]);

  return Biometrics;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Biometrics);

/***/ }),

/***/ "./src/Components/CuratorFeed.js":
/*!***************************************!*\
  !*** ./src/Components/CuratorFeed.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "/home/reed/Web/IYM/raam-webapp/src/Components/CuratorFeed.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var CuratorFeed = /*#__PURE__*/function (_React$Component) {
  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(CuratorFeed, _React$Component);

  var _super = _createSuper(CuratorFeed);

  function CuratorFeed(props) {
    var _this;

    Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CuratorFeed);

    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }

  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CuratorFeed, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var i,
          e,
          d = document,
          s = "script";
      i = d.createElement("script");
      i.async = 1;
      i.src = this.props.feedID;
      e = d.getElementsByTagName(s)[0];
      e.parentNode.insertBefore(i, e);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        id: "curator-feed-default-feed-layout",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://curator.io",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "crt-logo crt-tag",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 9
        }
      }, "Powered by Curator.io"));
    }
  }]);

  return CuratorFeed;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CuratorFeed);

/***/ }),

/***/ "./src/Components/Footer.jsx":
/*!***********************************!*\
  !*** ./src/Components/Footer.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/Styles.css */ "./src/css/Styles.css");
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_Styles_css__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/home/reed/Web/IYM/raam-webapp/src/Components/Footer.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var Footer = /*#__PURE__*/function (_Component) {
  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Footer, _Component);

  var _super = _createSuper(Footer);

  function Footer() {
    Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Footer);

    return _super.apply(this, arguments);
  }

  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Footer, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("footer", {
        className: "Footer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7,
          columnNumber: 12
        }
      }, "\xA9 It's Your Move - 2021");
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/Components/Gallery/AthleteGallery.jsx":
/*!***************************************************!*\
  !*** ./src/Components/Gallery/AthleteGallery.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _GalleryCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GalleryCard */ "./src/Components/Gallery/GalleryCard.jsx");
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../css/Styles.css */ "./src/css/Styles.css");
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_Styles_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _images_athletes_samarth_jpeg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../images/athletes/samarth.jpeg */ "./src/images/athletes/samarth.jpeg");
/* harmony import */ var _images_athletes_samarth_jpeg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_images_athletes_samarth_jpeg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _images_athletes_haase_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../images/athletes/haase.png */ "./src/images/athletes/haase.png");
/* harmony import */ var _images_athletes_haase_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_images_athletes_haase_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _images_athletes_macdonald_PNG__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../images/athletes/macdonald.PNG */ "./src/images/athletes/macdonald.PNG");
/* harmony import */ var _images_athletes_macdonald_PNG__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_images_athletes_macdonald_PNG__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _images_athletes_cross_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../images/athletes/cross.jpg */ "./src/images/athletes/cross.jpg");
/* harmony import */ var _images_athletes_cross_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_images_athletes_cross_jpg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _images_athletes_fraissard_PNG__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../images/athletes/fraissard.PNG */ "./src/images/athletes/fraissard.PNG");
/* harmony import */ var _images_athletes_fraissard_PNG__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_images_athletes_fraissard_PNG__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _images_athletes_hering_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../images/athletes/hering.jpg */ "./src/images/athletes/hering.jpg");
/* harmony import */ var _images_athletes_hering_jpg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_images_athletes_hering_jpg__WEBPACK_IMPORTED_MODULE_13__);





var _jsxFileName = "/home/reed/Web/IYM/raam-webapp/src/Components/Gallery/AthleteGallery.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }











var AthleteGallery = /*#__PURE__*/function (_Component) {
  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(AthleteGallery, _Component);

  var _super = _createSuper(AthleteGallery);

  function AthleteGallery() {
    Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AthleteGallery);

    return _super.apply(this, arguments);
  }

  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AthleteGallery, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "Event-Gallery",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 9
        }
      }, "Athletes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col Event-Gallery-Card-Container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_GalleryCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
        name: "Sandrine Fraissard",
        event: "Journey Around Rwanda",
        img: _images_athletes_fraissard_PNG__WEBPACK_IMPORTED_MODULE_12___default.a,
        link: "/Fraissard",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 13
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col Event-Gallery-Card-Container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_GalleryCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
        name: "Dr. Amit Samarth",
        event: "Ride Across India",
        img: _images_athletes_samarth_jpeg__WEBPACK_IMPORTED_MODULE_8___default.a,
        link: "/Samarth",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 13
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col Event-Gallery-Card-Container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_GalleryCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
        name: "Dave Haase",
        event: "Ultracycling",
        img: _images_athletes_haase_png__WEBPACK_IMPORTED_MODULE_9___default.a,
        link: "/Haase",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 13
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col Event-Gallery-Card-Container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_GalleryCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
        name: "James MacDonald",
        event: "Ultracycling",
        img: _images_athletes_macdonald_PNG__WEBPACK_IMPORTED_MODULE_10___default.a,
        link: "/MacDonald",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 13
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col Event-Gallery-Card-Container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_GalleryCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
        name: "Julia Cross",
        event: "Dogsledding",
        img: _images_athletes_cross_jpg__WEBPACK_IMPORTED_MODULE_11___default.a,
        link: "/Cross",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 13
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col Event-Gallery-Card-Container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_GalleryCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
        name: "Jackie Hering",
        event: "Snowshoe Running",
        img: _images_athletes_hering_jpg__WEBPACK_IMPORTED_MODULE_13___default.a,
        link: "/Hering",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 13
        }
      }))));
    }
  }]);

  return AthleteGallery;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AthleteGallery);

/***/ }),

/***/ "./src/Components/Gallery/GalleryCard.jsx":
/*!************************************************!*\
  !*** ./src/Components/Gallery/GalleryCard.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../css/Styles.css */ "./src/css/Styles.css");
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_Styles_css__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/home/reed/Web/IYM/raam-webapp/src/Components/Gallery/GalleryCard.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var GalleryCard = /*#__PURE__*/function (_Component) {
  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(GalleryCard, _Component);

  var _super = _createSuper(GalleryCard);

  function GalleryCard() {
    Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GalleryCard);

    return _super.apply(this, arguments);
  }

  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(GalleryCard, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "Event-Gallery-Card",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: this.props.link,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        className: "Event-Gallery-Card-Image",
        src: this.props.img,
        alt: this.props.name,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "Event-Gallery-Card-Info",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "Event-Gallery-Card-Name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 13
        }
      }, this.props.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "Event-Gallery-Card-Bio",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 13
        }
      }, this.props.event))));
    }
  }]);

  return GalleryCard;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (GalleryCard);

/***/ }),

/***/ "./src/Components/Header.jsx":
/*!***********************************!*\
  !*** ./src/Components/Header.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/Styles.css */ "./src/css/Styles.css");
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_Styles_css__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/home/reed/Web/IYM/raam-webapp/src/Components/Header.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var Header = /*#__PURE__*/function (_Component) {
  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Header, _Component);

  var _super = _createSuper(Header);

  function Header() {
    Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    return _super.apply(this, arguments);
  }

  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 9
        }
      }, this.props.text));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/Components/LiveEvent.jsx":
/*!**************************************!*\
  !*** ./src/Components/LiveEvent.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/Styles.css */ "./src/css/Styles.css");
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_Styles_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Map_MapBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Map/MapBox */ "./src/Components/Map/MapBox.js");
/* harmony import */ var _CuratorFeed__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CuratorFeed */ "./src/Components/CuratorFeed.js");





var _jsxFileName = "/home/reed/Web/IYM/raam-webapp/src/Components/LiveEvent.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var LiveEvent = /*#__PURE__*/function (_Component) {
  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(LiveEvent, _Component);

  var _super = _createSuper(LiveEvent);

  function LiveEvent() {
    Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LiveEvent);

    return _super.apply(this, arguments);
  }

  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LiveEvent, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "Live-Event row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col Live-Event-Map-Box",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Map_MapBox__WEBPACK_IMPORTED_MODULE_7__["default"], {
        token: "pk.eyJ1IjoiaXRzeW91cm1vdmUiLCJhIjoiY2tqeGJqbzg5MDF3eDJ3bzh1MTk2bWhqYSJ9.w4UUfWxmTk630JJ0CgtfnA",
        mapStyle: "mapbox://styles/itsyourmove/ckjxu50uf218917pc610sqa3n",
        latitude: 21,
        longitude: 79,
        markLat: this.props.athleteLat,
        markLong: this.props.athleteLong,
        zoom: 4.2,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col Live-Event-Feed-Box",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_CuratorFeed__WEBPACK_IMPORTED_MODULE_8__["default"], {
        feedID: this.props.feedID,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }
      })));
    }
  }]);

  return LiveEvent;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (LiveEvent);

/***/ }),

/***/ "./src/Components/Map/ChallengeMapSection.jsx":
/*!****************************************************!*\
  !*** ./src/Components/Map/ChallengeMapSection.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../css/Styles.css */ "./src/css/Styles.css");
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_Styles_css__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/home/reed/Web/IYM/raam-webapp/src/Components/Map/ChallengeMapSection.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var ChallengeMapSection = /*#__PURE__*/function (_Component) {
  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(ChallengeMapSection, _Component);

  var _super = _createSuper(ChallengeMapSection);

  function ChallengeMapSection() {
    Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ChallengeMapSection);

    return _super.apply(this, arguments);
  }

  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ChallengeMapSection, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "Live-Event row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col Live-Event-Map-Box",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "Garmin-Map",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("iframe", {
        title: "FraissardGarminMap",
        src: "https://www.followmychallenge.com/live/rar21/#",
        frameborder: "0",
        marginwidth: "0",
        marginheight: "0",
        width: "100%",
        height: "760",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 13
        }
      }))));
    }
  }]);

  return ChallengeMapSection;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ChallengeMapSection);

/***/ }),

/***/ "./src/Components/Map/MapBox.js":
/*!**************************************!*\
  !*** ./src/Components/Map/MapBox.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-map-gl */ "./node_modules/react-map-gl/dist/esm/index.js");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mapbox-gl */ "./node_modules/mapbox-gl/dist/mapbox-gl.js");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_9__);






var _jsxFileName = "/home/reed/Web/IYM/raam-webapp/src/Components/Map/MapBox.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


 // import React from 'react'


 // This is a dependency of react-map-gl even if you didn't explicitly install it
// eslint-disable-next-line import/no-webpack-loader-syntax

mapbox_gl__WEBPACK_IMPORTED_MODULE_9___default.a.workerClass = __webpack_require__(/*! worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker */ "./node_modules/worker-loader/dist/cjs.js!./node_modules/mapbox-gl/dist/mapbox-gl-csp-worker.js").default; // import ReactMapGL from 'react-map-gl';
// import { Component } from 'react';
// import Pin from './Pin'
// 3rd-party easing functions
// import d3 from 'd3-ease';//Mapbox token
// const TOKEN =
//   "pk.eyJ1IjoibWlzbGFtNSIsImEiOiJjanVpdG5vZWoxZThsNGZwamJ4Nmxya2o0In0.19pBli659L76GrJaX0JWoA";
// const STYLE = "mapbox://styles/mislam5/cjuiyejbm6qn11gnv0e44i7qm";
// const INDIA_TOKEN =
//   "pk.eyJ1IjoiaXRzeW91cm1vdmUiLCJhIjoiY2tqeGJqbzg5MDF3eDJ3bzh1MTk2bWhqYSJ9.w4UUfWxmTk630JJ0CgtfnA";
// const INDIA_STYLE = "mapbox://styles/itsyourmove/ckjxu50uf218917pc610sqa3n";
//Mapbox Navigation Style

var Fanexperience = /*#__PURE__*/function (_Component) {
  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Fanexperience, _Component);

  var _super = _createSuper(Fanexperience);

  function Fanexperience() {
    var _this;

    Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Fanexperience);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      viewport: {
        width: "100%",
        height: 500,
        latitude: _this.props.latitude,
        longitude: _this.props.longitude,
        zoom: _this.props.zoom,
        bearing: 0,
        pitch: 0
      }
    };

    _this._onViewportChange = function (viewport) {
      _this.setState({
        viewport: viewport
      });
    };

    _this._goToCyclist = function () {
      var viewport = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this.state.viewport, {
        longitude: -74.1,
        //This is be the coordinate of the cyclist
        latitude: 40.7,
        zoom: 14,
        transitionDuration: 5000,
        transitionInterpolator: new react_map_gl__WEBPACK_IMPORTED_MODULE_8__["FlyToInterpolator"]() // transitionEasing: d3.easeCubic

      });

      _this.setState({
        viewport: viewport
      });
    };

    return _this;
  }

  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Fanexperience, [{
    key: "render",
    // mapStyle = "mapbox://styles/mislam5/cjuiyejbm6qn11gnv0e44i7qm"
    // For Dashboard access for now we will have to add /dashboardRAAMforVIPaccess to our http
    //Fanexperience will be root dir
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        id: "mainWrapper",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Container"], {
        className: "Map d-flex flex-wrap align-items-center align-content-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_map_gl__WEBPACK_IMPORTED_MODULE_8__["default"], Object.assign({
        mapboxApiAccessToken: this.props.token,
        mapStyle: this.props.mapStyle
      }, this.state.viewport, {
        onViewportChange: this._onViewportChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_map_gl__WEBPACK_IMPORTED_MODULE_8__["Marker"], {
        latitude: this.props.markLat,
        longitude: this.props.markLong,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: " https://img.icons8.com/color/48/000000/marker.png",
        alt: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 15
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "nav",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_map_gl__WEBPACK_IMPORTED_MODULE_8__["NavigationControl"], {
        onViewportChange: function onViewportChange(viewport) {
          return _this2.setState({
            viewport: viewport
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 15
        }
      })))));
    }
  }]);

  return Fanexperience;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Fanexperience);

/***/ }),

/***/ "./src/Components/Map/MapBoxSection.jsx":
/*!**********************************************!*\
  !*** ./src/Components/Map/MapBoxSection.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../css/Styles.css */ "./src/css/Styles.css");
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_Styles_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _MapBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MapBox */ "./src/Components/Map/MapBox.js");





var _jsxFileName = "/home/reed/Web/IYM/raam-webapp/src/Components/Map/MapBoxSection.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var INDIA_TOKEN = "pk.eyJ1IjoiaXRzeW91cm1vdmUiLCJhIjoiY2tqeGJqbzg5MDF3eDJ3bzh1MTk2bWhqYSJ9.w4UUfWxmTk630JJ0CgtfnA";
var INDIA_STYLE = "mapbox://styles/itsyourmove/ckjxu50uf218917pc610sqa3n";

var MapBoxSection = /*#__PURE__*/function (_Component) {
  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(MapBoxSection, _Component);

  var _super = _createSuper(MapBoxSection);

  function MapBoxSection() {
    Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MapBoxSection);

    return _super.apply(this, arguments);
  }

  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MapBoxSection, [{
    key: "render",
    value: function render() {
      switch (this.props.id) {
        case "00001":
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "Live-Event row",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 13,
              columnNumber: 11
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "col Live-Event-Map-Box",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 13
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_MapBox__WEBPACK_IMPORTED_MODULE_7__["default"], {
            token: INDIA_TOKEN,
            mapStyle: INDIA_STYLE,
            latitude: 21,
            longitude: 79,
            markLat: this.props.athleteLat,
            markLong: this.props.athleteLong,
            zoom: 4.2,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 15
            }
          })));
        // case "TEST1":
        //   return (
        //     <div className="Live-Event row">
        //     <div className="col Live-Event-Map-Box">
        //       <MapBox
        //           token={INDIA_TOKEN}
        //           mapStyle={INDIA_STYLE}
        //           latitude={21}
        //           longitude={79}
        //           markLat={43}
        //           markLong={-89}
        //           zoom={4.2}
        //       />
        //     </div>
        //   </div>
        //   );

        default:
          //always returns before the correct map
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 11
            }
          });
      }
    }
  }]);

  return MapBoxSection;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MapBoxSection);

/***/ }),

/***/ "./src/Components/NavBar/DropButton.jsx":
/*!**********************************************!*\
  !*** ./src/Components/NavBar/DropButton.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../css/Styles.css */ "./src/css/Styles.css");
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_Styles_css__WEBPACK_IMPORTED_MODULE_3__);


var _this = undefined,
    _jsxFileName = "/home/reed/Web/IYM/raam-webapp/src/Components/NavBar/DropButton.jsx";





var DropButton = function DropButton(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      dropdownOpen = _useState2[0],
      setOpen = _useState2[1];

  var toggle = function toggle() {
    return setOpen(!dropdownOpen);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ButtonDropdown"], {
    className: "Dropdown",
    isOpen: dropdownOpen,
    toggle: toggle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownToggle"], {
    className: "Dropdown-Toggle",
    caret: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, "Events \u2003"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownMenu"], {
    className: "Dropdown-Menu",
    right: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], {
    className: "Dropdown-Item",
    href: "/Fraissard",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, "Sandrine Fraissard"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], {
    className: "Dropdown-Item",
    href: "/Samarth",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, "Dr. Amit Samarth"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], {
    className: "Dropdown-Item",
    href: "/Haase",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, "Dave Haase"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], {
    className: "Dropdown-Item",
    href: "/MacDonald",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, "James MacDonald"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], {
    className: "Dropdown-Item",
    href: "/Cross",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, "Julia Cross"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], {
    className: "Dropdown-Item",
    href: "/Hering",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, "Jackie Hering")));
};

/* harmony default export */ __webpack_exports__["default"] = (DropButton);

/***/ }),

/***/ "./src/Components/NavBar/NavBar.jsx":
/*!******************************************!*\
  !*** ./src/Components/NavBar/NavBar.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../css/Styles.css */ "./src/css/Styles.css");
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_Styles_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _DropButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DropButton */ "./src/Components/NavBar/DropButton.jsx");
/* harmony import */ var _images_iym_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../images/iym.png */ "./src/images/iym.png");
/* harmony import */ var _images_iym_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_images_iym_png__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "/home/reed/Web/IYM/raam-webapp/src/Components/NavBar/NavBar.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var NavBar = /*#__PURE__*/function (_Component) {
  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(NavBar, _Component);

  var _super = _createSuper(NavBar);

  function NavBar() {
    Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NavBar);

    return _super.apply(this, arguments);
  }

  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NavBar, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "Nav-Bar",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-sm-6 Nav-Bar-Title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _images_iym_png__WEBPACK_IMPORTED_MODULE_8___default.a,
        alt: "It's Your Move",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 15
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-sm-6 Nav-Bar-Content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "Nav-Bar-Content-Item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "Nav-Bar-Content-Link",
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 15
        }
      }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "Nav-Bar-Content-Item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "Nav-Bar-Content-Link",
        href: "/Pledge",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 15
        }
      }, "Pledge")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "Nav-Bar-Content-Item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "Nav-Bar-Content-Link",
        href: "/About",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 15
        }
      }, "About")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_DropButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 13
        }
      }))));
    }
  }]);

  return NavBar;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./src/Components/Partner/PartnerCard.jsx":
/*!************************************************!*\
  !*** ./src/Components/Partner/PartnerCard.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../css/Styles.css */ "./src/css/Styles.css");
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_Styles_css__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/home/reed/Web/IYM/raam-webapp/src/Components/Partner/PartnerCard.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var PartnerCard = /*#__PURE__*/function (_Component) {
  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(PartnerCard, _Component);

  var _super = _createSuper(PartnerCard);

  function PartnerCard() {
    Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PartnerCard);

    return _super.apply(this, arguments);
  }

  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PartnerCard, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "Partners-Box",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        className: "Partners-Logo",
        src: this.props.img,
        alt: this.props.name,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "Partners-Text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 9
        }
      }, this.props.text));
    }
  }]);

  return PartnerCard;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PartnerCard);

/***/ }),

/***/ "./src/Components/Partner/Partners.jsx":
/*!*********************************************!*\
  !*** ./src/Components/Partner/Partners.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../css/Styles.css */ "./src/css/Styles.css");
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_Styles_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _PartnerCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PartnerCard */ "./src/Components/Partner/PartnerCard.jsx");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _images_partners_garmin_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../images/partners/garmin.png */ "./src/images/partners/garmin.png");
/* harmony import */ var _images_partners_garmin_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_images_partners_garmin_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _images_partners_core_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../images/partners/core.png */ "./src/images/partners/core.png");
/* harmony import */ var _images_partners_core_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_images_partners_core_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _images_partners_healthio_jpeg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../images/partners/healthio.jpeg */ "./src/images/partners/healthio.jpeg");
/* harmony import */ var _images_partners_healthio_jpeg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_images_partners_healthio_jpeg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _images_partners_mapbox_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../images/partners/mapbox.png */ "./src/images/partners/mapbox.png");
/* harmony import */ var _images_partners_mapbox_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_images_partners_mapbox_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _images_partners_attitudesports_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../images/partners/attitudesports.jpg */ "./src/images/partners/attitudesports.jpg");
/* harmony import */ var _images_partners_attitudesports_jpg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_images_partners_attitudesports_jpg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _images_partners_moxy_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../images/partners/moxy.png */ "./src/images/partners/moxy.png");
/* harmony import */ var _images_partners_moxy_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_images_partners_moxy_png__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _images_partners_narrativescience_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../images/partners/narrativescience.jpg */ "./src/images/partners/narrativescience.jpg");
/* harmony import */ var _images_partners_narrativescience_jpg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_images_partners_narrativescience_jpg__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _images_partners_theweathercompany_jpg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../images/partners/theweathercompany.jpg */ "./src/images/partners/theweathercompany.jpg");
/* harmony import */ var _images_partners_theweathercompany_jpg__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_images_partners_theweathercompany_jpg__WEBPACK_IMPORTED_MODULE_18__);





var _jsxFileName = "/home/reed/Web/IYM/raam-webapp/src/Components/Partner/Partners.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
















var Partners = /*#__PURE__*/function (_Component) {
  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Partners, _Component);

  var _super = _createSuper(Partners);

  function Partners() {
    Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Partners);

    return _super.apply(this, arguments);
  }

  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Partners, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "Content-Section",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "Partners",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }
      }, "Partners"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_10___default.a, {
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        useTransform: true,
        cssEase: "cubic-bezier(0.83, 0, 0.17, 1)",
        centerMode: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_PartnerCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
        name: "Garmin",
        img: _images_partners_garmin_png__WEBPACK_IMPORTED_MODULE_11___default.a,
        text: "For decades, Garmin has pioneered new GPS navigation and wireless devices and applications that are designed for people who live an active lifestyle.",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 13
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_PartnerCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
        name: "HealthIO",
        img: _images_partners_healthio_jpeg__WEBPACK_IMPORTED_MODULE_13___default.a,
        text: "HealthIO leverages user generated health data to create personalized and actionable insights and enables members the opportunity for early intervention.",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 13
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_PartnerCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
        name: "CORE",
        img: _images_partners_core_png__WEBPACK_IMPORTED_MODULE_12___default.a,
        text: "CORE is the first non-invasive device that continuously and accurately measures Core Body Temperature under real-life conditions. For athletes who are serious about their performance.",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 13
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_PartnerCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
        name: "Moxy",
        img: _images_partners_moxy_png__WEBPACK_IMPORTED_MODULE_16___default.a,
        text: "Moxy is a small, wearable sensor that utilizes infrared light to continuously monitor oxygen saturation (SmO\u2082) levels in the muscles of athletes while they exercise.",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 13
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_PartnerCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
        name: "Attitude Sports",
        img: _images_partners_attitudesports_jpg__WEBPACK_IMPORTED_MODULE_15___default.a,
        text: "The official outfitter of It's Your Move. From professional bike repair and fitting services to top cycling products at exceptional prices, Attitude Sports has you covered.",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 13
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_PartnerCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
        name: "The Weather Company",
        img: _images_partners_theweathercompany_jpg__WEBPACK_IMPORTED_MODULE_18___default.a,
        text: "To ensure optimization, athletes need more than weather data. Advanced analytics better predict how weather events will impact their journey.",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 13
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_PartnerCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
        name: "Mapbox",
        img: _images_partners_mapbox_png__WEBPACK_IMPORTED_MODULE_14___default.a,
        text: "Mapbox tools let developers build a new world powered by location data. Real-time updates. Total customization. Developers first.",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 13
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_PartnerCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
        name: "Narrative Science",
        img: _images_partners_narrativescience_jpg__WEBPACK_IMPORTED_MODULE_17___default.a,
        text: "Data should be understandable for everyone. Start data storytelling.",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 13
        }
      }))));
    }
  }]);

  return Partners;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Partners);

/***/ }),

/***/ "./src/Components/Pledge/LearnMore.jsx":
/*!*********************************************!*\
  !*** ./src/Components/Pledge/LearnMore.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../css/Styles.css */ "./src/css/Styles.css");
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_Styles_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images_Logos_who_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../images/Logos/who.png */ "./src/images/Logos/who.png");
/* harmony import */ var _images_Logos_who_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_Logos_who_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _images_Logos_cdc_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../images/Logos/cdc.png */ "./src/images/Logos/cdc.png");
/* harmony import */ var _images_Logos_cdc_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_images_Logos_cdc_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _images_Logos_hm_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../images/Logos/hm.png */ "./src/images/Logos/hm.png");
/* harmony import */ var _images_Logos_hm_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_images_Logos_hm_png__WEBPACK_IMPORTED_MODULE_9__);





var _jsxFileName = "/home/reed/Web/IYM/raam-webapp/src/Components/Pledge/LearnMore.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var LearnMore = /*#__PURE__*/function (_Component) {
  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(LearnMore, _Component);

  var _super = _createSuper(LearnMore);

  function LearnMore() {
    Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LearnMore);

    return _super.apply(this, arguments);
  }

  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LearnMore, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "Learn-More",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-sm-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        className: "Learn-More-Logo",
        src: _images_Logos_who_png__WEBPACK_IMPORTED_MODULE_7___default.a,
        alt: "WHO",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 13
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "Learn-More-Content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 13
        }
      }, "Learn more about\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://www.who.int/news-room/campaigns/connecting-the-world-to-combat-coronavirus/healthyathome/healthyathome---physical-activity",
        target: "_blank",
        rel: "noopener noreferrer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 15
        }
      }, "staying active and healthy at home"), "\xA0from the World Health Organization.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-sm-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        className: "Learn-More-Logo",
        src: _images_Logos_cdc_png__WEBPACK_IMPORTED_MODULE_8___default.a,
        alt: "CDC",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 13
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "Learn-More-Content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 13
        }
      }, "Learn more about\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://www.cdc.gov/physicalactivity/how-to-be-physically-active-while-social-distancing.html",
        target: "_blank",
        rel: "noopener noreferrer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 15
        }
      }, "how to be physically active while social distancing"), "\xA0from the Centers for Disease Control and Prevention.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-sm-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        className: "Learn-More-Logo",
        src: _images_Logos_hm_png__WEBPACK_IMPORTED_MODULE_9___default.a,
        alt: "HM",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 13
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "Learn-More-Content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 13
        }
      }, "Learn\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://centerhealthyminds.org/join-the-movement/10-well-being-tips-for-the-days-of-covid-19",
        target: "_blank",
        rel: "noopener noreferrer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 15
        }
      }, "10 Well-Being Tips During the Days of COVID-19"), "\xA0from the Center for Healthy Minds."))));
    }
  }]);

  return LearnMore;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (LearnMore);

/***/ }),

/***/ "./src/Components/Pledge/PledgeInfo.jsx":
/*!**********************************************!*\
  !*** ./src/Components/Pledge/PledgeInfo.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_Logos_tweet_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../images/Logos/tweet.png */ "./src/images/Logos/tweet.png");
/* harmony import */ var _images_Logos_tweet_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_Logos_tweet_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../css/Styles.css */ "./src/css/Styles.css");
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_Styles_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Social_PledgeSocial__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Social/PledgeSocial */ "./src/Components/Social/PledgeSocial.jsx");





var _jsxFileName = "/home/reed/Web/IYM/raam-webapp/src/Components/Pledge/PledgeInfo.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var PledgeInfo = /*#__PURE__*/function (_Component) {
  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(PledgeInfo, _Component);

  var _super = _createSuper(PledgeInfo);

  function PledgeInfo() {
    Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PledgeInfo);

    return _super.apply(this, arguments);
  }

  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PledgeInfo, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "Pledge-Info",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "Info",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        className: "Info-Heading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }
      }, "Step 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "Info-Content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }
      }, "Get Inspired by a favorite athlete, hit your social media."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Social_PledgeSocial__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "Info",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        className: "Info-Heading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }
      }, "Step 2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "Info-Content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }
      }, "Pledge an activity (walk, run, ride, meditate), your time and your task."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        className: "Info-Image",
        src: _images_Logos_tweet_png__WEBPACK_IMPORTED_MODULE_6___default.a,
        alt: "Example tweet",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "Info",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        className: "Info-Heading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }
      }, "Step 3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "Info-Content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }
      }, "Pass it on by tagging three friends and get selected to scoreface-time with athletes.")));
    }
  }]);

  return PledgeInfo;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PledgeInfo);

/***/ }),

/***/ "./src/Components/Pledge/PledgeTracker.jsx":
/*!*************************************************!*\
  !*** ./src/Components/Pledge/PledgeTracker.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _PledgeTrackerComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PledgeTrackerComponent */ "./src/Components/Pledge/PledgeTrackerComponent.js");
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../css/Styles.css */ "./src/css/Styles.css");
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_Styles_css__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/home/reed/Web/IYM/raam-webapp/src/Components/Pledge/PledgeTracker.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var pledges = 0;

var PledgeTracker = /*#__PURE__*/function (_Component) {
  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(PledgeTracker, _Component);

  var _super = _createSuper(PledgeTracker);

  function PledgeTracker() {
    Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PledgeTracker);

    return _super.apply(this, arguments);
  }

  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PledgeTracker, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "Pledge-Tracker",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 9
        }
      }, "Progress"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_PledgeTrackerComponent__WEBPACK_IMPORTED_MODULE_6__["default"], {
        pledges: pledges / 500,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "Pledge-Tracker-Description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("strong", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }
      }, pledges), " people have made the PLEDGE. Now it's", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("em", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }
      }, "your"), " move!"));
    }
  }]);

  return PledgeTracker;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PledgeTracker);

/***/ }),

/***/ "./src/Components/Pledge/PledgeTrackerComponent.js":
/*!*********************************************************!*\
  !*** ./src/Components/Pledge/PledgeTrackerComponent.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "/home/reed/Web/IYM/raam-webapp/src/Components/Pledge/PledgeTrackerComponent.js";



var PledgeTrackerBar = function PledgeTrackerBar(props) {
  var pledges = props.pledges;
  var containerStyles = {
    height: 30,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    marginBottom: 15,
    boxShadow: "0px 4px 10px #00000026, 0px 4px 4px rgba(0, 0, 0, 0.05)"
  };
  var fillerStyles = {
    height: "100%",
    width: "".concat(pledges, "%"),
    background: "linear-gradient(135deg, #da0001, 50%, #f17e7e)",
    borderRadius: "inherit",
    textAlign: "right"
  };
  var labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "semibold",
    letterSpacing: 2
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: containerStyles,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: fillerStyles,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: labelStyles,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, "".concat(pledges, "%"))));
};

/* harmony default export */ __webpack_exports__["default"] = (PledgeTrackerBar);

/***/ }),

/***/ "./src/Components/Pledge/PledgeVideo.jsx":
/*!***********************************************!*\
  !*** ./src/Components/Pledge/PledgeVideo.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../css/Styles.css */ "./src/css/Styles.css");
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_Styles_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _videos_vid1_mp4__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../videos/vid1.mp4 */ "./src/videos/vid1.mp4");
/* harmony import */ var _videos_vid1_mp4__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_videos_vid1_mp4__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/home/reed/Web/IYM/raam-webapp/src/Components/Pledge/PledgeVideo.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var PledgeVideo = /*#__PURE__*/function (_Component) {
  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(PledgeVideo, _Component);

  var _super = _createSuper(PledgeVideo);

  function PledgeVideo() {
    Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PledgeVideo);

    return _super.apply(this, arguments);
  }

  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PledgeVideo, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "Video-Header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("video", {
        src: _videos_vid1_mp4__WEBPACK_IMPORTED_MODULE_7___default.a,
        autoplay: "autoPlay",
        loop: "loop",
        playsinline: "playsinLine",
        muted: "muted",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row Video-Header-Content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        className: "col-sm-12 Video-Header-Content-Text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }
      }, "The best moment to do something for your well-being is always right now. Pledge some activity to keep yourself safe and healthy."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-sm-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "fab fa-twitter-square Pledge-Button",
        href: "https://twitter.com/intent/tweet?original_referer=http%3A%2F%2Flocalhost%3A3000%2FPledge&ref_src=twsrc%5Etfw&text=Help%20us%20to%20a%20million%20minutes%20of%20exercise%20or%20mindfulness!%20I%E2%80%99m%20doing%2020%20minutes.%20%23itsyourmove2021%20(%40%20three%20friends).%20Learn%20more%20at%20www.itsyourmove2021.org&tw_p=tweetbutton&via=itsyourmove2021",
        target: "_blank",
        rel: "noopener noreferrer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 13
        }
      }, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "fab fa-facebook-square Pledge-Button",
        href: "https://www.facebook.com/sharer/sharer.php?kid_directed_site=0&u=http%3A%2F%2Fwww.itsyourmove2021.org%2F&display=popup&ref=plugin&src=share_button",
        target: "_blank",
        rel: "noopener noreferrer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 13
        }
      }, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "fab fa-instagram-square Pledge-Button",
        href: "https://www.instagram.com/",
        target: "_blank",
        rel: "noopener noreferrer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 13
        }
      }, " "))));
    }
  }]);

  return PledgeVideo;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PledgeVideo);

/***/ }),

/***/ "./src/Components/Social/CrossSocial.jsx":
/*!***********************************************!*\
  !*** ./src/Components/Social/CrossSocial.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../css/Styles.css */ "./src/css/Styles.css");
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_Styles_css__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/home/reed/Web/IYM/raam-webapp/src/Components/Social/CrossSocial.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var CrossSocial = /*#__PURE__*/function (_Component) {
  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(CrossSocial, _Component);

  var _super = _createSuper(CrossSocial);

  function CrossSocial() {
    Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CrossSocial);

    return _super.apply(this, arguments);
  }

  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CrossSocial, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row Social-Button-Box",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-sm-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        className: "Social-Button-Header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 11
        }
      }, "Follow Julia on Instagram")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-sm-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "fab fa-instagram-square Social-Button",
        href: "https://www.instagram.com/crisscrossracing/",
        target: "_blank",
        rel: "noopener noreferrer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }
      }, " ")));
    }
  }]);

  return CrossSocial;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CrossSocial);

/***/ }),

/***/ "./src/Components/Social/FraissardSocial.jsx":
/*!***************************************************!*\
  !*** ./src/Components/Social/FraissardSocial.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../css/Styles.css */ "./src/css/Styles.css");
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_Styles_css__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/home/reed/Web/IYM/raam-webapp/src/Components/Social/FraissardSocial.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var FraissardSocial = /*#__PURE__*/function (_Component) {
  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(FraissardSocial, _Component);

  var _super = _createSuper(FraissardSocial);

  function FraissardSocial() {
    Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FraissardSocial);

    return _super.apply(this, arguments);
  }

  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FraissardSocial, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row Social-Button-Box",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-sm-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        className: "Social-Button-Header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 11
        }
      }, "Find Sandrine on these platforms")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-sm-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "fas fa-globe-europe Social-Button",
        href: "https://racearoundrwanda.com/",
        target: "_blank",
        rel: "noopener noreferrer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }
      }, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "fab fa-instagram-square Social-Button",
        href: "https://www.instagram.com/100drine_38/",
        target: "_blank",
        rel: "noopener noreferrer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }
      }, " ")));
    }
  }]);

  return FraissardSocial;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (FraissardSocial);

/***/ }),

/***/ "./src/Components/Social/HaaseSocial.jsx":
/*!***********************************************!*\
  !*** ./src/Components/Social/HaaseSocial.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../css/Styles.css */ "./src/css/Styles.css");
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_Styles_css__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/home/reed/Web/IYM/raam-webapp/src/Components/Social/HaaseSocial.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var HaaseSocial = /*#__PURE__*/function (_Component) {
  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HaaseSocial, _Component);

  var _super = _createSuper(HaaseSocial);

  function HaaseSocial() {
    Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HaaseSocial);

    return _super.apply(this, arguments);
  }

  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(HaaseSocial, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row Social-Button-Box",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-sm-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        className: "Social-Button-Header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 11
        }
      }, "Find Dave on these platforms")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-sm-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "fas fa-globe-americas Social-Button",
        href: "https://www.davehaase.com/",
        target: "_blank",
        rel: "noopener noreferrer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }
      }, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "fab fa-twitter-square Social-Button",
        href: "https://twitter.com/davehaase",
        target: "_blank",
        rel: "noopener noreferrer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }
      }, " ")));
    }
  }]);

  return HaaseSocial;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (HaaseSocial);

/***/ }),

/***/ "./src/Components/Social/HeringSocial.jsx":
/*!************************************************!*\
  !*** ./src/Components/Social/HeringSocial.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../css/Styles.css */ "./src/css/Styles.css");
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_Styles_css__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/home/reed/Web/IYM/raam-webapp/src/Components/Social/HeringSocial.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var HeringSocial = /*#__PURE__*/function (_Component) {
  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HeringSocial, _Component);

  var _super = _createSuper(HeringSocial);

  function HeringSocial() {
    Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HeringSocial);

    return _super.apply(this, arguments);
  }

  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(HeringSocial, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row Social-Button-Box",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-sm-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        className: "Social-Button-Header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 11
        }
      }, "Find Jackie on these platforms")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-sm-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "fas fa-globe-americas Social-Button",
        href: "https://www.jackiehering.com/index.html",
        target: "_blank",
        rel: "noopener noreferrer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }
      }, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "fab fa-instagram-square Social-Button",
        href: "https://www.instagram.com/jackiemhering/",
        target: "_blank",
        rel: "noopener noreferrer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }
      }, " ")));
    }
  }]);

  return HeringSocial;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (HeringSocial);

/***/ }),

/***/ "./src/Components/Social/IYMSocial.jsx":
/*!*********************************************!*\
  !*** ./src/Components/Social/IYMSocial.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../css/Styles.css */ "./src/css/Styles.css");
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_Styles_css__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/home/reed/Web/IYM/raam-webapp/src/Components/Social/IYMSocial.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var IYMSocial = /*#__PURE__*/function (_Component) {
  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(IYMSocial, _Component);

  var _super = _createSuper(IYMSocial);

  function IYMSocial() {
    Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, IYMSocial);

    return _super.apply(this, arguments);
  }

  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(IYMSocial, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row Social-Button-Box",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-sm-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        className: "Social-Button-Header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 11
        }
      }, "Follow IYM2021 on these platforms")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-sm-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "fab fa-twitter-square Social-Button",
        href: "https://twitter.com/itsyourmove2021",
        target: "_blank",
        rel: "noopener noreferrer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }
      }, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "fab fa-instagram-square Social-Button",
        href: "https://www.instagram.com/itsyourmove2021/",
        target: "_blank",
        rel: "noopener noreferrer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }
      }, " ")));
    }
  }]);

  return IYMSocial;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (IYMSocial);

/***/ }),

/***/ "./src/Components/Social/MacDonaldSocial.jsx":
/*!***************************************************!*\
  !*** ./src/Components/Social/MacDonaldSocial.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../css/Styles.css */ "./src/css/Styles.css");
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_Styles_css__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/home/reed/Web/IYM/raam-webapp/src/Components/Social/MacDonaldSocial.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var MacDonaldSocial = /*#__PURE__*/function (_Component) {
  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(MacDonaldSocial, _Component);

  var _super = _createSuper(MacDonaldSocial);

  function MacDonaldSocial() {
    Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MacDonaldSocial);

    return _super.apply(this, arguments);
  }

  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MacDonaldSocial, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row Social-Button-Box",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-sm-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        className: "Social-Button-Header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 11
        }
      }, "Find James on these platforms")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-sm-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "fas fa-globe-europe Social-Button",
        href: "https://www.projectkansas.org/",
        target: "_blank",
        rel: "noopener noreferrer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }
      }, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "fab fa-twitter-square Social-Button",
        href: "https://twitter.com/jammacdo",
        target: "_blank",
        rel: "noopener noreferrer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }
      }, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "fab fa-instagram-square Social-Button",
        href: "https://www.instagram.com/jammacdo/",
        target: "_blank",
        rel: "noopener noreferrer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }
      }, " ")));
    }
  }]);

  return MacDonaldSocial;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MacDonaldSocial);

/***/ }),

/***/ "./src/Components/Social/PledgeSocial.jsx":
/*!************************************************!*\
  !*** ./src/Components/Social/PledgeSocial.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../css/Styles.css */ "./src/css/Styles.css");
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_Styles_css__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/home/reed/Web/IYM/raam-webapp/src/Components/Social/PledgeSocial.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var PledgeSocial = /*#__PURE__*/function (_Component) {
  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(PledgeSocial, _Component);

  var _super = _createSuper(PledgeSocial);

  function PledgeSocial() {
    Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PledgeSocial);

    return _super.apply(this, arguments);
  }

  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PledgeSocial, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row Social-Button-Box",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-sm-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "fab fa-twitter-square Social-Button",
        href: "https://twitter.com/intent/tweet?original_referer=http%3A%2F%2Flocalhost%3A3000%2FPledge&ref_src=twsrc%5Etfw&text=Help%20us%20to%20a%20million%20minutes%20of%20exercise%20or%20mindfulness!%20I%E2%80%99m%20doing%2020%20minutes.%20%23itsyourmove2021%20(%40%20three%20friends).%20Learn%20more%20at%20www.itsyourmove2021.org&tw_p=tweetbutton&via=itsyourmove2021",
        target: "_blank",
        rel: "noopener noreferrer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 11
        }
      }, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "fab fa-facebook-square Social-Button",
        href: "https://www.facebook.com/sharer/sharer.php?kid_directed_site=0&u=http%3A%2F%2Fwww.itsyourmove2021.org%2F&display=popup&ref=plugin&src=share_button",
        target: "_blank",
        rel: "noopener noreferrer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }
      }, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "fab fa-instagram-square Social-Button",
        href: "https://www.instagram.com/",
        target: "_blank",
        rel: "noopener noreferrer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }
      }, " ")));
    }
  }]);

  return PledgeSocial;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PledgeSocial);

/***/ }),

/***/ "./src/Components/Social/SamarthSocial.jsx":
/*!*************************************************!*\
  !*** ./src/Components/Social/SamarthSocial.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../css/Styles.css */ "./src/css/Styles.css");
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_Styles_css__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/home/reed/Web/IYM/raam-webapp/src/Components/Social/SamarthSocial.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var SamarthSocial = /*#__PURE__*/function (_Component) {
  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(SamarthSocial, _Component);

  var _super = _createSuper(SamarthSocial);

  function SamarthSocial() {
    Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SamarthSocial);

    return _super.apply(this, arguments);
  }

  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SamarthSocial, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row Social-Button-Box",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-sm-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        className: "Social-Button-Header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 11
        }
      }, "Find Dr. Amit on these platforms")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-sm-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "fas fa-globe-asia Social-Button",
        href: "https://rideacrossindia.com/",
        target: "_blank",
        rel: "noopener noreferrer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }
      }, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "fab fa-instagram-square Social-Button",
        href: "https://www.instagram.com/teamamitsamarth/",
        target: "_blank",
        rel: "noopener noreferrer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }
      }, " ")));
    }
  }]);

  return SamarthSocial;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SamarthSocial);

/***/ }),

/***/ "./src/actions/types.js":
/*!******************************!*\
  !*** ./src/actions/types.js ***!
  \******************************/
/*! exports provided: GET_ITEMS, ADD_ITEMS, DELETE_ITEMS, ITEMS_LOADING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ITEMS", function() { return GET_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_ITEMS", function() { return ADD_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_ITEMS", function() { return DELETE_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ITEMS_LOADING", function() { return ITEMS_LOADING; });
/*
    Prelimary types of actions for our store
    Not yet confirmed
    TODO:
        Reconfigure to correct actions
        Add more actions as nesscary
*/
var GET_ITEMS = "GET_ITEMS";
var ADD_ITEMS = "ADD_ITEMS";
var DELETE_ITEMS = "DELETE_ITEMS";
var ITEMS_LOADING = "ITEMS_LOADING";

/***/ }),

/***/ "./src/css/Styles.css":
/*!****************************!*\
  !*** ./src/css/Styles.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Styles.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/css/Styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Styles.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/css/Styles.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Styles.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/css/Styles.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/css/stylesheet.css":
/*!********************************!*\
  !*** ./src/css/stylesheet.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./stylesheet.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/css/stylesheet.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./stylesheet.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/css/stylesheet.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./stylesheet.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/css/stylesheet.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/images/AtheletePages/cross.png":
/*!********************************************!*\
  !*** ./src/images/AtheletePages/cross.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/cross.688c9065.png";

/***/ }),

/***/ "./src/images/AtheletePages/fraissard.png":
/*!************************************************!*\
  !*** ./src/images/AtheletePages/fraissard.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/fraissard.eaceb1cd.png";

/***/ }),

/***/ "./src/images/AtheletePages/haase.png":
/*!********************************************!*\
  !*** ./src/images/AtheletePages/haase.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/haase.20bbf859.png";

/***/ }),

/***/ "./src/images/AtheletePages/hering.png":
/*!*********************************************!*\
  !*** ./src/images/AtheletePages/hering.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/hering.6102ab6b.png";

/***/ }),

/***/ "./src/images/AtheletePages/macdonald.png":
/*!************************************************!*\
  !*** ./src/images/AtheletePages/macdonald.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/macdonald.4a44fcb7.png";

/***/ }),

/***/ "./src/images/AtheletePages/samarth.png":
/*!**********************************************!*\
  !*** ./src/images/AtheletePages/samarth.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/samarth.54e08dcf.png";

/***/ }),

/***/ "./src/images/Logos/cdc.png":
/*!**********************************!*\
  !*** ./src/images/Logos/cdc.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/cdc.8ec2f753.png";

/***/ }),

/***/ "./src/images/Logos/hm.png":
/*!*********************************!*\
  !*** ./src/images/Logos/hm.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/hm.482c4fdc.png";

/***/ }),

/***/ "./src/images/Logos/tweet.png":
/*!************************************!*\
  !*** ./src/images/Logos/tweet.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/tweet.aee553a1.png";

/***/ }),

/***/ "./src/images/Logos/who.png":
/*!**********************************!*\
  !*** ./src/images/Logos/who.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/who.f365bd46.png";

/***/ }),

/***/ "./src/images/athletes/cross.jpg":
/*!***************************************!*\
  !*** ./src/images/athletes/cross.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/cross.dfec1af6.jpg";

/***/ }),

/***/ "./src/images/athletes/fraissard.PNG":
/*!*******************************************!*\
  !*** ./src/images/athletes/fraissard.PNG ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/fraissard.ef502be6.PNG";

/***/ }),

/***/ "./src/images/athletes/haase.png":
/*!***************************************!*\
  !*** ./src/images/athletes/haase.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/haase.4fc1a514.png";

/***/ }),

/***/ "./src/images/athletes/hering.jpg":
/*!****************************************!*\
  !*** ./src/images/athletes/hering.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/hering.158e16be.jpg";

/***/ }),

/***/ "./src/images/athletes/macdonald.PNG":
/*!*******************************************!*\
  !*** ./src/images/athletes/macdonald.PNG ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/macdonald.5224987a.PNG";

/***/ }),

/***/ "./src/images/athletes/samarth.jpeg":
/*!******************************************!*\
  !*** ./src/images/athletes/samarth.jpeg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/samarth.4c5e8c6d.jpeg";

/***/ }),

/***/ "./src/images/background.png":
/*!***********************************!*\
  !*** ./src/images/background.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/background.15951642.png";

/***/ }),

/***/ "./src/images/iym.png":
/*!****************************!*\
  !*** ./src/images/iym.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/iym.afbe6c2c.png";

/***/ }),

/***/ "./src/images/partners/attitudesports.jpg":
/*!************************************************!*\
  !*** ./src/images/partners/attitudesports.jpg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/attitudesports.90adaf1d.jpg";

/***/ }),

/***/ "./src/images/partners/core.png":
/*!**************************************!*\
  !*** ./src/images/partners/core.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/core.f73ddbe0.png";

/***/ }),

/***/ "./src/images/partners/garmin.png":
/*!****************************************!*\
  !*** ./src/images/partners/garmin.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/garmin.b7fae03f.png";

/***/ }),

/***/ "./src/images/partners/healthio.jpeg":
/*!*******************************************!*\
  !*** ./src/images/partners/healthio.jpeg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/healthio.6ff59fd2.jpeg";

/***/ }),

/***/ "./src/images/partners/mapbox.png":
/*!****************************************!*\
  !*** ./src/images/partners/mapbox.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/mapbox.da799b22.png";

/***/ }),

/***/ "./src/images/partners/moxy.png":
/*!**************************************!*\
  !*** ./src/images/partners/moxy.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/moxy.c6bade3a.png";

/***/ }),

/***/ "./src/images/partners/narrativescience.jpg":
/*!**************************************************!*\
  !*** ./src/images/partners/narrativescience.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/narrativescience.5984f5bb.jpg";

/***/ }),

/***/ "./src/images/partners/theweathercompany.jpg":
/*!***************************************************!*\
  !*** ./src/images/partners/theweathercompany.jpg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/theweathercompany.5ac55d36.jpg";

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.bundle.min */ "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js");
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_bundle_min__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/home/reed/Web/IYM/raam-webapp/src/index.js";







react_dom__WEBPACK_IMPORTED_MODULE_3___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 17
  }
}), document.getElementById("root")); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_6__["unregister"]();

/***/ }),

/***/ "./src/pages/About.js":
/*!****************************!*\
  !*** ./src/pages/About.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/NavBar/NavBar */ "./src/Components/NavBar/NavBar.jsx");
/* harmony import */ var _Components_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/Header */ "./src/Components/Header.jsx");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-parallax */ "./node_modules/react-parallax/lib/index.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_parallax__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _images_background_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/background.png */ "./src/images/background.png");
/* harmony import */ var _images_background_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_images_background_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../css/Styles.css */ "./src/css/Styles.css");
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_css_Styles_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Components_Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Components/Footer */ "./src/Components/Footer.jsx");
/* harmony import */ var _Components_AboutContent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Components/AboutContent */ "./src/Components/AboutContent.jsx");
/* harmony import */ var _Components_Social_IYMSocial__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Components/Social/IYMSocial */ "./src/Components/Social/IYMSocial.jsx");





var _jsxFileName = "/home/reed/Web/IYM/raam-webapp/src/pages/About.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }











var About = /*#__PURE__*/function (_Component) {
  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(About, _Component);

  var _super = _createSuper(About);

  function About() {
    Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, About);

    return _super.apply(this, arguments);
  }

  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(About, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_parallax__WEBPACK_IMPORTED_MODULE_8__["Parallax"], {
        bgImage: _images_background_png__WEBPACK_IMPORTED_MODULE_9___default.a,
        strength: 1000,
        blur: 3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {
        text: "About",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_AboutContent__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_Social_IYMSocial__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_Footer__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 9
        }
      }));
    }
  }]);

  return About;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./src/pages/Cross.js":
/*!****************************!*\
  !*** ./src/pages/Cross.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/NavBar/NavBar */ "./src/Components/NavBar/NavBar.jsx");
/* harmony import */ var _Components_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/Header */ "./src/Components/Header.jsx");
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../css/Styles.css */ "./src/css/Styles.css");
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_Styles_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Components_Map_MapBoxSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Components/Map/MapBoxSection */ "./src/Components/Map/MapBoxSection.jsx");
/* harmony import */ var _Components_Social_CrossSocial__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Components/Social/CrossSocial */ "./src/Components/Social/CrossSocial.jsx");
/* harmony import */ var _Components_Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Components/Footer */ "./src/Components/Footer.jsx");
/* harmony import */ var _Components_AthleteInfo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Components/AthleteInfo */ "./src/Components/AthleteInfo.jsx");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-parallax */ "./node_modules/react-parallax/lib/index.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_parallax__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _images_background_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../images/background.png */ "./src/images/background.png");
/* harmony import */ var _images_background_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_images_background_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _images_AtheletePages_cross_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../images/AtheletePages/cross.png */ "./src/images/AtheletePages/cross.png");
/* harmony import */ var _images_AtheletePages_cross_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_images_AtheletePages_cross_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _Components_Bio_CrossBio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Components/Bio/CrossBio */ "./src/Components/Bio/CrossBio.jsx");





var _jsxFileName = "/home/reed/Web/IYM/raam-webapp/src/pages/Cross.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }














var Cross = /*#__PURE__*/function (_Component) {
  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Cross, _Component);

  var _super = _createSuper(Cross);

  function Cross() {
    Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Cross);

    return _super.apply(this, arguments);
  }

  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Cross, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_parallax__WEBPACK_IMPORTED_MODULE_13__["Parallax"], {
        bgImage: _images_background_png__WEBPACK_IMPORTED_MODULE_14___default.a,
        strength: 1000,
        blur: 3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {
        text: "Julia Cross",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_AthleteInfo__WEBPACK_IMPORTED_MODULE_12__["default"], {
        name: "Julia Cross",
        img: _images_AtheletePages_cross_png__WEBPACK_IMPORTED_MODULE_15___default.a,
        bio: _Components_Bio_CrossBio__WEBPACK_IMPORTED_MODULE_16__["default"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_Map_MapBoxSection__WEBPACK_IMPORTED_MODULE_9__["default"], {
        token: "pk.eyJ1IjoiaXRzeW91cm1vdmUiLCJhIjoiY2tqeGJqbzg5MDF3eDJ3bzh1MTk2bWhqYSJ9.w4UUfWxmTk630JJ0CgtfnA",
        mapStyle: "mapbox://styles/itsyourmove/ckjxu50uf218917pc610sqa3n",
        latitude: 21,
        longitude: 79,
        zoom: 4.2,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_Social_CrossSocial__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_Footer__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 9
        }
      }));
    }
  }]);

  return Cross;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Cross);

/***/ }),

/***/ "./src/pages/Fraissard.js":
/*!********************************!*\
  !*** ./src/pages/Fraissard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/NavBar/NavBar */ "./src/Components/NavBar/NavBar.jsx");
/* harmony import */ var _Components_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/Header */ "./src/Components/Header.jsx");
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../css/Styles.css */ "./src/css/Styles.css");
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_Styles_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Components_Map_ChallengeMapSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Components/Map/ChallengeMapSection */ "./src/Components/Map/ChallengeMapSection.jsx");
/* harmony import */ var _Components_Social_FraissardSocial__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Components/Social/FraissardSocial */ "./src/Components/Social/FraissardSocial.jsx");
/* harmony import */ var _Components_Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Components/Footer */ "./src/Components/Footer.jsx");
/* harmony import */ var _Components_AthleteInfo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Components/AthleteInfo */ "./src/Components/AthleteInfo.jsx");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-parallax */ "./node_modules/react-parallax/lib/index.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_parallax__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _images_background_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../images/background.png */ "./src/images/background.png");
/* harmony import */ var _images_background_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_images_background_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _images_AtheletePages_fraissard_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../images/AtheletePages/fraissard.png */ "./src/images/AtheletePages/fraissard.png");
/* harmony import */ var _images_AtheletePages_fraissard_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_images_AtheletePages_fraissard_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _Components_Bio_FraissardBio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Components/Bio/FraissardBio */ "./src/Components/Bio/FraissardBio.jsx");





var _jsxFileName = "/home/reed/Web/IYM/raam-webapp/src/pages/Fraissard.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }














var Fraissard = /*#__PURE__*/function (_Component) {
  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Fraissard, _Component);

  var _super = _createSuper(Fraissard);

  function Fraissard() {
    Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Fraissard);

    return _super.apply(this, arguments);
  }

  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Fraissard, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_parallax__WEBPACK_IMPORTED_MODULE_13__["Parallax"], {
        bgImage: _images_background_png__WEBPACK_IMPORTED_MODULE_14___default.a,
        strength: 1000,
        blur: 3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {
        text: "Sandrine Fraissard",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_AthleteInfo__WEBPACK_IMPORTED_MODULE_12__["default"], {
        name: "Sandrine Fraissard",
        img: _images_AtheletePages_fraissard_png__WEBPACK_IMPORTED_MODULE_15___default.a,
        bio: _Components_Bio_FraissardBio__WEBPACK_IMPORTED_MODULE_16__["default"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_Map_ChallengeMapSection__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_Social_FraissardSocial__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_Footer__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 9
        }
      }));
    }
  }]);

  return Fraissard;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Fraissard);

/***/ }),

/***/ "./src/pages/Haase.js":
/*!****************************!*\
  !*** ./src/pages/Haase.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/NavBar/NavBar */ "./src/Components/NavBar/NavBar.jsx");
/* harmony import */ var _Components_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/Header */ "./src/Components/Header.jsx");
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../css/Styles.css */ "./src/css/Styles.css");
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_Styles_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Components_Map_MapBoxSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Components/Map/MapBoxSection */ "./src/Components/Map/MapBoxSection.jsx");
/* harmony import */ var _Components_Social_HaaseSocial__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Components/Social/HaaseSocial */ "./src/Components/Social/HaaseSocial.jsx");
/* harmony import */ var _Components_Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Components/Footer */ "./src/Components/Footer.jsx");
/* harmony import */ var _Components_AthleteInfo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Components/AthleteInfo */ "./src/Components/AthleteInfo.jsx");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-parallax */ "./node_modules/react-parallax/lib/index.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_parallax__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _images_background_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../images/background.png */ "./src/images/background.png");
/* harmony import */ var _images_background_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_images_background_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _images_AtheletePages_haase_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../images/AtheletePages/haase.png */ "./src/images/AtheletePages/haase.png");
/* harmony import */ var _images_AtheletePages_haase_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_images_AtheletePages_haase_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _Components_Bio_HaaseBio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Components/Bio/HaaseBio */ "./src/Components/Bio/HaaseBio.jsx");





var _jsxFileName = "/home/reed/Web/IYM/raam-webapp/src/pages/Haase.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }














var Haase = /*#__PURE__*/function (_Component) {
  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Haase, _Component);

  var _super = _createSuper(Haase);

  function Haase() {
    Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Haase);

    return _super.apply(this, arguments);
  }

  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Haase, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_parallax__WEBPACK_IMPORTED_MODULE_13__["Parallax"], {
        bgImage: _images_background_png__WEBPACK_IMPORTED_MODULE_14___default.a,
        strength: 1000,
        blur: 3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {
        text: "Dave Haase",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_AthleteInfo__WEBPACK_IMPORTED_MODULE_12__["default"], {
        name: "Dave Haase",
        img: _images_AtheletePages_haase_png__WEBPACK_IMPORTED_MODULE_15___default.a,
        bio: _Components_Bio_HaaseBio__WEBPACK_IMPORTED_MODULE_16__["default"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_Map_MapBoxSection__WEBPACK_IMPORTED_MODULE_9__["default"], {
        token: "pk.eyJ1IjoiaXRzeW91cm1vdmUiLCJhIjoiY2tqeGJqbzg5MDF3eDJ3bzh1MTk2bWhqYSJ9.w4UUfWxmTk630JJ0CgtfnA",
        mapStyle: "mapbox://styles/itsyourmove/ckjxu50uf218917pc610sqa3n",
        latitude: 21,
        longitude: 79,
        zoom: 4.2,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_Social_HaaseSocial__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_Footer__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 9
        }
      }));
    }
  }]);

  return Haase;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Haase);

/***/ }),

/***/ "./src/pages/Hering.js":
/*!*****************************!*\
  !*** ./src/pages/Hering.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/NavBar/NavBar */ "./src/Components/NavBar/NavBar.jsx");
/* harmony import */ var _Components_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/Header */ "./src/Components/Header.jsx");
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../css/Styles.css */ "./src/css/Styles.css");
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_Styles_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Components_Map_MapBoxSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Components/Map/MapBoxSection */ "./src/Components/Map/MapBoxSection.jsx");
/* harmony import */ var _Components_Social_HeringSocial__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Components/Social/HeringSocial */ "./src/Components/Social/HeringSocial.jsx");
/* harmony import */ var _Components_Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Components/Footer */ "./src/Components/Footer.jsx");
/* harmony import */ var _Components_AthleteInfo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Components/AthleteInfo */ "./src/Components/AthleteInfo.jsx");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-parallax */ "./node_modules/react-parallax/lib/index.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_parallax__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _images_background_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../images/background.png */ "./src/images/background.png");
/* harmony import */ var _images_background_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_images_background_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _images_AtheletePages_hering_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../images/AtheletePages/hering.png */ "./src/images/AtheletePages/hering.png");
/* harmony import */ var _images_AtheletePages_hering_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_images_AtheletePages_hering_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _Components_Bio_HeringBio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Components/Bio/HeringBio */ "./src/Components/Bio/HeringBio.jsx");





var _jsxFileName = "/home/reed/Web/IYM/raam-webapp/src/pages/Hering.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }














var Hering = /*#__PURE__*/function (_Component) {
  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Hering, _Component);

  var _super = _createSuper(Hering);

  function Hering() {
    Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Hering);

    return _super.apply(this, arguments);
  }

  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Hering, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_parallax__WEBPACK_IMPORTED_MODULE_13__["Parallax"], {
        bgImage: _images_background_png__WEBPACK_IMPORTED_MODULE_14___default.a,
        strength: 1000,
        blur: 3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {
        text: "Jackie Hering",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_AthleteInfo__WEBPACK_IMPORTED_MODULE_12__["default"], {
        name: "Jackie Hering",
        img: _images_AtheletePages_hering_png__WEBPACK_IMPORTED_MODULE_15___default.a,
        bio: _Components_Bio_HeringBio__WEBPACK_IMPORTED_MODULE_16__["default"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_Map_MapBoxSection__WEBPACK_IMPORTED_MODULE_9__["default"], {
        token: "pk.eyJ1IjoiaXRzeW91cm1vdmUiLCJhIjoiY2tqeGJqbzg5MDF3eDJ3bzh1MTk2bWhqYSJ9.w4UUfWxmTk630JJ0CgtfnA",
        mapStyle: "mapbox://styles/itsyourmove/ckjxu50uf218917pc610sqa3n",
        latitude: 21,
        longitude: 79,
        zoom: 4.2,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_Social_HeringSocial__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_Footer__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 9
        }
      }));
    }
  }]);

  return Hering;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Hering);

/***/ }),

/***/ "./src/pages/Home.js":
/*!***************************!*\
  !*** ./src/pages/Home.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/Styles.css */ "./src/css/Styles.css");
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_Styles_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/NavBar/NavBar */ "./src/Components/NavBar/NavBar.jsx");
/* harmony import */ var _Components_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Components/Header */ "./src/Components/Header.jsx");
/* harmony import */ var _Components_Gallery_AthleteGallery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Components/Gallery/AthleteGallery */ "./src/Components/Gallery/AthleteGallery.jsx");
/* harmony import */ var _Components_Partner_Partners__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Components/Partner/Partners */ "./src/Components/Partner/Partners.jsx");
/* harmony import */ var _Components_Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Components/Footer */ "./src/Components/Footer.jsx");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-parallax */ "./node_modules/react-parallax/lib/index.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_parallax__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _images_background_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../images/background.png */ "./src/images/background.png");
/* harmony import */ var _images_background_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_images_background_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _Components_AthleteLiveData__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Components/AthleteLiveData */ "./src/Components/AthleteLiveData.jsx");





var _jsxFileName = "/home/reed/Web/IYM/raam-webapp/src/pages/Home.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }












var Home = /*#__PURE__*/function (_Component) {
  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Home, _Component);

  var _super = _createSuper(Home);

  function Home() {
    Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Home);

    return _super.apply(this, arguments);
  }

  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Home, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_parallax__WEBPACK_IMPORTED_MODULE_12__["Parallax"], {
        bgImage: _images_background_png__WEBPACK_IMPORTED_MODULE_13___default.a,
        strength: 1000,
        blur: 3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_Header__WEBPACK_IMPORTED_MODULE_8__["default"], {
        text: "Welcome",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_AthleteLiveData__WEBPACK_IMPORTED_MODULE_14__["default"], {
        id: "00001",
        isHome: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_Gallery_AthleteGallery__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_Partner_Partners__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_Footer__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 9
        }
      }));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/pages/MacDonald.js":
/*!********************************!*\
  !*** ./src/pages/MacDonald.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/NavBar/NavBar */ "./src/Components/NavBar/NavBar.jsx");
/* harmony import */ var _Components_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/Header */ "./src/Components/Header.jsx");
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../css/Styles.css */ "./src/css/Styles.css");
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_Styles_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Components_Map_MapBoxSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Components/Map/MapBoxSection */ "./src/Components/Map/MapBoxSection.jsx");
/* harmony import */ var _Components_Social_MacDonaldSocial__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Components/Social/MacDonaldSocial */ "./src/Components/Social/MacDonaldSocial.jsx");
/* harmony import */ var _Components_Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Components/Footer */ "./src/Components/Footer.jsx");
/* harmony import */ var _Components_AthleteInfo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Components/AthleteInfo */ "./src/Components/AthleteInfo.jsx");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-parallax */ "./node_modules/react-parallax/lib/index.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_parallax__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _images_background_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../images/background.png */ "./src/images/background.png");
/* harmony import */ var _images_background_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_images_background_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _images_AtheletePages_macdonald_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../images/AtheletePages/macdonald.png */ "./src/images/AtheletePages/macdonald.png");
/* harmony import */ var _images_AtheletePages_macdonald_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_images_AtheletePages_macdonald_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _Components_Bio_MacDonaldBio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Components/Bio/MacDonaldBio */ "./src/Components/Bio/MacDonaldBio.jsx");





var _jsxFileName = "/home/reed/Web/IYM/raam-webapp/src/pages/MacDonald.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }














var MacDonald = /*#__PURE__*/function (_Component) {
  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(MacDonald, _Component);

  var _super = _createSuper(MacDonald);

  function MacDonald() {
    Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MacDonald);

    return _super.apply(this, arguments);
  }

  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MacDonald, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_parallax__WEBPACK_IMPORTED_MODULE_13__["Parallax"], {
        bgImage: _images_background_png__WEBPACK_IMPORTED_MODULE_14___default.a,
        strength: 1000,
        blur: 3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {
        text: "James MacDonald",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_AthleteInfo__WEBPACK_IMPORTED_MODULE_12__["default"], {
        name: "James MacDonald",
        img: _images_AtheletePages_macdonald_png__WEBPACK_IMPORTED_MODULE_15___default.a,
        bio: _Components_Bio_MacDonaldBio__WEBPACK_IMPORTED_MODULE_16__["default"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_Map_MapBoxSection__WEBPACK_IMPORTED_MODULE_9__["default"], {
        token: "pk.eyJ1IjoiaXRzeW91cm1vdmUiLCJhIjoiY2tqeGJqbzg5MDF3eDJ3bzh1MTk2bWhqYSJ9.w4UUfWxmTk630JJ0CgtfnA",
        mapStyle: "mapbox://styles/itsyourmove/ckjxu50uf218917pc610sqa3n",
        latitude: 21,
        longitude: 79,
        zoom: 4.2,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_Social_MacDonaldSocial__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_Footer__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 9
        }
      }));
    }
  }]);

  return MacDonald;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MacDonald);

/***/ }),

/***/ "./src/pages/Oops.js":
/*!***************************!*\
  !*** ./src/pages/Oops.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/NavBar/NavBar */ "./src/Components/NavBar/NavBar.jsx");
/* harmony import */ var _Components_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/Header */ "./src/Components/Header.jsx");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-parallax */ "./node_modules/react-parallax/lib/index.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_parallax__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _images_background_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/background.png */ "./src/images/background.png");
/* harmony import */ var _images_background_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_images_background_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../css/Styles.css */ "./src/css/Styles.css");
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_css_Styles_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Components_Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Components/Footer */ "./src/Components/Footer.jsx");





var _jsxFileName = "/home/reed/Web/IYM/raam-webapp/src/pages/Oops.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var Rwanda = /*#__PURE__*/function (_Component) {
  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Rwanda, _Component);

  var _super = _createSuper(Rwanda);

  function Rwanda() {
    Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Rwanda);

    return _super.apply(this, arguments);
  }

  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Rwanda, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_parallax__WEBPACK_IMPORTED_MODULE_8__["Parallax"], {
        bgImage: _images_background_png__WEBPACK_IMPORTED_MODULE_9___default.a,
        strength: 1000,
        blur: 3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {
        text: "OOPS",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          textAlign: "center",
          height: "80vh"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 13
        }
      }), "Looks like this athlete's page isn't ready yet.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 13
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 13
        }
      }), ":(", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 13
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 13
        }
      }), "Come Back Soon!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_Footer__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 9
        }
      }));
    }
  }]);

  return Rwanda;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Rwanda);

/***/ }),

/***/ "./src/pages/Pledge.js":
/*!*****************************!*\
  !*** ./src/pages/Pledge.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/Styles.css */ "./src/css/Styles.css");
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_Styles_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/NavBar/NavBar */ "./src/Components/NavBar/NavBar.jsx");
/* harmony import */ var _Components_Pledge_PledgeVideo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Components/Pledge/PledgeVideo */ "./src/Components/Pledge/PledgeVideo.jsx");
/* harmony import */ var _Components_Pledge_PledgeInfo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Components/Pledge/PledgeInfo */ "./src/Components/Pledge/PledgeInfo.jsx");
/* harmony import */ var _Components_Pledge_PledgeTracker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Components/Pledge/PledgeTracker */ "./src/Components/Pledge/PledgeTracker.jsx");
/* harmony import */ var _Components_Pledge_LearnMore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Components/Pledge/LearnMore */ "./src/Components/Pledge/LearnMore.jsx");
/* harmony import */ var _Components_Footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Components/Footer */ "./src/Components/Footer.jsx");
/* harmony import */ var _images_background_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../images/background.png */ "./src/images/background.png");
/* harmony import */ var _images_background_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_images_background_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-parallax */ "./node_modules/react-parallax/lib/index.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_parallax__WEBPACK_IMPORTED_MODULE_14__);





var _jsxFileName = "/home/reed/Web/IYM/raam-webapp/src/pages/Pledge.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }












var Pledge = /*#__PURE__*/function (_Component) {
  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Pledge, _Component);

  var _super = _createSuper(Pledge);

  function Pledge() {
    Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Pledge);

    return _super.apply(this, arguments);
  }

  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Pledge, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_parallax__WEBPACK_IMPORTED_MODULE_14__["Parallax"], {
        bgImage: _images_background_png__WEBPACK_IMPORTED_MODULE_13___default.a,
        strength: 1000,
        blur: 3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_Pledge_PledgeVideo__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_Pledge_PledgeInfo__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_Pledge_PledgeTracker__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_Pledge_LearnMore__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_Footer__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 9
        }
      }));
    }
  }]);

  return Pledge;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Pledge);

/***/ }),

/***/ "./src/pages/Samarth.js":
/*!******************************!*\
  !*** ./src/pages/Samarth.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/NavBar/NavBar */ "./src/Components/NavBar/NavBar.jsx");
/* harmony import */ var _Components_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/Header */ "./src/Components/Header.jsx");
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../css/Styles.css */ "./src/css/Styles.css");
/* harmony import */ var _css_Styles_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_Styles_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Components_Social_SamarthSocial__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Components/Social/SamarthSocial */ "./src/Components/Social/SamarthSocial.jsx");
/* harmony import */ var _Components_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Components/Footer */ "./src/Components/Footer.jsx");
/* harmony import */ var _Components_AthleteInfo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Components/AthleteInfo */ "./src/Components/AthleteInfo.jsx");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-parallax */ "./node_modules/react-parallax/lib/index.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_parallax__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _images_background_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../images/background.png */ "./src/images/background.png");
/* harmony import */ var _images_background_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_images_background_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _images_AtheletePages_samarth_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../images/AtheletePages/samarth.png */ "./src/images/AtheletePages/samarth.png");
/* harmony import */ var _images_AtheletePages_samarth_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_images_AtheletePages_samarth_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _Components_Bio_SamarthBio__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Components/Bio/SamarthBio */ "./src/Components/Bio/SamarthBio.jsx");
/* harmony import */ var _Components_AthleteLiveData__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Components/AthleteLiveData */ "./src/Components/AthleteLiveData.jsx");





var _jsxFileName = "/home/reed/Web/IYM/raam-webapp/src/pages/Samarth.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }














var Samarth = /*#__PURE__*/function (_Component) {
  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Samarth, _Component);

  var _super = _createSuper(Samarth);

  function Samarth() {
    Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Samarth);

    return _super.apply(this, arguments);
  }

  Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Samarth, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_parallax__WEBPACK_IMPORTED_MODULE_12__["Parallax"], {
        bgImage: _images_background_png__WEBPACK_IMPORTED_MODULE_13___default.a,
        strength: 1000,
        blur: 3,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {
        text: "Dr. Amit Samarth",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_AthleteInfo__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "Dr. Amit Samarth",
        img: _images_AtheletePages_samarth_png__WEBPACK_IMPORTED_MODULE_14___default.a,
        bio: _Components_Bio_SamarthBio__WEBPACK_IMPORTED_MODULE_15__["default"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_AthleteLiveData__WEBPACK_IMPORTED_MODULE_16__["default"], {
        id: "00001",
        isHome: false,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_Social_SamarthSocial__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_Footer__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 9
        }
      }));
    }
  }]);

  return Samarth;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Samarth);

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _itemReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./itemReducer */ "./src/reducers/itemReducer.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  item: _itemReducer__WEBPACK_IMPORTED_MODULE_1__["default"]
}));

/***/ }),

/***/ "./src/reducers/itemReducer.js":
/*!*************************************!*\
  !*** ./src/reducers/itemReducer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/types */ "./src/actions/types.js");



var initialState = {
  items: [],
  loading: false
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_2__["GET_ITEMS"]:
      return Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        items: action.payload,
        loading: false
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_2__["DELETE_ITEMS"]:
      return Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        items: state.items.filter(function (item) {
          return item !== action.payload;
        })
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_2__["ADD_ITEMS"]:
      return Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        items: [action.payload].concat(Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.items))
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_2__["ITEMS_LOADING"]:
      return Object(_home_reed_Web_IYM_raam_webapp_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        loading: true
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
var isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) { var publicUrl; }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    var contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/index */ "./src/reducers/index.js");
/*
  Starting state for the Middlewear of the full stack application.
  All files corresponding to the middlewear include:
    1. The reducer folder all reducers corresponding for the reducers.
    2. The actions folder for all client side actions dynamically recongnized by the middlewear.
*/



var initialState = {};
var middleware = [redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"]];
var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers_index__WEBPACK_IMPORTED_MODULE_2__["default"], initialState, Object(redux__WEBPACK_IMPORTED_MODULE_0__["compose"])(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"].apply(void 0, middleware), window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : function (f) {
  return f;
}));
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./src/videos/vid1.mp4":
/*!*****************************!*\
  !*** ./src/videos/vid1.mp4 ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/vid1.6ec96dda.mp4";

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/reed/Web/IYM/raam-webapp/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/reed/Web/IYM/raam-webapp/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map