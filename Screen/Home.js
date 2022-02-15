import React from 'react';
import {
 View,
 FlatList,
 Text,
 Dimensions,
 SafeAreaView,
 Image,
 StyleSheet   
} from 'react-native';

import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MapView from 'react-native-maps';


import COLORS from '../Const/Colors';
import plants from '../Const/Plant';
const  width = Dimensions.get('window').width / 2 - 30;


const HomeScreen = ({navigation}) => {
   const [ categoriesIndex, setCategoryIndex ] = React.useState(0)
   
   
    const categories = ['POPULAR', 'ORGANIC', 'INDOORS', 'Contact'];

     const Map = ()  => {
        return(
                <View style={styles.Mapview}>
                  <MapView style={styles.map} />
                </View>
        
         )
        }
        
        const CategoryList = () => {
        return(
               <View style={styles.categoriesContainer}>
                {categories.map((item, index) => (
                 <TouchableOpacity 
                 key={index}
                 activeOpacity={0.8}
                 onPress={() => setCategoryIndex(index)}>
                <Text 
                style={[
                    styles.categoriesText,
                    categoriesIndex === index && styles.categoriesTextSel,
                ]}>{item}
                </Text>
                    </TouchableOpacity>             
                 ))}
                     </View> 
    )};
     const Card = ({plants}) => {
         return(
            <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Details', plants)}>
            <View style={styles.Card}>
            <View style={{alignItems:'flex-end'}}>
            <View
            style={{
                width:30,
                height:30,
                borderRadius:20,
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'rgba(245,42,42,0.2)'
                              
            }}>
             <Icon
                name="favorite"
                size={18}
                color={ COLORS.red }
              />
              </View>
            </View>

                <View style={{
                    height:100,
                    alignItems:'center'
                }}>
                    <Image 
                    source={plants.img}
                    style={{ flex:1,resizeMode:'contain'}}/>
                </View>
                   <Text style={{fontSize:16, fontWeight:'bold', marginTop:10}}>
                   {plants.name}</Text> 

                <View
                 style={{
                       flexDirection:'row',
                       justifyContent:'space-between',
                       marginTop:5 
                  }}> 
                  <Text style={{ fontSize:18, fontWeight:'bold' }}>
                      ${plants.price}
                  </Text>
            <View style={{
                height:27,
                width:25,
                backgroundColor:COLORS.green,
                borderRadius:5,
                justifyContent:'center',
                alignItems:'center'
            }}>
            <Text style={{ fontSize:21, fontWeight:'bold', color:COLORS.white, }}>
             +
            </Text>
                </View>                  
             </View> 
          </View>
           </TouchableOpacity>
         )};
        
    return(
    <SafeAreaView style={{ flex:1,paddingHorizontal:20,backgroundColor:COLORS.white }}>
    <View style={styles.header}>
       <View>
           <Text style={{fontSize:25, fontWeight:'bold'}}>Welcome To</Text>
           <Text style={{fontSize:25, fontWeight:'bold', color:COLORS.green}}>
           Plant Shop</Text>
           <Map />
       </View> 
       
     <View style={{ marginTop:10 }}> 
       <Icon name="shopping-cart" size={30} />
       </View>
    </View>
    
     <View style={{ marginTop:30, flexDirection:'row' }}>
      <View style={styles.SearchContainer}>
      <Icon name="search" size={25} style={{marginLeft: 20}}/>
      <TextInput placeholder='Search' style={styles.input}/>
      </View>
            
        <View style={styles.sortbtn}>
            <Icon name='sort' size={30} color={COLORS.white}/>
        </View>
    </View>
    <CategoryList />
    <FlatList 
    columnWrapperStyle={{ justifyContent:'space-between'}}
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{
        marginTop:10,
        paddingBottom:50
    }}
    numColumns={2}
    data={plants}
    renderItem={({item}) => {
    return <Card plants={item} />
    }}/>
               
    </SafeAreaView>       
    )};


const styles = StyleSheet.create({
    categoriesContainer:{
        flexDirection:'row',
        marginTop:30,
        marginBottom:20,
        justifyContent:'space-between'
    },
    categoriesText:{fontSize:16, color:'grey',fontWeight:'bold'},
    categoriesTextSel:{
        color:COLORS.green,
        borderBottomWidth:2,
        paddingBottom:5,
        borderColor:COLORS.green       
    },
    Card:{
        height:225,
        backgroundColor:COLORS.light,
        width,
        borderRadius:10,
        marginHorizontal:2,
        padding:15,
        marginBottom:20
    },
    header:{
        marginTop:30,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    SearchContainer:{
        height:50,
        flexDirection:'row',
        flex:1,
        alignItems:'center',
        backgroundColor:COLORS.light,
        borderRadius:10
    },
    input:{
        fontSize:18,
        fontWeight:'bold',
        flex:1,
        color:COLORS.dark
    },
    sortbtn:{
        marginLeft:10,
        height:50,
        width:50,
        backgroundColor:COLORS.green,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
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


export default HomeScreen;