import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        backgroundColor: 'blue',
        height: 180,
        width: '100%',
        borderRadius: '15px',

    },
    viewImagem: {
        width: '30%',


    },
    viewDados: {
        width: '20%',
        padding: 40,
    },
    item:{
        width: 300,
        height: 160,
        borderRadius: '10px'
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    ataque: {
        fontSize: 18,
        textAlign: 'justify',

    },
    defesa: {
        fontSize: 18,
        textAlign: 'justify',

    },
    magia: {
        fontSize: 18,
        textAlign: 'justify',

    },
    btnTroca: {
        borderRadius: 10,

    }

});

export default styles;