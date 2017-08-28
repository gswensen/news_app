import React, {Component} from 'react';


class ArticleView extends Component {
    render() {
        return (
            <div>
                <section className='article_view_container'>
                    {
                        this.props.articles.map((item)=> {
                            return (
                                <div>
                                    <div className='article'>{item}</div>
                                    <div className='space'></div>
                                </div>
                            )
                        })
                    }
                </section>      
            </div>
        )
    }
}
export default ArticleView;