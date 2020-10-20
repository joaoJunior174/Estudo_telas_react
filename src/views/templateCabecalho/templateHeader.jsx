import React from 'react';
import MenuInner from './side-menu-inner';
import StickyHeader from './sticky-header'

export default () => {

    return (
        <>
            <div class="sidebar-menu sticky-sidebar-menu">

                {/* <!-- logo start --> */}
                <div class="logo">
                    <h1><a href="index.html">Collective</a></h1>
                </div>

                {/* <!-- //image logo --> */}

                <div class="logo-icon text-center">
                    <a href="index.html" title="logo"><img src={require("../../images/logo.png")} alt="logo-icon" /> </a>
                </div>
                {/* <!-- //logo end --> */}

               <MenuInner/>
            </div>
            
            <StickyHeader />
            
        </>
    )

}