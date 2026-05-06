import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Bar } from '@/types/Bar';
import scale from '@/utils/scale';

const StatusCapsule = ({ level }: { level: number }) => {
  return (
    <View style={styles.capsule}>
      <Text style={styles.capsuleText}>{level}</Text>
    </View>
  );
};

const StatusBar = ({ level }: { level: number }) => {
  return (
    <View style={{width: '95%', height: 10, backgroundColor: 'grey', borderRadius: 12}}>
      <View style={{width: `${30 * level}%`, height: 10, backgroundColor: 'red', borderRadius: 12}}>
      </View>
    </View>
  );
};

const BarCard = ({ bar }: { bar: Bar }) => {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <View style={styles.col}>
          <Text style={styles.name}>{bar.name}</Text>
          <Text style={styles.sub}>{bar.type}</Text>
          <Text style={styles.sub}>{bar.address}</Text>
        </View>
        <StatusCapsule level={bar.busyness} />
      </View>
      <StatusBar level={bar.busyness} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    borderRadius: 16,
    backgroundColor: 'green',
    padding: 16,
    gap: 4
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  col: {
    flexDirection: 'column',
    gap: 2
  },
  name: { fontSize: scale(32) },
  sub: { fontSize: scale(16) },
  capsule: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: '#e8b86d',
    justifyContent: 'center',
    alignItems: 'center',
  },
  capsuleText: {
    fontSize: scale(12),
    fontWeight: '500',
  },
});

export default BarCard;