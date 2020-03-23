import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import {Link} from 'gatsby'

var getLocaleValue = require('../../utils/utils').getLocaleValue

const options = {
    items: 1,
    nav: true,
    dots: true,
    margin: 10,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 12000,
    loop : true,
    navText: ['<button type="button" role="presentation" class="owl-prev"><span class="icon-afn-navigate-left"></span></button>', 
        '<button type="button" role="presentation" class="owl-next"><span class="icon-afn-navigate-right"></span></button>']
};

const propTypes = {};
const defaultProps = {};


class Carousel extends React.Component {
    constructor(props) {
        super(props);

        let items = [], 
            locale = this.props.locale;

        if (this.props.data && this.props.data.items) {
            items = getLocaleValue(this.props.data.items, locale);
        }
        
        this.state = {
            items : items,
            language: this.props.language,
            locale : this.props.locale
        };
    }

    render() {
        return <>
            <div className="cmp-carousel">
                <div className="cmp-carousel__content o-carousel-container -mixed owl-carousel owl-theme owl-loaded" data-carousel="mixed" carousel-loop="true" carousel-arrows="true" carousel-dots="true" pause-onhover="true" autoplay-mode="true" autoplay-duration="7000">
                    <OwlCarousel options={options}>
                        {this.state.items.map((item, i) => {
                            let imageUrl = '', categoryTag = '', 
                                title = getLocaleValue(item.fields.title, this.state.locale), 
                                subTitle = getLocaleValue(item.fields.subtitle, this.state.locale),
                                featuredURL = getLocaleValue(item.fields.featuredURL, this.state.locale);

                            let imageFile = getLocaleValue(item.fields.image, this.state.locale);
                            if (imageFile) {
                                const localeImageFile = getLocaleValue(imageFile.fields.file, this.state.locale);
                                if (localeImageFile && localeImageFile.url) {
                                    imageUrl = localeImageFile.url;
                                }
                            }
                            const categoryTagObj = getLocaleValue(item.fields.categoryTag, this.state.locale);
                            if (categoryTagObj) {
                                const categoryTagName = categoryTagObj.fields.name;
                                if (categoryTagName) {
                                    categoryTag = getLocaleValue(categoryTagName, this.state.locale)
                                }
                            }

                            return <div role="tabpanel" className="cmp-carousel__item m-carousel-slide" data-cmp-hook-carousel="item" key={i}>
                                <div className="featuredsignpost">
                                    <div className="m-featured-signpost">
                                        <Link to={this.state.language + featuredURL}>
                                            <div className="m-featured-signpost__background">
                                                <div className="cmp-image" data-cmp-src={imageUrl} itemScope="" itemType="http://schema.org/ImageObject">
                                                    <img src={imageUrl} className="cmp-image__image" title={title} alt={title} itemProp="contentUrl" data-cmp-hook-image="image" />
                                                </div>
                                            </div>
                                        </Link>
                                        <div className="m-featured-signpost__overlay">
                                            <div className="a-category-tag">
                                                <span className="a-category-tag__title">{categoryTag}</span>
                                            </div>
                                            <Link className="a-featured-signpost__link" to={this.state.language + featuredURL}>
                                                <div className="cmp-title">
                                                    <h1 className="cmp-title__text">{title}</h1>
                                                </div>
                                            </Link>
                                            <div className="a-featured-signpost__subtitle">
                                                <div className="cmp-text">
                                                    <p>{subTitle}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })}
                    </OwlCarousel>
                </div>
            </div>
        </>
    }
}

Carousel.propTypes = propTypes;
Carousel.defaultProps = defaultProps;


export default Carousel;