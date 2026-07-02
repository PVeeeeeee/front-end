import { View, Text, ScrollView } from "react-native"
import { FilterButton } from "@/components/Button"
import { Card } from "@/components/Card"
import { Feather } from "@expo/vector-icons"
import { useRouter } from "expo-router"
import { Input } from "@/components/Input"

export default function ClientsList(){
    const router = useRouter()
    
    return (
        <View className="w-full h-full">
            <ScrollView>
                <View className="w-full px-10 h-full items-center self-center gap-5 py-10">
                    <View className="flex-row gap-2 flex-wrap self-start">
                        <FilterButton label="A-Z"/>
                        <FilterButton label="Z-A"/>
                    </View>
                    <Input label="Pesquisar"/>
                    <Text className="text-preto text-xl font-normal self-start">Total de Clientes: 23</Text>
                    <View className="gap-4">
                        <Card onPress={() => router.push("/[id]")} className="flex-row justify-between items-center" backgroundColor="#FFFFF2" borderColor="cinza-200">
                            <View className="gap-1">
                                <Text className="text-preto text-2xl font-bold">Cliente</Text>
                                <Text className="text-preto text-xl font-normal">(00) 0 0000-0000</Text>
                            </View>
                            <Feather name="arrow-right" size={28} color="#1E1E1E"/>
                        </Card>
                        <Card className="flex-row justify-between items-center" backgroundColor="#FFFFF2" borderColor="cinza-200">
                            <View className="gap-1">
                                <Text className="text-preto text-2xl font-bold">Cliente</Text>
                                <Text className="text-preto text-xl font-normal">(00) 0 0000-0000</Text>
                            </View>
                            <Feather name="arrow-right" size={28} color="#1E1E1E"/>
                        </Card>
                        <Card className="flex-row justify-between items-center" backgroundColor="#FFFFF2" borderColor="cinza-200">
                            <View className="gap-1">
                                <Text className="text-preto text-2xl font-bold">Cliente</Text>
                                <Text className="text-preto text-xl font-normal">(00) 0 0000-0000</Text>
                            </View>
                            <Feather name="arrow-right" size={28} color="#1E1E1E"/>
                        </Card>
                        <Card className="flex-row justify-between items-center" backgroundColor="#FFFFF2" borderColor="cinza-200">
                            <View className="gap-1">
                                <Text className="text-preto text-2xl font-bold">Cliente</Text>
                                <Text className="text-preto text-xl font-normal">(00) 0 0000-0000</Text>
                            </View>
                            <Feather name="arrow-right" size={28} color="#1E1E1E"/>
                        </Card>
                        <Card className="flex-row justify-between items-center" backgroundColor="#FFFFF2" borderColor="cinza-200">
                            <View className="gap-1">
                                <Text className="text-preto text-2xl font-bold">Cliente</Text>
                                <Text className="text-preto text-xl font-normal">(00) 0 0000-0000</Text>
                            </View>
                            <Feather name="arrow-right" size={28} color="#1E1E1E"/>
                        </Card>
                        <Card className="flex-row justify-between items-center" backgroundColor="#FFFFF2" borderColor="cinza-200">
                            <View className="gap-1">
                                <Text className="text-preto text-2xl font-bold">Cliente</Text>
                                <Text className="text-preto text-xl font-normal">(00) 0 0000-0000</Text>
                            </View>
                            <Feather name="arrow-right" size={28} color="#1E1E1E"/>
                        </Card>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}