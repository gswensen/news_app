import React, {Component} from 'react';
// import { store } from 'react-redux';



class ArticleView extends Component {

    constructor(props) {
        super(props)

        this.state = {
            articles: ['article1 Minim ad elit adipisicing proident consectetur id magna mollit voluptate excepteur consectetur excepteur ad et. Sint officia ullamco aliquip anim veniam id id non adipisicing labore. Esse excepteur est non pariatur est mollit anim amet deserunt proident qui. Minim aliqua consequat consectetur voluptate elit pariatur culpa. Ea incididunt in excepteur aliquip pariatur deserunt irure nostrud est laborum laboris aliquip laboris nisi. Voluptate voluptate fugiat commodo adipisicing aliqua do elit culpa.', 
            'articles2 Aliquip officia minim ut cillum aliqua voluptate fugiat voluptate cillum proident sunt eu consectetur. Qui sunt anim nisi labore do veniam. Adipisicing cillum dolor laboris sint ad exercitation. Sint deserunt aliqua sint ipsum. Lorem esse officia ut nisi minim adipisicing.', 
            'article3 3Commodo minim consectetur ea aute ea. Pariatur magna excepteur sint non nulla nulla est quis irure dolore tempor officia reprehenderit duis. Eiusmod enim sint velit do. Ad irure Lorem cillum exercitation eu est commodo incididunt dolor ex et consequat ipsum. Ipsum mollit laborum pariatur ea eu eu enim irure amet do dolore veniam labore. Pariatur eu ipsum quis quis aute quis culpa quis id. Et aute nostrud velit mollit laboris laborum anim consectetur irure proident sit fugiat nisi reprehenderit.', 
            'article4 Aliqua ex minim mollit labore duis id ad. Est fugiat pariatur ea aliquip ipsum labore. Pariatur ex esse id ex nostrud exercitation exercitation sit. Consectetur et cupidatat ex nulla cupidatat et do qui Lorem cillum cillum.', 
            'articles5 Sint et tempor aliqua quis esse. Aute occaecat occaecat nulla sunt quis. Enim adipisicing non sunt amet. Fugiat qui id dolore officia ullamco do ad nisi excepteur mollit ullamco magna velit deserunt. Do aute consequat laboris nisi Lorem quis irure enim. Aute voluptate culpa esse sint nulla occaecat ex adipisicing adipisicing.', 
            'articles6 Irure fugiat et eu occaecat veniam fugiat ut mollit dolore duis reprehenderit minim in. Reprehenderit duis in adipisicing proident voluptate voluptate. Voluptate eu ullamco ullamco sunt. Commodo nisi eiusmod commodo incididunt. Nulla ut do officia veniam incididunt ad ullamco qui esse labore. Est culpa non sint pariatur dolor incididunt tempor qui sint. Dolor ad non sit quis adipisicing duis.']
        }
    }

    render() {
        
        const { articlesDisplayed } = this.props;

        return (
            <div>
                <div className='article_view_container'>   
                    {
                        this.state.articles.map(function(item){
                            return (
                                <div>
                                        <div className='article'>{item}
                                               
                                        </div>
                                        <div className='space'>
                                        </div> 
                                    
                                </div>    
                            )
                        })
                    }
                </div>      
            </div>
        )
    }
}
// function mapStateToProps(state) {
//     return {
//       articlesDisplayed: state.articles
//     }
//   }
export default ArticleView;