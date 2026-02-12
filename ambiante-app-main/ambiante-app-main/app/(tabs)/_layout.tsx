import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import 'react-native-reanimated';

export default function RootLayout(){
    return(
        // Todas as rotas precisam estar aqui
        <Stack>
            <Stack.Screen name="main" options={{ headerShown: false}} />
            <Stack.Screen name="produtos" options={{ headerShown: false}} />
            <Stack.Screen name="listaCompras" options={{ headerShown: false}} />
            <Stack.Screen name="produtosGeral/carnes" options={{ headerShown: false}} />
            <Stack.Screen name="produtosGeral/bebidas" options={{ headerShown: false}} />
            <Stack.Screen name="produtosGeral/verduras" options={{ headerShown: false}} />
            <Stack.Screen name="produtosGeral/congelados" options={{ headerShown: false}} />
        </Stack>
    )
}