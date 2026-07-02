import { View, Text, ScrollView } from "react-native"
import { useRouter } from "expo-router"
import { InputSelect } from "@/components/Input"
import { useState } from "react"
import { Card } from "@/components/Card"

export default function ProductsMonthlyList(){
    const router = useRouter()
    const [month, setMonth] = useState<number | undefined>(undefined);
    
    return (
        <View className="w-full h-full">
            <ScrollView>
                <View className="w-full px-10 h-full items-center self-center gap-5 py-10">
                    <InputSelect
                        label="Mês"
                        options={[
                            { label: 'Janeiro', value: 1 },
                            { label: 'Fevereiro', value: 2 },
                            { label: 'Março', value: 3 },
                            { label: 'Abril', value: 4 },
                            { label: 'Maio', value: 5 },
                            { label: 'Junho', value: 6 },
                            { label: 'Julho', value: 7 },
                            { label: 'Agosto', value: 8 },
                            { label: 'Setembro', value: 9 },
                            { label: 'Outubro', value: 10 },
                            { label: 'Novembro', value: 11 },
                            { label: 'Dezembro', value: 12 }
                        ]}
                        onSelect={item => {
                            setMonth(typeof item.value === 'number' ? item.value : undefined)
                        }}
                        selectedValue={month}
                    />

                    <View className="w-full">
                        <Text className="self-start text-preto font-normal text-2xl">Rankig do Mês</Text>
                        <Card className="flex-row justify-between border-0 border-b border-cinza-200" >
                            <Text className="self-start text-preto font-bold text-2xl">1°</Text>
                            <Text className="self-start text-preto font-normal text-xl">Produto 1</Text>
                            <Text className="self-start text-preto font-bold text-2xl">30</Text>
                        </Card>
                        <Card className="flex-row justify-between border-0 border-b border-cinza-200" >
                            <Text className="self-start text-preto font-bold text-2xl">2°</Text>
                            <Text className="self-start text-preto font-normal text-xl">Produto 2</Text>
                            <Text className="self-start text-preto font-bold text-2xl">30</Text>
                        </Card>
                        <Card className="flex-row justify-between border-0 border-b border-cinza-200" >
                            <Text className="self-start text-preto font-bold text-2xl">3°</Text>
                            <Text className="self-start text-preto font-normal text-xl">Produto 3</Text>
                            <Text className="self-start text-preto font-bold text-2xl">30</Text>
                        </Card>
                        <Card className="flex-row justify-between border-0 border-b border-cinza-200" >
                            <Text className="self-start text-preto font-bold text-2xl">4°</Text>
                            <Text className="self-start text-preto font-normal text-xl">Produto 4</Text>
                            <Text className="self-start text-preto font-bold text-2xl">30</Text>
                        </Card>
                        <Card className="flex-row justify-between border-0 border-b border-cinza-200" >
                            <Text className="self-start text-preto font-bold text-2xl">5°</Text>
                            <Text className="self-start text-preto font-normal text-xl">Produto 5</Text>
                            <Text className="self-start text-preto font-bold text-2xl">30</Text>
                        </Card>
                        <Card className="flex-row justify-between border-0 border-b border-cinza-200" >
                            <Text className="self-start text-preto font-bold text-2xl">6°</Text>
                            <Text className="self-start text-preto font-normal text-xl">Produto 6</Text>
                            <Text className="self-start text-preto font-bold text-2xl">30</Text>
                        </Card>
                        <Card className="flex-row justify-between border-0 border-b border-cinza-200" >
                            <Text className="self-start text-preto font-bold text-2xl">7°</Text>
                            <Text className="self-start text-preto font-normal text-xl">Produto 7</Text>
                            <Text className="self-start text-preto font-bold text-2xl">30</Text>
                        </Card>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}