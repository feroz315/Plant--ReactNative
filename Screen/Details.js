import React, { useState } from 'react';
import {
 View,
 Text,
 SafeAreaView,
 Image,
 StyleSheet,   
 TouchableOpacity
} from 'react-native';


import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../Const/Colors';
import addtoCart  from '../Redux/Actions/Types';


const DetailsScreen = ({navigation, route}) => {
    const Plant = route.params;

const [ max, setMax ] = useState(0);
const [ min , setMin ] = useState(0);




return(
    <SafeAreaView style={{
        flex:1,
        backgroundColor:COLORS.white
    }}>
    
    <View style={styles.header}>
        <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()} />
   <View style={{ marginLeft:10}}>
        <Text style={{ fontSize:16,marginLeft:10 }}>0</Text>    
        <Icon name="shopping-cart" size={30}/>
    </View>
          </View>

        <View style={styles.imageContainer}>
            <Image source={Plant.img} style={{ resizeMode:'contain', flex:1}}/>
        </View>
       
        <View style={styles.detailsContainer}>
         <View style={{
             marginLeft:20,
             flexDirection:'row',
             alignItems:'flex-end'
         }}>
             <View style={styles.line}/>
             <Text style={{ fontSize:20, fontWeight:'bold'}}>Best choice</Text>
         </View>
         <View style={{
             marginTop:20,
             marginLeft:20,
             flexDirection:'row',
             justifyContent:'space-between',
             alignItems:'center'
         }}>
         <Text style={{ fontSize:22, fontWeight:'bold'}}>{Plant.name}</Text>
         <View style={styles.priceTag}>
         <Text style={{
             marginLeft:15,
             color:COLORS.white,
             fontWeight:'bold',
             fontSize:16
          }}>
             ${Plant.price} 
            </Text>
           </View>
         </View>   
          <View style={{ paddingHorizontal: 20, marginTop:10 }}>
          <Text style={{ fontSize:20, fontWeight:'bold'}}>About</Text>
          <Text style={{
              marginTop:10,
              lineHeight:22, 
              fontSize:16,
              color:'grey'
          }}>{Plant.about}</Text>
          <View style={{
              flexDirection:'row',
              justifyContent:'space-between',
              marginTop:20
          }}>
  
  <TouchableOpacity>
            <View style={{
                flexDirection:'row',
                alignItems:'center'
            }}>
            <View style={styles.borderBtn}>
              <Text style={styles.borderBtnText}>-</Text>  
            </View>
              <Text style={{
                  fontSize:20,
                  fontWeight:'bold',
                  marginHorizontal:10,
              }}>
               0
              </Text>  
                <View style={styles.borderBtn}>
                  <Text style={styles.borderBtnText}>+</Text>  
                   </View>
              </View>
 </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7} onPress={() => (this.props.addtoCart)}>
              <View style={styles.buyBtn}>
                  <Text 
                    style={{ color:COLORS.white, fontSize:18, fontWeight:'bold'}}>
                    Buy
                  </Text>
              </View>
              </TouchableOpacity>
                 </View>
               </View>
             </View>
    </SafeAreaView>


 )
}
const styles = StyleSheet.create({
    header:{
        paddingHorizontal:20,
        marginTop:20,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    imageContainer:{
        flex:0.45,
        marginTop:20,
        justifyContent:'center',
        alignItems:'center'
    },
    detailsContainer:{
        flex:0.55,
        marginHorizontal:7,
        marginBottom:7,
        backgroundColor:COLORS.light,
        borderRadius:30,
        marginTop:30,
        paddingTop:30
    },
    line:{
        width:25,
        height:2,
        backgroundColor:COLORS.dark,
        marginBottom:5,
        marginRight:3
    },
    borderBtn:{
        borderColor:'grey',
        borderWidth:1,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        width:60,
        height:40
    },
    borderBtnText:{ fontSize:28, fontWeight:'bold'},
    buyBtn:{
        width:130,
        height:50,
        backgroundColor:COLORS.green,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:30
    },
    priceTag:{
        backgroundColor:COLORS.green,
        width:80,
        height:40,
        justifyContent:'center',
        borderTopLeftRadius:25,
        borderBottomLeftRadius:25
    },
})

export default DetailsScreen;