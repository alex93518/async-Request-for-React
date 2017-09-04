import { handleActions, createAction } from 'redux-actions'

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const SET_COLOR = "SET_COLOR";



export const increment = createAction(INCREMENT); // none
export const decrement = createAction(DECREMENT);// none
export const setColor = createAction(SET_COLOR); // color,

export const incrementAsync = () => dispatch => {
    setTimeout(
        ()=>{dispatch(increment())},
        1000
    );
}

export const decrementAsync = () => dispatch => {
    setTimeout(
        ()=>{dispatch(decrement())},
        1000
    );
}



const initialState = {
    number: 1,
    color: 'black',
}

export default handleActions({
    [INCREMENT]: (state, action) => {
        return{
            ...state,
            number:state.number+1
        }
    },
    [DECREMENT]: (state, action) => {
        return{
            ...state,
            number: state.number-1
        }
    },
    [SET_COLOR]: (state, action) =>  {
        return{
            ...state,
            color: action.payload
        }
    },
}, initialState);
