import React, { Component } from 'react';

import {
  StyleSheet,
  Navigator,
  PropTypes
} from 'react-native';

import AppComponent from '../component/AppComponent';

class App extends Component {

  constructor(props) {
    super(props);
  }

  renderScene(route, navigator) {
    let Component = route.component;

    return <Component navigator={navigator} />
  }

  render() {
    return (
      <Navigator
        ref='navigator'
        style={styles.navigator}
        renderScene={this.renderScene}
        initialRoute={{
          component: AppComponent,
          name: 'App'
        }}/>
    )
  }
}

let styles = StyleSheet.create({
  navigator: {
    flex: 1
  }
})

export default App;
