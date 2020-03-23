import React from 'react';
import { Link } from 'gatsby'

/**
 * Main Breadcrumb Component
 */
const Breadcrumb = ({nav, page, language}) => {
    const rootSlug = language === 'en' ? '/' : '/' + language;
    let slug = rootSlug;
    return <>
        <div className="breadcrumb">
            <nav className="cmp-breadcrumb">
            { !page.isRoot && 
                <ol className="cmp-breadcrumb__list" itemType="http://schema.org/BreadcrumbList">
                    {nav && nav.length && nav.slice(0, nav.length - 1).map((item, i) => {
                        slug = slug + '/' + item.slug;
                        return <li key={i} className="cmp-breadcrumb__item" itemProp="itemListElement" itemType="http://schema.org/ListItem">
                            {item.isRoot && <>
                                <Link to={rootSlug} className="cmp-breadcrumb__item-link" itemProp="item">
                                    <span itemProp="name">{item.navigationTitle ? item.navigationTitle : item.pageTitle ? item.pageTitle : item.title}</span>
                                </Link>
                                <meta itemProp="position" content="1"/>
                            </>}
                            {!item.isRoot && <>
                                <Link to={slug} className="cmp-breadcrumb__item-link" itemProp="item">
                                    <span itemProp="name">{item.navigationTitle ? item.navigationTitle : item.pageTitle ? item.pageTitle : item.title}</span>
                                </Link>
                                <meta itemProp="position" content="1"/>
                            </>}
                        </li>
                    })}
                    {nav && nav.length && <li className="cmp-breadcrumb__item cmp-breadcrumb__item--active" itemProp="itemListElement" itemType="http://schema.org/ListItem">
                        <span itemProp="name">{page.navigationTitle ? page.navigationTitle : page.pageTitle ? page.pageTitle : page.title}</span>
                        <meta itemProp="position" content={nav.length}/>
                    </li>}
                </ol>
            }
            </nav>
        </div>
    </>
}

export default Breadcrumb;