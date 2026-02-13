import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

export interface CartItem {
  id: string;
  title: string;
  image: any;
  valor: number;
  quantidade: number;
}

interface CartContextData {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantidade'>) => void;
  removeFromCart: (itemId: string) => void;
  limparCarrinho: () => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [note, setNote] = useState('');
  const STORAGE_KEY = '@note_key';

  // Carrega os dados salvos ao abrir o app
  useEffect(() => {
    const loadCart = async () => {
      try {
        const savedCart = await AsyncStorage.getItem('@meu_carrinho');
        if (savedCart) {
          setCart(JSON.parse(savedCart));
        }
      } catch (error) {
        console.error("Erro ao carregar o carrinho:", error);
      } finally {
        setIsLoaded(true);
      }
    };
    loadCart();
  }, []);

  // Salva os dados sempre que o carrinho for alterado
  useEffect(() => {
    const saveCart = async () => {
      if (isLoaded) {
        try {
          await AsyncStorage.setItem('@meu_carrinho', JSON.stringify(cart));
        } catch (error) {
          console.error("Erro ao salvar o carrinho:", error);
        }
      }
    };
    saveCart();
  }, [cart, isLoaded]);

  // Função para adicionar ou aumentar quantidade baseado no nome do produto
  const addToCart = (item: Omit<CartItem, 'quantidade'>) => {
    setCart((prevCart) => {
      const itemExists = prevCart.find((cartItem) => cartItem.title === item.title);

      if (itemExists) {
        return prevCart.map((cartItem) =>
          cartItem.title === item.title
            ? { ...cartItem, quantidade: cartItem.quantidade + 1 }
            : cartItem
        );
      }

      return [...prevCart, { ...item, quantidade: 1 }];
    });
  };

  // Função para dminuir quantidade ou remover
  const removeFromCart = (itemTitle: string) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.title === itemTitle);

      if (!existingItem) return prevCart;

      // Se a quantidade for maior que 1, apenas diminui 1
      if (existingItem.quantidade > 1) {
        return prevCart.map((cartItem) =>
          cartItem.title === itemTitle
            ? { ...cartItem, quantidade: cartItem.quantidade - 1 }
            : cartItem
        );
      }

      // Se a quantidade for 1, remove o item da lista filtrando ele para fora
      return prevCart.filter((cartItem) => cartItem.title !== itemTitle);
    });
  };

  // Função extra: Limpar todo o carrinho de uma vez
  const limparCarrinho = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, limparCarrinho }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);