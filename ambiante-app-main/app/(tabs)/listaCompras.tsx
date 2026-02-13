import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import { router, Stack } from 'expo-router';
import { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import Header from '../components/header';
import Perfil from '../components/perfil';

export default function ListaComprasScreen() {
  const { cart, addToCart, removeFromCart, limparCarrinho, } = useCart();

  const valorTotal = cart.reduce((total, item) => total + (item.valor * item.quantidade), 0);
  const [darkMode, setDarkMode] = useState(false);
  const [perfilAberto, setPerfilAberto] = useState(false);

  return (
    <>
      <View style={{ zIndex: 1 }}>
        <Header 
          onMudarTema={() => setDarkMode(!darkMode)} 
          onAbrirPerfil={() => setPerfilAberto(true)} 
        />
      </View>

      <View style={[styles.container, darkMode && styles.containerDark]}>
        {cart.length === 0 ? (
          <TouchableOpacity 
            style={[styles.botaoVoltar, darkMode && styles.botaoVoltarDark]} 
            onPress={() => router.back()}
          >
            <Text style={styles.textoBotaoVoltar}>Voltar</Text>
          </TouchableOpacity>
        ) : (
          <>
            <FlatList
              data={cart}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View style={[styles.cardItem, darkMode && styles.cardItemDark]}>
                  
                  <Image 
                    source={item.image} 
                    style={styles.cardImage} 
                    resizeMode="contain" 
                  />
                  
                  <View style={styles.cardDetalhes}>
                    <Text style={[styles.cardTitulo, darkMode && styles.cardTituloDark]}>
                      {item.title}
                    </Text>

                    <Text style={styles.cardPreco}>
                      R$ {(item.valor * item.quantidade).toFixed(2)}
                    </Text>
                  </View>

                  <View style={[styles.cardContainerBotoes, darkMode && styles.cardContainerBotoesDark]}>
                    
                    <TouchableOpacity 
                      style={styles.cardBotao} 
                      onPress={() => removeFromCart(item.id)}
                    >
                      <Text style={[styles.botaoSimbolo, darkMode && styles.controlTextDark]}>-</Text>
                    </TouchableOpacity>

                    <Text style={[styles.cardQuantidade, darkMode && styles.cardQuantidadeDark]}>
                      {item.quantidade}
                    </Text>

                    <TouchableOpacity 
                      style={styles.cardBotao} 
                      onPress={() => addToCart(item)}
                    >
                      <Text style={[styles.botaoSimbolo, darkMode && styles.controlTextDark]}>+</Text>
                    </TouchableOpacity>

                  </View>
                </View>
              )}
            />

            <View style={[styles.footer, darkMode && styles.footerDark]}>
              <Text style={[styles.total, darkMode && styles.totalDark]}>
                Total: R$ {valorTotal.toFixed(2)}
              </Text>
              
              <TouchableOpacity style={[styles.botaoComprar, darkMode && styles.botaoComprarDark]} onPress={() => console.log("Compra finalizada")}>
                <Text style={styles.textoBotaoLimpar}>Finalizar Compra</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.botaoLimpar, darkMode && styles.botaoLimparDark]} onPress={limparCarrinho}>
                <Text style={styles.textoBotaoLimpar}>Esvaziar Carrinho</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
        <Perfil theme={darkMode} aberto={perfilAberto} onFechar={() => setPerfilAberto(false)}/>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 10
  },

  containerDark: {
    backgroundColor: '#25292e',
  },

  cardItem: {
    flexDirection: 'row',
    backgroundColor: '#e7e6e6',
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
  },

  cardItemDark: {
    backgroundColor: '#454545',
  },

  cardImage: {
    width: 60,
    height: 60,
    marginRight: 12
  },

  cardDetalhes: {
    flex: 1,
    justifyContent: 'center'
  },

  cardTitulo: {
    color: '#272727',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4
  },

  cardTituloDark: {
    color: '#ffffff',
  },

  cardPreco: {
    color: '#7FBF7F',
    fontSize: 14,
    fontWeight: 'bold'
  },

  cardContainerBotoes: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#d6d6d6',
    borderRadius: 8,
    paddingHorizontal: 4,
  },

  cardContainerBotoesDark: {
    backgroundColor: '#333',
  },

  cardBotao: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },

  botaoSimbolo: {
    color: '#7FBF7F',
    fontSize: 18,
    fontWeight: 'bold',
  },

  controlTextDark: {
    color: '#95dd95',
  },

  cardQuantidade: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    minWidth: 20,
    textAlign: 'center',
  },

  cardQuantidadeDark: {
    color: '#fff',
  },

  footer: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderColor: '#585858',
  },

  footerDark: {
    borderColor: '#454545',
  },

  total: {
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'right',
  },

  totalDark: {
    color: '#fff',
  },

  botaoLimpar: {
    backgroundColor: '#ff4d4d',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },

  botaoLimparDark: {
    backgroundColor: '#df1a1aff',
  },

  botaoComprar: {
    backgroundColor: '#6efa4bff',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 8
  },

  botaoComprarDark: {
    backgroundColor: '#1adf2bff',
  },

  textoBotaoLimpar: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  botaoVoltar: {
    backgroundColor: '#ff4d4d',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },

  botaoVoltarDark: {
    backgroundColor: '#df1a1aff',
  },

  textoBotaoVoltar: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
