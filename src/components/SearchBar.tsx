import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'

const SearchBar = ({ setData, data }: any) => {
    const [text, setText] = useState("")

    const handleSearch = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setText(e.nativeEvent.text)
        setData(data.filter(d => d.title.includes(e.nativeEvent.text)))
    }

    return (
        <View>
            <TextInput
                underlineColorAndroid='#ECEFF1'
                placeholder='Ara...' style={styles.input} value={text} onChange={handleSearch} />
        </View>
    )
}

export default SearchBar


const styles = StyleSheet.create({
    input: {
        backgroundColor: "#ECEFF1",
        height: 40,
        marginHorizontal: 5,
        marginVertical: 20,
        padding: 10,
        borderRadius: 10,
        fontSize: 16
    }
});