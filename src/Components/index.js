import { Button, Image, View, Text } from "react-native";
import styles from "./styles";

export default function Carta(props){
    return (
        <View style={styles.container}>
            <View style={styles.viewImagem}>
            <Image style={styles.item} source={{
                uri: props.carta.uriCarta
                }}/>
            </View>
            <View style={styles.viewDados}>
                <Text style={styles.titulo}>{props.carta.titulo}</Text>
                <Text style={styles.ataque}>{props.carta.ataque}</Text>
                <Text style={styles.defesa}>{props.carta.defesa}</Text>
                <Text style={styles.magia}>{props.carta.magia}</Text>
                <Button tittle = "Proposta de Troca"/>
        </View>
        </View>
    )
}


