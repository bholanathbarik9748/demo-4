import React from 'react'
import tat_4thsem from './components/img/4th sem.jpeg';
import tat_5thsem from './components/img/5th sem.jpeg';
import tat_6thsem from './components/img/6th sem.jpeg';
import tat_7thsem from './components/img/7th sem.jpeg';
import tat_8thsem from './components/img/8th sem.jpeg';

// Loading animation
import { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'

const Note = () => {
    const [progress, setProgress] = useState(0)
    return (
        <>
            <LoadingBar color="#F1C40F" fixed={false} height='6px' progressDuration={100} progress={progress} onLoaderFinished={() => setProgress(0)} />
            <br />
            <br />
            <section id="timeline" >
                <h1>2019 - 2023 B.tech Timeline</h1>
                <p class="leader">Information Technology Notes</p>
                <div class="demo-card-wrapper">
                    <div class="demo-card demo-card--step1">
                        <div class="head">
                            <div class="number-box">
                                <span>04</span>
                            </div>
                            <h2><span class="small">B.tech </span> Semester</h2>
                        </div>
                        <div class="body">
                            <img src={tat_4thsem} alt="Graphic" />
                            <a
                                href="https://drive.google.com/drive/folders/19hR4AiAgHmdh4_1Qwl96Ipc9aI-1R_Ix?usp=sharing">
                                <button type="button" class="btn btn-outline-danger book_btn" onClick={() => setProgress(100)}>Read More</button>
                            </a>
                        </div>
                    </div>

                    <div class="demo-card demo-card--step2">
                        <div class="head">
                            <div class="number-box">
                                <span>05</span>
                            </div>
                            <h2><span class="small">B.tech </span> Semester</h2>
                        </div>
                        <div class="body">
                            <p><b> coming soon</b></p>
                            <img src={tat_5thsem} alt="Graphic" />
                        </div>
                    </div>

                    <div class="demo-card demo-card--step3">
                        <div class="head">
                            <div class="number-box">
                                <span>06</span>
                            </div>
                            <h2><span class="small">B.tech </span> Semester</h2>
                        </div>
                        <div class="body">
                            <p><b> coming soon</b></p>
                            <img src={tat_6thsem} alt="Graphic" />
                        </div>
                    </div>

                    <div class="demo-card demo-card--step4">
                        <div class="head">
                            <div class="number-box">
                                <span>07</span>
                            </div>
                            <h2><span class="small">B.tech </span> Semester</h2>
                        </div>
                        <div class="body">
                            <p><b> coming soon</b></p>
                            <img src={tat_7thsem} alt="Graphic" />
                        </div>
                    </div>

                    <div class="demo-card demo-card--step5">
                        <div class="head">
                            <div class="number-box">
                                <span>08</span>
                            </div>
                            <h2><span class="small">B.tech </span> Semester</h2>
                        </div>
                        <div class="body">
                            <p><b> coming soon</b></p>
                            <img src={tat_8thsem} alt="Graphic" />
                        </div>
                    </div>
                </div>
            </section>
            <footer class="container-fluid bg-dark my-0 py-3 text-light ">
                <footer class="footer py-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 col-12">
                                <p class="copyright-text text-center">Copyright &copy; 2021 tat-it-official.herokuapp.com</p>
                                <p class="copyright-text text-center">Designed by <a className="foot_name" rel="nofollow" href="https://github.com/bholanathbarik9748">Bholanath-Barik</a></p>
                            </div>

                        </div>
                    </div>
                </footer>
            </footer>
        </>
    );
}

export default Note;
