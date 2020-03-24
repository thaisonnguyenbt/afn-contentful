import React from 'react';
import Layout from '../components/structure/Layout'
import SEO from '../components/structure/Seo'
import notfound from '../images/common/404.jpg'

const propTypes = {};

const defaultProps = {};

/**
 * 404 Page Layout
 */
class PageNotFound extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return <Layout data={this.props.pageContext}>
            <SEO title="404: Not found" />
            <div style={{textAlign : 'center'}}>
            <img src={notfound} title="Not Found" alt="Not Found"/>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
            </div>
        </Layout>
    }
}

PageNotFound.propTypes = propTypes;
PageNotFound.defaultProps = defaultProps;

export default PageNotFound;