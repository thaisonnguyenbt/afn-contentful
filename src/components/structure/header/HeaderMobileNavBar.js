import React from 'react'
import {Link} from 'gatsby'
import {Accordion, Card} from 'react-bootstrap'

/**
 * Navigation component display on mobile view
 * 
 * @param {*} pages
 *      List of page objects read from Contentful
 */
const HeaderMobileNavBar = ({siteMetadata, pages, language}) => {

    /**
     * Hide menu items
     */
    function hideMobileMenu() {
        var menuContainer = document.getElementsByClassName("o-hamburgerMenu__menuList");
        if (menuContainer && menuContainer.length === 1) {
            var classList = menuContainer[0].classList;
            if (classList) {
                if (classList.contains("show")) {
                    classList.remove("show")
                }
            }
        }
    }

    /**
     * Add/Remove 'show' class to the container since React Bootstrap limitation on changing container class when toggle
     * 
     * @param {*} event 
     *      Click event either on the span or the button element
     */
    function toggleAccordion(event) {
        var button = event.target;
        if (button.nodeName !== "A") { // click on spane element
            button = button.parentElement
        }
        var container = button.parentElement.parentElement;
        var classList = container.classList;
        if (classList.contains("show")) {
            classList.remove("show")
        } else {
            classList.add("show")
        }
    }

    return <>
        <div className="o-hamburgerMenu__menuList">
            <div className="a-hamburgerMenu__button -close">
                <button button-click="hamburger-close" onClick={hideMobileMenu}>
                    <svg width="34" height="34" viewBox="0 0 32 32" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
                        <rect height="5" rx="1.5" transform="translate(14.000000, 14.500000) rotate(-45.000000) translate(-14.000000, -14.500000) " width="34" x="-3" y="12"></rect>
                        <rect height="5" rx="1.5" transform="translate(14.000000, 14.500000) rotate(-135.000000) translate(-14.000000, -14.500000) " width="34" x="-3" y="12"></rect>
                    </svg>
                </button>
            </div>
            <div className="o-accordion" id="mobile-nav">
                { pages && pages.map((page, index) => {
                    return <div key={index}>
                        { !page.isHideInNav && page.subtitle && page.contentfulchildren && page.contentfulchildren.length && 
                            <Accordion defaultActiveKey="-1">
                                <Card className="m-hamburgerMenuItem">
                                    <Card.Header>
                                        <Accordion.Toggle as={Link} variant="link" eventKey="0" onClick={(event) => toggleAccordion(event)} className="m-hamburgerMenuItem__accordion" to="/">
                                            <span className="bold">{page.navigationTitle ? page.navigationTitle : page.pageTitle ? page.pageTitle : page.title}</span>
                                            <div className="m-hamburgerMenuItem__icon">
                                                <span className="icon-afn-navigate-down"></span>
                                                <span className="icon-afn-navigate-up"></span>
                                            </div>
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            <div id="sub-mobile-nav-0" data-parent="#mobile-nav">
                                                <div className="m-accordionMenu">
                                                    <Link to={'/' + language + "/" + page.slug} className="accordionMenu__subLink -main" key={0}>
                                                        <p className="m-subMenuItem__label">All</p>
                                                    </Link>
                                                    {page.contentfulchildren.map((child, i) => {
                                                        if (child.isHideInSecondNav) {
                                                            return null;
                                                        }
                                                        let slug = language + '/' + page.slug;
                                                        if (child.slug) {
                                                            slug += '/' + child.slug
                                                        }
                                                        return <Link to={'/' + slug} key={i} className="m-accordionMenu__subLink">{child.navigationTitle ? child.navigationTitle : child.pageTitle ? child.pageTitle : child.title}</Link>
                                                    })}
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        }
                        { !page.isHideInNav && !page.subtitle && 
                            <div className="m-hamburgerMenuItem">
                                <Link to={'/' + language + '/' + page.slug} className="m-hamburgerMenuItem__link bold" role="button">{page.navigationTitle ? page.navigationTitle : page.pageTitle ? page.pageTitle : page.title}</Link>
                            </div>
                        }
                    </div>
                })}
            </div>
            <div className="m-hamburgerMenuItem__profile">
                <div className="m-hamburgerMenuItem__item m-hamburgerMenuItem__logIn">
                    <button button-click="gigya-login">
                        <span className="button__icon">
                            <svg className="a-afnIcon -profile -filled active" width="64px" height="64px" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <g transform="translate(-1211.000000, -2.000000)">
                                        <g transform="translate(0.000000, -14.000000)">
                                            <g transform="translate(1195.000000, 0.000000)">
                                                <g>
                                                    <polygon id="Path" points="0 0 96 0 96 96 0 96"></polygon>
                                                    <path d="M48,48 C56.84,48 64,40.84 64,32 C64,23.16 56.84,16 48,16 C39.16,16 32,23.16 32,32 C32,40.84 39.16,48 48,48 Z M48,56 C37.32,56 16,61.36 16,72 L16,80 L80,80 L80,72 C80,61.36 58.68,56 48,56 Z" id="Shape" fill="#CCCDCF" fillRule="nonzero"></path>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </span>
                        <span className="button__copy">Login</span>
                    </button>
                </div>
                <div className="m-hamburgerMenuItem__item m-hamburgerMenuItem__signUp">
                    <button button-click="gigya-signup">Sign Up</button>
                </div>
                <div className="m-hamburgerMenuItem__item m-hamburgerMenuItem__profileName">
                    <Link to="/">
                        <svg className="a-afnIcon -profile -filled active" width="64px" height="64px" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                <g transform="translate(-1211.000000, -2.000000)">
                                    <g transform="translate(0.000000, -14.000000)">
                                        <g transform="translate(1195.000000, 0.000000)">
                                            <g>
                                                <polygon id="Path" points="0 0 96 0 96 96 0 96"></polygon>
                                                <path d="M48,48 C56.84,48 64,40.84 64,32 C64,23.16 56.84,16 48,16 C39.16,16 32,23.16 32,32 C32,40.84 39.16,48 48,48 Z M48,56 C37.32,56 16,61.36 16,72 L16,80 L80,80 L80,72 C80,61.36 58.68,56 48,56 Z" id="Shape" fill="#CCCDCF" fillRule="nonzero"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <div className="a-profile-no-avatar">
                            <img src="/etc.clientlibs/afn/clientlibs/clientlib-site/resources/images/common/profile-loggedin.png" alt=""/>
                        </div>
                        <div className="a-profile-avatar">
                            <img src="" alt=""/>
                        </div>
                        <span>Profile</span>
                    </Link>
                </div>
                <div className="m-hamburgerMenuItem__item m-hamburgerMenuItem__logOut">
                    <button button-click="gigya-logout">Log out</button>
                </div>
            </div>
            <div className="m-navbar__socialMediaList">
                <ul>
                    <li className="m-navbar__socialMediaListItem">
                        <a href={ "https://www.facebook.com/" + siteMetadata.facebook} target="_blank" rel="noopener noreferrer" className="a-socialMediaIcon -facebook">{null}</a>
                    </li>
                    <li className="m-navbar__socialMediaListItem">
                        <a href={ "https://www.pinterest.com/" + siteMetadata.pinterest} target="_blank" rel="noopener noreferrer" className="a-socialMediaIcon -pinterest">{null}</a>
                    </li>
                    <li className="m-navbar__socialMediaListItem">
                        <a href={ "https://www.instagram.com/" + siteMetadata.instagram} target="_blank" rel="noopener noreferrer" className="a-socialMediaIcon -instagram">{null}</a>
                    </li>
                </ul>
            </div>
            <div className="a-footer__footnote">
                © 2020 Discovery Networks International. All rights reserved.
            </div>
        </div>
    </>
}

export default HeaderMobileNavBar
