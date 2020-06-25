export default (state, action) => {
    switch(action.type) {
        case 'addToCart':
            return {
                ...state,
                cart: [action.payload.product, ...state.cart]
            }
        case 'remove':
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }
        default:
            return state;
    }
}