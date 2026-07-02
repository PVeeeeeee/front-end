import { View, Text, TextInput, TextInputProps, TouchableOpacity, FlatList, Modal, Pressable } from 'react-native';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';

type InputProps = TextInputProps & {
  label?: string;
};

export function Input({ label, ...rest }: InputProps) {
    return (
        <View className='w-full h-20 gap-2'>
            <Text className='font-normal text-2xl text-preto'>{label}</Text>
            <TextInput className='pl-3 border rounded-lg h-2/3 border-preto bg-branco-100 text-xl' {...rest} />
        </View>
    )
}

type Option = {
    label?: string;
    value?: string | number;
}

type InputSelectProps = {
    label?: string;
    options: Option[];
    selectedValue: string | number | undefined;
    onSelect: (item: Option) => void;
    placeholder?: string;
};

export function InputSelect({ label, options, selectedValue, onSelect, placeholder }: InputSelectProps) {
    const [modalVisible, setModalVisible] = useState(false);

    const currentLabel = options.find(opt => opt.value === selectedValue)?.label;

    return (
        <View className='w-full h-20 gap-2'>
            <Text className='font-normal text-2xl text-preto'>{label}</Text>

            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setModalVisible(true)}
                className='border-2 rounded-lg h-2/3 border-cinza-200 bg-branco-100 justify-between items-center px-3 flex-row'
            >
                <Text className={`font-normal text-xl ${currentLabel ? 'text-preto' : 'text-cinza-200'}`}>
                    {currentLabel || placeholder || 'Selecione uma opção'}
                </Text>
                <Feather name='chevron-down' size={24} color="#D9D9D9"/>
            </TouchableOpacity>
            <Modal
                visible={modalVisible}
                animationType='slide'
                transparent={true}
            >
                <Pressable className='flex-1 justify-end bg-preto/30 items-center' onPress={() => setModalVisible(false)}>
                    <View className='bg-branco-100 rounded-t-3xl p-5 h-1/2 w-11/12'>
                        <View className='flex-row justify-between items-center mb-4'>
                            <Text className='text-xl font-bold'>{label}</Text>
                            <TouchableOpacity onPress={() => setModalVisible(false)}>
                                <Feather name="x" size={24} color="#930A0A" />
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            data={options}
                            keyExtractor={(item) => item.value?.toString() ?? Math.random().toString()}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    className='py-4 border-b border-cinza-200'
                                    onPress={() => {
                                        onSelect(item);
                                        setModalVisible(false)
                                    }}
                                >
                                    <Text className='text-xl text-preto'>{item.label}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </Pressable>
            </Modal>
        </View>
    )
}