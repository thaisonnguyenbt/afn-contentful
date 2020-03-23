import React from 'react';
import { Link } from 'gatsby';
import halalIcon from '../../../images/common/food-icons/halal.svg';
import glutenFreeIcon from '../../../images/common/food-icons/gluten-free.svg';
import healthyIcon from '../../../images/common/food-icons/healthy.svg';
//import noAlcoholIcon from '../../../images/common/food-icons/no-alcohol.svg';
//import noMilkIcon from '../../../images/common/food-icons/no-milk.svg';
//import noNutsIcon from '../../../images/common/food-icons/no-nuts.svg';
//import noPorkIcon from '../../../images/common/food-icons/no-pork.svg';
//import sugarFreeIcon from '../../../images/common/food-icons/sugar-free.svg';
//import veganIcon from '../../../images/common/food-icons/vegan.svg';
//import vegetarianIcon from '../../../images/common/food-icons/vegetarian.svg';
//import withAlcoholIcon from '../../../images/common/food-icons/with-alcohol.svg';

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
                                <div className="m-icon-text-list">
                                    <div className="m-icon-text-listItem -small">
                                        <div data-toggle="tooltip" data-placement="top" title="" className="m-icon-text-listItem__img w-tooltip" data-original-title="Halal">
                                            <img src={halalIcon} alt="Halal" title="Halal" />
                                        </div>
                                    </div>
                                    <div className="m-icon-text-listItem -small">
                                        <div data-toggle="tooltip" data-placement="top" title="" className="m-icon-text-listItem__img w-tooltip" data-original-title="Halal">
                                            <img src={glutenFreeIcon} alt="Halal" title="Halal" />
                                        </div>
                                    </div>
                                    <div className="m-icon-text-listItem -small">
                                        <div data-toggle="tooltip" data-placement="top" title="" className="m-icon-text-listItem__img w-tooltip" data-original-title="Halal">
                                            <img src={healthyIcon} alt="Halal" title="Halal" />
                                        </div>
                                    </div>
                                </div>
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