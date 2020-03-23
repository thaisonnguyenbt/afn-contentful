import React from 'react'
import {Link} from 'gatsby'
import OwlCarousel from 'react-owl-carousel2';

/**
 * Navigation component display on desktop view
 * 
 * @param {*} pages
 *      List of page objects read from Contentful
 */
const HeaderDesktopNavBar = ({pages, language}) => {

    /**
     * Render HTML
     */
    return <>
        <div className="o-navbar__secondary">
            <div className="m-navbar__menuList" navbar-menu="toggle">
                <ul>
                    { pages.map((page, index) => {
                        /**
                         * Toggle show/hide menu when user click on menu items
                         * 
                         * @param {*} event
                         *      Click event object
                         */
                        function toggleSubmenu(event) {
                            var element = event.target.parentElement;
                            if (element.nodeName !== 'LI')
                                element = element.parentElement;

                            if (element.classList.contains("-expanded")) {
                                element.classList.remove("-expanded");
                                element.classList.remove("-hovered");
                            } else {
                                var currentElement = document.getElementsByClassName("-expanded -hovered");
                                if (currentElement && currentElement.length === 1) {
                                    var classList = currentElement[0].classList;
                                    classList.remove("-expanded");
                                    classList.remove("-hovered");
                                }

                                element.classList.add("-expanded");
                                element.classList.add("-hovered");
                            }
                        }
                        /**
                         * Owl Carousel options
                         */
                        const options = {
                            nav: true,
                            dots: false,
                            margin: 10,
                            navText: ['<span class="icon-afn-navigate-left"></span>', '<span class="icon-afn-navigate-right"></span>'],
                            responsive: {
                                768: {
                                    items: 4,
                                    stagePadding: 50
                                },
                                1024: {
                                    items: 5,
                                    stagePadding: 80
                                }
                            }
                        };

                        /**
                         * Render Nav HTML
                         */
                        return <div key={index}>
                            { !page.isHideInNav && page.subtitle && page.contentfulchildren && page.contentfulchildren.length && 
                                <li className={'m-navbar__menuListItem -dropdown'}>
                                    <button className="m-menuListItem__button" onClick={(e) => toggleSubmenu(e)}>
                                        <span>{page.navigationTitle ? page.navigationTitle : page.pageTitle ? page.pageTitle : page.title}</span>
                                        { page.subtitle && <span className="m-menuListItem__arrow"></span> }
                                    </button>
                                    <div className="m-subMenu text-only">
                                        <OwlCarousel options={options} className="owl-carousel owl-theme">
                                            <>
                                                <Link to={'/' + language + "/" + page.slug} className="m-subMenuItem -main" key={0}>
                                                    <p className="m-subMenuItem__label">All</p>
                                                </Link>
                                                { page.contentfulchildren.map((child, i) => {
                                                    if (child.isHideInSecondNav) {
                                                        return null;
                                                    }
                                                    let slug = language + '/' + page.slug;
                                                    if (child.slug) {
                                                        slug += '/' + child.slug
                                                    }
                                                    return <Link to={'/' + slug} className={child.slug ? "m-subMenuItem" : "m-subMenuItem -main"} key={i + 1}>
                                                        <p className="m-subMenuItem__label">{child.navigationTitle ? child.navigationTitle : child.pageTitle ? child.pageTitle : child.title}</p>
                                                    </Link>
                                                })}
                                            </>
                                        </OwlCarousel>
                                    </div> 
                                </li>
                            }
                            { !page.isHideInNav && !page.subtitle &&
                                <li className="m-navbar__menuListItem">
                                    <Link to={'/' + language + '/' + page.slug} className="m-menuListItem__link">{page.navigationTitle ? page.navigationTitle : page.pageTitle ? page.pageTitle : page.title}</Link>
                                </li>
                            }
                        </div>
                    })}
                </ul>
            </div>
        </div>
    </>
}

export default HeaderDesktopNavBar