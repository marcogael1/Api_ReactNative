import { View, Text, Image, Alert, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { estilos } from './Estilos';
const Producto = () => {
  const [cocktail, setCocktail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then((res) => res.json())
      .then((data) => {
        setCocktail(data.drinks[0]); 
        setLoading(false); 
      })
      .catch((err) => {
        Alert.alert('Ocurrió un error: ' + err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={estilos.loadingContainer}>
        <ActivityIndicator size="large" />
        <Text style={estilos.loadingText}>Cargando datos...</Text>
      </View>
    );
  }

  return (
    <View style={estilos.productContainer}>
      <Text style={estilos.productTitle}>{cocktail.strDrink}</Text>
      <Text style={estilos.productRating}>{cocktail.strCategory}</Text>
      <Text style={estilos.productRating}>{cocktail.strAlcoholic}</Text>
      <Image source={{ uri: cocktail.strDrinkThumb }} style={estilos.productImage} />
      <Text style={estilos.productDescription}>{cocktail.strInstructions}</Text>
    </View>
  );
};

export default Producto
