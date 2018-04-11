import React from 'react';
//var React = require('react');
import { Text, View, Button, AppRegistry } from 'react-native';
//var { Text, View, Button, AppRegistry } = require('react-native');
/*
var Text = require('react-native').Text;
var View = require('react-native').View;
var Button = require('react-native').Button;
var AppRegistry = require('react-native').AppRegistry;
*/

const geraNumeroAleatorio = () => {
  var numero_aleatorio = Math.floor(Math.random()*10);
  alert(numero_aleatorio);
};

const App = () => {
  return(
    <View>
    <Text>Meu primeiro APP</Text>
    <Button
      title="Gerador de números randômicos"
      onPress={geraNumeroAleatorio}
    />
    </View>
  );
};

AppRegistry.registerComponent('app1', () => App);
