import { Input, InputSelect } from "@/components/Input"
import { useNewExit } from "@/contexts/NewExitContext"
import { useRouter } from "expo-router"
import { View, Text, ScrollView } from "react-native"
import { Button, FilterButton } from "@/components/Button"

export default function NewExit(){
    const router = useRouter()
    const { exit, setExit } = useNewExit()

    return (
        <View className="w-full h-full">
            <ScrollView>
                <View className="w-full px-10 h-full items-center self-center gap-5 py-10">
                    <View className="w-full gap-5">
                        <Input label="Nome"/>
                        <Input label="Valor"/>
                        <Button label="Salvar" background="bg-vermelho-100" color="text-branco-100" onPress={() => router.back()}/>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}