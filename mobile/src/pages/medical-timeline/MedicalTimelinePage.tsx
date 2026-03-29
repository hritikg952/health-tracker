import { View, Text } from 'react-native'
import { useRoute, type RouteProp } from '@react-navigation/native'
import type { HubStackParamList } from '../../navigation/MemberStackNavigator'
import { colors } from '../../theme/colors'
import { fontFamilies } from '../../theme/typography'

export function MedicalTimelinePage() {
  const route = useRoute<RouteProp<HubStackParamList, 'MedicalTimeline'>>()
  const memberId = route.params?.memberId ?? 'all'

  return (
    <View style={{ flex: 1, backgroundColor: colors.background, padding: 24 }}>
      <Text style={{ fontFamily: fontFamilies.headline, fontSize: 30, color: colors.onSurface, marginBottom: 8 }}>
        Medical Timeline
      </Text>
      <Text style={{ fontFamily: fontFamilies.body, fontSize: 14, color: colors.onSurfaceVariant }}>
        Viewing member:{' '}
        <Text style={{ fontFamily: fontFamilies.bodyBold }}>{memberId}</Text>
      </Text>
    </View>
  )
}
