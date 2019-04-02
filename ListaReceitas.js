import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import receitas from './receitas.json';


export default class ListaReceitas extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {receitas.map((receita, key) => (
          <Button
            key={key}
            title={receita.receita}
            onPress={() => this.props.history.push('/' + key)} />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
