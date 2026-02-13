import { View, StyleSheet, Pressable, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, Stack } from 'expo-router';
import { ScrollView } from 'react-native-gesture-handler';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import {  Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import {  Roboto_400Regular } from '@expo-google-fonts/roboto';
import { Inter_500Medium } from '@expo-google-fonts/inter';
import { LeagueSpartan_600SemiBold, LeagueSpartan_500Medium } from '@expo-google-fonts/league-spartan';


//------------------------------------------------------------------------
import Header from '../components/header';
import CardSliderCarne from '../components/cardsEmP/cardscarnesP';
import CardSliderBebidas from '../components/cardsEmP/cardsbebidasP';
import CardSliderCongelados from '../components/cardsEmP/cardscongeladosP';
import CardSliderHortifruti from '../components/cardsEmP/cardshortifrutiP';

export default function Produtos(){

  let [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    Roboto_400Regular,
    Inter_500Medium,
    LeagueSpartan_600SemiBold,
    LeagueSpartan_500Medium
  });

  const [darkMode, setDarkMode] = useState(false);
  const [perfilAberto, setPerfilAberto] = useState(false);
  return (
    <SafeAreaView style={[styles.container, darkMode && styles.containerDark]}>
    <ScrollView showsVerticalScrollIndicator={true} contentContainerStyle={{ paddingBottom: 50 }}>
      <View style={{zIndex: 1, marginBottom: 20}}>
        <Header onMudarTema={() => setDarkMode(!darkMode)} onAbrirPerfil={() => setPerfilAberto(true)} />
      </View>

      <View>
        <Text style={[styles.titulo, darkMode && styles.tituloDark]}>🛒 Produtos</Text>
      </View>

      <View style={{ borderBottomColor: '#7FBF7F', borderBottomWidth: 1, marginVertical: 10,}} />

      {/* Cards */}
      <View>
        {/* CARNES */}
        <View style={styles.botaoTitulo}>
          <Text style={[styles.tituloCards, darkMode && styles.tituloCardDark]}>🥩 Carnes</Text>
          <Link href={"/(tabs)/produtosGeral/carnes"}>
          <View style={styles.cards}>
            <Pressable style={({ pressed }) => [styles.botao, darkMode && styles.botaoDark, pressed && { transform: [{ scale: 0.99 }] }]}>
              <Text style={[styles.botaoTexto, darkMode && styles.botaoTextoDark]}> Ver mais →</Text>
            </Pressable>
          </View>
          </Link>
        </View>
        <CardSliderCarne darkMode={darkMode}/>

       <View style={{ borderBottomColor: '#7FBF7F', borderBottomWidth: 1, marginVertical: 10,}} />

        {/* HORTIFRUTI */}
        <View style={styles.botaoTitulo}>
          <Text style={[styles.tituloCards, darkMode && styles.tituloCardDark]}>🥬 Hortifruti</Text>
          <Link href={"/(tabs)/produtosGeral/hortifruti"}>
          <View style={styles.cards}>
            <Pressable style={({ pressed }) => [styles.botao, darkMode && styles.botaoDark, pressed && { transform: [{ scale: 0.99 }] }]}>
              <Text style={[styles.botaoTexto, darkMode && styles.botaoTextoDark]}> Ver mais →</Text>
            </Pressable>
          </View>
          </Link>
        </View>
        <CardSliderHortifruti darkMode={darkMode}/>

        <View style={{ borderBottomColor: '#7FBF7F', borderBottomWidth: 1, marginVertical: 10,}} />

        {/* BEBIDAS */}
        <View style={styles.botaoTitulo}>
          <Text style={[styles.tituloCards, darkMode && styles.tituloCardDark]}>🍹 Bebidas</Text>
          <Link href={"/(tabs)/produtosGeral/bebidas"}>
          <View style={styles.cards}>
            <Pressable style={({ pressed }) => [styles.botao, darkMode && styles.botaoDark, pressed && { transform: [{ scale: 0.99 }] }]}>
              <Text style={[styles.botaoTexto, darkMode && styles.botaoTextoDark]}> Ver mais →</Text>
            </Pressable>
          </View>
          </Link>
        </View>
        <CardSliderBebidas darkMode={darkMode}/>

        <View style={{ borderBottomColor: '#7FBF7F', borderBottomWidth: 1, marginVertical: 10,}} />

        {/* CONGELADOS */}
        <View style={styles.botaoTitulo}>
          <Text style={[styles.tituloCards, darkMode && styles.tituloCardDark]}>❄️ Congelados</Text>
          <Link href={"/(tabs)/produtosGeral/congelados"}>
          <View style={styles.cards}>
            <Pressable style={({ pressed }) => [styles.botao, darkMode && styles.botaoDark, pressed && { transform: [{ scale: 0.99 }] }]}>
              <Text style={[styles.botaoTexto, darkMode && styles.botaoTextoDark]}> Ver mais →</Text>
            </Pressable>
          </View>
          </Link>
        </View>
        <CardSliderCongelados darkMode={darkMode}/>

      </View>
      </ScrollView>
      </SafeAreaView>
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

  titulo : {
    fontFamily: 'LeagueSpartan_600SemiBold',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 45,
    fontWeight: 'bold',
    marginBottom: 15,
    shadowColor: '#7FBF7F',
    shadowOpacity: 0.5,
  },

  tituloDark : {
    color : '#ccc'
  },
  
  tituloCards : {
    fontFamily: 'LeagueSpartan_500Medium',
    display: 'flex',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 12,
  },

  tituloCardDark : {
    color: '#ccc'
  },

  cards : {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },

  botao: {
    width: '100%',
    paddingVertical: 10,
    backgroundColor: '#7FBF7F',
    marginTop: 16,
    marginLeft: 10,
    borderRadius: 20,
    alignItems: 'center',
  },

  botaoDark : {
    width: '100%',
    paddingVertical: 10,
    backgroundColor: '#7FBF7F',
    marginTop: 16,
    borderRadius: 12,
    alignItems: 'center',
  },

  botaoTexto: {
    fontFamily: 'Inter_500Medium',
    color: '#000000',
    fontWeight: 600,
  },

  botaoTextoDark: {
    fontFamily: 'Inter_500Medium',
    color: '#ffffff',
    fontWeight: 600,
  },

  botaoTitulo:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  }
});