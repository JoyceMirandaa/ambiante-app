import { Link } from 'expo-router';
import React from 'react';
import { useState } from 'react';
import { SafeAreaView, View, StyleSheet, Text, useWindowDimensions, Pressable, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

interface HeaderProps // serve para definir as const que está recebendo
{
  onMudarTema: () => void; // callback para mudar o tema
  onAbrirPerfil: () => void; // callback abrir o perfil
}

export const Header = ({onMudarTema, onAbrirPerfil} : HeaderProps) => {
  const { width } = useWindowDimensions();
  const [menuAberto, setMenuAberto] = useState(false);
  const [perfilAberto, setPerfilAberto] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <SafeAreaView>
      <StatusBar style={darkMode ? 'light' : 'dark'} />

      {/* HEADER */}
      
      <View style={[styles.header, darkMode && styles.headerDark]}>

        <Image source={require('../imgP/logo.png')} style={styles.imagemLogo}/>

        <Link href="/(tabs)/main" asChild>
          <Text style={styles.titulo }>Mercado 🛒</Text>
        </Link>

        <Pressable onPress={() => setMenuAberto(!menuAberto)}>
          <Text style={styles.menuToggle}>☰</Text>
        </Pressable>
      </View>

      {/* MENU */}
      {menuAberto && (
        <View style={[styles.menu, darkMode && styles.menuDark,]}>
          <Pressable style={styles.menuItem} onPress={MudarTema}>
            <Text style={styles.menuText}>
              Tema {darkMode ? '🌙' : '🌞'}
            </Text>
          </Pressable>

          <Pressable style={styles.menuItem} onPress={onAbrirPerfil}>
            <Text style={styles.menuText}>Perfil 👤</Text>
          </Pressable>
          
          
          <Pressable style={styles.menuItem}>
            <Text style={styles.menuText}>Lista de compras 📝</Text>
          </Pressable>
          
          <Link href="/(tabs)/produtos" asChild>
            <Pressable style={styles.menuItem}>
                <Text style={styles.menuText}>Produtos 🛍️</Text>
            </Pressable>
          </Link>
        </View>
      )}
    </SafeAreaView>
  );
  function MudarTema() {
    setDarkMode(!darkMode);
    onMudarTema()
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
    paddingHorizontal: 15,
    height: 70,
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
    paddingRight: 30
  },

  menuToggle: {
    fontSize: 26,
    color: 'white',
  },

  menu: {
    position: 'absolute',
    top: 70,
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

  imagemLogo : {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  }
});

export default Header;