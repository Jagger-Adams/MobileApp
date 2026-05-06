import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import BarCard from '@/components/BarCard';
import { Bar } from '@/types/Bar';

const testBar: Bar = {
  id: '1',
  name: "Delilah's",
  type: 'Cocktail Bar',
  address: 'King St W',
  busyness: 3,
};

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <BarCard bar={testBar} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d4eb29',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
