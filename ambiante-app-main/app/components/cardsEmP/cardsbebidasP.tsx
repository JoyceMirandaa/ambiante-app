import React from 'react';
import {View,Text,StyleSheet,FlatList, useWindowDimensions, Dimensions,Image,TouchableOpacity,Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import {  Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import {  Roboto_400Regular } from '@expo-google-fonts/roboto';
import { Inter_500Medium } from '@expo-google-fonts/inter';
import { useCart } from '@/app/contexts/CartContext';


const data: CardItem[] = [
  { id: '1', title: 'Água com gás', image: require('@/app/imgP/bebidas/aguacomGas.png'), valor: 2.60, },
  { id: '2', title: 'Cerveja Blue Moon', image:require('@/app/imgP/bebidas/cervejaBlueMoon.png'), valor: 11.60, },
  { id: '3', title: 'CocaCola 200ml', image: require('@/app/imgP/bebidas/coca-cola200ml.png'), valor: 1.70, },
  { id: '4', title: 'CocaCola Zero 2L', image:require('@/app/imgP/bebidas/cocaZero2L.png'), valor: 11.30, },
  { id: '5', title: 'Espumante', image: require('@/app/imgP/bebidas/espumante.png'), valor: 32.90 },
  { id: '6', title: 'Guaraná 2L', image: require('@/app/imgP/bebidas/guarana2L.png'), valor: 9.30, },
  { id: '7', title: 'Cerveja Brahma', image: require('@/app/imgP/bebidas/lataBrahma.png'), valor: 3.50, },
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
      Inter_500Medium
  });
  const CARD_WIDTH = 180;
  const ITEM_WIDTH = CARD_WIDTH + 20;
  const { addToCart } = useCart();
  const renderItem = ({ item }: { item: CardItem }) => (
    <View style={[styles.cardProduto, { width: CARD_WIDTH}, darkMode && styles.cardProdutoDark]}>
        <Image source={item.image} style={styles.imagemProduto } resizeMode="contain"/>

      <View style={styles.cardInfo}>
        <Text style={[styles.nomeProduto , darkMode && styles.nomeProdutoDark]}>
          {item.title}
        </Text>

        <Text style={[styles.precoProduto, darkMode && styles.precoProdutoDark]}>
          R$ {item.valor.toFixed(2)}
        </Text>

        <Pressable
          onPress={() => addToCart(item)}
          style={({ pressed }) => [
            styles.botao,
            darkMode && styles.botaoDark,
            pressed && { transform: [{ scale: 0.99 }] }
          ]}
        >
          <Text style={[styles.botaoTexto, darkMode && styles.botaoTextoDark]}>🛒 Comprar</Text>
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
        horizontal
        showsHorizontalScrollIndicator={false}
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
    height: 260,
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