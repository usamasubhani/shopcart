export default (state, action) => {
    switch(action.type) {
        case 'addToCart':
            return {
                ...state,
                cart: [action.payload, ...state.cart]
            }
        case 'remove':
            return {
                ...state,
                cart: state.cart.filter(item => item.product.id !== action.payload)
            }
        default:
            return state;
    }
}