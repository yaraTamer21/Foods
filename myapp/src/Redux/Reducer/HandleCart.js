
let cart = []
const HandleCart = (state = cart, action) => {
    switch (action.type) {
        case "Add":
            {
                let exists = state.find((x) => x.id == action.payload.id)
                if (exists) {
                    return state.map((i) => i.id == action.payload.id ? { ...i, qty: action.payload.qty + 1 } : i)
                }
                else {
                    return [...state, action.payload]
                }
            }
        case "remove":
            {
                let exists1= state.find((x) => x.id == action.payload.id)
                if (exists1.qty > 1) {
                    return state.map((i) => i.id == action.payload.id ? { ...i, qty: action.payload.qty - 1 } : i)
                }
                else if (exists1.qty == 1) {
              return state.filter((i)=>i.id !== action.payload.id)

                 }
            }




        default: return cart

    }

}

export default HandleCart