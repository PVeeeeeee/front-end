import { Pressable, View, ViewProps } from 'react-native';

type CardProps = ViewProps & {
    children: React.ReactNode;
    borderColor?: string;
    backgroundColor?: string;
    className?: string;
    onPress?: () => void;
};

export function Card({ children, borderColor, backgroundColor, className, onPress, ...rest }: CardProps) {
    return (
        <Pressable onPress={onPress}>
            <View className={`bg-branco-100 border ${borderColor ? `border-${borderColor}` : 'border-cinza-100'} flex p-4 rounded-lg w-full ${className}`} style={{ backgroundColor }}>
                {children}
            </View>
        </Pressable>
    )
}