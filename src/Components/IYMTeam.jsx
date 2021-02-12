import React, { Component } from "react";
import "../css/Styles.css";
import DB from "../images/Team Pics/DougBarton.jpg";
import BL from "../images/Team Pics/Benjamin L.jpg";
import DR from "../images/Team Pics/Douglas R.jpg";
import JM from "../images/Team Pics/Jessica Miyake.png";
import MW from "../images/Team Pics/Matt Wildman.jpg";
import RN from "../images/Team Pics/Reed Nelson.jpg";
import SW from "../images/Team Pics/Steve Wangen.jpg";
import TM from "../images/Team Pics/Ted M.jpg";
import TH from "../images/Team Pics/Trisha Hernandez.jpg";
import RW from "../images/Team Pics/RyanW.jpg";
import PL from "../images/Team Pics/placeholder.png";
import CL from "../images/Team Pics/ChrisLewis.jpg";
import AC from "../images/Team Pics/AdamC.jpg";
import CD from "../images/Team Pics/CarsonD.jpg";

class IYMTeam extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="Team-Header">
          <h2>The Team</h2>
        </div>
        <div className="Team">
          <div className="row">
            <div className="col-sm-4">
              <img className="Team-Picture" src={DB} alt="DB" />
              <p className="Team-Content">
                <p className="Team-Name">Doug Barton</p>
                <p>Director of E-Buisness Consortium at UW-Madison</p>
                <a className="LinkedIn-Link" href="https://www.linkedin.com/in/bartondoug/">Linkedin</a>
                <br></br>
              </p>
            </div>
            <div className="col-sm-4">
              <img className="Team-Picture" src={DR} alt="DR" />
              <p className="Team-Content">
                <p className="Team-Name">Douglas Robertson</p>
                <p>Aeronautical Data Analyst</p>
                <a className="LinkedIn-Link"href="https://www.linkedin.com/in/dbrobert/">Linkedin</a>
                <br></br>
              </p>
            </div>
            <div className="col-sm-4">
              <img className="Team-Picture" src={MW} alt="MW" />
              <p className="Team-Content">
                <p className="Team-Name">Matt Wildman</p>
                <p>
                  Computer Science at UW-Madison | Undergraduate Project Lab Coordinator
                </p>
                <a className="LinkedIn-Link"href="https://www.linkedin.com/in/matt-wildman/">Linkedin</a>
                <br></br>
              </p>
            </div>
            <div className="col-sm-4">
              <img className="Team-Picture" src={TM} alt="TM" />
              <p className="Team-Content">
                <p className="Team-Name">Ted Morris</p>
                <p>CDO and Co-Founder at Klarrio US</p>
                <a className="LinkedIn-Link"href="https://www.linkedin.com/in/tedmorris3/">Linkedin</a>
                <br></br>
              </p>
            </div>
            <div className="col-sm-4">
              <img className="Team-Picture" src={RW} alt="RW" />
              <p className="Team-Content">
                <p className="Team-Name">Ryan West</p>
                <p>Co-Founder, Head of Applied Science at Idio Analytics</p>
                <a className="LinkedIn-Link"href="https://www.linkedin.com/in/ryan-west-88187821/">
                  Linkedin
                </a>
                <br></br>
              </p>
            </div>
            <div className="col-sm-4">
              <img className="Team-Picture" src={CL} alt="CL" />
              <p className="Team-Content">
                <p className="Team-Name">Chris Lewis</p>
                <p>
                  Senior Product Manager at Dell
                </p>
                <a className="LinkedIn-Link"href="https://www.linkedin.com/in/chris-lewis-1007248/">
                  Linkedin
                </a>
                <br></br>
              </p>
            </div>
            <div className="col-sm-4">
              <img className="Team-Picture" src={AC} alt="AC" />
              <p className="Team-Content">
                <p className="Team-Name">Adam Converse</p>
                <p>Senior Software Engineer at Zendesk</p>
                <a className="LinkedIn-Link"href="https://www.linkedin.com/in/adam-converse-498667a4/">
                  Linkedin
                </a>
                <br></br>
              </p>
            </div>
            <div className="col-sm-4">
              <img className="Team-Picture" src={RN} alt="RN" />
              <p className="Team-Content">
                <p className="Team-Name">Reed Nelson</p>
                <p>Computer Science at UW-Madison | Undergraduate Project Lab Coordinator</p>
                <a className="LinkedIn-Link"href="https://www.linkedin.com/in/reed-nelson-a24ba2196?trk=public_profile_browsemap_profile-result-card_result-card_full-click">
                  Linkedin
                </a>
                <br></br>
              </p>
            </div>
            <div className="col-sm-4">
              <img className="Team-Picture" src={JM} alt="JM" />
              <p className="Team-Content">
                <p className="Team-Name">Jessica Miyake</p>
                <p>UW-Madison Computer Science and Digital Studies Alumni</p>
                <a className="LinkedIn-Link"href="https://www.linkedin.com/in/jessicamiyake/">  Linkedin </a>
                <br></br>
              </p>
            </div>
            <div className="col-sm-4">
              <img className="Team-Picture" src={CD} alt="CD" />
              <p className="Team-Content">
                <p className="Team-Name">Carson Drury</p>
                <p>Computer Science at UW-Madison | Undergraduate Project Lab Coordinator</p>
                <a className="LinkedIn-Link"href="https://www.linkedin.com/in/carson-drury/">Linkedin</a>
                <br></br>
              </p>
            </div>
            <div className="col-sm-4">
              <img className="Team-Picture" src={PL} alt="PL" />
              <p className="Team-Content">
                <p className="Team-Name">Ivan Hu</p>
                <p>Computer Science at UW-Madison</p>
                <a className="LinkedIn-Link"href="insert Linkedin">Linkedin</a>
                <br></br>
              </p>
            </div>
            <div className="col-sm-4">
              <img className="Team-Picture" src={SW} alt="SW" />
              <p className="Team-Content">
                <p className="Team-Name">Steve Wangen</p>
                <p>
                  Data Scientist at American Family Insurance Data Science
                  Institute
                </p>
                <a className="LinkedIn-Link"href="https://www.linkedin.com/in/steven-wangen/">
                  Linkedin
                </a>
                <br></br>
              </p>
            </div>
            <div className="col-sm-4">
              <img className="Team-Picture" src={BL} alt="BL" />
              <p className="Team-Content">
                <p className="Team-Name">Benjamin Lewis</p>
                <p>CS Student at UW-Madison</p>
                <a className="LinkedIn-Link"href="https://www.linkedin.com/in/bslewis/">Linkedin</a>
                <br></br>
              </p>
            </div>
            <div className="col-sm-4">
              <img className="Team-Picture" src={TH} alt="TH" />
              <p className="Team-Content">
                <p className="Team-Name">Trisha Hernandez</p>
                <p>
                  Communication Program Coordinator at Johns Hopkins University
                </p>
                <a className="LinkedIn-Link"href="https://www.linkedin.com/in/patricia-hernandez-phd-b421128/">
                  Linkedin
                </a>
                <br></br>
              </p>
            </div>
            <div className="col-sm-4">
              <img className="Team-Picture" src={PL} alt="PL" />
              <p className="Team-Content">
                <p className="Team-Name">Anush Ram Reddy K.</p>
                <p>CS Student at UW-Madison</p>
                <a className="LinkedIn-Link"href="insert Linkedin">Linkedin</a>
                <br></br>
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default IYMTeam;
