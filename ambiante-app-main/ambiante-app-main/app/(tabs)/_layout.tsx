import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout(){
    return(
        <GestureHandlerRootView>
        <Stack>
            <Stack.Screen name="main" options={{ headerShown: false}} />
            <Stack.Screen name="produtos" options={{ headerShown: false}} />
            <Stack.Screen name="listaCompras" options={{ headerShown: false}} />
            <Stack.Screen name="produtosGeral/carnes" options={{ headerShown: false}} />
            <Stack.Screen name="produtosGeral/bebidas" options={{ headerShown: false}} />
            <Stack.Screen name="produtosGeral/hortifruti" options={{ headerShown: false}} />
            <Stack.Screen name="produtosGeral/congelados" options={{ headerShown: false}} />
        </Stack>
        </GestureHandlerRootView>
    )
}