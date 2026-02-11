import { View, StyleSheet, Pressable, Text, SafeAreaView,  ScrollView } from 'react-native';
import { Link, Stack } from 'expo-router';
import { useState } from 'react';

//------------------------------------------------------------------------
import Header from '@/app/components/header';
import CardSliderBebida from '@/app/components/cardsBebidas';

export default function Carnes() {
  const [darkMode, setDarkMode] = useState(false);
  const [perfilAberto, setPerfilAberto] = useState(false);

  return (
    <ScrollView showsVerticalScrollIndicator={true} contentContainerStyle={{ flexGrow: 1 }}> {/* flexGrow serve para o conteudo dentro dele conseguir ocupar tudo do Scroll */}
    <SafeAreaView style={[styles.container, darkMode && styles.containerDark]}>
      <View style={{ zIndex: 1 }}>
        <Header onMudarTema={() => setDarkMode(!darkMode)} onAbrirPerfil={() => setPerfilAberto(true)} />
      </View>

      <View style={{marginBottom: 30}}>
        <Text style={styles.titulo}>BEBIDAS</Text>
        <CardSliderBebida darkMode={darkMode}/>
      </View>
    </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },

  containerDark: {
    backgroundColor: '#414040',
  },

  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
  titulo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1f8007ff',
    marginBottom: 20,
  },
});