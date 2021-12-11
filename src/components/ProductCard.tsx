import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import { Product } from '../../App'

interface Data {
    data: Product;
}

const ProductCard = ({ data }: Data) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: data.imgURL }} />
            <View style={styles.content}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.price}>{data.price}</Text>
                {
                    !data.inStock && <Text style={styles.stock}>stokta yok</Text>
                }
            </View>

        </View>
    )
}

export default ProductCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ECEFF1",
        flex: 1,
        borderRadius: 10,
        margin: 5
    },
    image: {
        margin: 10,
        height: 200,
        borderRadius: 10
    },
    content: {
        marginHorizontal: 10,
        paddingBottom: 10
    },
    title: {
        fontWeight: "700",
        fontSize: 16
    },
    price:{
        color: "#808080",
        fontWeight: "700"
    },
    stock: {
        textTransform: "uppercase",
        color: "#FC2323",
        fontSize: 16,
        fontWeight: "700"
    }
});