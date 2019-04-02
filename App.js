import React from 'react';
import Receita from './Receita';
import ListaReceitas from './ListaReceitas';
import { View, StyleSheet } from 'react-native'
import { NativeRouter as Router, Switch, Route } from 'react-router-native';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <View style={styles.container}>
          <Switch>
            <Route path='/:idReceita' component={Receita} />
            <Route component={ListaReceitas} />
          </Switch>
        </View>
      </Router>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})