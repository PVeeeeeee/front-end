import "../../../global.css";
import { Tabs } from "expo-router";
import { View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabsLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs 
      backBehavior="none"
      screenOptions={{ 
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#FFFFF2",
          height: 70 + insets.bottom,
          paddingBottom: insets.bottom,
          borderTopWidth: 0,
          elevation: 0,
        }
      }}
      tabBar={({ state, navigation }) => (
        <View
          style={{
            paddingBottom: insets.bottom,
          }}
          className="bg-branco-100 border-t border-cinza-100 flex-row justify-around px-3 pt-3"
        >
          {state.routes.map((route, index) => {
            const isFocused = state.index === index;

            const onPress = () => {
              if (!isFocused) {
                navigation.navigate(route.name);
              }
            };

            const icons: Record<string, React.ReactNode> = {
              index: <Feather name="home" size={28} color={isFocused ? "#1E1E1E" : "#D9D9D9"}/>,
              history: <Feather name="clock" size={28} color={isFocused ? "#1E1E1E" : "#D9D9D9"}/>,
              reports: <Feather name="file-text" size={28} color={isFocused ? "#1E1E1E" : "#D9D9D9"}/>,
            };
            return (
              <TouchableOpacity 
                key={route.key}
                onPress={onPress}
                className={`items-center justify-center rounded-md px-4 py-2`}
              >
                {icons[route.name]}
              </TouchableOpacity>
            );
          })}
        </View>
      )}
      >
        <Tabs.Screen name="reports"/>
        <Tabs.Screen name="index"/>
    </Tabs>
  );
}