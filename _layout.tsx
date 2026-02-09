import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import 'react-native-reanimated';

export default function RootLayout(){
    return(
        // Todas as rotas precisam estar aqui
        <Stack>
            <Stack.Screen name="main" options={{ headerShown: false}} />
            <Stack.Screen name="_layouts" options={{ headerShown: true}} />
        </Stack>
    )
}