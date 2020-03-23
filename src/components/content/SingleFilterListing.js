import React from 'react';
import { Link } from 'gatsby'
import LazyLoad from 'react-lazyload'
import lowRes from '../../images/common/afn-1920x1280-lowres.jpg';

var getLocaleValue = require('../../utils/utils').getLocaleValue

const propTypes = {};
const defaultProps = {};

class SingleFilterListing extends React.Component {
    constructor(props) {
        super(props);
        
        let locale = this.props.locale;
        let tagObj = getLocaleValue(this.props.data.tag, locale).fields;
        let targetTag = getLocaleValue(tagObj.tag);
        // let sortByField = getLocaleValue(this.props.data.sortByField);
        let itemPerPage = getLocaleValue(this.props.data.itemPerPage, locale);
        let sortByOrder = getLocaleValue(this.props.data.sortByOrder, locale);

        let pages = this.props.filterPages.filter(page => {
            if (!page.tags || !page.tags.length) {
                return false;
            }
            return page.tags.filter(tag => tag.tag === targetTag).length > 0;
        })

        pages.sort(function(a, b) {
            if (!a.updatedAt) return -1;
            if (!b.updatedAt) return 1;
            let aTime = new Date(a.updatedAt);
            let bTime = new Date(b.updatedAt);
            if (aTime.getTime() > bTime.getTime()) {
                if (sortByOrder === 'asc') {
                    return 1;
                } else {
                    return -1;
                }
            } else if (aTime.getTime() < bTime.getTime())  {
                if (sortByOrder === 'asc') {
                    return -1;
                } else {
                    return 1;
                }
            } else {
                return 0
            }
        })

        this.state = {
            pages: pages,
            language: this.props.language,
            itemPerPage : itemPerPage,
            shown: itemPerPage
        };

        this.showMore = this.showMore.bind(this);
    }

    showMore() {
        this.setState(state => ({
            shown: state.shown + state.itemPerPage
        }));
    }

    render() {
        return <div>
            <div className="filteredlisting">
                <section data-listing="default" data-endpoint="https://search-api.swiftype.com/api/v1/public/engines/search.json?engine_key=68B2HrA4ha1exs3QeEmr&amp;per_page={PERPAGE}&amp;page={PAGE}&amp;{FILTERS}&amp;{SORTBY}&amp;{SORTORDER}" data-filter="page-two-column-landing-details" data-subfilter="asian-food-network:how-to" data-subfiltername="How-To" data-itemsperpage="10" data-sortfield="published_at" data-sortorder="asc" data-foodlabelimagepath="/content/dam/afn/global/en/food-icons" data-foodlabelext="svg" className="o-listing -recipe">
                    <div className="o-data-listing">
                        {this.state.pages && this.state.pages.map((page, i) => {
                            return <div className="m-data-listing__item" key={i}>
                                {i < this.state.shown && <div className="m-content-box -large -left">
                                    <div className="row">
                                        <div className="col-4">
                                            <div className="m-content-box__content">
                                                <div className="m-content-box__middle">
                                                    <Link to={this.state.language + '/' + page.fullSlug}>
                                                        <div className="cmp-title">
                                                            <h3 className="cmp-title__text">{page.pageTitle ? page.pageTitle : page.title}</h3>
                                                        </div>
                                                    </Link>
                                                    <div className="m-content-box__copy">
                                                        <span>{page.description ? page.description.description : ''}</span> 
                                                        <Link to={this.state.language + '/' + page.fullSlug} className="a-button -text">Explore More</Link>
                                                    </div>
                                                </div>
                                                <div className="m-content-box__lower">
                                                    <div className="m-content-box__ratings">
                                                        <Link to={this.state.language + '/' + page.fullSlug} className="m-content-box__link no-underline"></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-8">
                                            <div className="m-content-box__image">
                                                <Link to={this.state.language + '/' + page.fullSlug} className="a-linked-image">
                                                    <div className="a-animated -zoom">
                                                        <LazyLoad placeholder={<div className="a-bg-img" style={{backgroundImage: `url(${lowRes})`}}></div>}>
                                                            { page.seoMetadataImage && page.seoMetadataImage.file && page.seoMetadataImage.file.url &&<div className="a-bg-img" style={{
                                                                    backgroundImage: `url(${page.seoMetadataImage.file.url})`
                                                            }}>
                                                            </div>}
                                                        </LazyLoad>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>}
                            </div>
                        })}
                        
                        { this.state.shown < this.state.pages.length && <button className="a-button -secondary" onClick={this.showMore}>Show More</button>}
                    </div>
                </section>
            </div>
            
        </div>;
    }
}

SingleFilterListing.propTypes = propTypes;
SingleFilterListing.defaultProps = defaultProps;

export default SingleFilterListing;