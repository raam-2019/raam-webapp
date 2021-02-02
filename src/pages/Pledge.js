import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Widget from "../Components/Widgets/Widget";
import WHO from "../images/Logos/who.png";
import CDC from "../images/Logos/Picture1.jpg";
import vid1 from "../videos/vid1.mp4";
import pledgeEg from "../images/Logos/Picture1.png";
import { TwitterShareButton } from "react-twitter-embed";
import "../css/pledgeStyle.css";
import Resources from "../Components/Resources";

class Pledge extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="video-header">
          <div className="video">
            <video
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
              src={vid1}
              autoplay="autoPlay"
              loop="loop"
              playsinline="playsinLine"
              muted="muted"
            ></video>
          </div>
          <div class="viewport-header">
            <h1>
              JOIN US IN CAUSING A MILLION MINUTES OF EXERCISE, MINDFULNESS, AND
              SOCIAL CONNECTION, TOGETHER
            </h1>
            {"\n"}

            <div className="pledgeButtons">
              <TwitterShareButton
                url={"https://itsyourmove2021.org/"}
                options={{
                  text:
                    "Help us to a million minutes of exercise or mindfulness! I’m doing 20 minutes. #itsyourmove2021 (@ three friends). Learn more at www.itsyourmove2021.org.",
                  via: "iym2021",
                  size: "large",
                }}
              />
              <div className="fb">
                <iframe
                  src="https://www.facebook.com/plugins/share_button.php?href=http%3A%2F%2Fwww.itsyourmove2021.org%2F&layout=button_count&size=large&width=88&height=28&appId"
                  width="88"
                  height="28"
                  scrolling="no"
                  frameborder="0"
                  allowfullscreen="true"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <main>
          <Widget
            mainHeading="First Step"
            content="Choose a favorite athlete, hit your social media, and tag three friends"
          ></Widget>{" "}
          <Widget
            mainHeading="Second Step"
            content="Pledge an activity (walk, run, ride, meditate), your time and your task"
            imgSource={pledgeEg}
          ></Widget>
          <Widget
            mainHeading="Third Step"
            content="Pass it on and get selected to score face-time with athletes."
          >
            {" "}
          </Widget>{" "}
          <div className="pledgeButtons"></div>
          <div className="resources">
            <div className="col">
              <Resources
                imgSource={WHO}
                content="Learn More about staying active and healthy at home from the"
                link="(https://www.who.int/news-room/campaigns/connecting-the-world-to-combat-coronavirus/healthyathome/healthyathome---physical-activity)"
                linkName="World Health Organization."
              >
                {" "}
              </Resources>
            </div>
            <div className="col2">
              <Resources
                imgSource={CDC}
                content="Learn More about how to be physically active while social distancing from the"
                link="(https://www.who.int/news-room/campaigns/connecting-the-world-to-combat-coronavirus/healthyathome/healthyathome---physical-activity)"
                linkName="Centers for Disease Control and Prevention."
              >
                {""}
              </Resources>
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default Pledge;
