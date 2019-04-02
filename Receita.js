import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import receitas from './receitas.json';


export default class Receita extends React.Component {
  constructor() {
    super()
    this.state = {
      receita: undefined
    }
  }

  componentDidMount() {
    const idReceita = parseInt(this.props.match.params.idReceita, 10)

    this.setState({
      receita: receitas
        .filter((receita, key) => idReceita === key)
        .shift()
    })
  }

  render() {
    const { receita } = this.state

    if (!receita) {
      return (
        <View />
      )
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{receita.receita}</Text>
        <Text style={styles.text}>{receita.ingredientes}</Text>
        <Text style={styles.date}>{receita.modoPreparo}</Text>
        <Button title='Voltar' onPress={() => this.props.history.push('/')} />
      </View>
    )
  }
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 15
    },
    title: {
      fontWeight: 'bold',
      fontSize: 30,
      marginBottom: 10
    },
    text: {
      fontSize: 20,
      marginBottom: 10
    },
    date: {
      fontSize: 25
    }
  });
