import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Carta from './src/Components';

const listaCartas = [
  {
    titulo: "Mordekaiser",
    ataque: "Ataque: 275",
    defesa: "Defesa: 500",
    magia: "Magia: 200",
    uriCarta: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Mordekaiser_0.jpg"

  },
  {
    titulo: "Dr. Mundo",
    ataque: "Ataque: 200",
    defesa: "Defesa: 600",
    magia: "Magia: 50",
    uriCarta: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/DrMundo_0.jpg"

  },
  {
    titulo: "Zac",
    ataque: "Ataque: 175",
    defesa: "Defesa: 630",
    magia: "Magia: 100",
    uriCarta: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zac_0.jpg"
  }
]
export default function App() {
  return (
    <View style={styles.container}>
      <Carta carta={listaCartas[0]}/>
      <Carta carta={listaCartas[1]}/>
      <Carta carta={listaCartas[2]}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
