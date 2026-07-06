import { Button } from "@/components/Button"
import { useLocalSearchParams } from "expo-router"
import { useRouter } from "expo-router"
import { View, Text, ScrollView } from "react-native"
import { useEffect, useState } from "react"
import { getProducts, Product } from "@/services/api"

export default function ProductDetails(){

    const { id } = useLocalSearchParams()
    const [product, setProduct] = useState<Product | null>(null)

    const router = useRouter()

    useEffect(() => {

        async function loadProduct() {
            try {
                const data = await getProducts()
                const productFound = data.find((item) => String(item.id) === String(id))
                setProduct(productFound ?? null)
            } catch (error) {
                console.error("Erro ao buscar produto:", error)
            }
        }

        if(id){
            loadProduct()
        }

    }, [id])

    if(!product){
        return(
            <View className="w-full h-full items-center justify-center">
                <Text className="text-preto text-2xl font-bold">Carregando produto...</Text>
            </View>
        )
    }

    return (
        <View className="w-full h-full">
            <ScrollView>
                <View className="w-full px-10 h-full items-center self-center gap-5 py-10">
                    <View className="bg-branco-100 w-full rounded-xl pt-8 p-5 gap-4 border border-cinza-200">
                        <View className="gap-4">
                            <View className="flex-row gap-2 justify-between items-center">
                                <Text className="self-start text-preto font-bold text-2xl">{product.nome}</Text>
                                <Text className="self-start text-preto font-bold text-2xl">{product.id}</Text>
                            </View>
                            <Text className="text-preto text-2xl font-normal">{product.descricao}</Text>
                            <View className="flex-row gap-2 items-center border-t-2 border-cinza-200 pt-2">
                                <Text className="self-start text-preto font-normal text-2xl">Valor</Text>
                            <Text className="text-preto text-2xl font-bold">R$ {Number(product.valor).toFixed(2)}</Text>
                            </View>
                        </View>
                    </View>
                    <View className="w-full gap-4">
                            <Button label="Editar" color="text-branco-100" background="bg-amarelo"/>
                            <Button className="border-2 border-vermelho-100 rounded-lg" label="Excluir" color="text-vermelho-100" background="bg-transparent"/>
                        </View>
                </View>
            </ScrollView>
        </View>
    )
}