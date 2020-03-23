import React from 'react';
import { Link } from 'gatsby';
import LazyLoad from 'react-lazyload'
import lowRes from '../../../images/common/afn-1920x1280-lowres.jpg';

var getLocaleValue = require('../../../utils/utils').getLocaleValue

const propTypes = {};
const defaultProps = {};

const SingleTile = ({feed, locale, language}) => {
    let imageUrl, categoryTagName, navTarget = '';
    const title = getLocaleValue(feed.fields.title, locale);
    const description = getLocaleValue(feed.fields.description, locale);
    const ctaPath = getLocaleValue(feed.fields.ctaPath, locale);
    const boxOrientation = getLocaleValue(feed.fields.boxOrientation, locale);
    const isHideDesc = getLocaleValue(feed.fields.isHideDesc, locale);
    const isNewTab = getLocaleValue(feed.fields.isNewTab, locale);
    navTarget = isNewTab ? "_blank" : "";

    const image = getLocaleValue(feed.fields.image, locale);
    if (image && image.fields && image.fields.file) {
        const imageFile = getLocaleValue(image.fields.file, locale);
        if (imageFile && imageFile.url) {
            imageUrl = imageFile.url;
        }
    }
    
    const categoryTag = getLocaleValue(feed.fields.categoryTag, locale);
    if (categoryTag && categoryTag.fields && categoryTag.fields.name) {
        categoryTagName = getLocaleValue(categoryTag.fields.name, locale);
    }

    return  <div className="m-content-box -large -left">
        { boxOrientation === 'left' && <div className="row">
            <div className="col-4">
                <div className="m-content-box__content">
                    { categoryTagName && <div className="a-category-tag">
                        <span className="a-category-tag__title">{categoryTagName}</span>
                    </div> }
                    { ctaPath && <Link to={language + "/" + ctaPath} target={navTarget}>
                        <div className="cmp-title">
                            <h3 className="cmp-title__text">{title}</h3>
                        </div>
                    </Link> }
                    { !isHideDesc && description && <div className="m-content-box__copy">
                        <span>{description}</span>
                    </div> }
                </div>
            </div>
            <div className="col-8">
                <div className="m-content-box__image">
                    <Link className="a-linked-image" to={language + "/" + ctaPath} target={navTarget}>
                        <div className="cmp-image a-animated -zoom"
                            itemType="http://schema.org/ImageObject">
                            <LazyLoad placeholder={<img src={lowRes} alt={title} title={title} className="blur-up cmp-image__image"/>}>
                                <img src={imageUrl}
                                    data-src={imageUrl}						
                                    className="blur-up cmp-image__image" 
                                    itemProp="contentUrl"
                                    data-cmp-hook-image="image" 
                                    alt={title}
                                    title={title}/>
                            </LazyLoad>
                        </div>
                    </Link>
                </div>
            </div>
        </div> }
        { boxOrientation === 'right' && <div className="row">
            <div className="col-8">
                <div className="m-content-box__image">
                    <Link className="a-linked-image" to={language + "/" + ctaPath} target={navTarget}>
                        <div className="cmp-image a-animated -zoom"
                            data-cmp-src={ctaPath}
                            data-title={title}
                            itemScope=""
                            itemType="http://schema.org/ImageObject">
                            <LazyLoad placeholder={<img src={lowRes} alt={title} title={title} className="blur-up cmp-image__image"/>}>
                                <img src={imageUrl}
                                    data-src={imageUrl}						
                                    className="blur-up cmp-image__image" 
                                    itemProp="contentUrl"
                                    data-cmp-hook-image="image" 
                                    alt={title}
                                    title={title}/>
                            </LazyLoad>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="col-4">
                <div className="m-content-box__content">
                    { categoryTagName && <div className="a-category-tag">
                        <span className="a-category-tag__title">{categoryTagName}</span>
                    </div> }

                    <Link to={language + "/" + ctaPath} target={navTarget}>
                        <div className="cmp-title">
                            <h3 className="cmp-title__text">{title}</h3>
                        </div>
                    </Link>
                    
                    { !isHideDesc && description && <div className="m-content-box__copy">
                        <span>{description}</span>
                    </div> }
                </div>
            </div>
        </div> }
    </div>
}

SingleTile.propTypes = propTypes;
SingleTile.defaultProps = defaultProps;

export default SingleTile;