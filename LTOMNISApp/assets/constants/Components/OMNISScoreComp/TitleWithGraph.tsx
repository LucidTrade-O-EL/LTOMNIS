import React, {FC} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineChart from './SimpleLineChart'; // Import the LineChart component
import GlobalStyles from '../../colors';

const {width} = Dimensions.get('window');

interface TitleWithGraphProps {
  title: string;
}

const TitleWithGraph: FC<TitleWithGraphProps> = ({title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <AntDesign name="exclamationcircleo" size={18} style={styles.icon} />
      </View>
      <View style={styles.graphContainer}>
        <SimpleLineChart />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    padding: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon: {
    marginLeft: 8,
  },
  graphContainer: {
    width: '100%',
    height: 300,  // Or whatever height you want
    marginBottom: 16,
  },
});

export default TitleWithGraph;
