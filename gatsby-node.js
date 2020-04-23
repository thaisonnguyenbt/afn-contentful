const path = require(`path`);
var getNavigationInfo = require('./src/utils/utils').getNavigationInfo

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
    // Query for nodes to use in creating pages.
    resolve(
        graphql(request).then(result => {
            if (result.errors) {
                reject(result.errors)
            }
            return result;
        })
    )
});

// Implement the Gatsby API "createPages". This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;

    const createPages = makeRequest(graphql, `{
        site {
          siteMetadata {
            title
            description
            facebook
            pinterest
            instagram
          }
        }
        allContentfulPage(filter: {isRoot: {eq: true}}) {
          edges {
            node {
              id
              contentful_id
              title
              slug
              node_locale
              description {
                  description
              }
              pageTitle
              isRoot
              isHideInNav
              isHideInSecondNav
              isOpenInNewTab
              subtitle
              redirect
              navigationTitle
              updatedAt
              seoMetadataImage {
                  file {
                      url
                      fileName
                  }
              }
              contentCategory {
                category
              }
              content {
                json
              }
              tags {
                tag
                name
              }
              contentfulchildren {
                id
                contentful_id
                title
                slug
                description {
                    description
                }
                pageTitle
                isRoot
                isHideInNav
                isHideInSecondNav
                isOpenInNewTab
                subtitle
                redirect
                navigationTitle
                updatedAt
                seoMetadataImage {
                    file {
                        url
                        fileName
                    }
                }
                contentCategory {
                    category
                }
                content {
                    json
                }
                rightPanel {
                    json
                }
                tags {
                    tag
                    name
                }
                contentfulchildren {
                  id
                  contentful_id
                  title
                  slug
                  description {
                      description
                  }
                  pageTitle
                  isRoot
                  isHideInNav
                  isHideInSecondNav
                  isOpenInNewTab
                  subtitle
                  redirect
                  navigationTitle
                  updatedAt
                  seoMetadataImage {
                    file {
                        url
                        fileName
                    }
                  }
                  contentCategory {
                    category
                  }
                  content {
                      json
                  }
                  rightPanel {
                      json
                  }
                  tags {
                    tag
                    name
                  }
                  contentfulchildren {
                    id
                    contentful_id
                    title
                    slug
                    description {
                        description
                    }
                    pageTitle
                    isRoot
                    isHideInNav
                    isHideInSecondNav
                    isOpenInNewTab
                    subtitle
                    redirect
                    navigationTitle
                    updatedAt
                    seoMetadataImage {
                        file {
                            url
                            fileName
                        }
                    }
                    contentCategory {
                        category
                    }
                    content {
                        json
                    }
                    rightPanel {
                        json
                    }
                    tags {
                        tag
                        name
                    }
                    contentfulchildren {
                        id
                        contentful_id
                        title
                        slug
                        description {
                            description
                        }
                        pageTitle
                        isRoot
                        isHideInNav
                        isHideInSecondNav
                        isOpenInNewTab
                        subtitle
                        redirect
                        navigationTitle
                        updatedAt
                        seoMetadataImage {
                            file {
                                url
                                fileName
                            }
                        }
                        contentCategory {
                            category
                        }
                        content {
                            json
                        }
                        rightPanel {
                            json
                        }
                        tags {
                            tag
                            name
                        }
                    }
                  }
                }
              }
            }
          }
        }
      }`).then(result => {
        const siteMetadata = result.data.site.siteMetadata;
        const languageRoots = result.data.allContentfulPage.edges;

        const defaultlLanguageRoot = languageRoots[0].node;
        const allLanguages = languageRoots.map((item, i) => item.node.node_locale.substring(0, 2));

        var rootNode = getNavigationInfo(defaultlLanguageRoot);
        rootNode.contentfulchildren = defaultlLanguageRoot.contentfulchildren.map((child) => {
            var childNode = getNavigationInfo(child);
            if (child.contentfulchildren) {
                childNode.contentfulchildren = child.contentfulchildren.map((grandChild) => {
                    return getNavigationInfo(grandChild);
                })
            }
            return childNode;
        })
        // Language Root Page
        languageRoots.forEach(( nodeLanguage ) => {
            const languageRoot = nodeLanguage.node;
            const locale = languageRoot.node_locale;
            const language = locale.substring(0, 2);

            // languageRoot contains redundant data
            var shortenLanguageRoot = getNavigationInfo(languageRoot);
            shortenLanguageRoot.contentfulchildren = languageRoot.contentfulchildren.map((child) => {
                var childNode = getNavigationInfo(child);
                if (child.contentfulchildren) {
                    childNode.contentfulchildren = child.contentfulchildren.map((grandChild) => {
                        return getNavigationInfo(grandChild);
                    })
                }
                return childNode;
            });

            // Recursive creating pages
            let createAfnPage = function(node, pathPrefix, navigations) {
                if (node.contentfulchildren && node.contentfulchildren.length) {
                    node.contentfulchildren.forEach((contentfulchild) => {
                        let childNav = [];
                        navigations.forEach((navigation) => childNav.push(navigation));
                        childNav.push(getNavigationInfo(node));
                        createAfnPage(contentfulchild, '/' + language + node.slug, childNav);
                    })
                }
                let nav = navigations;
                nav.push(getNavigationInfo(node));

                let pageTemplateName = '';

                /**
                 * This approach breaks the application design priciple, the high level component depends on the low level component but it gives the flexibility in content managemnt.
                 */
                let tags = [];
                node.content.json.content.forEach((contentNode, i) => {
                    if (!!contentNode.data && !!contentNode.data.target && !!contentNode.data.target.sys && !!contentNode.data.target.sys.contentType) {
                        contentType = contentNode.data.target.sys.contentType;
                        if (!!contentType.sys) {
                            if (contentType.sys.id === 'singleFilterListing') {
                                if (!!contentNode.data.target.fields && !!contentNode.data.target.fields.tag) {
                                    let tag = contentNode.data.target.fields.tag;
                                    if (tag) {
                                        let tagStr = tag['en-US'].fields.tag['en-US'];
                                        tags.push(tagStr);
                                    }
                                }
                                pageTemplateName = 'singleFilterListing'
                            } else if (contentType.sys.id === 'multipleFilterListing') {
                                pageTemplateName = 'multipleFilterListing'
                            } else if (node.contentCategory && (node.contentCategory.category === 'recipe' || node.contentCategory.category === 'article')) {
                                pageTemplateName = 'detailsPageTemplate'
                            }
                        }
                    }
                });
                if (pageTemplateName === 'detailsPageTemplate') {
                    /**
                     * For RECIPE and ARTICLE DETAILS page, query page data by page id
                     */
                    createPage({
                        path: '/' + language + node.slug,
                        component: path.resolve(`src/templates/DetailsPageTemplate.js`),
                        context: {
                            allLanguages,
                            siteMetadata,
                            rootNode: shortenLanguageRoot,
                            nav,
                            id : node.id
                        },
                    });
                } else if (pageTemplateName === 'singleFilterListing') {
                    /**
                     * Template for Single Filter Listing Page
                     */
                    createPage({
                        path: '/' + language + node.slug,
                        component: path.resolve(`src/templates/SingleFilterLisingPageTemplate.js`),
                        context: {
                            allLanguages,
                            siteMetadata,
                            rootNode: shortenLanguageRoot,
                            nav,
                            id : node.id,
                            tags,
                            locale
                        },
                    });
                } else if (pageTemplateName === 'multipleFilterListing') {
                    console.log('/' + language + node.slug)
                    
                    /**
                     * Template for Miltiple Filter Listing Page
                     */
                    createPage({
                        path: '/' + language + node.slug,
                        component: path.resolve(`src/templates/MultiFilterListingPageTemplate.js`),
                        context: {
                            allLanguages,
                            siteMetadata,
                            rootNode: shortenLanguageRoot,
                            nav,
                            id : node.id,
                            contentCategory : node.contentCategory.category,
                            locale
                        },
                    });
                } else {
                    /**
                     * default to PageTwoCol template
                     */
                    createPage({
                        path: '/' + language + node.slug,
                        component: path.resolve(`src/templates/PageTwoCol.js`),
                        context: {
                            allLanguages,
                            siteMetadata,
                            rootNode: shortenLanguageRoot,
                            page: node,
                            nav
                        },
                    });
                }
            }
            
            /**
             * Trigger point for creating page flow
             */
            languageRoot.contentfulchildren.forEach((rootChild) => {
                createAfnPage(rootChild, language, [getNavigationInfo(languageRoot)])
            });
            // END Recursive creating pages

            // Create Language Root Page
            createPage({
                path: language,
                component: path.resolve(`src/templates/PageOneCol.js`),
                context: {
                    allLanguages,
                    siteMetadata,
                    rootNode: shortenLanguageRoot,
                    id: languageRoot.id,
                    nav: [shortenLanguageRoot]
                },
            });
        })

        defaultlLanguageRoot.contentfulchildren = [];
        /**
         * Global / Home page
         */
        createPage({
            path: `/`,
            component: path.resolve(`src/templates/PageOneCol.js`),
            context: {
                allLanguages,
                siteMetadata,
                rootNode: rootNode,
                id: defaultlLanguageRoot.id
            },
        })

        /**
         * 404 Page Not Found
         */
        createPage({
            path: `404`,
            component: path.resolve(`src/templates/PageNotFound.js`),
            context: {
                allLanguages,
                siteMetadata,
                rootNode: rootNode
            },
        })
    });

    return Promise.all([
        createPages
    ])
};
