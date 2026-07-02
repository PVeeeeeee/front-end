import { Button } from "@/components/Button"
import { useRouter } from "expo-router"
import { View, Text, ScrollView } from "react-native"

export default function Product(){
    const router = useRouter()
    return (
        <View className="w-full h-full">
            <ScrollView>
                <View className="w-full px-10 h-full items-center self-center gap-5 py-10">
                    <View className="bg-branco-100 w-full rounded-lg p-5 gap-4 border border-cinza-200">
                        <View className="flex-row justify-between">
                            <Text className="self-start text-preto font-bold text-2xl">Produto #ID</Text>
                            <Text className="self-start text-cinza-200 font-bold text-2xl">00/00/0000</Text>
                        </View>
                        <Text className="self-start text-preto font-normal text-2xl">Nome:</Text>
                        <Text className="self-start text-preto font-normal text-2xl">Valor:</Text>
                        <View className="w-full gap-4">
                            <Button label="Editar" color="text-branco-100" background="bg-amarelo"/>
                            <Button className="border-2 border-vermelho-100 rounded-lg" label="Excluir" color="text-vermelho-100" background="bg-transparent"/>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}