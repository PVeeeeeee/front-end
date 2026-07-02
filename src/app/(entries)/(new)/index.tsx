import { Input, InputSelect } from "@/components/Input"
import { useNewEntry } from "@/contexts/NewEntryContext"
import { useRouter } from "expo-router"
import { View, Text, ScrollView } from "react-native"
import { Button, FilterButton } from "@/components/Button"

export default function NewEntry(){
    const router = useRouter()
    const { entry, setEntry } = useNewEntry()

    return (
        <View className="w-full h-full">
            <ScrollView>
                <View className="w-full px-10 h-full items-center self-center gap-5 py-10">
                    <InputSelect
                        label="Tipo"
                        options={[
                            { label: 'Venda', value: 1 },
                            { label: 'Ifood', value: 2 },
                            { label: 'Outro', value: 3 }
                        ]}
                        onSelect={item => {
                            setEntry(e => ({ ...e, type: item.value as number }))
                            if (item.value === 1) router.push('/(entries)/(new)/sale-client')
                        }}
                        selectedValue={entry.type}
                    />

                    {entry.type ?
                        entry.type !== 1 && (
                            <View className="w-full gap-5">
                                <Input label="Descrição"/>
                                <Text className="self-start text-preto font-normal text-2xl">Forma de Pagamento</Text>
                                <View className="flex-row gap-2 flex-wrap self-start">
                                    <FilterButton label="Pix"/>
                                    <FilterButton label="Espécie"/>
                                    <FilterButton label="Cartão"/>
                                </View>
                                <Input label="Valor"/>
                                <Button label="Salvar" background="bg-verde" color="text-branco-100" onPress={() => router.replace("/entries")}/>
                            </View>
                        ) : ""}
                </View>
            </ScrollView>
        </View>
    )
}