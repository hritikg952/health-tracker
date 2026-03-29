import { View, Text, StyleSheet } from 'react-native'
import { colors } from '../../../theme/colors'
import { fontFamilies } from '../../../theme/typography'

type HeaderProps = {
  title?: string
  subtitle?: string
}

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.textGroup}>
        {title != null && (
          <Text style={styles.title}>{title}</Text>
        )}
        {subtitle != null && (
          <Text style={styles.subtitle}>{subtitle}</Text>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surfaceContainerLow,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textGroup: {
    flexDirection: 'column',
  },
  title: {
    fontFamily: fontFamilies.headline,
    fontSize: 20,
    color: colors.onSurface,
  },
  subtitle: {
    fontFamily: fontFamilies.body,
    fontSize: 14,
    color: colors.onSurfaceVariant,
    marginTop: 2,
  },
})
