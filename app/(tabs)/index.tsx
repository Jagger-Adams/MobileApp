import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import BarCard from '@/components/BarCard';
import { Bar } from '@/types/Bar';

const bars: Bar[] = [{
    id: '1',
    name: "Delilah's",
    type: 'Cocktail Bar',
    address: 'King St W',
    busyness: 3,
}, 
{
    id: '2',
    name: "Barney's",
    type: 'Dance Bar',
    address: 'Eagle St N',
    busyness: 1,
  }, 
  {
    id: '3',
    name: "Joe Cool's",
    type: 'Pub',
    address: 'King St W',
    busyness: 2,
}, 
{
    id: '4',
    name: "The Warehouse",
    type: 'Club',
    address: 'Eagle St N',
    busyness: 3,
  }, 
  {
    id: '5',
    name: "Kentucky",
    type: 'Country Bar',
    address: 'King St W',
    busyness: 2,
}, 
{
    id: '6',
    name: "Pub on King",
    type: 'Lounge',
    address: 'King St N',
    busyness: 1,
  }, 
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {bars.map((bar) => (
        <BarCard key={bar.id} bar={bar} />
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },
  content: {
    padding: 12,
    gap: 12,
  },
});
