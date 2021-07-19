import React from 'react'

const about = () => {
    return (
        <>
            {/* <!-- Head 1 --> */}
            <br />
            <br />
            <br />
            <br />
            <h3 className="head_about" >About Us(v2.1.13)</h3>
            <br />

            <p id="body">
                <b>tat-it-official</b> is the first class website of Trident academy of technology <b>IT batch</b> of 2019-2023.It offers highly personalized and effecting classes for <b>IT batch</b>. We are providing premium courses of Web development,App development,Machine
                learning,data science and many more by Udemy for absolutely free and as well as we are providing regular class notes and self study books for improving your skills in development and machine learning. We are adding latest articles of coding for
                developing your ideas and techniques.we are trying to provide you all the best study materials of IT batch.Hope it's help you in your studies.
            </p>
            <br />
            <br />
            <h3 className="head_about" >College Location & Contact</h3>
            <div id="pattern" class="pattern">
                <div class="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14964.11209949422!2d85.808283!3d20.3404609!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdfb554a4e0bafffb!2sTrident%20Academy%20of%20Technology!5e0!3m2!1sen!2sin!4v1626378216287!5m2!1sen!2sin" width="1800" height="500" allowfullscreen="" loading="lazy"></iframe>
                    <a href="https://goo.gl/maps/jENv1DUyGZU4w4Lq9" class="btn map-link">View Map</a>
                </div>
            </div>
            {/* <!--End Pattern HTML--> */}
            <div class="container_1">
                <section class="pattern-description">
                    <h3 className="about_line">Trident Academy of Technology</h3>
                    <p1 className="about_line"><b>Email:</b> info@trident.ac.in</p1><br />
                    <p1 className="about_line"><b>Phone: </b> 0674-664-9003</p1><br />
                    <p1 className="about_line"><b>website:</b></p1> <a className="about_web_link" href="https://tat.ac.in">tat.ac.in</a><br />
                </section>
            </div>
            {/* <!-- FOOTER --> */}
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

export default about;
