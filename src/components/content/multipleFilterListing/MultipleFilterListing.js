import React from 'react';
import { Link } from 'gatsby'
import MultipleFilterListingItemListView from './MultipleFilterListingItemListView'
import MultipleFilterListingItemGridView from './MultipleFilterListingItemGridView'

var getLocaleValue = require('../../../utils/utils').getLocaleValue;

const propTypes = {};
const defaultProps = {};

let { getFilters } = require('./MultipleFilterListingDataBuilder');

class MultipleFilterListing extends React.Component {
    constructor(props) {
        super(props);
        let viewMode = 'list',
            itemPerPage = getLocaleValue(this.props.data.itemPerPage),
            numOfShown = itemPerPage,
            filters = getFilters(this.props.data.filters),
            selectedFilter = filters[0];

        this.state = {
            isShowDropdown : false,
            locale : this.props.locale,
            language: this.props.language,
            allPages: this.props.filterPages,
            pages : this.props.filterPages,
            itemPerPage,
            numOfShown,
            viewMode,
            filters,
            selectedFilter
        };

        // Bind event handler functions to the current component context
        this.showHideDropdown = this.showHideDropdown.bind(this);
        this.highlightDropdownOption = this.highlightDropdownOption.bind(this);
        this.selectFilter = this.selectFilter.bind(this);
        this.changeViewMode = this.changeViewMode.bind(this);
        this.showMore = this.showMore.bind(this);
    }

    /**
     * Show or Hide filter selection dropdown
     */
    showHideDropdown() {
        this.setState(state => ({
            isShowDropdown : !state.isShowDropdown
        }))
    }

    /**
     * Highlight the current option when hover on it
     * 
     * @param {DocumentEvent} event 
     */
    highlightDropdownOption(event) {
        event.target.classList.add("vs__dropdown-option--highlight");
        var sibling = event.target.parentNode.firstChild;
        while (sibling) {
            if (sibling.nodeType === 1 && sibling !== event.target) {
                sibling.classList.remove("vs__dropdown-option--highlight");
            }
            sibling = sibling.nextSibling
        }
    }

    /**
     * When select one option in the filter selection list
     * 
     * @param {AfnFilter} filter 
     */
    selectFilter(filter) {
        if (filter.subFilters && filter.subFilters.length) {
            this.setState(state => ({
                selectedFilter : filter,
                pages: filter.subFilters.map((subFilter) => {
                    return {
                        name : subFilter.title,
                        ctaPath : subFilter.ctaPath,
                        pages : state.allPages.filter((page) => {
                            if (!page.tags || !page.tags.length) {
                                return false;
                            }
                            let isKeep = false;
                            page.tags.forEach((tag) => {
                                if (tag.tag === subFilter.tag.tag) {
                                    isKeep = true;
                                }
                            })
                            return isKeep;
                        })
                    }
                })
            }), () => {
                if (this.state.viewMode === 'list') {
                    this.changeViewMode('grid');
                } else {
                    this.changeViewMode('list');
                }
            })
        } else {
            this.setState(state => ({
                selectedFilter : filter,
                pages : state.allPages
            }), () => {
                this.forceUpdate()
            });
        }
    
        this.showHideDropdown();
    }

    /**
     * Switching between 'list' and 'grid' view modes
     * 
     * @param {String} viewMode 'list' or 'grid'
     */
    changeViewMode(viewMode) {
        this.setState(({
            viewMode: viewMode
        }))
    }

    /**
     * Show more results
     */
    showMore() {
        this.setState(state =>({
            numOfShown : state.numOfShown + state.itemPerPage
        }))
    }

