import { useNewClient } from '@/contexts/NewClientContext'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import { View, ScrollView } from 'react-native'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'

export default function Product() {
    const router = useRouter()
    const { client, setClient } = useNewClient()
    const [name, setName] = useState(client.name || '')
    const [phone, setPhone] = useState(String(client.phone || ''))

    return (
        <View className="w-full h-full">
            <ScrollView>
                <View className="w-full px-10 h-full items-center self-center gap-5 py-10">
                    <Input label="Nome" value={name} onChangeText={setName}/>
                    <Input label='Telefone' value={phone} onChangeText={setPhone}/>
                    <Button background='bg-vermelho-200' color='text-branco-100' label='Avançar' onPress={() => {
                        setClient(c => ({ ...c, name, phone }))
                        router.replace('/address')
                    }}/>
                </View>
            </ScrollView>
        </View>
    )
}