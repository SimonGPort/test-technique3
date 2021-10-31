const initState = {
    products: []
}


const rootReducer = (state = initState, action) => {
    if (action.type === "FETCH_BREW") {
        return {
            products: action.products
        }
    }
    else{return state}
}

export default rootReducer