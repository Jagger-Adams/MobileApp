import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import scale from '@/utils/scale';
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
      <HomeHeader/>
      {bars.map((bar) => (
        <BarCard key={bar.id} bar={bar} />
      ))}
    </ScrollView>
  );
}

const HomeHeader = () => {
  return (
    <View style={styles.HomeHeader}>
      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end'}}>
        <Text style={styles.title}>TONIGHT</Text>
        <Text style={styles.live}>ᯤLive</Text>
      </View>
      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end'}}>
        <Text style={styles.subText}>6 venues near you</Text>
        <Text style={styles.subText}>Fri 9:31pm</Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
    paddingTop: 38,
  },
  content: {
    padding: 12,
    gap: 12,
  },

  HomeHeader: {
    display: 'flex',
    flexDirection: 'column',
    color: 'white',
    padding: 12
  },

  title: {
    fontSize: scale(60),
    color: 'white',
    fontFamily: 'BebasNeue',
  },

  live: {
    color: '#2a9962',
    fontSize: scale(24)
  },

  subText: {
    color: '#757575',
    fontSize: scale(20)
  }
});
