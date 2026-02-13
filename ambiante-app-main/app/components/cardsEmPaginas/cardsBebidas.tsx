import React from 'react';
import { View, Text, StyleSheet, FlatList, useWindowDimensions, Image,TouchableOpacity } from 'react-native';
import { useCart } from '../../contexts/CartContext';

const data: CardItem[] = [
  { id: '1', title: 'Água com gás', image: require('@/app/imgP/bebidas/aguacomGas.png'), valor: 2.60, },
  { id: '2', title: 'Cerveja Blue Moon', image:require('@/app/imgP/bebidas/cervejaBlueMoon.png'), valor: 11.60, },
  { id: '3', title: 'CocaCola 200ml', image: require('@/app/imgP/bebidas/coca-cola200ml.png'), valor: 1.70, },
  { id: '4', title: 'CocaCola Zero 2L', image:require('@/app/imgP/bebidas/cocaZero2L.png'), valor: 11.30, },
  { id: '5', title: 'Espumante', image: require('@/app/imgP/bebidas/espumante.png'), valor: 32.90 },
  { id: '6', title: 'Guaraná 2L', image: require('@/app/imgP/bebidas/guarana2L.png'), valor: 9.30, },
  { id: '7', title: 'Cerveja Brahma', image: require('@/app/imgP/bebidas/lataBrahma.png'), valor: 3.50, },
  { id: '8', title: 'Energético Monster', image: require('@/app/imgP/bebidas/monster473ml.png'), valor: 9.80, },
  { id: '9', title: 'Red Bull Zero', image: require('@/app/imgP/bebidas/redBullzero.png'), valor: 9.80, },
  { id: '10', title: 'Suplemento Alimentar', image: require('@/app/imgP/bebidas/suplementoAlimentar.png'), valor: 4.10, },
]



interface CardSliderProps {
  darkMode: boolean;
}

interface CardItem {
  id: string;
  title: string;
  image: any; // imagens importadas do require normalmente usam `any`
  valor: number;
}

export default function CardSliderBebida({darkMode} : CardSliderProps) {
  const { width } = useWindowDimensions();
  const CARD_WIDTH = width * 0.10;
   const { addToCart } = useCart();

  const renderItem = ({ item }: { item: CardItem }) => (
        <View style={[styles.cardProduto, darkMode && styles.cardProdutoDark]}>
            <Image source={item.image} style={styles.imagemProduto } resizeMode="contain"/>

          <View style={styles.cardInfo}>
            <Text style={[styles.nomeProduto , darkMode && styles.nomeProdutoDark]}>
              {item.title}
            </Text>

            <View>
              <Text style={[styles.precoProduto, darkMode && styles.precoProdutoDark]}>
                R$ {item.valor.toFixed(2)}
              </Text>
            </View>

            <TouchableOpacity style={[styles.botao, darkMode && styles.botaoDark]} onPress={() => addToCart(item)}>
              <Text style={[styles.botaoTexto, darkMode && styles.botaoTextoDark]}>
                Comprar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        snapToInterval={CARD_WIDTH + 20}
        decelerationRate="fast"
        numColumns={2}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  /* CONTAINER */
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  /* CARD */
  cardProduto: {
    width: 180,
    backgroundColor: '#ffffff',
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#a1e786ff',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 15,
  },

  cardProdutoDark : {
    backgroundColor: '#464444ff',
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#4b6446ff',
    borderRadius: 8,
    overflow: 'hidden',
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    fontSize: 16,
    marginBottom: 5,
    color: '#000',
  },

  nomeProdutoDark: {
    fontSize: 16,
    marginBottom: 5,
    color: '#ffffff',
  },

  /* PREÇOS */
  precos : {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  precoProduto : {
    fontWeight: 'bold',
    color: 'green',
  },

  precoProdutoDark : {
    fontWeight: 'bold',
    color: 'palegreen',
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
    paddingVertical: 8,
    backgroundColor: 'palegreen',
    marginTop: 12,
    borderRadius: 10,
    alignItems: 'center',
  },

  botaoDark : {
    width: '100%',
    paddingVertical: 8,
    backgroundColor: '#8bce8b',
    marginTop: 12,
    borderRadius: 10,
    alignItems: 'center',
  },

  botaoTexto: {
    color: 'black',
    fontWeight: '600',
  },

  botaoTextoDark: {
    color: 'white',
    fontWeight: '600',
  },
});