import { View, StyleSheet, Pressable, Text } from 'react-native';
import { Link, Stack } from 'expo-router';
import { ScrollView } from 'react-native-gesture-handler';
import { useState } from 'react';

//------------------------------------------------------------------------
import Header from '../components/header';
import CardSliderBebidasP from '../components/cardsEmP/cardsbebidasP';
import CardSliderCarnesP from '../components/cardsEmP/cardscarnesP';


export default function Produtos(){
  const [darkMode, setDarkMode] = useState(false);
  const [perfilAberto, setPerfilAberto] = useState(false);
  return (
    <ScrollView>
      <View style={{zIndex: 1}}>
        <Header onMudarTema={() => setDarkMode(!darkMode)} onAbrirPerfil={() => setPerfilAberto(true)} />
      </View>

      <View>
        <Text style={styles.tituloProdutos}>PRODUTOS</Text>
      </View>

      <View  style={styles.container}>
        <Text style={styles.tituloCards}>Carnes</Text>
        <CardSliderCarnesP darkMode={darkMode}/>
        <Link href={"/(tabs)/produtosGeral/carnes"}>
          <Pressable style={styles.button}>
            Ver mais
          </Pressable>
        </Link>
      </View>

      <View  style={styles.container}>
        <Text style={styles.tituloCards}>BEBIDAS</Text>
        <CardSliderBebidasP darkMode={darkMode}/>
        <Link href={"/(tabs)/produtosGeral/bebidas"}>
          <Pressable style={styles.button}>
            Ver mais
          </Pressable>
        </Link>
      </View>

      <View  style={styles.container}>
        <Text style={styles.tituloCards}>Congelados</Text>
        <CardSliderBebidasP darkMode={darkMode}/>
        <Link href={"/(tabs)/produtosGeral/congelados"}>
          <Pressable style={styles.button}>
            Ver mais
          </Pressable>
        </Link>
      </View>

      <View  style={styles.container}>
        <Text style={styles.tituloCards}>Congelados</Text>
        <CardSliderBebidasP darkMode={darkMode}/>
        <Link href={"/(tabs)/produtosGeral/verduras"}>
          <Pressable style={styles.button}>
            Ver mais
          </Pressable>
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
  },

  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tituloProdutos: {
    marginTop: 40,
    display: 'flex',
    fontSize: 30,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Roboto, sans-serif',
    color: '#4ed63cff',
    fontWeight: 'bold'
  },
  tituloCards: {
    display: 'flex',
    fontSize: 30,
  },
});