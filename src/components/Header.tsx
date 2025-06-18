import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SPACE_MEDIUM } from '../constants/layout'
import AppleLogo from './../assets/apple_logo.png'

const Header = () => {
    return (
        <View
            style={styles.header}
        >
            <Image
                style={styles.logo}
                source={AppleLogo}
            />
            <Text
                style={styles.title}
            >AAPL Market Data</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: SPACE_MEDIUM,
    },
    title: {
        marginLeft: SPACE_MEDIUM,
        fontSize: 32,
        color: '#333',
        fontWeight: '400',
    },
    logo: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
})