export const recipeDetailsPageFields = graphql`
    fragment BasicPageFields on ContentfulPage {
        id
        contentful_id
        node_locale
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
        foodLabels {
            value
            name
        }
    }`

export const filterEntryFields = graphql`
    fragment FilterEntryFields on ContentfulPage {
        title
        slug
        description {
            description
        }
        pageTitle
        subtitle
        navigationTitle
        updatedAt
        seoMetadataImage {
            file {
                url
                fileName
            }
        }
        tags {
            tag
            name
        }
        foodLabels {
            value
            name
        }
    }`