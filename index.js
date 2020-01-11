const redux = require('redux')
const createStore = redux.createStore
const combineReducer = redux.combineReducers

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICE_CREAM = 'BUY_ICE_CREAM'

function buyCake() {
    return  {
        type: BUY_CAKE,
        info: 'Buy One Cake'
    }
}

function buyIceCream() {
    return  {
        type: BUY_ICE_CREAM,
        info: 'Buy One Ice Cream'
    }
}

const initialCakeState = {
    numOfCake: 10
}
const initialIceCreamState = {
    numOfIceCream: 20
}

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCake: state.numOfCake - 1,
                // info: action.info
            }    
        default: 
            return state
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICE_CREAM:
            return {
                ...state,
                numOfIceCream: state.numOfIceCream - 1,
                // info: action.info
            }    
        default: 
            return state
    }
}

const rootReducer = combineReducer({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

const store = createStore(rootReducer)
console.log('Initial State', store.getState());
const unsubscribe = store.subscribe(() => console.log('Update State', store.getState()))

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()

