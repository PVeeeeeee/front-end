import { Card } from "@/components/Card"
import { Feather } from "@expo/vector-icons"
import { useRouter } from "expo-router"
import { View, Text, ScrollView } from "react-native"

export default function Reports(){
    const router = useRouter()

    return (
        <ScrollView>
            <View className="w-full px-10 h-full items-center self-center gap-5 pt-10 pb-10">
                <View className="self-start flex-row w-full justify-between items-center border-b border-cinza-200 pb-4">
                    <Text className='font-semibold text-preto text-3xl'>Relatórios</Text>
                </View>
                <View className="w-full gap-2 justify-between">
                    <Card onPress={() => router.push("/(entries)")} className="gap-4" backgroundColor="#FFFFF2" borderColor="cinza-200">
                        <View className="p-2 bg-verde/50 rounded-md w-1/6 justify-center items-center">
                            <Feather name="log-in" size={28} color="#2B8722"/>
                        </View>
                        <Text className="text-cinza-300 text-2xl">Entradas</Text>
                    </Card>
                    <Card onPress={() => router.push("/(exits)")} className="gap-4" backgroundColor="#FFFFF2" borderColor="cinza-200">
                        <View className="p-2 bg-vermelho-100/50 rounded-md w-1/6 justify-center items-center">
                            <Feather name="log-out" size={28} color="#930A0A"/>
                        </View>
                        <Text className="text-cinza-300 text-2xl">Saídas</Text>
                    </Card>
                    <Card onPress={() => router.push("/(products)")} className="gap-4" backgroundColor="#FFFFF2" borderColor="cinza-200">
                        <View className="p-2 bg-amarelo/50 rounded-md w-1/6 justify-center items-center">
                            <Feather name="package" size={28} color="#EBBA20"/>
                        </View>
                        <Text className="text-cinza-300 text-2xl">Produtos</Text>
                    </Card>
                    <Card className="gap-4" backgroundColor="#FFFFF2" borderColor="cinza-200">
                        <View className="p-2 bg-azul/50 rounded-md w-1/6 justify-center items-center">
                            <Feather name="dollar-sign" size={28} color="#124993"/>
                        </View>
                        <Text className="text-cinza-300 text-2xl">Finanças</Text>
                    </Card>
                    <Card onPress={() => router.push("/(clients)")} className="gap-4" backgroundColor="#FFFFF2" borderColor="cinza-200">
                        <View className="p-2 bg-vermelho-200/50 rounded-md w-1/6 justify-center items-center">
                            <Feather name="users" size={28} color="#D52626"/>
                        </View>
                        <Text className="text-cinza-300 text-2xl">Clientes</Text>
                    </Card>
                    <Card onPress={() => router.push("/history")} className="gap-4" backgroundColor="#FFFFF2" borderColor="cinza-200">
                        <View className="p-2 bg-cinza-300/50 rounded-md w-1/6 justify-center items-center">
                            <Feather name="clock" size={28} color="#333333"/>
                        </View>
                        <Text className="text-cinza-300 text-2xl">Histórico</Text>
                    </Card>
                </View>
            </View>
        </ScrollView>
    )
}