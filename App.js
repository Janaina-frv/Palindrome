import React, {Component} from 'react';
import { StyleSheet, Image, View, TextInput, Button } from 'react-native';
export default class Palindromo extends Component {
   state = {
    palavra:0,
  }
  setPalavra = (p) => {
    this.setState({palavra: p})
  }
  verificarPalavra = (palavra) => {
    var resultado = true;
    var tamanho = Math.floor(palavra.length / 2);
    for(var i=0; i<tamanho; i++){
      if(palavra[i] !== palavra[palavra.length - i -1]){
        resultado = false;
        console.log (palavra[i] + "==" + palavra[palavra.length - i -1]);
      }else{
        resultado = true;
      }
    }
    if(resultado)
        alert('É palíndromo');
      else
        alert('Não é palíndromo');
  }

  render() {
    return (
      <View style={styles.MainContainer} >
         <Image
        style={styles.tinylogo}
        source={require('./images/palindromo.jpg')}/>  
        <TextInput
        style={styles.entrada}
        placeholder="Entre com a palavra"
       onChangeText={this.setPalavra}
       />
        <Button 
        title="Verificar"
        onPress = {()=>this.verificarPalavra(this.state.palavra)}
        /> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  entrada: {
    borderWidth: 1,
    height: 40,
    margin: 5,
    width: "60%",
    textAlign: 'center',
  },
  tinylogo:{
    width: 390,
    height: 200,
  },
});
