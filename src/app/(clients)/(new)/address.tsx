import { useNewClient } from '@/contexts/NewClientContext'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import { View, ScrollView } from 'react-native'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'

export default function Product() {
    const router = useRouter()
    const { client, setClient } = useNewClient()
    const [address, setAddress] = useState(client.address || {})

    return (
        <View className="w-full h-full">
            <ScrollView>
                <View className="w-full px-10 h-full items-center self-center gap-5 py-10">
                    <Input label="Bairro" value={address.neighborhood || ''} onChangeText={(text) => setAddress({...address, neighborhood: text})}/>
                    <Input label='Logradouro' value={address.street || ''} onChangeText={(text) => setAddress({...address, street: text})}/>
                    <Input label='Número' value={address.number || ''} onChangeText={(text) => setAddress({...address, number: text})}/>
                    <Button background='bg-vermelho-200' color='text-branco-100' label='Salvar' onPress={() => {
                        setClient(c => ({ ...c, address }))
                        router.replace('/(clients)/clients')
                    }}/>
                </View>
            </ScrollView>
        </View>
    )
}