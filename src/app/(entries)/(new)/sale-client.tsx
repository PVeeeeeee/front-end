import { useNewEntry } from '@/contexts/NewEntryContext'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import { View, ScrollView } from 'react-native'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'

export default function SaleClient() {
    const router = useRouter()
    const { entry, setEntry } = useNewEntry()
    const [client, setClient] = useState(entry.client || '')

    return (
        <View className="w-full h-full">
            <ScrollView>
                <View className="w-full px-10 h-full items-center self-center gap-5 py-10">
                    <Input label="Cliente" value={client} onChangeText={setClient}/>
                    <Button background='bg-verde' color='text-branco-100' label='Avançar' onPress={() => {
                        setEntry(e => ({ ...e, client }))
                        router.push('/(entries)/(new)/sale-products')
                    }}/>
                </View>
            </ScrollView>
        </View>
    )
}