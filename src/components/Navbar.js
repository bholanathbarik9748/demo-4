import React from 'react'
import './Navbar.css';
import $ from 'jquery';
import tat from './img/main_2.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div class="navigation-wrap bg-light start-header start-style">
                <div class="container">
                    <div class="row">
                        <div class="col-17">
                            <nav class="navbar navbar-expand-md navbar-light">
                                <NavLink class="navbar-brand" to="/">
                                    <img src={tat} alt="" />
                                </NavLink>
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav ml-auto py-4 py-md-0">
                                        <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4 ">
                                            <NavLink exact activeClassName="nav_act" to="/" >Home</NavLink >
                                        </li>
                                        <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                            <NavLink exact activeClassName="nav_act" to="/courses" >Courses</NavLink >
                                        </li>
                                        <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                            <NavLink exact activeClassName="nav_act" to="/blog" >Blog</NavLink >
                                        </li>
                                        <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                            <NavLink exact activeClassName="nav_act" to="/books" >Books</NavLink >
                                        </li>
                                        <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                            <NavLink exact activeClassName="nav_act" to="/about" >About</NavLink >
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;

/* Please ❤ this if you like it! */


/* Please ❤ this if you like it! */


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