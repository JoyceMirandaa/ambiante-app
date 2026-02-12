import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  useWindowDimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

const data: CardItem[] = [
  { id: '1', title: 'Peito de Frango', image: require('@/app/imgP/carnes/peitofrango.png'), valor: 20.60, },
  { id: '2', title: 'Coxa de Frango', image:require('@/app/imgP/carnes/coxaFrango.png'), valor: 10.30, },
  { id: '3', title: 'Carne Suína', image: require('@/app/imgP/carnes/carneSuina.png'), valor: 19.50, },
  { id: '4', title: 'Linguiça Toscana', image:require('@/app/imgP/carnes/linguicaToscana.png'), valor: 19.50, },
  { id: '5', title: 'Pernil Suíno', image: require('@/app/imgP/carnes/pernilSuino.png'), valor: 20.60, },
  { id: '6', title: 'Alcatra', image: require('@/app/imgP/carnes/alcatra.png'), valor: 51.93, },
];



interface CardSliderProps {
  darkMode: boolean;
}

interface CardItem {
  id: string;
  title: string;
  image: any; // imagens importadas do require normalmente usam `any`
  valor: number;
}

export default function CardDescontoSlider({darkMode} : CardSliderProps) {
  const { width } = useWindowDimensions();
  const CARD_WIDTH = width * 0.10;
  const renderItem = ({ item }: { item: CardItem }) => (
    <View style={[styles.cardProduto, darkMode && styles.cardProdutoDark]}>
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

        <TouchableOpacity style={[styles.botao, darkMode && styles.botaoDark]}>
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
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH + 20}
        decelerationRate="fast"
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
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
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