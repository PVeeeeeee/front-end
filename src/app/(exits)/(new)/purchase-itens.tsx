import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { useNewExit } from "@/contexts/NewExitContext";
import { useRouter } from "expo-router";
import { View, ScrollView, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function SaleProducts() {
    const router = useRouter()
    const { exit, setExit } = useNewExit()

    return (
        <View className="w-full h-full">
            <ScrollView>
                <View className="w-full px-10 h-full items-center self-center gap-5 py-10">
                    <Text className="self-start text-preto font-normal text-2xl">Selecione os itens</Text>
                    <Card className="flex-row justify-between items-center" backgroundColor="#FFFFF2" borderColor="cinza-200">
                        <View className="gap-2">
                            <Text className="text-preto text-2xl font-bold">Item</Text>
                            <Text className="text-preto text-xl font-normal">R$ 00,00</Text>
                        </View>
                        <View className="flex-row items-center gap-2">
                            <Feather name="minus-circle" size={28} color="#1E1E1E"/>
                            <Text className="text-preto text-xl font-bold">1</Text>
                            <Feather name="plus-circle" size={28} color="#1E1E1E"/>
                        </View>
                    </Card>
                    <Button onPress={() => router.push("/(exits)/(new)/newItem")} label="Adicionar Item" color="text-branco-100" background="bg-vermelho-100"/>
                </View>
            </ScrollView>
            <View className="w-full bg-preto flex-row items-center justify-between p-12 pb-16 rounded-t-2xl">
                <Text className="text-branco-100 text-4xl font-bold">R$ 00,00</Text>
                <Button className="w-1/2" label="Avançar" color="text-branco-100" background="bg-vermelho-100" onPress={() => router.push("/purchase-payment")}/>
            </View>
        </View>
    )
}