import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Link, useRouter } from "expo-router";
import { View, Text, Alert } from "react-native";
import { useState } from "react";

export default function App() {
  const router = useRouter()

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function handleLogin() {

    router.replace("/(home)");
  }

  return (
    <View className="w-full px-10 h-full items-center self-center gap-5 pt-40">
      <Text className="text-preto font-normal text-2xl">Insira suas credenciais</Text>
      <Input label="Email" value={email} onChangeText={setEmail} />
      <Input secureTextEntry label="Senha" value={senha} onChangeText={setSenha} />
      <Button onPress={handleLogin} label="Entrar" color="text-branco-100"/>
      <Text className="self-start text-preto font-normal text-xl">Ainda não possue cadastro? <Link className="text-azul" href={'/(user)'}>Cadastre-se aqui!</Link></Text>
    </View>
  );
}