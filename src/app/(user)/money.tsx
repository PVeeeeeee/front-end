import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import { View, ScrollView, Alert } from "react-native"
import { useRouter } from "expo-router"
import { useState } from "react"

export default function Money(){
    const router = useRouter()

    const [saldoFisico, setSaldoFisico] = useState("")
    const [saldoOnline, setSaldoOnline] = useState("")

    async function handleRegister() {
        router.replace("/(home)")
    }
    
    return (
        <ScrollView>
            <View className="w-full px-10 h-full items-center self-center gap-5 pt-16">
                <Input label="Saldo Físico" keyboardType="numeric" value={saldoFisico} onChangeText={setSaldoFisico}/>
                <Input label="Saldo Online" keyboardType="numeric" value={saldoOnline} onChangeText={setSaldoOnline}/>
                <Button onPress={handleRegister} label="Cadastrar" color="text-branco-100"/>
            </View>
        </ScrollView>
    )
}