import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import CheckboxOption from './CheckboxOption'
import Button from './Button';

interface Props {
    pickerOptions: {
        label: string;
        checked: boolean;
    }[];
    onToggle: (index: number) => void;
}

const ChartLinePicker: FC<Props> = ({ pickerOptions, onToggle }) => {
    return (
        <View style={styles.container}>
            <View style={styles.optionsContainer}>
                <Text style={styles.title}>Display</Text>
                {pickerOptions.map((item, index) => {
                    return (
                        <CheckboxOption
                            onToggle={() => {
                                onToggle(index)
                            }}
                            key={item.label}
                            label={item.label}
                            checked={item.checked}
                        />
                    )
                })}
            </View>
            <Button
                onPress={() => {

                }}
            >
                Reset Zoom
            </Button>
        </View>
    )
}

export default ChartLinePicker

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    optionsContainer: {

    },
    title: {
        fontSize: 14,
        fontWeight: '700',
        marginBottom: 10,
    }
})