import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'

import { Main, NavBar } from '../components'

export default class Notifications extends Component {
  static navigationOptions = {
    title: 'Notifications',
    header: () => <NavBar title="Notifications" />
  }

  static renderHeader() {
    return <NavBar />
  }

  render() {
    return (
      <Main style={styles.container}>
        <Text>Notifications</Text>
      </Main>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})
