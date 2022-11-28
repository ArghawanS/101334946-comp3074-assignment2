import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native'


export default function About() {
    return (
       <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
            <Text style={styles.text}>Arghawan Ghulam Siddiq</Text>
            <Text style={styles.text}>101334946</Text>
        </View>
         </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#de9eab',
      alignItems: 'center',
      justifyContent:'center'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'#ffff'
    }

  });