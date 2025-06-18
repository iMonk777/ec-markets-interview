import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useMemo, useState } from 'react'
import ChartLinePicker from './ChartLinePicker'
import { RADIUS_MEDIUM, SCREEN_WIDTH, SPACE_LARGE, SPACE_MEDIUM } from '../constants/layout'
import useMarketData from '../hooks/useMarketData'
import { DARK_BLUE, GREEN, PINK, PRIMARY, PURPLE } from '../constants/colors'
import { LineChart } from 'react-native-gifted-charts'

const Chart = () => {
    const { data, loading } = useMarketData();
    const [reRenderLoader, setReRenderLoader] = useState(false)
    const [pickerOptions, setPickerOptions] = useState([
        { label: 'Open', value: "open", checked: true, color: DARK_BLUE },
        { label: 'Close', value: "close", checked: true, color: PURPLE },
        { label: 'High', value: "high", checked: true, color: PINK },
        { label: 'Low', value: "low", checked: true, color: GREEN },
    ])

    const chartLegendValues = useMemo(() => {
        return pickerOptions.filter((option) => option.checked)
    }, [pickerOptions])

    const dataSets = useMemo(() => {
        if (!Array.isArray(data)) return []
        return pickerOptions.map((option) => {
            return data.map((item: any) => ({
                value: item[option.value],
                timestamp: item.timestamp,
            })).splice(0, 100) // Limit to 100 data points for performance
        })
    }, [data]);


    console.log('dataSets', dataSets);


    const toggleOption = (index: number) => {
        setReRenderLoader(true)
        setPickerOptions(prevOptions => {
            const newOptions = [...prevOptions];
            newOptions[index].checked = !newOptions[index].checked;
            return newOptions;
        });
        setTimeout(() => {
            setReRenderLoader(false);
        }, 500);
    }


    return (
        <View>
            <View style={styles.chartContainer}>
                <View>
                    <View
                        style={styles.legendContainer}
                    >
                        {chartLegendValues.map((item) => {
                            return (
                                <View key={item.value}
                                    style={styles.legendItem}
                                >
                                    <View style={{ width: 10, height: 10, backgroundColor: item.color, borderRadius: 5, marginRight: SPACE_MEDIUM / 2 }} />
                                    <Text>{item.label}</Text>
                                </View>
                            )
                        })}
                    </View>
                </View>
                {Array.isArray(dataSets) ? (
                    <View style={styles.chart}>
                        {!reRenderLoader && (
                            <LineChart
                                data={pickerOptions?.[0].checked ? dataSets[0] : []}
                                data2={pickerOptions?.[1].checked ? dataSets[1] : []}
                                data3={pickerOptions?.[2].checked ? dataSets[2] : []}
                                data4={pickerOptions?.[3].checked ? dataSets[3] : []}

                                color1={pickerOptions[0].color}
                                color2={pickerOptions[1].color}
                                color3={pickerOptions[2].color}
                                color4={pickerOptions[3].color}

                                thickness={1}
                                thickness2={1}
                                thickness3={1}
                                thickness4={1}

                                spacing={44}
                                initialSpacing={0}
                                textColor1="green"
                                dataPointsHeight={6}
                                dataPointsWidth={6}
                                textShiftY={-2}
                                textShiftX={-5}
                                textFontSize={12}

                                noOfSections={5}
                                stepHeight={33}
                                width={SCREEN_WIDTH - SPACE_MEDIUM * 10}
                            />
                        )}
                    </View>
                ) : (
                    <ActivityIndicator
                        size={'large'}
                        color={PRIMARY}
                    />
                )}
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
        width: SCREEN_WIDTH - SPACE_MEDIUM * 4,
        aspectRatio: 1.5,
        backgroundColor: 'lightgray',
        borderRadius: RADIUS_MEDIUM,
        marginBottom: SPACE_LARGE,
        alignSelf: 'center',
    },
    chart: {
        marginTop: SPACE_MEDIUM,
    },
    legendContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: SPACE_MEDIUM,
        paddingVertical: SPACE_MEDIUM / 2,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        justifyContent: 'center',
    },
    legendItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: SPACE_MEDIUM,
    }
})