import React from 'react'
import PropTypes from 'prop-types'
import HeaderDesktop from './HeaderDesktop'
import HeaderDesktopNavBar from './HeaderDesktopNavBar'
import HeaderMobile from './HeaderMobile'
import HeaderMobileNavBar from './HeaderMobileNavBar'

/**
 * AFN Header component
 * 
 * @param {*} siteMetadata 
 *      Metadata read from gatsby-config.js
 */
const Header = ({ siteMetadata, rootNode, allLanguages, navigations}) => {
    const pages = rootNode.contentfulchildren;
    const currentLanguage = rootNode.node_locale.substring(0, 2);

    return <div className={"experiencefragment aem-GridColumn aem-GridColumn--default--12"}>
        <div className={"xf-content-height"}>
            <div className={"aem-Grid aem-Grid--12 aem-Grid--default--12"}>
                <header className="o-header">
                    <nav className="o-navbar -desktop">
                        <HeaderDesktop siteMetadata={siteMetadata} allLanguages={allLanguages} currentLanguage={currentLanguage} navigations={navigations} />
                        <HeaderDesktopNavBar pages={pages} language={currentLanguage} />
                    </nav>
                    <HeaderMobile siteMetadata={siteMetadata} />
                </header>
                <div className="padded-header"></div>
                <div className="o-search-container">
                    <div className="o-search__expanded">
                        <div className="m-main-search-bar">
                            <div className="m-search__suggestionsMenu tt-empty"></div>
                            <form className="m-search-form" autoComplete="off" action="">
                                <div data-search="autoComplete" data-enginekey="vmeRn9nsnWvxpy2yrxtp" data-resultsurl="https://asianfoodnetwork.com/en/search.html" data-noresults="Please try with a different search term ">
                                    <input className="typeahead" autoComplete="off" type="search" name="Search" title="Search" id="navbar-search" placeholder="Find recipes, articles and more"/>
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
                        <button className="a-collapse-search" button-click="collapse-search">
                        <span>Cancel</span>
                        </button>
                    </div>
                </div>
                <HeaderMobileNavBar siteMetadata={siteMetadata} pages={pages} language={currentLanguage} />
            </div>
        </div>
    </div>
}

/**
 * Define the structure for Header component's properties
 */
Header.propTypes = {
    siteMetadata : PropTypes.shape({
        title: PropTypes.string,
        description : PropTypes.string,
        facebook: PropTypes.string,
        pinterest : PropTypes.string,
        instagram: PropTypes.string
    }).isRequired,
}

/**
 * Define default value for Header component properties
 */
Header.defaultProps = {
    siteMetadata : {
        title: '',
        description : '',
        facebook: '',
        pinterest : '',
        instagram: ''
    }
}

export default Header