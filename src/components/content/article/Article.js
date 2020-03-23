import React from 'react';
import LazyLoad from 'react-lazyload'
import lowRes from '../../../images/common/afn-1920x1280-lowres.jpg';
import {Link} from 'gatsby';
import facebook from '../../../images/common/social-media/facebook-default.svg';
import pinterest from '../../../images/common/social-media/pinterest-default.svg';
import twitter from '../../../images/common/social-media/twitter-default.svg';
import whatsapp from '../../../images/common/social-media/whatsapp-default.svg';

const propTypes = {};
const defaultProps = {};

let { getArticleData } = require('./ArticleDataBuilder')

class Article extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tags: this.props.tags,
            article: getArticleData(this.props.article)
        };
    }

    render() {
        return <div>
            <div className="articleoverview aem-GridColumn aem-GridColumn--default--7">
                <div className="p-article-detail">
                    <section className="o-overview">
                        <div className="m-overview__hero -image">
                            <div className="cmp-image" data-cmp-src="/content/dam/afn/global/en/articles/4-easy-peasy-to-keep-your-cooking-clena/AFN_kitchen.jpg" itemScope="" itemType="http://schema.org/ImageObject">
                                <LazyLoad placeholder={<img src={lowRes} alt={this.state.article.articleTitle} title={this.state.article.articleTitle} className="blur-up cmp-image__image"/>}>
                                    <img className="blur-up cmp-image__image lazyloaded" itemProp="contentUrl" data-cmp-hook-image="image" 
                                        alt={this.state.article.articleTitle} title={this.state.article.articleTitle} 
                                        src={this.state.article.imageMastheadUrl} />
                                </LazyLoad>
                            </div>
                        </div>
                        <div className="a-overview__author">
                            <span>{this.state.article.author}</span>
                        </div>
                        <div className="a-overview__date">
                            <span>{this.state.article.articleDate}</span>
                        </div>
                        <div className="a-page-title">
                            <h1>{this.state.article.articleTitle}</h1>
                        </div>
                        <div className="a-overview__description">
                            <p>{this.state.article.articleDescription}</p>
                        </div>
                        <div className="m-overview__overallRating">
                            <a className="m-ratings gigya-style-modern gigya-mac gigya-chrome" smooth-scroll="" scroll-current="true" href="#article-ratings-reviews-container" id="view-overall-article-ratings" data-rating="overall-ratings" rating-categoryid="afn_ratings_reviews_default_configuration" rating-container="view-overall-article-ratings">
                                <div className="gig-rating gig-clr">
                                    <div className="gig-stars-container">
                                        <div className="gig-rating-topbar">
                                            <span className="gig-rating-averageRating">Average rating:</span>
                                            <span className="gig-rating-stars" title="0" alt="0">
                                                <div className="gig-rating-star gig-rating-star-empty"></div>
                                                <div className="gig-rating-star gig-rating-star-empty"></div>
                                                <div className="gig-rating-star gig-rating-star-empty"></div>
                                                <div className="gig-rating-star gig-rating-star-empty"></div>
                                                <div className="gig-rating-star gig-rating-star-empty"></div>
                                            </span>
                                        </div>
                                        <div className="gig-rating-dimensions"></div>
                                    </div>
                                </div>
                            </a>
                            <div className="gig-button-container gig-clr">
                                <a href className="gig-rating-readReviewsLink">0 Reviews</a>
                                <a href className="gig-rating-writeYourReview gig-rating-button">Write your review</a>
                            </div>
                        </div>
                        <div className="m-overview__bookmark">
                            <button className="a-button -withIcon" button-click="save-bookmark" bookmark-type="afn" bookmark-author="Debbie Wong" bookmark-category="article" bookmark-subcategory="default" bookmark-thumbnail="/content/dam/afn/global/en/articles/4-easy-peasy-to-keep-your-cooking-clena/AFN_kitchen.jpg.transform/1280x853/img.png" bookmark-title="4 Easy Peasy Ways To Keep Your Cooking Clean (And Germ-Free!)" bookmark-url="/content/afn/global/en/articles/four-easy-peasy-ways-cooking-clean-germ-free.html" bookmark-ratingconfigid="afn_ratings_reviews_default_configuration" bookmark-streamid="L2NvbnRlbnQvYWZuL2dsb2JhbC9lbi9hcnRpY2xlcy9mb3VyLWVhc3ktcGVhc3ktd2F5cy1jb29raW5nLWNsZWFuLWdlcm0tZnJlZS5odG1s" data-endpoint="https://asianfoodnetwork.com/en/articles/four-easy-peasy-ways-cooking-clean-germ-free/_jcr_content/root/responsivegrid_1564329275/container/articleoverview.gigya.bookmark.exist.json?uid={USERID}&amp;streamid=L2NvbnRlbnQvYWZuL2dsb2JhbC9lbi9hcnRpY2xlcy9mb3VyLWVhc3ktcGVhc3ktd2F5cy1jb29raW5nLWNsZWFuLWdlcm0tZnJlZS5odG1s">
                                <span className="button__icon">
                                    <svg className="a-afnIcon -bookmark -filled" role="img" viewBox="0 0 12 17">
                                        <path d="M.5 0h11c.3 0 .5.2.5.5v15.4a.5.5 0 0 1-.8.4l-5-3.1a.5.5 0 0 0-.5 0l-5 3.1a.5.5 0 0 1-.7-.4V.5C0 .2.2 0 .5 0z" fillRule="evenodd"></path>
                                    </svg>
                                </span>
                                <span className="button__copy">Save Article</span>
                            </button>
                            <button className="a-button -withIcon -disabled" disabled="disabled" button-disabled="saved">
                            <span className="button__icon">
                            <span className="icon-afn-check"></span>
                            </span>
                            <span className="button__copy">Saved!</span>
                            </button>
                        </div>
                        <div className="m-overview__categoryTags">
                            <div className="category-tags-round">
                                <div className="m-category-tags">
                                    <ul className="m-category-tags__list">
                                        <li><span className="m-category-tags__label">Related to: </span>
                                        </li>
                                        { this.state.tags && this.state.tags.map((tag, i) => {
                                            return <li key={i}>
                                                <div className="a-category-tag">
                                                    <Link to={"/en/search.html?search=" + encodeURI(tag.name)}>
                                                        <span className="a-category-tag__title">{tag.name}</span>
                                                    </Link>
                                                </div>
                                            </li>
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="m-overview__socialSharing">
                            <div className="m-social-sharing-bar ">
                                <div className="m-social-sharing__label">
                                    <span>Share This Article:</span>
                                </div>
                                <div className="m-social-sharing__list" id="m-overview__socialSharing1584532182793_gig_containerParent">
                                    <div className="m-social-sharing__icons" id="m-overview__socialSharing1584532182793" gigid="showShareBarUI">
                                        <div className="gig-bar-container gig-share-bar-container">
                                            <table cellSpacing="0" cellPadding="0" role="presentation">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="gig-button-container gig-button-container-count-none gig-button-container-facebook gig-button-container-facebook-count-none gig-share-button-container gig-button-container-horizontal">
                                                                <div className="gig-button gig-share-button gig-button-up gig-button-count-none" id="m-overview__socialSharing1584532182793-reaction0" title="" alt="" tabIndex="0" role="button">
                                                                    <table cellPadding="0" cellSpacing="0" role="presentation">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td id="m-overview__socialSharing1584532182793-reaction0-left" aria-hidden="true"></td>
                                                                                <td id="m-overview__socialSharing1584532182793-reaction0-icon">
                                                                                    <img id="m-overview__socialSharing1584532182793-reaction0-icon_img" src={facebook} alt="" focusable="false" />
                                                                                </td>
                                                                                <td id="m-overview__socialSharing1584532182793-reaction0-right" aria-hidden="true"></td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="gig-button-container gig-button-container-count-none gig-button-container-twitter gig-button-container-twitter-count-none gig-share-button-container gig-button-container-horizontal">
                                                                <div className="gig-button gig-share-button gig-button-up gig-button-count-none" id="m-overview__socialSharing1584532182793-reaction1" title="" alt="" tabIndex="0" role="button">
                                                                    <table cellPadding="0" cellSpacing="0" role="presentation">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td id="m-overview__socialSharing1584532182793-reaction1-left" aria-hidden="true"></td>
                                                                                <td id="m-overview__socialSharing1584532182793-reaction1-icon">
                                                                                    <img id="m-overview__socialSharing1584532182793-reaction1-icon_img" src={twitter} alt="" focusable="false" />
                                                                                </td>
                                                                                <td id="m-overview__socialSharing1584532182793-reaction1-right" aria-hidden="true"></td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="gig-button-container gig-button-container-count-none gig-button-container-pinterest gig-button-container-pinterest-count-none gig-share-button-container gig-button-container-horizontal">
                                                                <div className="gig-button gig-share-button gig-button-up gig-button-count-none" id="m-overview__socialSharing1584532182793-reaction2" title="" alt="" tabIndex="0" role="button">
                                                                    <table cellPadding="0" cellSpacing="0" role="presentation">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td id="m-overview__socialSharing1584532182793-reaction2-left" aria-hidden="true"></td>
                                                                                <td id="m-overview__socialSharing1584532182793-reaction2-icon">
                                                                                    <img id="m-overview__socialSharing1584532182793-reaction2-icon_img" src={pinterest} alt="" focusable="false" />
                                                                                </td>
                                                                                <td id="m-overview__socialSharing1584532182793-reaction2-right" aria-hidden="true"></td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="gig-button-container gig-button-container-count-none gig-button-container-whatsapp gig-button-container-whatsapp-count-none gig-share-button-container gig-button-container-horizontal">
                                                                <div className="gig-button gig-share-button gig-button-up gig-button-count-none" id="m-overview__socialSharing1584532182793-reaction3" title="" alt="" tabIndex="0" role="button">
                                                                    <table cellPadding="0" cellSpacing="0" role="presentation">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td id="m-overview__socialSharing1584532182793-reaction3-left" aria-hidden="true"></td>
                                                                                <td id="m-overview__socialSharing1584532182793-reaction3-icon">
                                                                                    <img id="m-overview__socialSharing1584532182793-reaction3-icon_img" src={whatsapp} alt="" focusable="false" />
                                                                                </td>
                                                                                <td id="m-overview__socialSharing1584532182793-reaction3-right" aria-hidden="true"></td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <button className="m-email-sharing">
                                        <a href="mailto:?subject=4%20Easy%20Peasy%20Ways%20To%20Keep%20Your%20Cooking%20Clean%20(And%20Germ-Free!)&amp;body=From quarantining your proteins, to isolating your cutting boards, Debbie Wong tells us just how easy it is to be clean in the kitchen  - https://asianfoodnetwork.com/en/articles/four-easy-peasy-ways-cooking-clean-germ-free.html">
                                            <svg width="32" height="32" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="32" cy="32" r="32" fill="#C84152"></circle>
                                                <path d="M20.125 21C19.1821 21 18.3171 21.3186 17.6264 21.8404L31.8306 35.0187C32.1488 35.3142 32.8512 35.3142 33.1694 35.0187L47.3759 21.8404C46.6603 21.2968 45.7806 21.0012 44.875 21H20.125ZM16.5421 23.0617C16.2027 23.6551 16 24.3431 16 25.0749V38.9274C16 39.7585 16.2546 40.525 16.6836 41.1669L16.7213 41.1438L27.1021 32.8669L16.5398 23.0617H16.5421ZM48.4579 23.0617L37.9002 32.8669L48.2787 41.1415L48.3164 41.1669C48.762 40.5015 48.9996 39.7231 49 38.9274V25.0749C49 24.3407 48.7973 23.6551 48.4579 23.0617V23.0617ZM28.3114 33.9867L17.8551 42.3258C18.5056 42.7483 19.2859 43 20.125 43H44.875C45.7141 43 46.4944 42.7483 47.1426 42.3258L36.6886 33.9867L34.3056 36.2031C33.8173 36.6544 33.1714 36.9058 32.5 36.9058C31.8286 36.9058 31.1827 36.6544 30.6944 36.2031L28.3114 33.9867V33.9867Z" fill="white"></path>
                                            </svg>
                                        </a>
                                    </button>
                                    <button className="m-copy-to-clipboard" data-copy="link" data-clipboard-text="https://asianfoodnetwork.com/en/articles/four-easy-peasy-ways-cooking-clean-germ-free.html">
                                        <svg width="32" height="32" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="32" cy="32" r="32" fill="#C84152"></circle>
                                            <g clipPath="url(#clip0)">
                                                <path d="M34.85 39.3202L29.2825 44.8889C27.9343 46.2342 26.1097 46.993 24.2051 47.0005C22.3006 47.0079 20.4701 46.2635 19.1113 44.9289C19.1045 44.9224 19.0979 44.9157 19.0913 44.9089L19.0713 44.8889C17.7368 43.5304 16.9924 41.7 16.9999 39.7957C17.0074 37.8914 17.7661 36.0669 19.1113 34.7189L25.2488 28.5814C26.5971 27.2367 28.4216 26.4784 30.3258 26.4711C32.2301 26.4639 34.0603 27.2083 35.4188 28.5427L35.4388 28.5614L35.4588 28.5814C35.7963 28.9239 36.0913 29.2914 36.3463 29.6777L34.6788 31.3452C34.2038 31.8202 33.4788 31.8977 32.9225 31.5789C32.8482 31.4856 32.769 31.3963 32.685 31.3114C32.0584 30.6974 31.2149 30.3552 30.3376 30.3592C29.4602 30.3632 28.6198 30.713 27.9988 31.3327L21.8613 37.4702C21.2416 38.0916 20.892 38.9324 20.8885 39.8101C20.8849 40.6877 21.2278 41.5313 21.8425 42.1577C22.4691 42.7723 23.3128 43.1149 24.1904 43.1111C25.068 43.1074 25.9088 42.7576 26.53 42.1377L30.0188 38.6502C31.5391 39.3074 33.2095 39.5389 34.8513 39.3202H34.85ZM44.8888 19.0714C43.5302 17.7365 41.6996 16.9919 39.7949 16.9994C37.8903 17.0069 36.0656 17.7659 34.7175 19.1114L29.15 24.6802C30.7919 24.4619 32.4623 24.6939 33.9825 25.3514L37.47 21.8627C38.0913 21.2428 38.932 20.893 39.8097 20.8892C40.6873 20.8855 41.531 21.2281 42.1575 21.8427C42.7723 22.469 43.1151 23.3126 43.1116 24.1903C43.1081 25.0679 42.7585 25.9087 42.1388 26.5302L36.0013 32.6677C35.3805 33.2872 34.5404 33.6369 33.6634 33.6412C32.7864 33.6454 31.943 33.3037 31.3163 32.6902C31.2325 32.6052 31.1532 32.5159 31.0788 32.4227C30.8011 32.2635 30.4787 32.2001 30.1614 32.2421C29.844 32.2841 29.5493 32.4293 29.3225 32.6552L27.655 34.3227C27.91 34.7102 28.2063 35.0777 28.5425 35.4189L28.5625 35.4389L28.5825 35.4589C29.9411 36.7938 31.7718 37.5385 33.6764 37.531C35.581 37.5235 37.4057 36.7645 38.7538 35.4189L44.8913 29.2814C46.2358 27.9329 46.9939 26.1084 47.001 24.2041C47.008 22.2999 46.2633 20.4698 44.9288 19.1114L44.91 19.0914L44.89 19.0714H44.8888Z" fill="white"></path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0">
                                                    <rect width="30" height="30" fill="white" transform="translate(17 17)"></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>;
    }
}

Article.propTypes = propTypes;
Article.defaultProps = defaultProps;
// #endregion

export default Article;