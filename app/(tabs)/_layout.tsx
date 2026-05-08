import { Tabs } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
    return (
    <Tabs
        screenOptions={{
            headerShown: false,
            tabBarStyle: {
            backgroundColor: '#403f47',
            borderTopWidth: 0.5,
            borderTopColor: 'rgba(255,255,255,0.06)',
            height: 72,
            paddingBottom: 10,
            },
            tabBarActiveTintColor: '#e8b86d',
            tabBarInactiveTintColor: '#7a7894',
            tabBarLabelStyle: {
                fontSize: 9,
                textTransform: 'uppercase',
                letterSpacing: 1,
                fontWeight: '500',
            },
        }}
        >
        <Tabs.Screen name="groups" options={{ 
            title: 'Groups',
            tabBarIcon: ({ color }) => (
                <Ionicons name="people-outline" size={22} color={color} />
            ), }} />
        <Tabs.Screen name="index" options={{ title: 'Home',
            tabBarIcon: ({ color }) => (
                <Ionicons name="home-outline" size={22} color={color} />
            ), }} />
        <Tabs.Screen name="events" options={{ title: 'Events',
            tabBarIcon: ({ color }) => (
                <Ionicons name="calendar-outline" size={22} color={color} />
            ), }} />
    </Tabs>
    );
    }