//import
import React from 'react';
import { Text, AppRegistry, View, Image, TouchableOpacity, Alert } from 'react-native';

//formatações
const Estilos = {
  principal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao: {
    backgroundColor: '#538530',
    paddingHorizontal: 40,
    paddingVertical: 10,
    marginTop: 20,
    borderRadius: 1
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
};

//Funções
const gerarNovaFrase = () => {
  const frases = [
  'Sou feliz por ser como sou, por ter o que tenho, mas amanhã quero ser ainda mais e para isso luto diariamente.',
  'Amar a vida é amar seus amigos, pois sem eles nada mais faz sentido no seu dia a dia.',
  'Nem toda mudança importante acontece de repente e faz barulho, algumas são silenciosas e vão se fazendo no dia a dia.',
  'Nada melhor para a alma que treinar a gratidão e diariamente agradecer pelas bênçãos que receber.',
  'Viver não é fácil, mas com coragem para suportar os desafios do dia a dia tudo se torna mais simples.',
  'A fé é conquistada na tranquilidade do dia a dia e é capaz de maravilhas inexplicáveis!',
  'Gratidão não é pagamento, mas um reconhecimento que se demonstra no dia a dia.',
  'Amor incondicional e sensações memoráveis fazem parte do dia a dia de uma mãe com seus filhos!',
  'É tempo de esquecer os problemas, jogar fora as frustrações do dia a dia e desfrutar do Carnaval em grande estilo!',
  'Mais importante que mostrar ao mundo que temos valores e princípios é lutar por eles, e viver diariamente sua verdade.'];
  var numeroAleatorio = Math.floor(Math.random()*10);
  Alert.alert('Frase do dia:',frases[numeroAleatorio]);
};


//criar componente
const App = () => {
  const { principal, botao, textoBotao } = Estilos;
  return (
    <View style={principal}>
      <Image source={require('./imgs/logo.png')} />
      <TouchableOpacity
      onPress={gerarNovaFrase}
      style={botao}>
        <Text style={textoBotao}>Nova frase</Text>
      </TouchableOpacity>
    </View>
  );
};
//Renderizar para dispositivo
AppRegistry.registerComponent('app2', () => App);
