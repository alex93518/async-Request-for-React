
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import * as actions from '../modules/counter';
import * as posts from '../modules/post'
import { getRandomColor } from '../utils';





const mapStateToProps = (state) => ({
    number: state.counter.number,
    color: state.counter.color,
    post: state.post.data,
    loading: state.post.pending,
    error: state.post.error
    
});

const mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch(actions.increment()),
    onDecrement: () => dispatch(actions.decrement()),
    onSetColor: () => {
        const color = getRandomColor();
        dispatch(actions.setColor(color));
    }
});

const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);




export default CounterContainer;