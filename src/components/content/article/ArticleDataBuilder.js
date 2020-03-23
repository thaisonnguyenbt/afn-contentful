var getLocaleValue = require('../../../utils/utils').getLocaleValue;

var getArticleData = function(article, locale) {

    // title
    let articletitle = getLocaleValue(article.articletitle, locale);

    // article description
    let articleDescription = getLocaleValue(article.articleDescription, locale);

    // masthead image
    let imageMastheadUrl = ''
    let imageMasthead = getLocaleValue(article.imageMasthead, locale);
    if (imageMasthead) {
        let imageMastheadFile = imageMasthead.fields.file;
        if (imageMastheadFile) {
            imageMastheadUrl = getLocaleValue(imageMastheadFile).url;
        }
    }

    let account = getLocaleValue(article.account, locale);
    let author = getLocaleValue(article.author, locale);
    let articleDate = getLocaleValue(article.articleDate, locale);
    if (!!articleDate) {
        articleDate = new Date(articleDate);
        if (!!articleDate) {
            articleDate = articleDate.toString().substr(0, 15);
        }
    }
    let showCopyLink = getLocaleValue(article.showCopyLink, locale);
    let showEmailBtn = getLocaleValue(article.showEmailBtn, locale);
    let videoPlayer = getLocaleValue(article.videoPlayer, locale);
    let videoPlayerSearch = getLocaleValue(article.videoPlayerSearch, locale);

    return { articletitle, articleDescription, imageMastheadUrl, account, author, articleDate, showCopyLink, showEmailBtn, videoPlayer, videoPlayerSearch };
}

exports.getArticleData = getArticleData;