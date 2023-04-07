import React from 'react'
import newsImg from '../image/newsApp.png'
import textUtil from '../image/textutils.png'
import './Project.css'
export default function Project() {
    return (
        <div class="project-content">
            <div className="project-header">
                <h3 style={{ color: "deeppink", letterSpacing: "2px", margin: "0" }}>Portfolio <hr /></h3>
                <h3>Each Project is a unique piece of development.</h3>
            </div>
            <div className="project-container">
                <div className="project-card">
                    <div className="project-img">
                        <img src={newsImg} alt="_image" title='NewsApp' />
                    </div>
                    <div className="project-details">
                        <div className="project-title">
                            <h2>KalTak - NewsApp</h2>
                        </div>
                        <div className="project-description">
                            <p>This application provides all the latest news with all necessary information according to category through using newsAPI.</p>
                        </div>
                        <div className="project-btns">
                            <a href="https://nizxcoder.github.io/kaltak" target='_blank'><button type="button" class="btn btn-light">Check it!</button></a>
                        </div>
                    </div>
                </div>
                
                <div className="project-card">
                    <div className="project-img">
                        <img src={textUtil} alt="_image" title='textUtils' />
                    </div>
                    <div className="project-details">
                        <div className="project-title">
                            <h2>TextUtils App</h2>
                        </div>
                        <div className="project-description">
                            <p>This application helps to do manipulation in the words, letters, and as well as sentences. I generally use during my development.
                            </p>
                        </div>
                        <div className="project-btns">
                            <a href="https://nizxcoder.github.io/textutils" target='_blank'><button type="button" class="btn btn-light">Check it!</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
