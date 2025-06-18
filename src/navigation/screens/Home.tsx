import { ScrollView, StyleSheet } from 'react-native';
import { SPACE_MEDIUM } from '../../constants/layout';
import Header from '../../components/Header';
import Chart from '../../components/Chart';

export function Home() {

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Header />
      <Chart />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACE_MEDIUM,
  },
  contentContainer: {
    flexGrow: 1,
  }
});
