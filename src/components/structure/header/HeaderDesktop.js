import React from 'react'
import {Link} from 'gatsby'
import logo from "../../../images/common/logo/afn-logo-white.svg"

/**
 * Header component for Destop
 * 
 * @param {*} siteMetadata 
 *      Metadata read from gatsby-config.js
 */
const HeaderDesktop = ({siteMetadata, allLanguages, currentLanguage, navigations}) => {
    return <>
        <div className="o-navbar__main">
            <div className="m-navbar__socialMediaList">
                {allLanguages.map((language, i) => {
                    let slugs = [];
                    if (!navigations || !navigations.length || navigations.length === 1) {
                        if (language !== 'en') {
                            slugs.push(language);
                        }
                    } else {
                        slugs.push(language);
                        navigations.forEach(function(item, i) {
                            if (i > 0) {
                                slugs.push(item.slug);
                            }
                        })
                    }
                    return <Link to={'/' + slugs.join('/')} key={i}>
                        <div className={"flag-icon " + language }></div>
                    </Link>
                })}
            </div>
            <div className="m-navbar__logo">
                <Link to={currentLanguage === 'en' ? '/' : '/' + currentLanguage}>
                    <img src={logo} className="lazyload" title={ siteMetadata.title } alt={ siteMetadata.description } />
                </Link>
            </div>
            <div className="o-navbar__rightAligned">
                <div className="m-main-search-bar">
                    <div className="m-search__suggestionsMenu tt-empty"></div>
                    <form className="m-search-form" autoComplete="off" action="">
                        <div data-search="autoComplete" data-enginekey="vmeRn9nsnWvxpy2yrxtp" data-resultsurl="https://asianfoodnetwork.com/en/search.html" data-noresults="Please try with a different search term ">
                            <span className="twitter-typeahead" style={{'position': 'relative', 'display': 'inline-block'}}>
                                <input className="typeahead" autoComplete="off" type="search" name="Search" title="Search" id="navbar-search-mobile" placeholder="Find recipes, articles and more" style= {{width : '90%'}}/>
                            </span>
                        </div>
                        <button type="submit" className="button m-search__submit" button-click="search-input">
                        <span className="icon-afn-search"></span>
                        </button>
                    </form>
                    <button className="button m-search__clear" button-click="clear-input">
                        <svg width="34" height="34" viewBox="0 0 32 32" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
                            <rect height="5" rx="1.5" transform="translate(14.000000, 14.500000) rotate(-45.000000) translate(-14.000000, -14.500000) " width="34" x="-3" y="12"></rect>
                            <rect height="5" rx="1.5" transform="translate(14.000000, 14.500000) rotate(-135.000000) translate(-14.000000, -14.500000) " width="34" x="-3" y="12"></rect>
                        </svg>
                    </button>
                </div>
                <div className="a-navbar__bookmark">
                    <Link to="/en/bookmark" target="_self">
                        <svg className="a-afnIcon -bookmark -filled" role="img" viewBox="0 0 12 17">
                            <path d="M.5 0h11c.3 0 .5.2.5.5v15.4a.5.5 0 0 1-.8.4l-5-3.1a.5.5 0 0 0-.5 0l-5 3.1a.5.5 0 0 1-.7-.4V.5C0 .2.2 0 .5 0z" fillRule="evenodd"></path>
                        </svg>
                        <span>Saves</span>
                    </Link>
                </div>
                <div className="o-navbar__profile dropdown">
                    <button button-click="gigya-profile" className="dropdown-toggle" data-toggle="dropdown">
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
                    </button>
                    <div className="dropdown-menu dropdown-menu-right m-profile-dropdown">
                        <div className="dropdown-item m-profile-dropdown__login">
                            <button button-click="gigya-login">Login</button>
                        </div>
                        <div className="dropdown-item m-profile-dropdown__signup">
                            <button button-click="gigya-signup">Sign Up</button>
                        </div>
                        <div className="dropdown-item m-profile-dropdown__name">
                            <span>Profile</span>
                        </div>
                        <div className="dropdown-item m-profile-dropdown__logout">
                            <button button-click="gigya-logout">Log out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default HeaderDesktop