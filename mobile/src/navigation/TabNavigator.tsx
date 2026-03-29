import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View, Text } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { colors } from '../theme/colors'
import { HubStackNavigator } from './MemberStackNavigator'
import { MedicalTimelinePage } from '../pages/medical-timeline/MedicalTimelinePage'

export type TabParamList = {
  Hub:      undefined
  Timeline: undefined
  Settings: undefined
}

const Tab = createBottomTabNavigator<TabParamList>()

function SettingsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f4fbf9' }}>
      <Text style={{ fontFamily: 'Fraunces_600SemiBold', fontSize: 24, color: '#161d1c' }}>Settings</Text>
      <Text style={{ fontFamily: 'Outfit_400Regular', fontSize: 14, color: '#3d4947', marginTop: 8 }}>
        Coming soon
      </Text>
    </View>
  )
}

export function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'rgba(244,251,249,0.85)',
          borderTopWidth: 0,
          elevation: 0,
          paddingBottom: 28,
          paddingTop: 16,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          position: 'absolute',
          height: 80,
        },
        tabBarActiveTintColor:   colors.primary,
        tabBarInactiveTintColor: 'rgba(22,29,28,0.40)',
        tabBarLabelStyle: {
          fontFamily: 'Outfit_700Bold',
          fontSize: 10,
          letterSpacing: 1.5,
          textTransform: 'uppercase',
          marginTop: 2,
        },
        tabBarItemStyle: {
          paddingHorizontal: 24,
          paddingVertical: 8,
          borderRadius: 9999,
        },
        tabBarActiveBackgroundColor: 'rgba(77,182,172,0.20)',
      }}
    >
      <Tab.Screen
        name="Hub"
        component={HubStackNavigator}
        options={{
          tabBarLabel: 'Hub',
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name="view-grid"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Timeline"
        component={MedicalTimelinePage}
        options={{
          tabBarLabel: 'Timeline',
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name="book-open-page-variant"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name={focused ? 'cog' : 'cog-outline'}
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
