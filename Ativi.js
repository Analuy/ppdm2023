import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { NavigationContainer, useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function TelaInicial(){
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Esse é o início</Text>
      <Button title="Cadastrar" onPress={()=>{
        navigation.navigate ('Cadastro')
      }}></Button>
      <Button title="Login" onPress={()=>{
          navigation.navigate ('Login')
        }}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaCadastro(){
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>aqui faz o cadastro</Text>
      <Button title="Esqueceu senha" onPress={()=>{
        navigation.navigate ('Esqueceu Senha')
      }}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaLogin(){
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <Text>Essa é a tela para fazer o login</Text>
        <Button title="Login" onPress={()=>{
          navigation.navigate ('Login')
        }}></Button>
        <StatusBar style="auto" />
      </View>
    );
  }

function TelaEsqueceuSenha(){
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Essa é a tela de "esqueci a senha"</Text>
      <Button title="Tela principal" onPress={()=>{
        navigation.navigate ('Principal')
      }}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaPrincipal(){
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Essa é a tela principal</Text>
      <Button title="resenhas" onPress={()=>{
        navigation.navigate ('Ver Resenhas')
      }}></Button>
      <StatusBar style="auto" />
    </View>
  );
}


function TelaPerfil(){
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Essa é a tela do perfil</Text>
      <Button title="voltar" onPress={()=>{
        navigation.navigate ('Início')
      }}></Button>
      <StatusBar style="auto" />
    </View>
  );
}


export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={TelaInicial} />
        <Stack.Screen name="Cadastro" component={TelaCadastro} />
        <Stack.Screen name="Login" component={TelaLogin} />
        <Stack.Screen name="Esqueceu Senha" component={TelaEsqueceuSenha} />
        <Stack.Screen name="Principal" component={TelaPrincipal} />
        <Stack.Screen name="Perfil" component={TelaPerfil} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  