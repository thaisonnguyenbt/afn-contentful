const { defaultLocale } = require(`./siteConfig`)

var getLocaleValue = function(obj, locale) {
    if (!obj) {
        return;
    }
    if (obj[locale]) {
        return obj[locale];
    }
    return obj[defaultLocale];
}

var getNavigationInfo = function(node) {
    return {
        title : node.title,
        slug : node.slug,
        isRoot : node.isRoot,
        node_locale : node.node_locale,
        pageTitle : node.pageTitle,
        isHideInNav : node.isHideInNav,
        subtitle : node.subtitle,
        navigationTitle : node.navigationTitle,
        redirect : node.redirect,
        contentfulchildren : []
    };
}

exports.getLocaleValue = getLocaleValue;
exports.getNavigationInfo = getNavigationInfo;