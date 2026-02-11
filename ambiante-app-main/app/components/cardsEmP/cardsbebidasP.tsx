import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  useWindowDimensions,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';


const data: CardItem[] = [
  { id: '1', title: 'Leite 1L', image: require('../imgP/leite.jpeg'), valor: 2.99, },
  { id: '2', title: 'Arroz 5kg', image: require('../imgP/arroz.jpg'), valor: 5.0, },
  { id: '3', title: 'Feijão 1kg', image: require('../imgP/feijao.jpg'), valor: 6.0, },
  { id: '4', title: 'Leite 1L', image: require('../imgP/leite.jpeg'), valor: 2.99, },
  { id: '5', title: 'Arroz 5kg', image: require('../imgP/arroz.jpg'), valor: 5.0, },
  { id: '6', title: 'Feijão 1kg', image: require('../imgP/feijao.jpg'), valor: 6.0, },
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

export default function CardSlider({darkMode} : CardSliderProps) {
  const { width } = useWindowDimensions();
  const CARD_WIDTH = width * 0.6;
  const renderItem = ({ item }: { item: CardItem }) => (
    <View style={[styles.cardProduto, darkMode && styles.cardProdutoDark]}>
        <Image source={item.image} style={styles.imagemProduto } resizeMode="contain"/>


      <View style={styles.cardInfo}>
        <Text style={[styles.nomeProduto , darkMode && styles.nomeProdutoDark]}>
          {item.title}
        </Text>

        <Text style={[styles.precoProduto, darkMode && styles.precoProdutoDark]}>
          R$ {item.valor.toFixed(2)}
        </Text>

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
    borderColor: '#2c2c2c',
    borderRadius: 8,
    overflow: 'hidden',
  },

  cardProdutoDark : {
    backgroundColor: '#555555',
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#666666',
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
    fontSize: 16,
    marginBottom: 5,
    color: '#000',
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },

  nomeProdutoDark: {
    fontSize: 16,
    marginBottom: 5,
    color: '#ffffff',
  },

  /* PREÇO */
  precoProduto: {
    fontWeight: 'bold',
    color: 'green',
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },

  precoProdutoDark: {
    fontWeight: 'bold',
    color: 'palegreen',
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