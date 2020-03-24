import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

import Carousel from '../content/Carousel'
import Article from '../content/article/Article'
import Recipe from '../content/recipe/Recipe'
import ContentFeed from '../content/contentFeed/ContentFeed'
import SingleFilterListing from '../content/SingleFilterListing'
import MultipleFilterListing from '../content/multipleFilterListing/MultipleFilterListing'
import LazyLoad from 'react-lazyload'
import lowRes from '../../images/common/afn-1920x1280-lowres.jpg';

/**
 * Rich Text Component
 */
class RichText extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            locale: this.props.locale,
            language: this.props.language,
            tags: this.props.tags,
            foodLabels: this.props.foodLabels,
            filterPages : this.props.filterPages
        };
    }
    
    render() {
        const options = {

            renderNode: {
                [BLOCKS.EMBEDDED_ASSET]: (asset) => {
                    if (!asset.data.target || !asset.data.target.fields || !asset.data.target.fields.file) {
                        return <></>
                    }
                    const file = asset.data.target.fields.file["en-US"];
                    return <>
                        {file.contentType.startsWith("image") && 
                            <LazyLoad placeholder={<img src={lowRes} alt={file.name} title={file.name} />}>
                                <img src={file.url} alt={file.name} title={file.name} />
                            </LazyLoad>}
                    </>
                },
                [BLOCKS.EMBEDDED_ENTRY]: (node) => {
                    const nodeMetaData = node.data.target.sys;
                    if (!node.data.target.fields) {
                        return null;
                    }
        
                    if (!nodeMetaData.contentType || !nodeMetaData.contentType.sys || !nodeMetaData.contentType.sys.id) {
                        return null;
                    }
                    const contentType = nodeMetaData.contentType.sys.id;
                    if (contentType === `carousel`) {
                        return <Carousel data={node.data.target.fields} language={this.state.language} locale={this.state.locale} />
                    } else if (contentType === `contentFeed`) {
                        return <ContentFeed data={node.data.target.fields} language={this.state.language} locale={this.state.locale} />
                    } else if (contentType === `singleFilterListing`) {
                        return <SingleFilterListing data={node.data.target.fields} filterPages={this.state.filterPages} language={this.state.language} locale={this.state.locale}/>
                    } else if (contentType === `multipleFilterListing`) {
                        return <MultipleFilterListing data={node.data.target.fields} filterPages={this.state.filterPages} language={this.state.language} locale={this.state.locale}/>
                    } else if (contentType === `recipe`) {
                        return <Recipe recipe={node.data.target.fields} language={this.state.language} locale={this.state.locale} foodLabels={this.state.foodLabels} />
                    } else if (contentType === `article`) {
                        return <Article article={node.data.target.fields} language={this.state.language} locale={this.state.locale} tags={this.state.tags} />
                    } else {
                        return;
                    }
                }
            }
        };
        var richText = documentToReactComponents(this.props.content.json, options)

        return <>
            {richText}
        </>;
    }
}

export default RichText;