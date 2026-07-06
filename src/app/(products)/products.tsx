import { View, Text, ScrollView } from "react-native"
import { FilterButton } from "@/components/Button"
import Calendar from "@/components/Calendar"
import { Card } from "@/components/Card"
import { Feather } from "@expo/vector-icons"
import { useRouter } from "expo-router"
import { useEffect, useState } from "react"
import { getProducts, Product } from "@/services/api"

export default function ProductsList(){
    const router = useRouter()
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    async function loadProducts() {
        try {
            const data = await getProducts()
            setProducts(data)
        } catch (error) {
            console.error("Erro ao buscar produtos:", error)

        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        loadProducts()
    }, [])

    return (
        <View className="w-full h-full">
            <ScrollView>
                <View className="w-full px-10 h-full items-center self-center gap-5 py-10">
                    <Calendar/>
                    <Text className="text-preto text-xl font-normal self-start">Total de Produtos: {products.length}</Text>
                    <View className="gap-4 w-full">
                        {loading && (
                            <Text className="text-preto text-2xl font-bold">
                                Carregando produtos...
                            </Text>
                        )}

                        {!loading && products.map((product) => (
                            <Card onPress={() => router.push(`/${product.id}`)} className="flex-row justify-between items-center" backgroundColor="#FFFFF2" borderColor="cinza-200">
                                <View className="gap-1">
                                    <Text className="text-preto text-2xl font-bold">{product.nome}</Text>
                                    <Text className="text-preto text-xl font-normal">R$ {Number(product.valor).toFixed(2)}</Text>
                                </View>
                                <Feather name="arrow-right" size={28} color="#1E1E1E"/>
                            </Card>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}