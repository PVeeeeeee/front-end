import { useLocalSearchParams, useRouter } from 'expo-router'
import { View, ScrollView, Text } from 'react-native'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { getClients, updateClient, Client } from '@/services/api'
import { useEffect, useState } from 'react'

export default function EditClient() {
    
    const { id } = useLocalSearchParams()
    const router = useRouter()

    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')
    const [bairro, setBairro] = useState('')
    const [logradouro, setLogradouro] = useState('')
    const [numero, setNumero] = useState('')

    useEffect(() => {

        async function loadClient() {
            const clients = await getClients()
            const client = clients.find((item) => item.id === Number(id))

            if (!client) {
                return
            }

            setNome(client.nome)
            setTelefone(client.telefone)
            setEmail(client.email)
            setBairro(client.bairro)
            setLogradouro(client.logradouro)
            setNumero(client.numero)
        }

        if(id){
            loadClient()
        }
    }, [id])

    async function handleUpdate(){

        try {

            await updateClient(Number(id), {
                nome,
                telefone,
                email,
                endereco: {
                    bairro,
                    logradouro,
                    numero
                }
            })

            router.replace(`/(clients)/${id}`)
        } catch(error) {
            console.log("Erro ao editar:", error)
        }
    }

    return (
        <View className="w-full h-full">
            <ScrollView>
                <View className="w-full px-10 h-full items-center self-center gap-5 py-10">
                    <Input label="Nome do Cliente" value={nome} onChangeText={setNome}/>
                    <Input label='Telefone' value={telefone} onChangeText={setTelefone}/>
                    <Input label='Email' value={email} onChangeText={setEmail}/>
                    <Input label='Bairro' value={bairro} onChangeText={setBairro}/>
                    <Input label='Logradouro' value={logradouro} onChangeText={setLogradouro}/>
                    <Input label='Número' value={numero} onChangeText={setNumero}/>
                    <Button 
                        background='bg-vermelho-100'
                        color='text-branco-100'
                        label='Salvar'
                        onPress={handleUpdate}
                    />
                </View>
            </ScrollView>
        </View>
    )
}