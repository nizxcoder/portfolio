import React from "react";
import "./Home.css";
import linkedinLogo from "../logo/linkedin.svg";
import githubLogo from "../logo/github.svg";
import htmlLogo from "../logo/html.png";
import cssLogo from "../logo/css.png";
import jsLogo from "../logo/js.png";
import mongoLogo from "../logo/mongo.png";
// import exLogo from '../logo/express.png';
import reactLogo from "../logo/atom.png";
import nodeLogo from "../logo/node.png";
import javaLogo from "../logo/java.png";
import helloLogo from "../logo/hellopng.png";
import homeImg from "../logo/homeImg.png";
import codeLogo from "../logo/codecheff.png";
import flutterLogo from "../logo/flutter.png";
export default function Home() {
  return (
    <div className="home-content">
      <div className="container-box">
        <div className="upper-part">
          <div className="text-area">
            <div className="header">
              <h1>
                Full-Stack MERN Developer.
                <img src={helloLogo} alt="hi" height={40} />
              </h1>
              <p style={{ fontWeight: "normal" }}>
                Hi, I'm Nijamuddin Ansari. A passionate Full-Stack MERN and
                Flutter Developer. Based on Kolkata, India.
              </p>
            </div>
            <div className="social-link">
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/in/nijamuddin-ansari-8a74ab1a0/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={linkedinLogo} alt="logo" height={28} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/nizxcoder"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={githubLogo} alt="logo" height={28} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.codechef.com/users/nizx"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={codeLogo} alt="logo" height={28} width={28} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="img-area">
            <img src={homeImg} alt="" className="img-box" />
          </div>
        </div>
        <div className="bottom-part">
          <div className="tech-title">Tech Stack</div>
          <div className="tech-icon">
            <ul>
              <li>
                <img
                  src={javaLogo}
                  alt=""
                  height={35}
                  title="Java"
                  style={{
                    marginTop: "-12px",
                    marginRight: "-5px",
                  }}
                />
              </li>
              <li>
                <img src={flutterLogo} alt="" height={30} title="flutter" />
              </li>
              <li>
                <img src={htmlLogo} alt="" height={30} title="HTML" />
              </li>
              <li>
                <img src={cssLogo} alt="" height={30} title="CSS" />
              </li>
              <li>
                <img src={jsLogo} alt="" height={30} title="JavaScript" />
              </li>
              <li>
                <img src={mongoLogo} alt="" height={30} title="MongoDB" />
              </li>

              <li>
                <img src={reactLogo} alt="" height={30} title="React.js" />
              </li>
              <li>
                <img src={nodeLogo} alt="" height={30} title="node.js" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
