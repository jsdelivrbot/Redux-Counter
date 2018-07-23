import React,{Component}from 'react';
import {connect}from 'react-redux';
import {Increment,Decrement,Clear} from '../actions/index';
import { bindActionCreators }  from 'redux';


class DisplayCounter extends Component{

      render(){

        return (
            <div>
                <div className="buttons">

                  <button onClick={this.props.Increment}>+</button>
                  <button onClick={this.props.Decrement}>-</button>
                </div>
                <div className="values">
                  <h2>Count:{this.props.counter}</h2>
                  <button onClick={this.props.Clear}>Clear</button>
                </div>

          </div>
          );
      }
}

function mapStateToProps(state) {
  console.log('----------',state);
  if(state.counter<0){
    alert('negative values are not allowed')
  }
  return {
            counter:  state.counter
  }

}

function mapDispatchToProps(dispatch){
      return bindActionCreators({Increment:Increment,Decrement:Decrement,Clear:Clear},dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(DisplayCounter);
