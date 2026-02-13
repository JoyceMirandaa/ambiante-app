import React from 'react';
import {View,Text,StyleSheet,FlatList, useWindowDimensions, Dimensions,Image,TouchableOpacity,Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import {  Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import {  Roboto_400Regular } from '@expo-google-fonts/roboto';
import { Inter_500Medium } from '@expo-google-fonts/inter';
import { LeagueSpartan_600SemiBold, LeagueSpartan_500Medium } from '@expo-google-fonts/league-spartan';


const data: CardItem[] = [
  { id: '1', title: 'Açaí', image: require('@/app/imgP/congelados/acai.png'), valor: 34.90, },
  { id: '2', title: 'Batata Frita', image:require('@/app/imgP/congelados/batataFrita.png'), valor: 23.60, },
  { id: '3', title: 'Bombom Franuí', image: require('@/app/imgP/congelados/bombomFranui.png'), valor: 41.20, },
  { id: '4', title: 'Escondidinho', image:require('@/app/imgP/congelados/escondidinho.png'), valor: 27.00, },
  { id: '5', title: 'Esfirra de Carne', image: require('@/app/imgP/congelados/esfirraCarne.png'), valor: 30.90 },
  { id: '6', title: 'Lasanha', image: require('@/app/imgP/congelados/lasanhaBolonhesa.png'), valor: 11.20, },
  { id: '7', title: 'Pão de Alho', image: require('@/app/imgP/congelados/paoAlho.png'), valor: 12.30 },
  { id: '8', title: 'Pão de Queijo', image: require('@/app/imgP/congelados/paodeQueijo.png'), valor: 26.30, },
  { id: '9', title: 'Pizza de Frango', image: require('@/app/imgP/congelados/pizzaFrangoBacon.png'), valor: 15.40 },
  { id: '10', title: 'Pizza de Mussarela', image: require('@/app/imgP/congelados/pizzaMussarela.png'), valor: 13.30, },
];

interface CardSliderProps {
  darkMode: boolean;
}

interface CardItem {
  id: string;
  title: string;
  image: any; 
  valor: number;
}

export default function CardSlider({darkMode} : CardSliderProps) {
  let [fontsLoaded] = useFonts({
      Poppins_600SemiBold,
      Roboto_400Regular,
      Inter_500Medium,
      LeagueSpartan_600SemiBold
  });
  const CARD_WIDTH = 180;
  const ITEM_WIDTH = CARD_WIDTH + 20;
  const renderItem = ({ item }: { item: CardItem }) => (
    <View style={[styles.cardProduto, { width: CARD_WIDTH}, darkMode && styles.cardProdutoDark]}>
        <Image source={item.image} style={styles.imagemProduto } resizeMode="contain"/>

       <View style={styles.cardInfo}>
          <Text style={[styles.nomeProduto , darkMode && styles.nomeProdutoDark]}>
            {item.title}
          </Text>

        <View style={styles.precos}>
          <Text style={[styles.precoDescontoProduto, darkMode && styles.precoDescontoProdutoDark]}>
            R$ {item.valor.toFixed(2)}
          </Text>

          <Text style={[styles.precoProduto, darkMode && styles.precoProdutoDark]}>
            R$ {(item.valor * 0.80).toFixed(2)}
          </Text>
        </View>
        <Pressable
          style={({ pressed }) => [
            styles.botao,
            darkMode && styles.botaoDark,
            pressed && { transform: [{ scale: 0.99 }] }
          ]}
        >
          <Text style={[styles.botaoTexto, darkMode && styles.botaoTextoDark]}>Comprar</Text>
        </Pressable>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        snapToInterval={ITEM_WIDTH}
        decelerationRate="fast"
        contentContainerStyle={{ paddingHorizontal: 10 }}

      />
    </View>
  );
}

const styles = StyleSheet.create({
    /* CONTAINER */
  container: {
    justifyContent: 'center',
  },

  /* CARD */
  cardProduto: {
    backgroundColor: '#ffffff',
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: 'rgb(248, 248, 248)',
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 4,
    
  },

  cardProdutoDark : {
    backgroundColor: '#454545',
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#3d3d3d',
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 4,
  },

  /* IMAGEM */
  imagemProduto: {
    width: '100%',
    height: 127,
  },

  /* INFO */
  cardInfo: {
    padding: 10,
  },

  /* NOME */
  nomeProduto: {
    fontFamily: 'Poppins_600SemiBold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    fontSize: 16,
    marginBottom: 5,
    color: '#000',
  },

  nomeProdutoDark: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 16,
    marginBottom: 5,
    color: '#DFF7E7',
  },

  /* PREÇOS */
  precos : {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  precoProduto : {
    fontWeight: 'bold',
    color: '#2E7D32',
  },

  precoProdutoDark : {
    fontWeight: 'bold',
    color: '#2e9033',
  },

   precoDescontoProduto : {
    fontWeight: 'bold',
    color: '#b81414',
    textDecorationLine: 'line-through',
  },

  precoDescontoProdutoDark: {
    fontWeight: 'bold',
    color: 'red',
    textDecorationLine: 'line-through',
  },


  /* BOTÃO */
  botao: {
    width: '100%',
    paddingVertical: 10,
    backgroundColor: '#7FBF7F',
    marginTop: 16,
    borderRadius: 12,
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
});