

function questionReducer(state ={}, action) {


    switch (action.type) {
        case 'delete': {
            return state;
        }

        default: {
            return state
        }
    }
}

export default questionReducer;