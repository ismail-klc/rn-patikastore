import React, { useEffect, useState } from 'react';
import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native';
import ProductCard from './src/components/ProductCard';
import SearchBar from './src/components/SearchBar';
import data from './src/data.json'

export interface Product {
  id: number;
  title: string;
  imgURL: string;
  price: string;
  inStock: boolean;
}

export default function App() {
  const [products, setData] = useState<Product[]>([])

  useEffect(() => {
    setData(data)
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Patikastore</Text>
      <SearchBar setData={setData} data={data}/>
      <FlatList
        numColumns={2}
        ItemSeparatorComponent={
          () => <View style={{ height: 4 }} />
        }
        data={products}
        renderItem={({ item }) =>
          <ProductCard data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    marginBottom: 10,
    margin: 5
  },
  header: {
    color: "#800080",
    textTransform: "uppercase",
    fontSize: 26,
    fontWeight: "700",
    marginHorizontal: 5
  }
});
