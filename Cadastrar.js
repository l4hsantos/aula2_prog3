import React from 'react';
import {  StyleSheet, Image, TextInput, Button, Alert, Platform, View  } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

function showAlert(message) {
  if (Platform.OS === 'web') {
    window.alert(message);
  } else {
    Alert.alert(message);
  }
}

export default function App() {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>

        <View style={styles.form}>
            
            <TextInput
            style={styles.input}
            placeholder="Nome"
            value={nome}
            onChangeText={setNome}
            secureTextEntry
          />

          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <TextInput
            style={styles.input}
            placeholder="Senha"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
          />


          <View style={styles.button}>
            <Button
              title="Cadastre-se"
              color="#4CAF50"
              onPress={() => showAlert('Cadastro pressionado')}
            />
          </View>

          </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  logo: {
    width: 120,
    height: 120,
    marginBottom: 30,
  },

  form: {
    width: '80%',
  },

  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingLeft: 10,
    marginBottom: 15,
  },

  button: {
    marginTop: 10,
  },
});


