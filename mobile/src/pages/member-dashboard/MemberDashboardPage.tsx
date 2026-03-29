import { View, Text } from 'react-native'
import { useRoute, type RouteProp } from '@react-navigation/native'
import type { HubStackParamList } from '../../navigation/MemberStackNavigator'
import { colors } from '../../theme/colors'
import { fontFamilies } from '../../theme/typography'

export function MemberDashboardPage() {
  const route = useRoute<RouteProp<HubStackParamList, 'MemberDashboard'>>()
  const { memberId } = route.params

  return (
    <View style={{ flex: 1, backgroundColor: colors.background, padding: 24 }}>
      <Text style={{ fontFamily: fontFamilies.headline, fontSize: 30, color: colors.onSurface, marginBottom: 8 }}>
        Member Dashboard
      </Text>
      <Text style={{ fontFamily: fontFamilies.body, fontSize: 14, color: colors.onSurfaceVariant }}>
        Viewing member:{' '}
        <Text style={{ fontFamily: fontFamilies.bodyBold }}>{memberId}</Text>
      </Text>
    </View>
  )
}
