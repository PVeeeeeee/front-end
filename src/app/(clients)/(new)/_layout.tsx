import { Stack } from 'expo-router'
import { NewClientProvider } from '@/contexts/NewClientContext'

export default function NewClientLayout() {
  return (
    <NewClientProvider>
      <Stack screenOptions={{ 
              headerStyle: {
                backgroundColor: '#FFFFF2',
              },
              headerTintColor: '#1E1E1E',
              headerTitleStyle: {
                fontWeight: '600',
              },
        }}>
        <Stack.Screen name='index' options={{ title: "Novo Cliente"}}/>
        <Stack.Screen name='address' options={{ title: "Endereço"}}/>
      </Stack>
    </NewClientProvider>
  )
}