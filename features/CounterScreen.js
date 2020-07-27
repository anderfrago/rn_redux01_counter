import React, {Component} from 'react';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as counterActions from "../redux/actions";

import { View, Button, Text } from 'react-native';

class Counter extends Component{
    state = {
        counter: {
            value: 0
        }
    };

    handleIncrement = event => {
        const counter = { ...this.state.counter, counter: event.target.value };
        this.setState({ counter });
        this.props.actions.incrementCounter(this.state.counter);
    };
    handleDecrement = event => {
        const counter = { ...this.state.counter, counter: event.target.value };
        this.setState({ counter });
        this.props.actions.decrementCounter(this.state.counter);
    };

    render() {
        return (
            <View>
                <Text>
                Pulsado {this.props.value} veces
                </Text>
                <Button onPress
                onPress={this.handleIncrement} 
                title="Incrementar" 
                value={this.state.counter} />
                <Button 
                onPress={this.handleDecrement} 
                title="Decrementar" 
                value={this.state.counter} />
            </View>
        );
    }
}


  
  function mapStateToProps(state) {
    return {
      value: state.counter
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(counterActions, dispatch)
    };
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Counter);