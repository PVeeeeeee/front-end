import Calendar from "@/components/Calendar"
import { Card } from "@/components/Card"
import { Feather } from "@expo/vector-icons"
import { useRouter } from "expo-router"
import { View, Text, ScrollView } from "react-native"

export default function History(){
    const router = useRouter()

    return (
        <ScrollView>
            <View className="w-full px-10 h-full items-center self-center gap-5 pt-10 pb-10">
                <View className="self-start flex-row w-full justify-between items-center border-b border-cinza-200 pb-4">
                    <Text className='font-semibold text-preto text-3xl'>Histórico</Text>
                </View>
                <Calendar/>
                <Text className="text-preto text-xl font-normal self-start">Total de Movimentações: 23</Text>
                <View className="gap-4">
                    <Card className="flex-row justify-between items-center" backgroundColor="#2B8722" borderColor="cinza-200">
                        <View className="gap-1">
                            <Text className="text-branco-100 text-2xl font-bold">Entrada</Text>
                            <Text className="text-branco-100 text-xl font-normal">R$ 00,00</Text>
                        </View>
                        <Feather name="arrow-right" size={28} color="#FFFFF2"/>
                    </Card>
                    <Card className="flex-row justify-between items-center" backgroundColor="#930A0A" borderColor="cinza-200">
                        <View className="gap-1">
                            <Text className="text-branco-100 text-2xl font-bold">Saída</Text>
                            <Text className="text-branco-100 text-xl font-normal">R$ 00,00</Text>
                        </View>
                        <Feather name="arrow-right" size={28} color="#FFFFF2"/>
                    </Card>
                    <Card className="flex-row justify-between items-center" backgroundColor="#D52626" borderColor="cinza-200">
                        <View className="gap-1">
                            <Text className="text-branco-100 text-2xl font-bold">Cliente</Text>
                            <Text className="text-branco-100 text-xl font-normal">(00) 0 0000-0000</Text>
                        </View>
                        <Feather name="arrow-right" size={28} color="#FFFFF2"/>
                    </Card>
                    <Card className="flex-row justify-between items-center" backgroundColor="#930A0A" borderColor="cinza-200">
                        <View className="gap-1">
                            <Text className="text-branco-100 text-2xl font-bold">Saída</Text>
                            <Text className="text-branco-100 text-xl font-normal">R$ 00,00</Text>
                        </View>
                        <Feather name="arrow-right" size={28} color="#FFFFF2"/>
                    </Card>
                    <Card className="flex-row justify-between items-center" backgroundColor="#EBBA20" borderColor="cinza-200">
                        <View className="gap-1">
                            <Text className="text-branco-100 text-2xl font-bold">Produto</Text>
                            <Text className="text-branco-100 text-xl font-normal">R$ 00,00</Text>
                        </View>
                        <Feather name="arrow-right" size={28} color="#FFFFF2"/>
                    </Card>
                    <Card className="flex-row justify-between items-center" backgroundColor="#2B8722" borderColor="cinza-200">
                        <View className="gap-1">
                            <Text className="text-branco-100 text-2xl font-bold">Entrada</Text>
                            <Text className="text-branco-100 text-xl font-normal">R$ 00,00</Text>
                        </View>
                        <Feather name="arrow-right" size={28} color="#FFFFF2"/>
                    </Card>
                </View>
            </View>
        </ScrollView>
    )
}