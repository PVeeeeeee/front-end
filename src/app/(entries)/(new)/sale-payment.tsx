import { Button, FilterButton } from "@/components/Button"
import { Input } from "@/components/Input"
import { useNewEntry } from "@/contexts/NewEntryContext"
import { useRouter } from "expo-router"
import { View, ScrollView, Text } from "react-native"
import { useFocusEffect } from "@react-navigation/native"
import { useCallback, useState } from "react"
import { getPaymentMethods } from "@/services/api"


export default function SalePayment() {
    const { entry } = useNewEntry()
    const router = useRouter()

    const [payments, setPayments] = useState<any[]>([])

    useFocusEffect(
        useCallback(() => {
            async function loadPayments() {
                try {
                    const response = await getPaymentMethods()
                    console.log(response)
                    console.log(Array.isArray(response))
                    setPayments(response)
                } catch (error: any) {
                    console.log('Erro ao buscar formas de pagamento: ', error?.response?.data || error.message)
                }
            }

            loadPayments()
        }, [])
    )

    return (
        <View className="w-full h-full">
            <ScrollView>
                <View className="w-full px-10 h-full items-center self-center gap-5 py-10">
                    <Input label="Frete"/>
                    <Input label="Desconto"/>
                    <Text className="self-start text-preto font-normal text-2xl">Forma de Pagamento</Text>
                    <View className="flex-row gap-2 flex-wrap self-start">
                        {payments.map((payment: any) => (
                            <FilterButton
                                key={payment.id}
                                label={payment.nome}
                            />
                        ))}
                        <FilterButton onPress={() => router.push("/formaPagamentos")} label="+"/>
                    </View>
                    <View className="flex-row self-start items-center justify-start w-full border-t border-cinza-200 pt-2">
                        <Text className="self-start text-preto font-normal text-2xl">Total: </Text>
                        <Text className="self-start text-preto font-bold text-2xl">R$ 00,00</Text>
                    </View>
                    <Button color="text-branco-100" background="bg-verde" label="Salvar"/>
                </View>
            </ScrollView>
        </View>
    )
}