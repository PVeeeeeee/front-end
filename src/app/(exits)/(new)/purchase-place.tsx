import { useNewExit } from '@/contexts/NewExitContext'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import { View, ScrollView } from 'react-native'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'

export default function SaleClient() {
    const router = useRouter()
    const { exit, setExit } = useNewExit()
    const [place, setPlace] = useState(exit.place || '')

    return (
        <View className="w-full h-full">
            <ScrollView>
                <View className="w-full px-10 h-full items-center self-center gap-5 py-10">
                    <Input label="Local" value={place} onChangeText={setPlace}/>
                    <Button background='bg-vermelho-100' color='text-branco-100' label='Avançar' onPress={() => {
                        setExit(e => ({ ...e, place }))
                        router.push('/(exits)/(new)/purchase-itens')
                    }}/>
                </View>
            </ScrollView>
        </View>
    )
}