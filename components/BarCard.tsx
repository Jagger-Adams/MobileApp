import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Bar } from '@/types/Bar';
import scale from '@/utils/scale';

const getBusynessLabel = (level: number): string => {
    if (level == 1) return 'Chill';
    if (level == 2) return 'Busy';
    if (level == 3) return 'Packed';
    return 'packed'
};

const getBusynessColor = (level: number): string => {
    if (level == 1) return '#2a9962';
    if (level == 2) return '#b8861a';
    return 'red'
};

const getBusynessBackgroundColor = (level: number): string => {
    if (level === 1) return 'rgba(78, 203, 135, 0.4)';
    if (level === 2) return 'rgba(232, 184, 109, 0.4)';
    return 'rgba(224, 92, 92, 0.4)';
};

const StatusCapsule = ({ level }: { level: number }) => {
  return (
    <View style={[styles.capsule, { backgroundColor: getBusynessBackgroundColor(level)}]}>
      <Text style={[styles.capsuleText, { color: getBusynessColor(level) }]}>{getBusynessLabel(level)}</Text>
    </View>
  );
};

const StatusBar = ({ level }: { level: number }) => {
  return (
    <View style={{width: '100%', height: 10, backgroundColor: 'grey', borderRadius: 12}}>
      <View style={{width: `${30 * level}%`, height: 10, backgroundColor: getBusynessColor(level), borderRadius: 12}}>
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
    backgroundColor: '#3f3954',
    padding: 16,
    gap: 12
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  col: {
    flexDirection: 'column',
    gap: 4
  },
  name: { fontSize: scale(32), color: 'white' },
  sub: { fontSize: scale(16), color: 'white' },
  capsule: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#e8b86d',
    justifyContent: 'center',
    alignItems: 'center',
  },
  capsuleText: {
    fontSize: scale(24),
    fontWeight: '500',
  },
});

export default BarCard;