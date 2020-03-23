import React from 'react';
import Layout from "../components/structure/Layout"
import SEO from '../components/structure/Seo'
import Breadcrumb from '../components/structure/Breadcrumb'
import RichText from '../components/structure/RichText'
const propTypes = {};

const defaultProps = {};

/**
 * Two Colums Page Layout
 */
class PageTwoCol extends React.Component {
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
        return <>
            <Layout data={this.props.pageContext}>
                <SEO title={page.pageTitle ? page.pageTitle : page.title} />
                <Breadcrumb nav={this.props.pageContext.nav} page={page} language={this.state.language} />
                <div className="container responsivegrid aem-GridColumn--offset--medium--0 aem-GridColumn--small--none aem-GridColumn--medium--none aem-GridColumn--default--none aem-GridColumn--medium--12 aem-GridColumn aem-GridColumn--small--12 aem-GridColumn--offset--small--0 aem-GridColumn--default--7 aem-GridColumn--offset--default--0">
                    <div className="cmp-container">
                        {page.content && <RichText content={page.content} locale={this.state.locale} language={this.state.language} />}
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

PageTwoCol.propTypes = propTypes;
PageTwoCol.defaultProps = defaultProps;

export default PageTwoCol;