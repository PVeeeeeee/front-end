import { Stack } from "expo-router"

export default function ClientsLayout(){
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
            <Stack.Screen name="index" options={{ title: "Clientes" }}/>
            <Stack.Screen name="clients" options={{ title: "Lista de Clientes" }}/>
            <Stack.Screen name="[id]" options={{ title: "Cliente" }}/>
            <Stack.Screen name="(new)" options={{ headerShown: false }}/>
        </Stack>
    )
}