import React from 'react';
import { View, Text, StyleSheet, FlatList, useWindowDimensions, Image,TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCart } from '@/app/contexts/CartContext';

const data: CardItem[] = [
  { id: '1', title: 'Abacaxi 1un', image: require('@/app/imgP/hortifruti/abacaxi.png'), valor: 9.30, },
  { id: '2', title: 'Banana Nanica Kg', image:require('@/app/imgP/hortifruti/bananaNanica.png'), valor: 3.10, },
  { id: '3', title: 'Batata Doce Kg', image: require('@/app/imgP/hortifruti/batataDoce.png'), valor: 4.10, },
  { id: '4', title: 'Beterraba Kg', image:require('@/app/imgP/hortifruti/beterraba.png'), valor: 4.10, },
  { id: '5', title: 'Cenoura Kg', image: require('@/app/imgP/hortifruti/cenoura.png'), valor: 5.10, },
  { id: '6', title: 'Maça Fuji Kg', image: require('@/app/imgP/hortifruti/maca.png'), valor: 14.40, },
  { id: '7', title: 'Mamão Papaya 1un', image:require('@/app/imgP/hortifruti/mamao.png'), valor: 5.10, },
  { id: '8', title: 'Pepino Japonês Kg', image: require('@/app/imgP/hortifruti/pepino.png'), valor: 4.10, },
  { id: '9', title: 'Repolho Verde Kg', image: require('@/app/imgP/hortifruti/repolhoVerde.png'), valor: 6.20, },
  { id: '10', title: 'Tomate Cereja Kg', image: require('@/app/imgP/hortifruti/tomateCereja.png'), valor: 11.30, },
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

export default function CardSliderHortifruti({darkMode} : CardSliderProps) {
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
                🛒 Comprar
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
    marginBottom: 10,
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