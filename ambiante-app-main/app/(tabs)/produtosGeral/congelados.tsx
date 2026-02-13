import { View, StyleSheet, Pressable, Text,  ScrollView } from 'react-native';
import { Link, Stack } from 'expo-router';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { LeagueSpartan_600SemiBold, LeagueSpartan_500Medium } from '@expo-google-fonts/league-spartan';

//------------------------------------------------------------------------
import Header from '@/app/components/header';
import CardSliderCongelados from '@/app/components/cardsEmPaginas/cardsCongelados';

export default function Carnes() {
  const [darkMode, setDarkMode] = useState(false);
  const [perfilAberto, setPerfilAberto] = useState(false);

  let [fontsLoaded] = useFonts({
      LeagueSpartan_600SemiBold,
      LeagueSpartan_500Medium
    });

  return (
    <ScrollView showsVerticalScrollIndicator={true} contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ zIndex: 1 }}>
          <Header onMudarTema={() => setDarkMode(!darkMode)} onAbrirPerfil={() => setPerfilAberto(true)} />
        </View>
      <SafeAreaView style={[styles.container, darkMode && styles.containerDark]}>
        <View>
          <View style={styles.botaoTitulo}>
            <Link href={"/(tabs)/produtos"} asChild>
            <Pressable style={({ pressed }) => [styles.botao, darkMode && styles.botaoDark, pressed && { transform: [{ scale: 0.99 }] }]}>
              <Text style={[styles.botaoTexto, darkMode && styles.botaoTextoDark]}>🢠</Text>
            </Pressable>
            </Link>
            <Text style={[styles.titulo, darkMode && styles.tituloDark]}> ❄️ Congelados</Text>
          </View>
          <View style={{ borderBottomColor: '#7FBF7F', borderBottomWidth: 1, marginVertical: 10,}} />
          <CardSliderCongelados darkMode={darkMode}/>
        </View>
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

  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
  botaoTitulo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // centraliza o bloco
    paddingVertical: 15,
  },

  titulo: {
    fontFamily: 'LeagueSpartan_600SemiBold',
    fontSize: 32,
    fontWeight: 'bold',
    color: 'rgb(32, 32, 32)',
    marginLeft: 20,
    marginRight: 50,
  },

  tituloDark: {
    color: 'rgb(229, 229, 229)',
  },

  botao: {
    position: 'absolute', 
    left: 15,
    width: 30,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
   botaoDark: {
    position: 'absolute', 
    right: 20,
    left: 30,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  botaoTexto: {
    fontFamily: 'LeagueSpartan_600SemiBold',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },

  botaoTextoDark: {
    color: '#fff',
  },
});