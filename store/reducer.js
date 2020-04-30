import * as actions from './actions'

const initialState = {
    activePage: 'home',
}

const reducer = (state = initialState, action) => {
    switch (action) {
        case actions.ACTIVE_PAGE:
            return {
                activePage: action.activePg
            };
        default:
            return state;
    }
}

export default reducer