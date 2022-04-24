import { createStore } from 'redux'

const initialState = {
    Data: [],
    Change: '',
    Value: null,

}



const reducer = (state = initialState, action ) => {
        switch(action.type)
        {
            case 'DATA': return {...state, Data :[...action.paylod]}
            case 'CHANGE': return { ...state, Change: action.payload }
            case 'CHANGE_VALUE': return { ...state, Value: action.payload }
            default: return state
        }

}
const store  = createStore(reducer)
export default store