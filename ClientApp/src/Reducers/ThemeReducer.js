const ThemeReducer = (state = 'light', action) => {
    switch(action.type){
        case 'CHANGE_THEME':
            return action.theme;
        default:
            return state;
    }
}

export default ThemeReducer;