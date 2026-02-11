import { Stack } from 'expo-router';
import React from 'react';
import { useState } from 'react';
import { SafeAreaView, View, StyleSheet, Image, Text, useWindowDimensions, Pressable, Modal, TextInput, ScrollView } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

//------------------------------------------------------------------------------------------------------------------------------------------------

import Carousel from 'react-native-reanimated-carousel';
import CardDescontoSlider from '../components/cardsDesconto';
import CardSlider from '../components/cardsEmP/cardsbebidasP';
import Perfil from '../components/perfil';
import Header from '../components/header';

//------------------------------------------------------------------------------------------------------------------------------------------------------

SplashScreen.preventAutoHideAsync();

export const main = () => {

  const { width } = useWindowDimensions();
  const imageWidth = width;
  const imageHeight = width * 0.4;
  const [darkMode, setDarkMode] = useState(false);
  const [perfilAberto, setPerfilAberto] = useState(false);

  const Item = ({item}: {item: {image: string}}) => {
    return (
      <View style={styles.banner}>
        <Image source={{uri: item.image}} style={{width: imageWidth, height: imageHeight}} />
      </View>
    );
  };

  const carousel = [
    { image: 'https://i.imgur.com/SsJmZ9jl.jpg' },
    { image: 'https://i.imgur.com/5tj6S7Ol.jpg' },
    { image: 'https://i.imgur.com/pmSqIFZl.jpg' },
    { image: 'https://i.imgur.com/cA8zoGel.jpg' },
    { image: 'https://i.imgur.com/pewusMzl.jpg' },
    { image: 'https://i.imgur.com/l49aYS3l.jpg' },
  ];

  return (
    <ScrollView showsVerticalScrollIndicator={true} contentContainerStyle={{ flexGrow: 1 }}> {/* flexGrow serve para o conteudo dentro dele conseguir ocupar tudo do Scroll */}
    <SafeAreaView style={[styles.container, darkMode && styles.containerDark]}>
          <View style={{zIndex: 1}}>
            <Header onMudarTema={() => setDarkMode(!darkMode)} onAbrirPerfil={() => setPerfilAberto(true)} />
          </View>
            <View>
              <Carousel
                  data={carousel}
                  renderItem={Item}
                  width={imageWidth}
                  height={imageHeight}
                  loop
                  autoPlay
                  mode="parallax"
                  modeConfig={{
                  parallaxScrollingScale: 0.9,
                  parallaxScrollingOffset: 50,
                  }}/>
            </View>
            <View style={{marginTop: 20}}>
              <Text style={[styles.tituloCard, darkMode && styles.tituloCardDark]}>Descontos da semana</Text>
              <CardDescontoSlider darkMode={darkMode}/>
            </View>

            <View>
              <Text style={[styles.tituloCard, darkMode && styles.tituloCardDark]}>Produtos</Text>
              <CardSlider darkMode={darkMode}/>
            </View>

        {/* PERFIL */}
        <Perfil theme={darkMode} aberto={perfilAberto} onFechar={() => setPerfilAberto(false)}/>
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
  tituloCard : {
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 5
  },

  tituloCardDark : {
    color: '#ccc'
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

export default main;