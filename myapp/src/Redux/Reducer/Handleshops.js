

import React from 'react'

let Change = "Burger"
const Handleshops = (state = Change, action) => {
    switch (action.type) {
        case "Change": return Change = action.payload;
        default: return state
    }

}

export default Handleshops