    /**
     * Render HTML for Multiple Filter Listing component
     */
    render() {
        return <div className="fulllisting">
            <section data-listing="listingWithMultipleFilters" data-filter="page-recipe-details" data-itemsperpage="12" data-sortfield="published_at" data-sortorder="desc" data-foodlabelimagepath="/content/dam/afn/global/en/food-icons" data-foodlabelext="svg" className="o-listing -recipe">
                <div className="m-listing-navbar">
                    <nav aria-labelledby="filterdropdown" className="m-filter-dropdown">
                        <div className="m-filter-dropdown-container">
                            <div dir="auto" className={this.state.isShowDropdown ? "v-select m-filter-dropdown__list vs--single vs--unsearchable vs--open" : "v-select m-filter-dropdown__list vs--single vs--unsearchable"} data-get="categories" data-endpoint="/content/afn/global/en/recipes/_jcr_content/root/responsivegrid_582125638/container/fulllisting.filter.list.json" code="filterId">
                                <a href className="vs__dropdown-toggle" role="button" onClick={this.showHideDropdown}>
                                    <div className="vs__selected-options"> 
                                        <input placeholder={this.state.selectedFilter.title} readOnly="readOnly" aria-label="Search for option" type="search" autoComplete="off" className="vs__search"/>
                                    </div>
                                    <div className="vs__actions">
                                        <button type="button" title="Clear selection" className="vs__clear" style={{display: 'none'}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10">
                                                <path d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"></path>
                                            </svg>
                                        </button>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" role="presentation" className="vs__open-indicator">
                                            <path d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"></path>
                                        </svg>
                                        <div className="vs__spinner" style={{display: 'none'}}>Loading...</div>
                                    </div>
                                </a>
                                { this.state.isShowDropdown && <ul role="listbox" className="vs__dropdown-menu" onMouseLeave={this.showHideDropdown}>
                                    { this.state.filters && this.state.filters.map((filter, i) => {
                                        return <li key={i} className="vs__dropdown-option"
                                            onClick={(e) => this.selectFilter(filter)}
                                            onMouseOver={(e) => this.highlightDropdownOption(e)} 
                                            onFocus={(e) => this.highlightDropdownOption(e)}
                                            onKeyDown={(e) => this.selectFilter(filter)}>
                                            {filter.title}
                                        </li>
                                    })}
                                </ul> }
                            </div>
                        </div>
                    </nav>
                    <nav aria-labelledby="viewtab" className="m-view-tabs">
                        <button onClick={(e) => this.changeViewMode('grid')} className={this.state.viewMode === 'grid' ? "a-button -icon m-view-tabs__button active" : "a-button -icon m-view-tabs__button"}>
                            <span className="icon-afn-recipebox-grid"></span>
                        </button>
                        <button onClick={(e) => this.changeViewMode('list')} className={this.state.viewMode === 'list' ? "a-button -icon m-view-tabs__button active" : "a-button -icon m-view-tabs__button"}>
                            <span className="icon-afn-list-view"></span>
                        </button>
                    </nav>
                </div>
                { (!this.state.selectedFilter.subFilters || !this.state.selectedFilter.subFilters.length) && <>
                    { this.state.viewMode === 'list' && <div className="o-data-listing">
                        {this.state.pages.slice(0, this.state.numOfShown).map((page, i) => {
                            return <div key={i} className="m-data-listing__item">
                                <MultipleFilterListingItemListView page={page} language={this.state.language} />
                            </div>
                        })}
                        <button onClick={this.showMore} className="a-button -secondary">Show More</button>
                    </div>}
                    { this.state.viewMode === 'grid' && <div className="o-data-listing grouped-view">
                        <div className="row row-eq-height m-data-listing-group__items">
                            { this.state.pages.slice(0, this.state.numOfShown).map((page, i) => {
                                return <div key={i} className="col-12 col-md-4 m-data-listing__item no-tag">
                                    <MultipleFilterListingItemGridView page={page} language={this.state.language} />
                                </div>})
                            }
                            <button onClick={this.showMore} className="a-button -secondary">Show More</button>
                        </div>
                    </div> }
                </>}
                { !!this.state.selectedFilter.subFilters && !!this.state.selectedFilter.subFilters.length && <>
                    { this.state.viewMode === 'list' && <div className="o-data-listing listing-view">
                        { !!this.state.pages && this.state.pages.map((group, j) => {
                            return <div key={j} className="m-data-listing-group">
                                <div className="m-data-listing-group__title">
                                    <h3>{group.name}</h3>
                                </div>
                                { !!group.pages && group.pages.slice(0, 3).map((page, i) => {
                                    return <div key={i} className="m-data-listing__item">
                                        <MultipleFilterListingItemListView page={page} language={this.state.language} />
                                    </div>
                                })}
                                <Link to={this.state.language + group.ctaPath} className="m-data-listing-group__link">
                                    <button className="a-button -secondary">View All</button>
                                </Link>
                            </div>
                        })}
                    </div> }
                    { this.state.viewMode === 'grid' && <div className="o-data-listing grouped-view">
                        { !!this.state.pages && this.state.pages.map((group, j) => {
                            return <div key={j} className="m-data-listing-group">
                                <div className="m-data-listing-group__title">
                                    <h3>{group.name}</h3>
                                </div>
                                <div className="row row-eq-height m-data-listing-group__items">
                                    { !!group.pages && group.pages.slice(0, 3).map((page, i) => {
                                        return <div key={i} className="col-12 col-md-4 m-data-listing__item">
                                            <MultipleFilterListingItemGridView page={page} language={this.state.language} />
                                        </div>
                                    })}
                                </div>
                                <Link to={this.state.language + group.ctaPath} className="m-data-listing-group__link">
                                    <button className="a-button -secondary">View All</button>
                                </Link>
                            </div>
                        })}
                    </div> }
                </>}
            </section>
        </div>
    }
}

MultipleFilterListing.propTypes = propTypes;
MultipleFilterListing.defaultProps = defaultProps;

export default MultipleFilterListing;