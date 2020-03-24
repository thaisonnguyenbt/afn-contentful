import React from 'react';
import {Link} from 'gatsby'
import LazyLoad from 'react-lazyload'

import afnLogo from '../../../images/common/logo/afn-logo-red.png';
import lowRes from '../../../images/common/afn-1920x1280-lowres.jpg';

let { getRecipeData } = require('./RecipeDataBuilder')

const propTypes = {};
const defaultProps = {};

class RecipeDetails extends React.Component {
    constructor(props) {
        super(props);

        let locale = props.locale;
        this.state = {
            foodLabels: this.props.foodLabels,
            recipe : getRecipeData(props.recipe, locale)
        };
    }

    render() {
        return <>
            <div className="recipeoverview">
                <div className="o-recipe">
                    <div className="m-recipe-overview__hero">
                        <div className="m-recipe-image__main">
                            <div className="cmp-image" itemType="http://schema.org/ImageObject">
                                { !!this.state.recipe.imageMastheadUrl && <LazyLoad placeholder={<img src={lowRes} alt={ this.state.recipe.recipeTitle } title={ this.state.recipe.recipeTitle } className="blur-up cmp-image__image lazyloaded ls-is-cached" />}>
                                    <img src={ this.state.recipe.imageMastheadUrl } className="blur-up cmp-image__image lazyloaded ls-is-cached" alt={ this.state.recipe.recipeTitle } title={ this.state.recipe.recipeTitle } />    
                                </LazyLoad> }
                            </div>
                        </div>
                        <div className="m-recipe-image__logo desktop">
                            <img src={ afnLogo } alt="Asian Food Network" title="Asian Food Network" />
                        </div>
                    </div>
                    <section className="o-recipe-details">
                        <div className="o-recipe-details__card">
                            <div className="m-recipe-overview__generalInfo">
                                <div className="m-recipe-info__mobileWrapper">
                                    <div className="m-recipe-image__logo -mobile">
                                        <img src={ afnLogo } alt="Asian Food Network" title="Asian Food Network" />
                                    </div>
                                    <div className="m-recipe-info__creator">Recipe Courtesy of Asian Food Network</div>
                                </div>
                                <div className="m-recipe-info__title">
                                    <div className="cmp-title">
                                        <h2 className="cmp-title__text">{ this.state.recipe.recipeTitle }</h2>
                                    </div>
                                </div>
                                <a href className="m-ratings gigya-style-modern gigya-mac gigya-chrome">
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
                                        <div className="gig-button-container gig-clr">
                                            <span href="#" className="gig-rating-readReviewsLink">0 Reviews</span>
                                            <span href="#" className="gig-rating-writeYourReview gig-rating-button">Write your review</span>
                                        </div>
                                    </div>
                                </a>
                                <div className="m-content__blurb">
                                    <div className="m-content__copy -full">
                                        <span>{ this.state.recipe.recipeDescription }</span>                                
                                    </div>
                                </div>
                                <div className="m-recipe-info__options desktop m-save-bookmark">
                                    <div className="a-loading-spinner -small -disabled">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                    <button className="a-button -withIcon" button-click="save-bookmark" bookmark-type="afn" bookmark-author="Asian Food Network" bookmark-category="recipe" bookmark-subcategory="default" bookmark-thumbnail="/content/dam/afn/global/en/recipes/yam-rice/AFN_yam_rice_main_image.jpg.transform/1280x853/img.png" bookmark-title="Taro Rice (Yam Rice)" bookmark-url="/content/afn/global/en/recipes/cuisine/chinese/yam-rice.html" bookmark-categoryid="afn_ratings_reviews_default_configuration" bookmark-ratingconfigid="afn_ratings_reviews_default_configuration" bookmark-streamid="L2NvbnRlbnQvYWZuL2dsb2JhbC9lbi9yZWNpcGVzL2N1aXNpbmUvY2hpbmVzZS95YW0tcmljZS5odG1s" data-endpoint="https://asianfoodnetwork.com/en/recipes/cuisine/chinese/yam-rice/_jcr_content/root/responsivegrid/container/recipeoverview.gigya.bookmark.exist.json?uid={USERID}&amp;streamid=L2NvbnRlbnQvYWZuL2dsb2JhbC9lbi9yZWNpcGVzL2N1aXNpbmUvY2hpbmVzZS95YW0tcmljZS5odG1s">
                                        <span className="button__icon">
                                            <svg className="a-afnIcon -bookmark -filled" role="img" viewBox="0 0 12 17">
                                                <path d="M.5 0h11c.3 0 .5.2.5.5v15.4a.5.5 0 0 1-.8.4l-5-3.1a.5.5 0 0 0-.5 0l-5 3.1a.5.5 0 0 1-.7-.4V.5C0 .2.2 0 .5 0z" fillRule="evenodd"></path>
                                            </svg>
                                        </span>
                                        <span className="button__copy">Save Recipe</span>
                                    </button>
                                    <button className="a-button -withIcon -disabled" disabled="disabled" button-disabled="saved">
                                    <span className="button__icon">
                                    <span className="icon-afn-check"></span>
                                    </span>
                                    <span className="button__copy">Saved!</span>
                                    </button>
                                    <button className="a-button -icon" button-click="print-recipe">
                                    <span className="icon-afn-print"></span>
                                    </button>
                                </div>
                            </div>
                            { !!this.state.foodLabels && !!this.state.foodLabels.length && <div className={this.state.foodLabels.length < 5 ? "m-icon-text desktop" : "m-icon-text not-mobile"}>
                                <div className="row m-icon-text-list">
                                    { this.state.foodLabels.map((foodLabel, i) => {
                                        return <div className="col-6 col-md-4 col-lg-3" key={i}>
                                            <a className="m-icon-text-listItem" href="https://asianfoodnetwork.com/en/search.html?search=halal">
                                                <div className="m-icon-text-listItem__img">
                                                    <img src={require('../../../images/common/food-icons/' + foodLabel.value + '.svg')} alt={foodLabel.name} title={foodLabel.name} />
                                                </div>
                                                <div className="m-icon-text-listItem__label">
                                                    <span>{foodLabel.name}</span>
                                                </div>
                                            </a>
                                        </div>
                                    })}
                                </div>
                            </div> }
                            { !!this.state.foodLabels && !!this.state.foodLabels.length && <div className="m-icon-text mobile-only">
                                <div className="row active m-icon-text-list" data-list="teaser">
                                    { this.state.foodLabels.slice(0, 4).map((foodLabel, i) => {
                                        return <div className="col-6 col-md-4 col-lg-3" key={i}>
                                            <Link className="m-icon-text-listItem" to="/en/search.html?search=halal">
                                                <div className="m-icon-text-listItem__img">
                                                    <img src={require('../../../images/common/food-icons/' + foodLabel.value + '.svg')} alt={foodLabel.name} title={foodLabel.name} />
                                                </div>
                                                <div className="m-icon-text-listItem__label">
                                                    <span>{foodLabel.name}</span>
                                                </div>
                                            </Link>
                                        </div>
                                    })}
                                </div>
                                { this.state.foodLabels.length > 4 && <div className="row" data-list="more">
                                    { this.state.foodLabels.slice(4, this.state.foodLabels.length).map((foodLabel, i) => {
                                        return <div className="col-6 col-md-4 col-lg-3 m-icon-text-listItem" key={i}>
                                            <div className="m-icon-text-listItem__img">
                                                <img src={require('../../../images/common/food-icons/' + foodLabel.value + '.svg')} alt={foodLabel.name} title={foodLabel.name} />
                                            </div>
                                            <div className="m-icon-text-listItem__label">
                                                <span>{foodLabel.name}</span>
                                            </div>
                                        </div>
                                    })}
                                    <button className="a-button -text" button-click="toggle-list">
                                        <span className="a-more active">Show More</span>
                                        <span className="a-less">Show Less</span>
                                    </button>
                                </div>} 
                            </div> }
                            <div className="m-recipe-overview__highlights desktop">
                                <div className="row m-recipe-info__table">
                                    { this.state.recipe.difficultyLevel && <div className="col">
                                        <ul>
                                            <li><span>Difficulty: </span>&nbsp;
                                                <span>{this.state.recipe.difficultyLevel.name}</span>
                                            </li>
                                        </ul>
                                    </div> }
                                    <div className="col">
                                        <ul>
                                            <li><span>Preparation: </span> <span>{this.state.recipe.recipePreparationTime} min</span>
                                            </li>
                                            <li><span>Cook: </span> <span>{this.state.recipe.recipeCookTime} min</span>
                                            </li>
                                            <li><span>Clean up: </span> <span>{this.state.recipe.recipeCleanUpTime} min</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col">
                                        <ul>
                                            <li><span>Steps: </span>&nbsp;
                                                <span>{this.state.recipe.recipeStepsNo} steps</span>
                                            </li>
                                            <li><span>{this.state.recipe.recipeIngredientsNo} Ingredients</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="m-recipe-overview__highlights not-desktop">
                                <div className="row m-recipe-info__table">
                                    <div className="col">
                                        <ul>
                                            { this.state.recipe.difficultyLevel && <li>
                                                <span>Difficulty:</span>&nbsp;
                                                <span>{this.state.recipe.difficultyLevel.name}</span>
                                            </li>}
                                            <li>
                                                <span>Steps: </span>&nbsp;
                                                <span>{this.state.recipe.recipeStepsNo} steps</span>
                                            </li>
                                            <li>
                                                <span>{this.state.recipe.recipeIngredientsNo} Ingredients</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col">
                                        <ul>
                                            <li>
                                                <span>Preparation: </span>
                                                <span>{this.state.recipe.recipePreparationTime} min</span>
                                            </li>
                                            <li>
                                                <span>Cook: </span> 
                                                <span>{this.state.recipe.recipeCookTime} min</span>
                                            </li>
                                            <li>
                                                <span>Clean up: </span> 
                                                <span>{this.state.recipe.recipeCleanUpTime} min</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="desktop">
                                <div className="m-social-sharing-bar ">
                                    <div className="m-social-sharing__label">
                                        <span>Share This Recipe:</span>
                                    </div>
                                    <div className="m-social-sharing__list" id="desktop1583549520014_gig_containerParent">
                                        <div className="m-social-sharing__icons" id="desktop1583549520014" gigid="showShareBarUI">
                                            <div className="gig-bar-container gig-share-bar-container">
                                                <table cellSpacing="0" cellPadding="0" role="presentation">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div className="gig-button-container gig-button-container-count-none gig-button-container-facebook gig-button-container-facebook-count-none gig-share-button-container gig-button-container-horizontal">
                                                                    <div className="gig-button gig-share-button gig-button-up gig-button-count-none" id="desktop1583549520014-reaction0" title="" alt="" tabIndex="0" role="button">
                                                                        <table cellPadding="0" cellSpacing="0" role="presentation">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td id="desktop1583549520014-reaction0-left" aria-hidden="true"></td>
                                                                                    <td id="desktop1583549520014-reaction0-icon">
                                                                                        <img id="desktop1583549520014-reaction0-icon_img" src="https://asianfoodnetwork.com/etc.clientlibs/afn/clientlibs/clientlib-site/resources/images/social-media/facebook-default.svg" alt="" focusable="false" />
                                                                                    </td>
                                                                                    <td id="desktop1583549520014-reaction0-right" aria-hidden="true"></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="gig-button-container gig-button-container-count-none gig-button-container-twitter gig-button-container-twitter-count-none gig-share-button-container gig-button-container-horizontal">
                                                                    <div className="gig-button gig-share-button gig-button-up gig-button-count-none" id="desktop1583549520014-reaction1" title="" alt="" tabIndex="0" role="button">
                                                                        <table cellPadding="0" cellSpacing="0" role="presentation">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td id="desktop1583549520014-reaction1-left" aria-hidden="true"></td>
                                                                                    <td id="desktop1583549520014-reaction1-icon">
                                                                                        <img id="desktop1583549520014-reaction1-icon_img" src="https://asianfoodnetwork.com/etc.clientlibs/afn/clientlibs/clientlib-site/resources/images/social-media/twitter-default.svg" alt="" focusable="false" />
                                                                                    </td>
                                                                                    <td id="desktop1583549520014-reaction1-right" aria-hidden="true"></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="gig-button-container gig-button-container-count-none gig-button-container-pinterest gig-button-container-pinterest-count-none gig-share-button-container gig-button-container-horizontal">
                                                                    <div className="gig-button gig-share-button gig-button-up gig-button-count-none" id="desktop1583549520014-reaction2" title="" alt="" tabIndex="0" role="button">
                                                                        <table cellPadding="0" cellSpacing="0" role="presentation">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td id="desktop1583549520014-reaction2-left" aria-hidden="true"></td>
                                                                                    <td id="desktop1583549520014-reaction2-icon">
                                                                                        <img id="desktop1583549520014-reaction2-icon_img" src="https://asianfoodnetwork.com/etc.clientlibs/afn/clientlibs/clientlib-site/resources/images/social-media/pinterest-default.svg" alt="" focusable="false" />
                                                                                    </td>
                                                                                    <td id="desktop1583549520014-reaction2-right" aria-hidden="true"></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="gig-button-container gig-button-container-count-none gig-button-container-whatsapp gig-button-container-whatsapp-count-none gig-share-button-container gig-button-container-horizontal">
                                                                    <div className="gig-button gig-share-button gig-button-up gig-button-count-none" id="desktop1583549520014-reaction3" title="" alt="" tabIndex="0" role="button">
                                                                        <table cellPadding="0" cellSpacing="0" role="presentation">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td id="desktop1583549520014-reaction3-left" aria-hidden="true"></td>
                                                                                    <td id="desktop1583549520014-reaction3-icon">
                                                                                        <img id="desktop1583549520014-reaction3-icon_img" src="https://asianfoodnetwork.com/etc.clientlibs/afn/clientlibs/clientlib-site/resources/images/social-media/whatsapp-default.svg" alt="" focusable="false" />
                                                                                    </td>
                                                                                    <td id="desktop1583549520014-reaction3-right" aria-hidden="true"></td>
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
                                            <a href="mailto:?subject=Taro%20Rice%20(Yam%20Rice)&amp;body=The perfect dish for busy days, the Taro Rice is a fluffy, aromatic, and flavorful chinese-style yam rice that is wholesome enough to eat on its own, or as a staple to accompany your mains. It takes just 30 minutes to get it from the stove to table and the best part? You may use your trusty rice cooker to do most of the work! - https://asianfoodnetwork.com/en/recipes/cuisine/chinese/yam-rice.html">
                                                <svg width="32" height="32" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="32" cy="32" r="32" fill="#C84152"></circle>
                                                    <path d="M20.125 21C19.1821 21 18.3171 21.3186 17.6264 21.8404L31.8306 35.0187C32.1488 35.3142 32.8512 35.3142 33.1694 35.0187L47.3759 21.8404C46.6603 21.2968 45.7806 21.0012 44.875 21H20.125ZM16.5421 23.0617C16.2027 23.6551 16 24.3431 16 25.0749V38.9274C16 39.7585 16.2546 40.525 16.6836 41.1669L16.7213 41.1438L27.1021 32.8669L16.5398 23.0617H16.5421ZM48.4579 23.0617L37.9002 32.8669L48.2787 41.1415L48.3164 41.1669C48.762 40.5015 48.9996 39.7231 49 38.9274V25.0749C49 24.3407 48.7973 23.6551 48.4579 23.0617V23.0617ZM28.3114 33.9867L17.8551 42.3258C18.5056 42.7483 19.2859 43 20.125 43H44.875C45.7141 43 46.4944 42.7483 47.1426 42.3258L36.6886 33.9867L34.3056 36.2031C33.8173 36.6544 33.1714 36.9058 32.5 36.9058C31.8286 36.9058 31.1827 36.6544 30.6944 36.2031L28.3114 33.9867V33.9867Z" fill="white"></path>
                                                </svg>
                                            </a>
                                        </button>
                                        <button className="m-copy-to-clipboard" data-copy="link" data-clipboard-text="https://asianfoodnetwork.com/en/recipes/cuisine/chinese/yam-rice.html">
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
                            <div className="m-recipe-info__options not-desktop m-save-bookmark">
                                <button className="a-button -withIcon" button-click="save-bookmark" bookmark-type="afn" bookmark-author="Asian Food Network" bookmark-category="recipe" bookmark-subcategory="default" bookmark-thumbnail="/content/dam/afn/global/en/recipes/yam-rice/AFN_yam_rice_main_image.jpg.transform/1280x853/img.png" bookmark-title="Taro Rice (Yam Rice)" bookmark-url="/content/afn/global/en/recipes/cuisine/chinese/yam-rice.html" bookmark-categoryid="afn_ratings_reviews_default_configuration" bookmark-ratingconfigid="afn_ratings_reviews_default_configuration" bookmark-streamid="L2NvbnRlbnQvYWZuL2dsb2JhbC9lbi9yZWNpcGVzL2N1aXNpbmUvY2hpbmVzZS95YW0tcmljZS5odG1s" data-endpoint="https://asianfoodnetwork.com/en/recipes/cuisine/chinese/yam-rice/_jcr_content/root/responsivegrid/container/recipeoverview.gigya.bookmark.exist.json?uid={USERID}&amp;streamid=L2NvbnRlbnQvYWZuL2dsb2JhbC9lbi9yZWNpcGVzL2N1aXNpbmUvY2hpbmVzZS95YW0tcmljZS5odG1s">
                                    <span className="button__icon">
                                        <svg className="a-afnIcon -bookmark -filled" role="img" viewBox="0 0 12 17">
                                            <path d="M.5 0h11c.3 0 .5.2.5.5v15.4a.5.5 0 0 1-.8.4l-5-3.1a.5.5 0 0 0-.5 0l-5 3.1a.5.5 0 0 1-.7-.4V.5C0 .2.2 0 .5 0z" fillRule="evenodd"></path>
                                        </svg>
                                    </span>
                                    <span className="button__copy">Save Recipe</span>
                                </button>
                                <button className="a-button -withIcon -disabled" disabled="disabled" button-disabled="saved">
                                <span className="button__icon">
                                <span className="icon-afn-check"></span>
                                </span>
                                <span className="button__copy">Saved!</span>
                                </button>
                            </div>
                            <div className="not-desktop">
                                <div className="m-social-sharing-bar ">
                                    <div className="m-social-sharing__label">
                                        <span>Share This Recipe:</span>
                                    </div>
                                    <div className="m-social-sharing__list" id="not-desktop1583549520014_gig_containerParent">
                                        <div className="m-social-sharing__icons" id="not-desktop1583549520014" gigid="showShareBarUI">
                                            <div className="gig-bar-container gig-share-bar-container">
                                                <table cellSpacing="0" cellPadding="0" role="presentation">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div className="gig-button-container gig-button-container-count-none gig-button-container-facebook gig-button-container-facebook-count-none gig-share-button-container gig-button-container-horizontal">
                                                                    <div className="gig-button gig-share-button gig-button-up gig-button-count-none" id="not-desktop1583549520014-reaction0" title="" alt="" tabIndex="0" role="button">
                                                                        <table cellPadding="0" cellSpacing="0" role="presentation">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td id="not-desktop1583549520014-reaction0-left" aria-hidden="true"></td>
                                                                                    <td id="not-desktop1583549520014-reaction0-icon">
                                                                                        <img id="not-desktop1583549520014-reaction0-icon_img" src="https://asianfoodnetwork.com/etc.clientlibs/afn/clientlibs/clientlib-site/resources/images/social-media/facebook-default.svg" alt="" focusable="false" />
                                                                                    </td>
                                                                                    <td id="not-desktop1583549520014-reaction0-right" aria-hidden="true"></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="gig-button-container gig-button-container-count-none gig-button-container-twitter gig-button-container-twitter-count-none gig-share-button-container gig-button-container-horizontal">
                                                                    <div className="gig-button gig-share-button gig-button-up gig-button-count-none" id="not-desktop1583549520014-reaction1" title="" alt="" tabIndex="0" role="button">
                                                                        <table cellPadding="0" cellSpacing="0" role="presentation">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td id="not-desktop1583549520014-reaction1-left" aria-hidden="true"></td>
                                                                                    <td id="not-desktop1583549520014-reaction1-icon">
                                                                                        <img id="not-desktop1583549520014-reaction1-icon_img" src="https://asianfoodnetwork.com/etc.clientlibs/afn/clientlibs/clientlib-site/resources/images/social-media/twitter-default.svg" alt="" focusable="false" />
                                                                                    </td>
                                                                                    <td id="not-desktop1583549520014-reaction1-right" aria-hidden="true"></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="gig-button-container gig-button-container-count-none gig-button-container-pinterest gig-button-container-pinterest-count-none gig-share-button-container gig-button-container-horizontal">
                                                                    <div className="gig-button gig-share-button gig-button-up gig-button-count-none" id="not-desktop1583549520014-reaction2" title="" alt="" tabIndex="0" role="button">
                                                                        <table cellPadding="0" cellSpacing="0" role="presentation">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td id="not-desktop1583549520014-reaction2-left" aria-hidden="true"></td>
                                                                                    <td id="not-desktop1583549520014-reaction2-icon">
                                                                                        <img id="not-desktop1583549520014-reaction2-icon_img" src="https://asianfoodnetwork.com/etc.clientlibs/afn/clientlibs/clientlib-site/resources/images/social-media/pinterest-default.svg" alt="" focusable="false" />
                                                                                    </td>
                                                                                    <td id="not-desktop1583549520014-reaction2-right" aria-hidden="true"></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="gig-button-container gig-button-container-count-none gig-button-container-whatsapp gig-button-container-whatsapp-count-none gig-share-button-container gig-button-container-horizontal">
                                                                    <div className="gig-button gig-share-button gig-button-up gig-button-count-none" id="not-desktop1583549520014-reaction3" title="" alt="" tabIndex="0" role="button">
                                                                        <table cellPadding="0" cellSpacing="0" role="presentation">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td id="not-desktop1583549520014-reaction3-left" aria-hidden="true"></td>
                                                                                    <td id="not-desktop1583549520014-reaction3-icon">
                                                                                        <img id="not-desktop1583549520014-reaction3-icon_img" src="https://asianfoodnetwork.com/etc.clientlibs/afn/clientlibs/clientlib-site/resources/images/social-media/whatsapp-default.svg" alt="" focusable="false" />
                                                                                    </td>
                                                                                    <td id="not-desktop1583549520014-reaction3-right" aria-hidden="true"></td>
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
                                            <a href="mailto:?subject=Taro%20Rice%20(Yam%20Rice)&amp;body=The perfect dish for busy days, the Taro Rice is a fluffy, aromatic, and flavorful chinese-style yam rice that is wholesome enough to eat on its own, or as a staple to accompany your mains. It takes just 30 minutes to get it from the stove to table and the best part? You may use your trusty rice cooker to do most of the work! - https://asianfoodnetwork.com/en/recipes/cuisine/chinese/yam-rice.html">
                                                <svg width="32" height="32" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="32" cy="32" r="32" fill="#C84152"></circle>
                                                    <path d="M20.125 21C19.1821 21 18.3171 21.3186 17.6264 21.8404L31.8306 35.0187C32.1488 35.3142 32.8512 35.3142 33.1694 35.0187L47.3759 21.8404C46.6603 21.2968 45.7806 21.0012 44.875 21H20.125ZM16.5421 23.0617C16.2027 23.6551 16 24.3431 16 25.0749V38.9274C16 39.7585 16.2546 40.525 16.6836 41.1669L16.7213 41.1438L27.1021 32.8669L16.5398 23.0617H16.5421ZM48.4579 23.0617L37.9002 32.8669L48.2787 41.1415L48.3164 41.1669C48.762 40.5015 48.9996 39.7231 49 38.9274V25.0749C49 24.3407 48.7973 23.6551 48.4579 23.0617V23.0617ZM28.3114 33.9867L17.8551 42.3258C18.5056 42.7483 19.2859 43 20.125 43H44.875C45.7141 43 46.4944 42.7483 47.1426 42.3258L36.6886 33.9867L34.3056 36.2031C33.8173 36.6544 33.1714 36.9058 32.5 36.9058C31.8286 36.9058 31.1827 36.6544 30.6944 36.2031L28.3114 33.9867V33.9867Z" fill="white"></path>
                                                </svg>
                                            </a>
                                        </button>
                                        <button className="m-copy-to-clipboard" data-copy="link" data-clipboard-text="https://asianfoodnetwork.com/en/recipes/cuisine/chinese/yam-rice.html">
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
                        </div>
                    </section>
                </div>
            </div>
        </>
    }
}

RecipeDetails.propTypes = propTypes;
RecipeDetails.defaultProps = defaultProps;

export default RecipeDetails;
