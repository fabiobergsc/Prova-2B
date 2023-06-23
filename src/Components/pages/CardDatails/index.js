import { View, Text } from "react-native-web";

export default function CardDatails({ route }) {

    const {carta} = route.params;

    return (
        <View>
            <Text>Detalhes da Carta</Text>
            <Text>{Carta.titulo}</Text>
            <Text>{Carta.poderes}</Text>
        </View>
    )
}