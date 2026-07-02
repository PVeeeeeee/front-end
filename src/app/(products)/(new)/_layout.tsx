import { Stack } from 'expo-router'
import { NewProductProvider } from '@/contexts/NewProductContext'

export default function NewProductLayout() {
  return (
    <NewProductProvider>
      <Stack screenOptions={{ 
              headerStyle: {
                backgroundColor: '#FFFFF2',
              },
              headerTintColor: '#1E1E1E',
              headerTitleStyle: {
                fontWeight: '600',
              },
        }}>
        <Stack.Screen name='index' options={{ title: "Novo Produto"}}/>
      </Stack>
    </NewProductProvider>
  )
}