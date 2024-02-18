import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import { estilos } from './Componentes/Estilos';
import Producto from './Componentes/Cocteles';

const App = () => {

  return (
    <SafeAreaView style={estilos.container1}>
      <Encabezado/>
      <ScrollView>  
        <Cuerpo/>
      </ScrollView>
      <Pie/>
    </SafeAreaView>
  );
};


export function Cuerpo(){
  return(
    <View style={estilos.contenido1}>
        <Producto/>
    </View>
  )
}

export const Encabezado=()=>{
  return(
    <View style={estilos.encabezado}>
        <Text style={estilos.texto}></Text>
        <Text style={estilos.texto}>Cocteles</Text>
        <Text style={estilos.texto}></Text>
    </View>
  )
}


export const Pie=()=>{
  return(
    <View style={estilos.pie}>
        <Text style={estilos.texto}>X</Text>
        <Text style={estilos.texto}>X</Text>
        <Text style={estilos.texto}>X</Text>
        <Text style={estilos.texto}>X</Text>
    </View>
  )
}
export default App;
