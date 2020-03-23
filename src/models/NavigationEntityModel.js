export class NavigationEntityModel {
    constructor(node) {
        this.title              = node.title,
        this.slug               = node.slug,
        this.node_locale        = node.node_locale,
        this.pageTitle          = node.pageTitle,
        this.isHideInNav        = node.isHideInNav,
        this.subtitle           = node.subtitle,
        this.navigationTitle    = node.navigationTitle,
        this.redirect           = node.redirect,
        this.contentfulchildren = []
    }
}

