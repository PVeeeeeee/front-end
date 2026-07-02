import "../../../global.css";
import { Stack } from "expo-router";

export default function UserLayout() {
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
        <Stack.Screen name="index" options={{ title: "Cadastro"}}/>
        <Stack.Screen name="profile" options={{ title: "Seu Perfil" }}/>
        <Stack.Screen name="money" options={{ title: "Seu Saldo" }}/>
    </Stack>
  )
}