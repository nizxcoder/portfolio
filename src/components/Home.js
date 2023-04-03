import React from 'react'
import './Home.css'
import linkedinLogo from '../logo/linkedin.svg'
import './img.png'
import githubLogo from '../logo/github.svg'
import htmlLogo from '../logo/html.png'
import cssLogo from '../logo/css.png'
import jsLogo from '../logo/js.png'
import mongoLogo from '../logo/mongo.png'
import exLogo from '../logo/express.png'
import reactLogo from '../logo/atom.png'
import nodeLogo from '../logo/node.png'
import javaLogo from '../logo/java.png'
export default function Home() {
    return (
        <div className='home-content'>
            <div className="container-box">
                <div className="upper-part">
                    <div className="text-area">
                        <div className="header">
                            <h1>Full-Stack MERN Developer.<img src="data:image/png;base64,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" alt="hi" height={45} /></h1>
                            <p>Hi, I'm Nijamuddin Ansari. A passionate Full-Stack MERN Developer.</p>
                        </div>
                        <div className="social-link">
                            <ul>
                                <li><a href="https://www.linkedin.com/in/nijamuddin-ansari-8a74ab1a0/" target='_blank'><img src={linkedinLogo} alt="logo" height={25} /></a></li>
                                <li><a href="https://github.com/nizxcoder" target='_blank'><img src={githubLogo} alt="logo" height={25} /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="img-area">
                        <img src="https://scontent.fccu27-1.fna.fbcdn.net/v/t39.30808-1/331645697_3001250206847357_4681178443544506533_n.jpg?stp=c0.0.480.480a_dst-jpg_p480x480&_nc_cat=101&ccb=1-7&_nc_sid=f67be1&_nc_ohc=mb-Zql5pJgsAX8OVeON&_nc_ht=scontent.fccu27-1.fna&oh=00_AfDTeb55yM9qpTNKzn75-oPhDQ4MHeJlmmpuzcflCVpSSw&oe=642C8886" alt="" className='img-box' />
                    </div>
                </div>
                <div className="bottom-part">
                    <div className="tech-title">Tech Stack</div>
                    <div className="tech-icon">
                        <ul>
                            <li><img src={javaLogo} alt="" height={35} title='Java' style={{
                                marginTop
                                    : "-12px", marginRight: "-5px"
                            }} /></li>
                            <li><img src={htmlLogo} alt="" height={30} title='HTML' /></li>
                            <li><img src={cssLogo} alt="" height={30} title='CSS' /></li>
                            <li><img src={jsLogo} alt="" height={30} title='JavaScript' /></li>
                            <li><img src={mongoLogo} alt="" height={30} title='MongoDB' /></li>
                            <li><img src={exLogo} alt="" height={30} title='express.js' /></li>
                            <li><img src={reactLogo} alt="" height={30} title='React.js' /></li>
                            <li><img src={nodeLogo} alt="" height={30} title='node.js' /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
