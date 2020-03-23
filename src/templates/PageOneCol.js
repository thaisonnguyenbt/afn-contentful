import React from 'react';
import Layout from "../components/structure/Layout"
import SEO from '../components/structure/Seo'
import Breadcrumb from '../components/structure/Breadcrumb'
import RichText from '../components/structure/RichText'

const propTypes = {};

const defaultProps = {};

/**
 * One Colums Page Layout
 */
class PageOneCol extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: this.props.pageContext.page,
            language: this.props.pageContext.rootNode.node_locale.substring(0, 2),
            locale: this.props.pageContext.rootNode.node_locale
        };
    }

    render() {
        const page = this.state.page;
        return <Layout data={this.props.pageContext}>
            <SEO title={page.pageTitle ? page.pageTitle : page.title} />
            <Breadcrumb nav={this.props.pageContext.nav} page={page} language={this.state.language} />
            {page.content && <RichText content={page.content} locale={this.state.locale} language={this.state.language}  />}
        </Layout>
    }
}

PageOneCol.propTypes = propTypes;
PageOneCol.defaultProps = defaultProps;

export default PageOneCol;