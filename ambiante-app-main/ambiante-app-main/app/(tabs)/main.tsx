import { Stack } from 'expo-router';
import React from 'react';
import { useState } from 'react';
import {View, StyleSheet, Image, Text, useWindowDimensions, Pressable, Modal, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';

//------------------------------------------------------------------------------------------------------------------------------------------------

import Carousel from 'react-native-reanimated-carousel';
import CardDescontoSlider from '../components/cardsMain/cardsDesconto';
import CardSlider from '../components/cardsMain/cards';
import Perfil from '../components/perfil';
import Header from '../components/header';

//------------------------------------------------------------------------------------------------------------------------------------------------------


export const Main = () => {

  const { width } = useWindowDimensions();
  const imageWidth = width;
  const imageHeight = width * 0.5;
  const [darkMode, setDarkMode] = useState(false);
  const [perfilAberto, setPerfilAberto] = useState(false);

  const Item = ({item}: {item: {image: number}}) => {
    return (
      <View style={styles.banner}>
        <Image source={item.image} style={{width: imageWidth, height: imageHeight}} />
      </View>
    );
  };

  const carousel = [
    { image: require('@/app/imgP/bannerCarousel/1.png') },
    { image: require('@/app/imgP/bannerCarousel/2.png') },
    { image: require('@/app/imgP/bannerCarousel/3.png') },
  ];

  return (
    <SafeAreaView style={[styles.container, darkMode && styles.containerDark]}>
    <ScrollView showsVerticalScrollIndicator={true} contentContainerStyle={{ flexGrow: 1 }}>
          <View style={{zIndex: 1}}>
            <Header onMudarTema={() => setDarkMode(!darkMode)} onAbrirPerfil={() => setPerfilAberto(true)} />
          </View>
            <View>
              <Carousel
                  data={carousel}
                  renderItem={({ item }) => <Item item={item} />}
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
              <Text style={[styles.tituloCard, darkMode && styles.tituloCardDark]}>🏷️ Descontos</Text>
              <CardDescontoSlider darkMode={darkMode}/>
            </View>

            <View>
              <Text style={[styles.tituloCard, darkMode && styles.tituloCardDark]}>🛒 Produtos</Text>
              <CardSlider darkMode={darkMode}/>
            </View>

        {/* PERFIL */}
        <Perfil theme={darkMode} aberto={perfilAberto} onFechar={() => setPerfilAberto(false)}/>
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
  tituloCard : {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
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

export default Main;