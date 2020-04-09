import React, {Component} from 'react';
import {CheckBox} from 'react-native';
import {View, StyleSheet, Text} from 'react-native';
export default class Checkbox extends Component {
  constructor() {
    super();
    this.state = {
      checked: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    this.setState({
      checked: !this.state.checked,
    });
  }
  componentDidMount() {
    const {componentData} = this.props;
    const properties = componentData.properties;
    this.setState({
      checked: properties.value,
    });
  }
  render() {
    // console.error(this.props, this.state);
    const {componentData} = this.props;
    const properties = componentData.properties;
    console.log(this.props);
    return (
      <View style={styles.container}>
        <View>
          <CheckBox
            value={this.state.checked}
            onChange={this.handleChange}
            disabled={properties.disabled}
            style={styles.checkbox}
          />

          <Text>{properties.title}</Text>
        </View>
        <View></View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    // marginBottom: 100,
  },
  checkbox: {
    alignSelf: 'center',
    height: 20,
    width: 20,
  },
  label: {
    margin: 8,
  },
});
