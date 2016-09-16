/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, ListView } from 'react-native';
import ViewContainer from './app/components/ViewContainer'
import StatusBarBackground from './app/components/StatusBarBackground'
import TitleImage from './app/components/TitleImage'

// react-native list view syntax will probably change
const people = [
  {firstName: "Laura", lastName: "Chevalier", age: 19},
  {firstName: "Anna", lastName: "Rich", age: 21},
]

class cyoa extends Component {
  constructor(props) {
    super(props)
    // defines how a component should rerender
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
    this.state = {
      // instead of storing the data on state, store the data source
      peopleDataSource: ds.cloneWithRows(people)
    }
  }

  render() {
    return (
      <ViewContainer>
        <StatusBarBackground />
        <View style={{ justifyContent: 'flex-start', alignItems: 'center', flex:10}}>
              <TitleImage />
        </View>
        <View style={{backgroundColor: '#47476b', padding: 15, marginHorizontal: 75, justifyContent: 'flex-start'}}>
          <Text style={styles.small}>{'What time is it???'}</Text>
          <Text style={styles.big}>{'Adventure time!!!'}</Text>
        </View>
          <ListView
            style={{marginTop: 50}}
            dataSource={this.state.peopleDataSource}
            renderRow={(person) => { return this._renderPersonRow(person) }} />
      </ViewContainer>
    )
  }

  _renderPersonRow(person) {
    return(
      <View style={styles.personRow}>
        <Text style={styles.personName}>{person.firstName} {person.lastName}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2e6ff',
  },

  small: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 0,
    marginTop: 5,
    fontFamily: 'trebuchetms',
    color: 'white'
  },

  big: {
    fontSize: 20,
    textAlign: 'center',
    margin: 5,
    fontFamily: 'applegothic',
    color: 'white'
  },

  personRow: {
    flexDirection: "row",
    justifyContent: "center",
  },

  personName: {

  },

});

AppRegistry.registerComponent('cyoa', () => cyoa);
