import React from 'react';
import { Link } from 'gatsby';

const propTypes = {};
const defaultProps = {};

class MultipleFilterListingItemListView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            language: this.props.language,
            page : this.props.page
        };
    }

    render() {
        return <div className="m-content-box -large -left">
            <div className="row">
                <div className="col-4">
                    <div className="m-content-box__content">
                        <div className="m-content-box__upper">
                            <div className="m-icon-text">
                                {this.state.page.foodLabels && this.state.page.foodLabels.length && <div className="m-icon-text-list">
                                    {this.state.page.foodLabels.map((foodLabel, i) => {
                                        return <div key={i} className="m-icon-text-listItem -small">
                                            <div data-toggle="tooltip" data-placement="top" title="" className="m-icon-text-listItem__img w-tooltip" data-original-title="Halal">
                                                <img src={require('../../../images/common/food-icons/' + foodLabel.value + '.svg')} alt={foodLabel.name} title={foodLabel.name}  />
                                            </div>
                                        </div>
                                    })}
                                </div>}
                            </div>
                        </div>
                        <div className="m-content-box__middle">
                            <Link to={this.state.language + '/' + this.state.page.fullSlug}>
                                <div className="cmp-title">
                                    <h3 className="cmp-title__text">
                                        {this.state.page.pageTitle ? this.state.page.pageTitle : this.state.page.title}
                                    </h3>
                                </div>
                            </Link>
                            <div className="m-content-box__copy">
                                <span>{this.state.page.description && this.state.page.description.description}</span> 
                                <Link to={this.state.language + '/' + this.state.page.fullSlug} className="a-button -text">
                                    Explore More
                                </Link>
                            </div>
                        </div>
                        <div className="m-content-box__lower">
                            <div className="m-content-box__ratings">
                                <Link to={this.state.language + '/' + this.state.page.fullSlug} rating-categoryid="afn_ratings_reviews_default_configuration" rating-streamid="xxx" className="m-content-box__link no-underline">
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-8">
                    <div className="m-content-box__image">
                        <Link to={this.state.language + '/' + this.state.page.fullSlug}  className="a-linked-image a-signpost__link">
                            <div className="a-animated -zoom">
                                <div className="a-bg-img" style={{backgroundImage: `url(${this.state.page.seoMetadataImage && this.state.page.seoMetadataImage.file && this.state.page.seoMetadataImage.file.url})`}}></div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    }
}

MultipleFilterListingItemListView.propTypes = propTypes;
MultipleFilterListingItemListView.defaultProps = defaultProps;

export default MultipleFilterListingItemListView;