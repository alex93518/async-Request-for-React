import * as types from './ActionTypes';

export const increment = () => ({
    type: types.INCREMENT,
    //index
});

export const decrement = () => ({
    type: types.DECREMENT,
    //index
});

export const setColor = (color)=> ({
    type: types.SET_COLOR,
    color
})


export const creat = (color) => ({
    type: types.CREATE,
    color: color
});

export const remove = () => ({
    type: types.REMOVE
});