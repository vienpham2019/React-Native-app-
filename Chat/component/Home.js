import React from 'react'
import {
    Text,
    View, 
    StyleSheet
} from  'react-native'

const Home = () => {
    return(
        <View style = {styles.container}>
            <Text >Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center'
    }
})

export default Home