import { createStore } from 'redux'

const initialState = {
    Data: [],
    Change: '',
    Weather: [],
}



const reducer = (state = initialState, action ) => {
        switch(action.type)
        {
            case 'DATA': return {...state, Data :[...action.paylod]}
            case 'CHANGE': return { ...state, Change: action.payload }
            case 'WEATHER_DATA': return { ...state, Weather: action.payload }
            default: return state
        }

}
const store  = createStore(reducer)
export default store