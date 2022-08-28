export const initialState = {
    basket: [],
};

export const total = (basket) => {
    let Sum = 0;
    for (const product of basket) {
        Sum += product.price
    }
    return Sum
};

const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_TO_BASKET':
            const exist = state.basket.find(x => x.id === action.id);
            let modBasket = [...state.basket];
            if (exist) {
                modBasket = state.basket.map((x) =>
                    x.id === action.id ? {...exist, count: exist.count + action.qnty} : x
                )
            } else {
                modBasket = [...state.basket, {...action.item, count: action.qnty}];
            }
            return {
                ...state,
                basket: modBasket
            }
        
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            const Exist = state.basket.find(x => x.id === action.id);
            let newBasket = [...state.basket];
            
            if (Exist){
                if (Exist.count > 1){
                    newBasket = state.basket.map((x) =>
                    x.id === action.id ? {...Exist, count: Exist.count - 1} : x
                )
                } else {
                    if (index >= 0) {
                        newBasket.splice(index, 1)
                    } else {
                    console.warn (
                        `Product with (id: ${action.id}) is not in the cart`
                    )}
                }
                
            }
            return {
                ...state,
                basket: newBasket
            }
        default:
            return state;
    }
};

export default reducer;