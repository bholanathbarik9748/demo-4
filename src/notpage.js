import React from 'react'
import { NavLink } from 'react-router-dom';
// Loading animation
import { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'

const notpage = () => {
    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <LoadingBar color="#F1C40F" fixed={false} height='6px' progressDuration={100} />
            <div class="bgimg">
                <div class="topleft">
                </div>
                <div class="middle">
                    <h1>404 Page Not Found</h1>
                    <p>Ooops...</p>
                </div>
                <div class="bottomleft">
                    <p>The page you are looking for does not exist. How you got here is a mystery. But you can click the button below to go back to the homepage.</p>
                    <div class="text-center">
                        <NavLink to="/" onClick={() => {window.location.href="/"}} class="btn btn-primary">go Back</NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}

export default notpage;