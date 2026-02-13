import { View, StyleSheet, Pressable, Text,  ScrollView } from 'react-native';
import { Link, Stack } from 'expo-router';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { LeagueSpartan_600SemiBold, LeagueSpartan_500Medium } from '@expo-google-fonts/league-spartan';

//------------------------------------------------------------------------
import Header from '@/app/components/header';
import CardSliderCarne from '@/app/components/cardsEmPaginas/cardsCarnes';

export default function Carnes() {
  const [darkMode, setDarkMode] = useState(false);
  const [perfilAberto, setPerfilAberto] = useState(false);

  let [fontsLoaded] = useFonts({
      LeagueSpartan_600SemiBold,
      LeagueSpartan_500Medium
    });

  return (
    <ScrollView showsVerticalScrollIndicator={true} contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{ zIndex: 1 }}>
        <Header onMudarTema={() => setDarkMode(!darkMode)} onAbrirPerfil={() => setPerfilAberto(true)} />
      </View>
    <SafeAreaView style={[styles.container, darkMode && styles.containerDark]}>

      <View style={{marginBottom: 30}}>
        <Text style={[styles.titulo, darkMode && styles.tituloDark]}>🥩 Carnes</Text>
      <View style={{ borderBottomColor: '#7FBF7F', borderBottomWidth: 1, marginVertical: 10,}} />
        <CardSliderCarne darkMode={darkMode}/>
      </View>
    </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    fontFamily: 'LeagueSpartan_600SemiBold',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'rgb(32, 32, 32)',
    marginTop: 20,
    marginBottom: 25,
  },
   tituloDark: {
    fontFamily: 'LeagueSpartan_600SemiBold',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'rgb(229, 229, 229)',
    marginTop: 20,
    marginBottom: 25,
  },
});