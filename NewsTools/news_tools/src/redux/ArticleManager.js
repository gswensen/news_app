const DISPLAY_ARTICLES = 'articleManager/DISPLAY_ARTICLES';   

export default function reducer(state, action) {

    var initialState = {
        articlesDisplayed: ['article1', 'articles2']
    }

    switch(action.type) {
        case DISPLAY_ARTICLES:
            var newState = {}:
            var newArticle = action.payload;
            var articles = [...state.articlsDisplayed, newArticle]

            return {
                articlesDisplayed: articles
            }
        default:
        return state
    }
}