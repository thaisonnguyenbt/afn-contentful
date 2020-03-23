var getLocaleValue = require('../../../utils/utils').getLocaleValue;

var getFilters = function(filters, locale) {
    let localeFilters = getLocaleValue(filters, locale);

    let extractFilterData = function(localeFilter, locale) {
        let filterFields = localeFilter.fields;
        let name = getLocaleValue(filterFields.name, locale),
            title = getLocaleValue(filterFields.title, locale),
            ctaPath = getLocaleValue(filterFields.ctaPath, locale);
        if (!filterFields.tag) {
            return { name, title };
        }
        let tagFields = getLocaleValue(filterFields.tag, locale).fields;
        let tag = {
                tag : getLocaleValue(tagFields.tag, locale),
                name : getLocaleValue(tagFields.name, locale)
            };
        let subFilters = [];
        if (filterFields.subFilters) {
            let localeSubfilters = getLocaleValue(filterFields.subFilters);
            if (localeSubfilters && localeSubfilters.length) {
                localeSubfilters.forEach((localeSubfilter) => {
                    subFilters.push(extractFilterData(localeSubfilter));
                })
            }
        }
        return {name, title, tag, subFilters, ctaPath};
    }

    let resultFilters = [];
    localeFilters.forEach(localeFilter => {
        let extractedFilterData = extractFilterData(localeFilter);
        if (extractedFilterData) {
            resultFilters.push(extractedFilterData);
        }
    });
    return resultFilters;
}

exports.getFilters = getFilters;