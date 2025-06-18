import { Pressable, PressableProps, StyleSheet, Text } from 'react-native'
import React, { FC } from 'react'
import { DISABLED_GREY, PRIMARY, WHITE } from '../constants/colors';

interface Props extends PressableProps {
    onPress: () => void;
    disabled?: boolean;
    children: React.ReactNode;
}

const Button: FC<Props> = ({ onPress, disabled, children, ...restProps }) => {
    return (
        <Pressable
            onPress={onPress}
            style={[styles.container, disabled && styles.disabled]}
            disabled={disabled}
            {...restProps}
        >
            <Text style={styles.text}>{children}</Text>
        </Pressable>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        height: 40,
        backgroundColor: PRIMARY,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    disabled: {
        backgroundColor: DISABLED_GREY,
    },
    text: {
        color: WHITE,
        fontSize: 14,
        fontWeight: '400',
    }
})