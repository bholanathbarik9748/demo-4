import React from 'react'
import $ from 'jquery';
import './Home.css';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div class="section full-height" >
                <div class="absolute-center">
                    <div class="section">
                        <div class="container">
                            <div class="row">
                                <div class="col-12">
                                    <h1>
                                        <span>Welcome To</span>
                                        <h3>tat-it-official</h3>
                                    </h1>
                                    <h1 class="jumbotron-heading"><span id="typed"></span></h1>
                                    <p>Confused about which course to take for Skills development? I have got you covered. Browse courses and find out the best udemy course for you.It's free!
                                        tat-it-official is not a Official website it's only created for fun and Notes we don't want to hurt anyone's emotions. :)</p>
                                </div>
                            </div>
                            <p>
                                <a href="https://bholanathbarik9748.github.io/online_ide.github.io/" id="ide_btn" class="btn btn-warning my-2 ">
                                    <b>Browse tat-it-official Online IDE</b></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container_1 ">
                <ul class="cards">
                    <li class="cards__item">
                        <div class="card">
                            <div class="card__image card__image--fence"></div>
                            <div class="card__content">
                                <div class="card__title"><b>Class Notes</b></div>
                                <p class="card__text">Learn class work from class notes. Examples are available with these class notes. here we provide all class note of IT branch (2019 - 2023).</p>
                                <NavLink exact activeClassName="nav_act" class="btn btn-primary d-block " to="/notes" >Browse College Notes</NavLink >
                            </div>
                        </div>
                    </li>
                    <li class="cards__item">
                        <div class="card">
                            <div class="card__image card__image--river"></div>
                            <div class="card__content">
                                <div class="card__title"><b> Coding Articles</b></div>
                                <p class="card__text">Some of the latest coding information compiled in the form of Blog. Keep your programming knowledge up to date with these blog.</p>
                                <NavLink exact activeClassName="nav_act" class="btn btn-primary d-block " to="/blog" >Browse Blogs</NavLink >
                            </div>
                        </div>
                    </li>
                    <li class="cards__item">
                        <div class="card">
                            <div class="card__image card__image--record"></div>
                            <div class="card__content">
                                <div class="card__title"><b>  Contact Me</b></div>
                                <p class="card__text">Learn programming from these free courses. Examples are available with these Courses. You can contact me for any doubt and I will get back to you!</p>
                                <NavLink exact activeClassName="nav_act" class="btn btn-primary d-block " to="/contact_me" >Contact Me</NavLink >
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <br></br>
            {/* Slider */}
            <div class="carousel-wrap">
                <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Courses Available Right Now !</h1>
                    <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Get your programming career started with these free video courses. Source code and setup is available with all Courses.</p>
                </div>
                <br></br>
                <div class="owl-carousel">
                    <div class="item"><img src="https://favbulous.com/wp-content/uploads/2016/06/java-logo.png" /></div>
                    <div class="item"><img src="https://www.technotification.com/wp-content/uploads/2018/08/is-c-programming-still-worth-learning.png" /></div>
                    <div class="item"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfV5t7I-idXRDVF-HBM9baqr2610KalaGJBMLDVibHvUZsrfwwlE9fzZHNQvXRmyFeJSI&usqp=CAU" /></div>
                    <div class="item"><img src="https://wi.wallpapertip.com/wsimgs/90-900440_python-4k.jpg" /></div>
                    <div class="item"><img src="https://cdn.mos.cms.futurecdn.net/Ju3ceiZzGSSQacR2juGN98.png" /></div>
                    <div class="item"><img src="https://sitegalleria.com/wp-content/uploads/2019/08/Web-Development-and-Web-Design-Company.png" /></div>
                    <div class="item"><img src="https://content.techgig.com/thumb/msid-77396623,width-860,resizemode-4/Linux-v5-8-is-out-Features-Thunderbolt-4-0-and-improved-security.jpg?28722" /></div>
                    <div class="item"><img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/150621536/original/69be53b0afab90f96d383182c7e9833ea75aa280/make-python-django-web-system-and-logo-design.jpeg" /></div>
                    <div class="item"><img src="https://www.kdnuggets.com/wp-content/uploads/deploy-machine-learning-models-to-web.jpg" /></div>
                    <div class="item"><img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png" /></div>
                    <div class="item"><img src="https://thedatascientist.com/wp-content/uploads/2019/06/what-is-data-science.jpg" /></div>
                    <div class="item"><img src="https://i2.wp.com/blog.logrocket.com/wp-content/uploads/2019/10/nodejs.png?fit=1240%2C700&ssl=1" /></div>
                </div>
                <br></br>
                <div class="text-center">
                    <NavLink to="/courses" class="btn btn-primary ">Browse Video Courses</NavLink>
                </div>
            </div>
            <div class="my-5 py-5" />
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

export default Home;

(function ($) {

    $(function () {
        var header = $(".start-style");
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 10) {
                header.removeClass('start-style').addClass("scroll-on");
            } else {
                header.removeClass("scroll-on").addClass('start-style');
            }
        });
    });

    //Animation

    $(document).ready(function () {
        $('body.hero-anime').removeClass('hero-anime');
    });

    //Menu On Hover

    $('body').on('mouseenter mouseleave', '.nav-item', function (e) {
        if ($(window).width() > 750) {
            var _d = $(e.target).closest('.nav-item'); _d.addClass('show');
            setTimeout(function () {
                _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
            }, 1);
        }
    });

    //Switch light/dark

    $("#switch").on('click', function () {
        if ($("body").hasClass("dark")) {
            $("body").removeClass("dark");
            $("#switch").removeClass("switched");
        }
        else {
            $("body").addClass("dark");
            $("#switch").addClass("switched");
        }
    });

})($);