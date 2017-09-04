import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as postActions from '../modules/post'

import './Counter.css'

class Counter extends React.Component{

    static propTypes = {
            number: PropTypes.number,
            color: PropTypes.string,
            onIncrement: PropTypes.func,
            onDecrement: PropTypes.func,
            onDoubleClick: PropTypes.func,
            
            
    };

    componentDidMount() {

        const {number} = this.props;
        this.getPost(number);
      
    }
    componentWillReceiveProps(nextProps) {

        // 현재 number 와 새로 받을 number 가 다를 경우에 요청을 시도합니다.
        if(this.props.number !== nextProps.number) {
        this.getPost(nextProps.number)
        }
    }


    getPost = async (postId) => {
        const { PostActions } = this.props;

        try {
            await PostActions.getPost(postId);
            console.log('요청이 완료 된 다음에 실행됨')
        } catch(e) {
            console.log('에러가 발생!');
        }
    }
    
    
    render() {

        const { number, color,post, loading, error, onIncrement,  onDecrement, onSetColor} = this.props;
        return(
            <div>
                <div
                    className = "Counter"
                    onClick = {onIncrement}
                    onContextMenu = {
                        (e)=>{
                            e.preventDefault();
                            onDecrement();
                        }
                    }
                    onDoubleClick = {onSetColor}
                    style = {{backgroundColor: color}}>
                    {number}
                    
                </div>
                <div>
                        {loading &&<h2> Loading...</h2>}
                        {error
                            ?<h1>Error 404</h1>
                            :(
                                <div>
                                    <h1>{post.title}</h1>
                                    <p>{post.body}</p>
                                </div>
                            )
                        }
                </div>
            </div>
        );
    }
}



export default connect(
    null,
    (dispatch) => ({
        PostActions: bindActionCreators(postActions,dispatch)
    })
)(Counter);