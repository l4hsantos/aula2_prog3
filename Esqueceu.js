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

  const [email, setEmail] = React.useState('');


  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        
       
        <View style={styles.topBar}>
          <Text style={styles.topBarText}>ESQUECEU A SENHA</Text>
        </View>

        <View style={styles.form}>

          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />



          <View style={styles.button}>
            <Button
              title="Enviar"
              color="#4CAF50"
              onPress={() => showAlert('Botão pressionado')}
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

  
  topBar: {
    width: '100%',
    paddingVertical: 15,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
  },

  topBarText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
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



