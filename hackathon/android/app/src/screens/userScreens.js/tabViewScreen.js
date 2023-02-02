import AsyncStorage from "@react-native-async-storage/async-storage"
import React, { useCallback } from "react"
import { View,Text,useWindowDimensions } from "react-native"
import {TabView,SceneMap} from "react-native-tab-view"

function TabViewScreen () {



const [index,setIndex] = React.useState(0)


 

const layout = useWindowDimensions()

const getUserData = () => {
    try{

        AsyncStorage.getItem("user").then((res)=>{
            console.log(res,"red")
        }).catch((error)=>{
            console.log(error)
        })

    }catch(err){
        console.log(err)
    }
}

React.useEffect(()=>{
    getUserData()
},[])


const FirstRoute = useCallback(()=>{

    return (
        <View>
            <Text style={{color:"black"}} >Hello First Screen</Text>
        </View>
    )

},[])

const SecondRoute = useCallback(()=>{

    return (
        <View>
            <Text style={{color:"black"}} >Hello Second Screen</Text>
        </View>
    )

},[])

const renderScene = SceneMap({
    first : FirstRoute,
    second : SecondRoute
})

const [routes] = React.useState([
    {key : "first" , title:"First Screen"},
    {key : "second" , title:"Second Screen"},
])






    return (
        <View style={{width:"100%",height:"100%"}} >
            

            <Text style={{color:"black"}} >
                Hello World
            </Text>

    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
        </View>
    )
}

export default TabViewScreen