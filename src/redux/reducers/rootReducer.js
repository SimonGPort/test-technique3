const initState = {
    products: [],
    loading:true
}


const rootReducer = (state = initState, action) => {
    if (action.type === "FETCH_BREW") {
        return {
            products: action.products,
            loading:false
        }
    }
    else{return state}
}

export default rootReducer