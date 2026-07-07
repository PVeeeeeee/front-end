import { Stack } from "expo-router"
import { NewPaymentProvider } from "@/contexts/NewPayment"

export default function FormaPagamentoLayout(){
    return (
      <NewPaymentProvider>
        <Stack screenOptions={{ 
              headerStyle: {
                backgroundColor: '#FFFFF2',
              },
              headerTintColor: '#1E1E1E',
              headerTitleStyle: {
                fontWeight: '600',
              },
            }}>
            <Stack.Screen name="index" options={{ title: "Formas de Pagamento" }}/>
        </Stack>
      </NewPaymentProvider>
    )
}