import { Text, View } from "react-native";


export default function Index() {
    return (
        <View className="flex-1 justify-center items-center bg-white">
            <Text className="text-5xl text-dark-200 font-bold">Welcome!</Text>
            <Text className="text-5xl text-accent font-bold">Red!</Text>
            <Text className="text-3xl text-green-700 ">Finally, You get Green!</Text>
        </View>
    );
}
