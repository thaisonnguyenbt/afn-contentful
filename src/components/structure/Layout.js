import React from 'react'
import Header from './header/Header'
import Footer from "./Footer"

// Styles
import '../../styles/app.css'
import '../../styles/afn-base.css'
import '../../styles/font-awesome.css'

const Layout = ({ data, children }) => {
    return (
        <>
            <div className="root responsivegrid afn">
                <div className="aem-Grid aem-Grid--12 aem-Grid--default--12 aem-Grid--small--12 aem-Grid--medium--12 ">
                    <Header siteMetadata={data.siteMetadata} rootNode={data.rootNode} allLanguages={data.allLanguages} navigations={data.nav}/>
                    <div className="responsivegrid p-page-wrapper container aem-GridColumn--small--none aem-GridColumn--offset--medium--1 aem-GridColumn--medium--none aem-GridColumn--default--none aem-GridColumn--medium--10 aem-GridColumn aem-GridColumn--small--12 aem-GridColumn--offset--small--0 aem-GridColumn--default--10 aem-GridColumn--offset--default--1">
                        <div className="aem-Grid aem-Grid--default--10 aem-Grid--medium--12 aem-Grid--small--12">
                            {children}
                        </div>
                    </div>
                </div>
                <div className="viewport-bottom">
                    <Footer siteMetadata={data.siteMetadata} currentLanguage={data.rootNode.node_locale.substring(0, 2)} />
                </div>
            </div>
        </>
    )
}
export default Layout