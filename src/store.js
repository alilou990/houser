import {createStore} from 'redux'

const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: 0,
    img: '',
    mortgage: 0,
    rent: 0
}

function reducer(state = initialState, action){
    switch (type){
        default:
            return state;
    }
}

export default createStore(reducer)