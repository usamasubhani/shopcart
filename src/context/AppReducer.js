export default (state, action) => {
    switch(action.type) {
        case 'addToCart':
            return {
                ...state,
                cart: [action.payload, ...state.cart]
            }
        default:
            return state;
    }
}