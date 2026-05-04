import { useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';

export default function VenueDetail() {
        const { id } = useLocalSearchParams();
        return (
            <View>
            <Text>Venue {id}</Text>
            </View>
    );
}