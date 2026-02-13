import React from "react";
import { View, StyleSheet, Text, Pressable, Modal, TextInput } from 'react-native';

interface PerfilProps // serve para definir as const que está recebendo
{
  theme: boolean;
  aberto: boolean; 
  onFechar: () => void; // callback para fechar
}

export default function Perfil({ theme, aberto, onFechar }: PerfilProps){
    const darkMode = theme

    return (
        <Modal transparent visible={aberto} animationType="fade">
          <View style={styles.modalFundo}>
            <View style={[ styles.perfilConteudo, darkMode && styles.perfilConteudoDark, ]}>
              <Pressable style={styles.fechar} onPress={onFechar}>
                <Text style={styles.fecharTexto}>✕</Text>
              </Pressable>
    
              <Text style={[styles.loginTitulo, darkMode && styles.loginTituloDark]}>Login</Text>
    
              <Text style={[styles.label, darkMode && styles.labelDark]}>
                Email:
              </Text>
              <TextInput placeholder="exemplo@email.com" placeholderTextColor={darkMode ? '#ccc' : '#666'} style={[ styles.input, darkMode && styles.inputDark,]}/>
    
              <Text style={[styles.label, darkMode && styles.labelDark]}>
                Senha:
              </Text>
              <TextInput placeholder="Digite sua senha" placeholderTextColor={darkMode ? '#ccc' : '#666'} secureTextEntry style={[styles.input, darkMode && styles.inputDark,]}/>
    
              <Pressable style={[ styles.botao, darkMode && styles.botaoDark,]}>
                <Text style={styles.botaoTexto}>Entrar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
 modalFundo: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  perfilConteudo: {
    backgroundColor: '#F8F8FF',
    width: '90%',
    maxWidth: 400,
    padding: 20,
    borderRadius: 20,
  },
  fechar: {
    position: 'absolute',
    right: 10,
    top: 2,
  },
  
  fecharTexto: {
    fontSize: 26,
    color: '#999',
  },

  loginTitulo: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 20,
    color: '#222',
  },
  label: {
    width: '80%',
    marginBottom: 5,
    color: '#222',
  },
  input: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    borderColor: 'black',
    borderWidth : 2
  },

  inputDark: {
    backgroundColor: '#555',
    color: 'white',
    borderColor: 'gray',
    borderWidth : 2
  },

  botao: {
    width: '40%',
    backgroundColor: '#dad8d8',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
    borderColor: 'black',
    borderWidth : 2
  },
  botaoTexto: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },

  // Estilos no modo dark
  perfilConteudoDark: {
    backgroundColor: '#313131',
  },
  loginTituloDark: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff',
  },
  labelDark: {
    color: 'white',
  },
  botaoDark: {
    backgroundColor: '#c4c1c1',
    borderColor: '#666',
    borderWidth : 2
  },

});