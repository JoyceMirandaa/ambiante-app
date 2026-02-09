import { Stack } from 'expo-router';
import React from 'react';
import { useState } from 'react';
import { SafeAreaView, View, StyleSheet, Image, Text, useWindowDimensions, Pressable, Modal, TextInput, ScrollView } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { StatusBar } from 'expo-status-bar';


export const Header = () => {
  const { width } = useWindowDimensions();
  const [menuAberto, setMenuAberto] = useState(false);
  const [perfilAberto, setPerfilAberto] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <SafeAreaView>
      <StatusBar style={darkMode ? 'light' : 'dark'} />

      {/* HEADER */}
      <View
        style={[
          styles.header,
          darkMode && styles.headerDark,
        ]}
      >
        <Text style={styles.titulo}>Mercado 🛒</Text>

        <Pressable onPress={() => setMenuAberto(!menuAberto)}>
          <Text style={styles.menuToggle}>☰</Text>
        </Pressable>
      </View>

      {/* MENU */}
      {menuAberto && (
        <View
          style={[
            styles.menu,
            darkMode && styles.menuDark,
          ]}
        >
          <Pressable style={styles.menuItem} onPress={MudarTema}>
            <Text style={styles.menuText}>
              Tema {darkMode ? '🌙' : '🌞'}
            </Text>
          </Pressable>

          <Pressable
            style={styles.menuItem}
            onPress={() => setPerfilAberto(true)}
          >
            <Text style={styles.menuText}>Perfil 👤</Text>
          </Pressable>

          <Pressable style={styles.menuItem}>
            <Text style={styles.menuText}>Lista de compras 📝</Text>
          </Pressable>

          <Pressable style={styles.menuItem}>
              <Text style={styles.menuText}>Produtos 🛍️</Text>
          </Pressable>
        </View>
      )}

    {/* MODAL PERFIL */}
    <Modal transparent visible={perfilAberto} animationType="fade">
      <View style={styles.modalFundo}>
        <View style={[ styles.perfilConteudo, darkMode && styles.perfilConteudoDark, ]}>
          <Pressable style={styles.fechar} onPress={() => setPerfilAberto(false)}>
            <Text style={styles.fecharTexto}>✕</Text>
          </Pressable>

          <Text style={[styles.loginTitulo, darkMode && styles.loginTituloDark]}>Login</Text>

          <Text style={[styles.label, darkMode && styles.labelDark]}>
            Email
          </Text>
          <TextInput placeholder="exemplo@email.com" placeholderTextColor={darkMode ? '#ccc' : '#666'}
          style={[
              styles.input,
              darkMode && styles.inputDark,
            ]}
          />

          <Text style={[styles.label, darkMode && styles.labelDark]}>
            Senha
          </Text>
          <TextInput placeholder="Digite sua senha" placeholderTextColor={darkMode ? '#ccc' : '#666'} secureTextEntry
            style={[
              styles.input,
              darkMode && styles.inputDark,
            ]}
          />

          <Pressable
            style={[
              styles.botao,
              darkMode && styles.botaoDark,
            ]}
          >
            <Text style={styles.botaoTexto}>Entrar</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
    </SafeAreaView>
  );
  function MudarTema() {
    setDarkMode(!darkMode);
  }
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },

  containerDark: {
    backgroundColor: '#414040',
  },

  header: {
    backgroundColor: '#2ecc71',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerDark: {
    backgroundColor: '#259152',
  },

  titulo: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },

  menuToggle: {
    fontSize: 26,
    color: 'white',
  },

  menu: {
    position: 'absolute',
    top: 65,
    right: 0,
    width: 200,
    backgroundColor: '#56a356',
    elevation: 6,
    zIndex: 1
  },

  menuDark: {
    backgroundColor: '#3f743f',
  },

  menuItem: {
    padding: 15,
  },

  menuText: {
    color: 'white',
    fontSize: 16,
  },

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

  perfilConteudoDark: {
    backgroundColor: '#313131',
  },

  fechar: {
    position: 'absolute',
    right: 15,
    top: 10,
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

  loginTituloDark: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff',
  },

  label: {
    width: '80%',
    marginBottom: 5,
    color: '#222',
  },

  labelDark: {
    color: 'white',
  },

  input: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },

  inputDark: {
    backgroundColor: '#555',
    color: 'white',
  },

  botao: {
    width: '40%',
    backgroundColor: '#dad8d8',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },

  botaoDark: {
    backgroundColor: '#c4c1c1',
  },

  botaoTexto: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },

  tituloCard : {
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 5
  },
  banner:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 0,
  },
  imagem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Header;