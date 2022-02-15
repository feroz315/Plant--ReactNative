import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { StatusBar } from 'react-native';
import HomeContainer from './Container/HomeContainer';
import HomeScreen from './Screen/Home';
import DetailsScreen from './Screen/Details';
import COLORS from './Const/Colors';
import Map  from './Screen/Map';


const Stack = createNativeStackNavigator();


 export const container = () => {
   <View>
      <HomeContainer />
     </View>
 } 

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      <Stack.Navigator screenOptions={{header: () => null}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
   </NavigationContainer>

  );
};

export default App;


   