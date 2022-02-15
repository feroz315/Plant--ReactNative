import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet,View, Dimensions } from 'react-native';



export const Map = ()  => {
return(
        <View style={styles.Mapview}>
          <MapView style={styles.map} />
        </View>

 )
}


const styles = StyleSheet.create({
    Mapview:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center', 
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
    
})


