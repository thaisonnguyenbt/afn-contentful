import React from 'react';
import LazyLoad from 'react-lazyload'
import SingleFeedtile from './SingleFeedTile'
import { Link } from 'gatsby'
import lowRes from '../../../images/common/afn-1920x1280-lowres.jpg';

const propTypes = {};

const defaultProps = {};

let { getLocaleValue} = require('../../../utils/utils')

class ContentFeed extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            contentFeed : this.props.data,
            language: this.props.language,
            locale : this.props.locale
        };
    }

    render() {
        if (!this.state.contentFeed.tiles) {
            return;
        }
        const tiles = getLocaleValue(this.state.contentFeed.tiles);
        if (!tiles || !tiles.length) {
            return;
        }
        const ctaLabel = getLocaleValue(this.state.contentFeed.ctaLabel);
        const targetLink = getLocaleValue(this.state.contentFeed.targetLink);
        const locale = this.state.locale;
        const language = this.state.language;

        return <div className="contentfeed aem-GridColumn aem-GridColumn--default--10">
            <section className="o-content-feed">

                {tiles.length === 1 && <SingleFeedtile feed={tiles[0]} locale={locale} language={language} />}

                {tiles.length === 2 && tiles.map((feed, i) => {
                    return <SingleFeedtile feed={tiles[0]} locale={locale} language={language} key={i} />
                })}
                {tiles.length >= 3 && <div className="row m-content-feed__lowerBracket">
                    
                    {tiles.map((feed, i) => {
                        const title = getLocaleValue(feed.fields.title, locale);
                        const description = getLocaleValue(feed.fields.description, locale);
                        const ctaPath = getLocaleValue(feed.fields.ctaPath, locale);
                        const isHideDesc = getLocaleValue(feed.fields.isHideDesc, locale);
                        const isNewTab = getLocaleValue(feed.fields.isNewTab, locale);
                        const image = getLocaleValue(feed.fields.image, locale);
                        if (!image.fields || !image.fields.file) {
                            return <></>;
                        }
                        const imageFile = getLocaleValue(image.fields.file, locale);
                        const imageUrl = imageFile.url;

                        return <div className={i === 0 ? '' : "col"} key={i}>
                            { i === 0 && <SingleFeedtile feed={tiles[0]} locale={locale} language={language} key={i} />}
                            { i > 0 && 
                                <div className="m-content-box -small">
                                    <div className="m-content-box__image">
                                        <Link className="a-linked-image" to={this.state.language + "/" + ctaPath} target={isNewTab ? "_blank" : ""}>
                                            <div className="cmp-image a-animated -zoom" data-cmp-src={imageUrl}
                                                data-title={title} itemScope=""
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
                                    <div className="m-content-box__content">
                                        <Link to={this.state.language + "/" + ctaPath} target={isNewTab ? "_blank" : ""}>
                                            <div className="cmp-title">
                                                <h3 className="cmp-title__text">{title}</h3>
                                            </div>
                                        </Link>
                                        {!isHideDesc && description && <div className="m-content-box__copy">
                                            <span>{description}</span>
                                        </div>}
                                    </div>
                                </div>
                            }
                        </div>
                    })}
                    

                </div>}
                {ctaLabel && targetLink && <Link to={targetLink} target="_self" className="a-button-link">
                    <button className="a-button -secondary">{ctaLabel}</button>
                </Link>}
            </section>
        </div>;
    }
}

ContentFeed.propTypes = propTypes;
ContentFeed.defaultProps = defaultProps;

export default ContentFeed;