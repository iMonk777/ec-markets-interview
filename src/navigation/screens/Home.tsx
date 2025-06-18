import { StyleSheet, View } from 'react-native';
import { SPACE_MEDIUM } from '../../constants/layout';
import Header from '../../components/Header';
import useMarketData from '../../hooks/useMarketData';
import Chart from '../../components/Chart';
import ChartLinePicker from '../../components/ChartLinePicker';

export function Home() {

  return (
    <View style={styles.container}>
      <Header />
      <Chart />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACE_MEDIUM,
  },

});
