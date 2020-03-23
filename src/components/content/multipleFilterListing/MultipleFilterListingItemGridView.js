import React from 'react';
import { Link } from 'gatsby'

const propTypes = {};
const defaultProps = {};

class MultipleFilterListingItemGridView extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        language: this.props.language,
        page : this.props.page
    };
}

    render() {
        return <>
            <div className="m-signpost">
                <div className="a-signpost__thumbnail">
                    <Link to={this.state.language + '/' + this.state.page.fullSlug} className="a-linked-image a-signpost__link">
                        <div className="a-animated -zoom">
                            <div className="a-bg-img" style={{backgroundImage: `url(${this.state.page.seoMetadataImage && this.state.page.seoMetadataImage.file && this.state.page.seoMetadataImage.file.url})`}}></div>
                        </div>
                    </Link>
                </div>
                <div className="m-signpost__content">
                    <div className="a-signpost__title">
                        <Link to={this.state.language + '/' + this.state.page.fullSlug} className="a-signpost__link">
                            <h4>{this.state.page.pageTitle ? this.state.page.pageTitle : this.state.page.title}</h4>
                        </Link>
                    </div>
                    <div className="m-signpost__ratings">
                        <Link to={this.state.language + '/' + this.state.page.fullSlug} rating-categoryid="afn_ratings_reviews_default_configuration" rating-streamid="xxx" className="a-signpost__link no-underline">
                        </Link>
                    </div>
                </div>
            </div>
        </>
    }
}

MultipleFilterListingItemGridView.propTypes = propTypes;
MultipleFilterListingItemGridView.defaultProps = defaultProps;

export default MultipleFilterListingItemGridView;