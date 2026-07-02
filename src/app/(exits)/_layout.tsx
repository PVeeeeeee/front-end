import { Stack } from "expo-router"

export default function ExitsLayout(){
    return (
        <Stack screenOptions={{ 
              headerStyle: {
                backgroundColor: '#FFFFF2',
              },
              headerTintColor: '#1E1E1E',
              headerTitleStyle: {
                fontWeight: '600',
              },
            }}>
            <Stack.Screen name="index" options={{ title: "Saídas" }}/>
            <Stack.Screen name="exits" options={{ title: "Lista de Saídas" }}/>
            <Stack.Screen name="[id]" options={{ title: `Saída` }}/>
            <Stack.Screen name="(new)" options={{ headerShown: false }}/>
        </Stack>
    )
}