import { useNewPayment} from '@/contexts/NewPayment'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import { View, ScrollView } from 'react-native'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { createPayment } from '@/services/api'

export default function FormaPagamento() {
    const router = useRouter()
    const { payment, setPayment } = useNewPayment()
    const [nome, setNome] = useState(payment.nome || '')

    async function savePayment() {
        try {
            await createPayment({
                nome
            })

            router.back()
        } catch (error: any) {
        console.log("ERRO COMPLETO:");
        console.log(error);

        console.log("response:", error?.response);
        console.log("data:", error?.response?.data);
        console.log("status:", error?.response?.status);
        console.log("message:", error?.message);
    }
    }

    return (
        <View className="w-full h-full">
            <ScrollView>
                <View className="w-full px-10 h-full items-center self-center gap-5 py-10">
                    <Input label="Nome da Forma de Pagamento" value={nome} onChangeText={setNome}/>
                    <Button 
                        background='bg-amarelo'
                        color='text-branco-100'
                        label='Salvar'
                        onPress={savePayment}/>
                </View>
            </ScrollView>
        </View>
    )
}