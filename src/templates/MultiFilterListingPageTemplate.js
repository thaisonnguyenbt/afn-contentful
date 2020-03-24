import React from 'react';
import Layout from "../components/structure/Layout"
import SEO from '../components/structure/Seo'
import Breadcrumb from '../components/structure/Breadcrumb'
import RichText from '../components/structure/RichText'
import { graphql } from 'gatsby'

const propTypes = {};
const defaultProps = {};

class MultiFilterLisingPageTemplate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            language: this.props.pageContext.rootNode.node_locale.substring(0, 2),
            locale: this.props.pageContext.rootNode.node_locale,
            currentPage: this.props.data.contentfulPage,
            filterPages: this.props.data.allContentfulPage.edges.map((filterPage) => filterPage.node)
        };
    }

    render() {
        let page = this.state.currentPage;
        return <>
            <Layout data={this.props.pageContext}>
                <SEO title={page.pageTitle ? page.pageTitle : page.title} />
                <Breadcrumb nav={this.props.pageContext.nav} page={page} language={this.state.language} />
                <div className="container responsivegrid aem-GridColumn--offset--medium--0 aem-GridColumn--small--none aem-GridColumn--medium--none aem-GridColumn--default--none aem-GridColumn--medium--12 aem-GridColumn aem-GridColumn--small--12 aem-GridColumn--offset--small--0 aem-GridColumn--default--7 aem-GridColumn--offset--default--0">
                    <div className="cmp-container">
                        {page.content && <RichText content={page.content} locale={this.state.locale} language={this.state.language} tags={page.tags} filterPages={this.state.filterPages} />}
                    </div>
                </div>
                <div className="container responsivegrid aem-GridColumn--offset--medium--0 aem-GridColumn--small--none aem-GridColumn--default--none aem-GridColumn--medium--newline aem-GridColumn--medium--12 aem-GridColumn aem-GridColumn--small--12 aem-GridColumn--offset--small--0 aem-GridColumn--default--3 aem-GridColumn--offset--default--0">
                    <div className="cmp-container">
                        {page.rightPanel && <RichText content={page.rightPanel}/>}
                        { page.seoMetadataImage && page.seoMetadataImage.file && <img src={page.seoMetadataImage.file.url} title={page.title} alt={page.title} />}
                    </div>
                </div>
            </Layout>
        </>
    }
}

MultiFilterLisingPageTemplate.propTypes = propTypes;
MultiFilterLisingPageTemplate.defaultProps = defaultProps;

export default MultiFilterLisingPageTemplate;

export const postQuery = graphql`
    query($id: String!, $contentCategory: String!, $locale: String!) {
        contentfulPage(id: { eq: $id }) {
            ...BasicPageFields
        }
        allContentfulPage(filter: {contentCategory: {category: {eq: $contentCategory}}, node_locale: {eq: $locale}}) {
            edges {
                node {
                    ...FilterEntryFields
                }
            }
        }
    }`
