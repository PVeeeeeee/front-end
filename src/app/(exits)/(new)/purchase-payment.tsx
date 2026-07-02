import { Button, FilterButton } from "@/components/Button"
import { Input } from "@/components/Input"
import { useNewExit } from "@/contexts/NewExitContext"
import { useRouter } from "expo-router"
import { View, ScrollView, Text } from "react-native"

export default function SalePayment() {
    const { exit } = useNewExit()
    const router = useRouter()
    
    function save() {
        console.log(exit)
        router.replace("/(exits)/exits")
    }

    return (
        <View className="w-full h-full">
            <ScrollView>
                <View className="w-full px-10 h-full items-center self-center gap-5 py-10">
                    <Input label="Frete"/>
                    <Input label="Desconto"/>
                    <Text className="self-start text-preto font-normal text-2xl">Forma de Pagamento</Text>
                    <View className="flex-row gap-2 flex-wrap self-start">
                        <FilterButton label="Pix"/>
                        <FilterButton label="Espécie"/>
                        <FilterButton label="Cartão"/>
                    </View>
                    <View className="flex-row self-start items-center justify-start w-full border-t border-cinza-200 pt-2">
                        <Text className="self-start text-preto font-normal text-2xl">Total: </Text>
                        <Text className="self-start text-preto font-bold text-2xl">R$ 00,00</Text>
                    </View>
                    <Button color="text-branco-100" background="bg-vermelho-100" label="Salvar" onPress={save}/>
                </View>
            </ScrollView>
        </View>
    )
}