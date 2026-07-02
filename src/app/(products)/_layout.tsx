import { Stack } from "expo-router"

export default function ProductsLayout(){
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
            <Stack.Screen name="index" options={{ title: "Produtos" }}/>
            <Stack.Screen name="products" options={{ title: "Lista de Produtos" }}/>
            <Stack.Screen name="monthly-analysis" options={{ title: "Análise Mensal" }}/>
            <Stack.Screen name="[id]" options={{ title: `Produto` }}/>
            <Stack.Screen name="(new)" options={{ headerShown: false }}/>
        </Stack>
    )
}