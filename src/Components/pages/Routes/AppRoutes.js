import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MovieDatailsPage from './src/components/pages/MovieDatailsPage';
import MoviesPage from './src/components/pages/MoviesPage';

const Stack = createNativeStackNavigator();

export default function AppRoutes(){
    return (
        <StackActions.Navigator>
            <StackActions.Screen name='CardsPage' component={CardsPage}
            options={{headerShown: false}} />
            <Stack.Screen name='CardDatails' component={CardDatails}
            options={{headerShown: false}}/>

        </StackActions.Navigator>

    )
}
