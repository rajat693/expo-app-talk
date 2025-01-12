import { View, Text } from "react-native";
import "@/global.css";

function NativeComponent() {
  return (
    <View className="flex justify-center items-center h-screen">
      <View className="bg-blue-500 p-4 rounded-lg shadow-md shadow-black/50">
        <Text className="text-white text-2xl font-bold">Hello, Web World!</Text>
      </View>
    </View>
  );
}

export default NativeComponent;