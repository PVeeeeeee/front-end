import { View, Text, ScrollView } from "react-native"
import { FilterButton } from "@/components/Button"
import Calendar from "@/components/Calendar"
import { Card } from "@/components/Card"
import { Feather } from "@expo/vector-icons"
import { useRouter } from "expo-router"

export default function ExitsList(){
    const router = useRouter()
    
    return (
        <View className="w-full h-full">
            <ScrollView>
                <View className="w-full px-10 h-full items-center self-center gap-5 py-10">
                    <Calendar/>
                    <View className="flex-row gap-2 flex-wrap self-start">
                        <FilterButton label="Compras"/>
                        <FilterButton label="Fretes"/>
                        <FilterButton label="Pix"/>
                        <FilterButton label="Espécie"/>
                    </View>
                    <Text className="text-preto text-xl font-normal self-start">Total de Saídas: 23</Text>
                    <View className="gap-4">
                        <Card onPress={() => router.push("/[id]")} className="flex-row justify-between items-center" backgroundColor="#FFFFF2" borderColor="cinza-200">
                            <View className="gap-1">
                                <Text className="text-preto text-2xl font-bold">Saída</Text>
                                <Text className="text-preto text-xl font-normal">R$ 00,00</Text>
                            </View>
                            <Feather name="arrow-right" size={28} color="#1E1E1E"/>
                        </Card>
                        <Card className="flex-row justify-between items-center" backgroundColor="#FFFFF2" borderColor="cinza-200">
                            <View className="gap-1">
                                <Text className="text-preto text-2xl font-bold">Saída</Text>
                                <Text className="text-preto text-xl font-normal">R$ 00,00</Text>
                            </View>
                            <Feather name="arrow-right" size={28} color="#1E1E1E"/>
                        </Card>
                        <Card className="flex-row justify-between items-center" backgroundColor="#FFFFF2" borderColor="cinza-200">
                            <View className="gap-1">
                                <Text className="text-preto text-2xl font-bold">Saída</Text>
                                <Text className="text-preto text-xl font-normal">R$ 00,00</Text>
                            </View>
                            <Feather name="arrow-right" size={28} color="#1E1E1E"/>
                        </Card>
                        <Card className="flex-row justify-between items-center" backgroundColor="#FFFFF2" borderColor="cinza-200">
                            <View className="gap-1">
                                <Text className="text-preto text-2xl font-bold">Saída</Text>
                                <Text className="text-preto text-xl font-normal">R$ 00,00</Text>
                            </View>
                            <Feather name="arrow-right" size={28} color="#1E1E1E"/>
                        </Card>
                        <Card className="flex-row justify-between items-center" backgroundColor="#FFFFF2" borderColor="cinza-200">
                            <View className="gap-1">
                                <Text className="text-preto text-2xl font-bold">Saída</Text>
                                <Text className="text-preto text-xl font-normal">R$ 00,00</Text>
                            </View>
                            <Feather name="arrow-right" size={28} color="#1E1E1E"/>
                        </Card>
                        <Card className="flex-row justify-between items-center" backgroundColor="#FFFFF2" borderColor="cinza-200">
                            <View className="gap-1">
                                <Text className="text-preto text-2xl font-bold">Saída</Text>
                                <Text className="text-preto text-xl font-normal">R$ 00,00</Text>
                            </View>
                            <Feather name="arrow-right" size={28} color="#1E1E1E"/>
                        </Card>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}