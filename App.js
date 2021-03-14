import React from 'react'

import {View, Text ,Image, ScrollView , Button , TouchableOpacity} from 'react-native'
import  {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from "@react-navigation/stack"
import members from './components/package'








function HomeScreen({navigation}) {
    return (
        <ScrollView>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <View >
                {members.map(m => (

                    <React.Fragment>


                        <TouchableOpacity onPress={ () => {navigation.navigate('Detail', {nom: m.name ,desc : m.desc , im :m.im})  } }>
                            <Text style={{color:'black', fontSize: 20}}>{m.name}</Text>
                            <Text style={{color:'grey', fontSize: 20}}>{m.desc}</Text>

                        </TouchableOpacity>
                    </React.Fragment>

                ))}


            </View>
        </View>
        </ScrollView>


                );
                }



function DetailScreen({route , navigation}){
    const {nom,desc,im} = route.params;


return(
    <View>
        <Text style={{color:'red', fontSize: 30 }}>
            {nom}
        </Text>

        <Text style={{color:'black', fontSize: 20 }}>
            {desc}
        </Text>
          <View>
              <Image source={im}/>
          </View>
        <Button
            title="Go to Home"
            onPress={() => navigation.navigate('Home')} />
    </View>

)
}



export default function App(){
    return  (
        <NavigationContainer>
            <Stack.Navigator initialRouteName ="Home"  >

                <Stack.Screen  name ="Home" component ={HomeScreen} />
                <Stack.Screen  name ="Detail" component ={DetailScreen} />

            </Stack.Navigator>

        </NavigationContainer>

    )

}





const Stack = createStackNavigator()






