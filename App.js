import React from "react";
import { Text,View, Image, TextInput,StyleSheet } from "react-native";
import converse from './Converse70s.jpg';

const App = () => {
  return(
    /*
    <View>
      <Text style = {styles.text}>Styling Component</Text>
      <FixedDimensionsBasics/>
    </View>
    */
    <ProductComponentExample/>
)
}

const ProductComponentExample = () => {
  return(
    <View style = {{
      padding: 12, borderRadius: 8, 
      backgroundColor: '#f2f2f2', width:212,
    }}>
      <Image 
        source = {converse}
        style = {{
          width:188, height:115, borderRadius:8
        }}/>
        <Text style = {{
          fontSize: 14, fontWeight: 'bold', marginTop: 16
        }}>Converse70s</Text>
        <Text style = {{
          fontSize: 14, fontWeight: 'bold', 
          marginTop: 12, color: '#ff9973'
        }}>Rp. 1.600.000,-</Text>
        <Text style = {{
          fontSize: 14, fontWeight: 300, marginTop: 12
        }}></Text>
    </View>
  )
}

const StylingReactNative = () => {
  return(
    <View>
    <Text
      style = {{
        fontFamily: 'Inter,sans-serif',
        fontSize: 18
      }}>Styling Component</Text>
    <View
      style = {{
        width: 100,
        height:100,
        backgroundColor: '#0abde3'
      }}></View>
  </View>
  )
}

const FixedDimensionsBasics = () => {
  return (
    <View>
      <View style={{
        width: 50, height: 50, backgroundColor: 'powderblue',
        borderWidth: 5, borderColor: '#00cfcc',
        marginTop: 10, marginLeft: 175
      }} />
      <View style={{
        width: 100, height: 100, backgroundColor: 'skyblue',
        borderWidth: 5, borderColor: '#e898ac',
        marginTop: 20, marginLeft: 150
      }} />
      <View style={{
        width: 150, height: 150, backgroundColor: 'steelblue',
        borderWidth: 5, borderColor: '#ff9973',
        marginTop: 30, marginLeft: 125
      }} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e898ac',
    marginLeft: 20,
    marginTop: 40,
    marginBottom: 20,
  }
})

const BasicComponent = () => {
  return(
    <View>
      <Text>Nama : Rizki arya pratama</Text>
      <Text>Kelas : VA </Text>
      <Text>NPM : 193510081</Text>
      <Photo/>
      <TextInput style= {{borderWidth:1}}/>
    </View>
  )
}

const Photo = () => {
  return (
    <Image
      source = {{uri: 'https://placeimg.com/300/300/tech'}} 
      style={{width: 200, height: 200}}
      ></Image>
  )
}

export default App;