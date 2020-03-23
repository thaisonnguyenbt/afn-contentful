import React from 'react'
import {Link} from 'gatsby'
import logo from "../../../images/common/logo/afn-logo-white.svg"

/**
 * Header component for Mobile
 * 
 * @param {*} siteMetadata 
 *      Metadata read from gatsby-config.js
 */
const NavBarMobile = ({siteMetadata}) => {

    /**
     * Show Menu Items
     */
    function showMobileMenu() {
        var menuContainer = document.getElementsByClassName("o-hamburgerMenu__menuList");
        if (menuContainer && menuContainer.length === 1) {
            var classList = menuContainer[0].classList;
            if (classList) {
                if (classList.contains("show")) {
                    classList.remove("show")
                } else {
                    classList.add("show")
                }
            }
        }
    }

    return <>
        <nav className="o-navbar -mobile">
            <div className="o-navbar__hamburgerMenu">
                <div className="a-hamburgerMenu__button">
                    <button button-click="hamburger-open" onClick={showMobileMenu}>
                        <svg role="img">
                            <symbol id="icon-menu">
                                <rect height="20%" rx="1.5" width="100%" x="0" y="0"></rect>
                                <rect height="20%" rx="1.5" width="100%" x="0" y="40%"></rect>
                                <rect height="20%" rx="1.5" width="100%" x="0" y="80%"></rect>
                            </symbol>
                            <use xlinkHref="#icon-menu"></use>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="m-navbar__logo">
                <Link to="/">
                    <img src={logo} className="lazyload" title={ siteMetadata.title } alt={ siteMetadata.description } />
                </Link>
            </div>
            <div className="o-navbar__rightAligned">
                <div className="o-navbar__search">
                    <button className="a-expand-search" button-click="expand-search">
                    <span className="icon-afn-search"></span>
                    </button>
                </div>
                <div className="a-navbar__bookmark">
                    <Link to="/en/bookmark" target="_self">
                        <svg className="a-afnIcon -bookmark -filled" role="img" viewBox="0 0 12 17">
                            <path d="M.5 0h11c.3 0 .5.2.5.5v15.4a.5.5 0 0 1-.8.4l-5-3.1a.5.5 0 0 0-.5 0l-5 3.1a.5.5 0 0 1-.7-.4V.5C0 .2.2 0 .5 0z" fillRule="evenodd"></path>
                        </svg>
                    </Link>
                </div>
            </div>
        </nav>
    </>
}

export default NavBarMobile