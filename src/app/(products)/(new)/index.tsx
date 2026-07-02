import { useNewProduct } from '@/contexts/NewProductContext'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import { View, ScrollView } from 'react-native'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'

export default function Product() {
    const router = useRouter()
    const { product, setProduct } = useNewProduct()
    const [name, setName] = useState(product.name || '')
    const [valor, setValor] = useState(String(product.value || ''))

    return (
        <View className="w-full h-full">
            <ScrollView>
                <View className="w-full px-10 h-full items-center self-center gap-5 py-10">
                    <Input label="Nome do Produto" value={name} onChangeText={setName}/>
                    <Input label='Valor' value={valor} onChangeText={setValor}/>
                    <Button background='bg-amarelo' color='text-branco-100' label='Avançar' onPress={() => {
                        setProduct(p => ({ ...p, name, value: Number(valor) }))
                        router.replace('/(products)/products')
                    }}/>
                </View>
            </ScrollView>
        </View>
    )
}