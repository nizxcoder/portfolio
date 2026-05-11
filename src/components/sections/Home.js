import React, { useEffect, useState } from "react";
import "../Home.css";
import linkedinLogo from "../../logo/linkedin.svg";
import githubLogo from "../../logo/github.svg";
import htmlLogo from "../../logo/html.png";
import cssLogo from "../../logo/css.png";
import jsLogo from "../../logo/js.png";
import mongoLogo from "../../logo/mongo.png";
import reactLogo from "../../logo/atom.png";
import nodeLogo from "../../logo/node.png";
import javaLogo from "../../logo/java.png";
import helloLogo from "../../logo/hellopng.png";
import homeImg from "../../logo/homeImg.png";
import homeImage from "../../image/IMG_8606.jpg";
import codeLogo from "../../logo/codecheff.png";
import flutterLogo from "../../logo/flutter.png";

export default function Home({ id }) {
  const roles = [
    "Front-End Developer",
    "Back-End Developer",
    "Flutter Developer",
    "Freelancer",
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const currentRole = roles[roleIndex];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3900);

    return () => clearInterval(intervalId);
  }, [roles.length]);

  return (
    <section id={id} className="home-content">
      <div className="container-box">
        <div className="upper-part">
          <div className="text-area">
            <div className="header">
              <h1>I'm</h1>
              <h1>
                <span
                  key={currentRole}
                  className="typing-text"
                  style={{ "--typing-chars": currentRole.length }}
                >
                  {currentRole}
                </span>
                {/* <img src={helloLogo} alt="hi" height={40} /> */}
              </h1>
              <ul className="role-list">
                <li>Front-End Developer</li>
                <li>Back-End Developer</li>
                <li>Flutter Developer</li>
                <li>Freelancer</li>
              </ul>
              <p style={{ fontWeight: "normal" }}>
                Hi, I&apos;m Nijamuddin Ansari. I build fast, responsive web and
                mobile experiences with the MERN stack and Flutter, focusing on
                clean UI, reliable APIs, and real-world impact. Based in
                Giridih, Jharkhand, India.
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
            <img src={homeImage} alt="portfolio owner" className="img-box" />
          </div>
        </div>
        <div className="bottom-part">
          <div className="tech-title">Tech Stack</div>
          <div className="tech-icon">
            <ul>
              <li>
                <img
                  src={javaLogo}
                  alt="Java"
                  height={35}
                  title="Java"
                  style={{ marginTop: "-12px", marginRight: "-5px" }}
                />
              </li>
              <li>
                <img
                  src={flutterLogo}
                  alt="flutter"
                  height={30}
                  title="flutter"
                />
              </li>
              <li>
                <img src={htmlLogo} alt="HTML" height={30} title="HTML" />
              </li>
              <li>
                <img src={cssLogo} alt="CSS" height={30} title="CSS" />
              </li>
              <li>
                <img
                  src={jsLogo}
                  alt="JavaScript"
                  height={30}
                  title="JavaScript"
                />
              </li>
              <li>
                <img
                  src={mongoLogo}
                  alt="MongoDB"
                  height={30}
                  title="MongoDB"
                />
              </li>
              <li>
                <img
                  src={reactLogo}
                  alt="React.js"
                  height={30}
                  title="React.js"
                />
              </li>
              <li>
                <img src={nodeLogo} alt="node.js" height={30} title="node.js" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
