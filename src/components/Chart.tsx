import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import ChartLinePicker from './ChartLinePicker'
import { RADIUS_MEDIUM, SPACE_LARGE } from '../constants/layout'
import useMarketData from '../hooks/useMarketData'

const Chart = () => {
    const { data, loading } = useMarketData();
    const [pickerOptions, setpickerOptions] = useState([
        { label: 'Open', checked: true },
        { label: 'Close', checked: false },
        { label: 'Low', checked: false },
        { label: 'High', checked: false },
        { label: 'Volume', checked: false }
    ])

    const toggleOption = (index: number) => {
        console.log(index);

        setpickerOptions(prevOptions => {
            const newOptions = [...prevOptions];
            newOptions[index].checked = !newOptions[index].checked;
            return newOptions;
        });
    }

    return (
        <View>
            <View style={styles.chartContainer}>

            </View>
            <ChartLinePicker
                pickerOptions={pickerOptions}
                onToggle={toggleOption}
            />
        </View>
    )
}

export default Chart

const styles = StyleSheet.create({
    chartContainer: {
        height: 300,
        backgroundColor: 'lightgray',
        borderRadius: RADIUS_MEDIUM,
        marginBottom: SPACE_LARGE,
    }
})