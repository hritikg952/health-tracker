import { View, Text, ScrollView, Pressable, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { colors } from '../../theme/colors'
import { fontFamilies } from '../../theme/typography'

// ── Types ──────────────────────────────────────────────────────────────────────

type FamilyMember = {
  id: string
  name: string
  initials: string
  isActive: boolean
}

type VitalCard = {
  icon: string
  value: string
  unit: string
  label: string
  badge: string
  iconBg: string
  iconColor: string
  wide?: boolean
}

// ── Dummy Data ─────────────────────────────────────────────────────────────────

const FAMILY_MEMBERS: FamilyMember[] = [
  { id: '1', name: 'Leo',  initials: 'L', isActive: true  },
  { id: '2', name: 'Maya', initials: 'M', isActive: false },
  { id: '3', name: 'Sam',  initials: 'S', isActive: false },
]

const VITALS: VitalCard[] = [
  {
    icon: 'device_thermostat',
    value: '98.6',
    unit: '°F',
    label: 'Temperature',
    badge: 'Today',
    iconBg: 'bg-secondary-container/30',
    iconColor: 'text-on-secondary-container',
  },
  {
    icon: 'monitor_weight',
    value: '42',
    unit: 'lbs',
    label: 'Weight',
    badge: '2D ago',
    iconBg: 'bg-tertiary-fixed/30',
    iconColor: 'text-on-tertiary-fixed-variant',
  },
  {
    icon: 'straighten',
    value: '41',
    unit: 'in',
    label: 'Height',
    badge: 'Last month',
    iconBg: 'bg-primary-container/20',
    iconColor: 'text-primary',
    wide: true,
  },
]

// ── Icon name mapping ──────────────────────────────────────────────────────────

const ICON_MAP: Record<string, string> = {
  device_thermostat: 'thermometer',
  monitor_weight:    'scale-bathroom',
  straighten:        'ruler',
}

// ── Icon style lookup ──────────────────────────────────────────────────────────

const VITAL_ICON_STYLES: Record<string, { bg: string; color: string }> = {
  'bg-secondary-container/30 text-on-secondary-container': {
    bg: 'rgba(171,244,172,0.30)',
    color: colors.onSecondaryContainer,
  },
  'bg-tertiary-fixed/30 text-on-tertiary-fixed-variant': {
    bg: 'rgba(255,219,207,0.30)',
    color: colors.onTertiaryFixedVariant,
  },
  'bg-primary-container/20 text-primary': {
    bg: 'rgba(77,182,172,0.20)',
    color: colors.primary,
  },
}

// ── Sub-components ─────────────────────────────────────────────────────────────

function MemberAvatar({ member }: { member: FamilyMember }) {
  const innerCircle = (
    <View style={styles.memberAvatarInner}>
      <Text style={styles.memberInitials}>{member.initials}</Text>
    </View>
  )

  return (
    <Pressable
      style={({ pressed }) => [styles.memberAvatarWrapper, pressed && { opacity: 0.75 }]}
    >
      {member.isActive ? (
        <LinearGradient
          colors={['#006a63', '#4db6ac']}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          style={styles.memberAvatarOuter}
        >
          {innerCircle}
        </LinearGradient>
      ) : (
        <View style={[styles.memberAvatarOuter, { backgroundColor: colors.surfaceContainerHighest }]}>
          {innerCircle}
        </View>
      )}
      <Text style={styles.memberName}>{member.name}</Text>
    </Pressable>
  )
}

function AddMemberButton() {
  return (
    <Pressable
      style={({ pressed }) => [styles.memberAvatarWrapper, pressed && { opacity: 0.75 }]}
    >
      <View style={styles.addMemberCircle}>
        <MaterialCommunityIcons name="plus" size={24} color={colors.outlineVariant} />
      </View>
      <Text style={styles.memberName}>Add</Text>
    </Pressable>
  )
}

function AlertCard() {
  return (
    <View style={styles.alertCard}>
      {/* Decorative circle — no blur, solid opacity */}
      <View style={styles.alertDecorativeCircle} />

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <View style={{ flex: 1, marginRight: 16 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 4 }}>
            <MaterialCommunityIcons name="alert" size={20} color={colors.primary} />
            <Text style={styles.alertTitle}>Needs Attention</Text>
          </View>
          <Text style={styles.alertBody}>
            Maya's vaccination records are due for an update soon.
          </Text>
        </View>
        <Pressable
          style={({ pressed }) => [styles.alertButton, pressed && { opacity: 0.8 }]}
        >
          <Text style={styles.alertButtonText}>View</Text>
        </Pressable>
      </View>
    </View>
  )
}

function VitalCardItem({ card }: { card: VitalCard }) {
  const key = `${card.iconBg} ${card.iconColor}`
  const iconStyle = VITAL_ICON_STYLES[key] ?? { bg: colors.surfaceContainerHigh, color: colors.primary }
  const iconName = (ICON_MAP[card.icon] ?? 'thermometer') as React.ComponentProps<typeof MaterialCommunityIcons>['name']

  if (card.wide) {
    return (
      <View style={styles.vitalWide}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
          <View style={[styles.vitalIconContainerLg, { backgroundColor: iconStyle.bg }]}>
            <MaterialCommunityIcons name={iconName} size={24} color={iconStyle.color} />
          </View>
          <View>
            <Text style={styles.vitalBadge}>{card.badge}</Text>
            <Text style={styles.vitalLabel}>{card.label}</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-end', gap: 4 }}>
          <Text style={styles.vitalValue}>{card.value}</Text>
          <Text style={styles.vitalUnit}>{card.unit}</Text>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.vitalNarrow}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <View style={[styles.vitalIconContainer, { backgroundColor: iconStyle.bg }]}>
          <MaterialCommunityIcons name={iconName} size={24} color={iconStyle.color} />
        </View>
        <Text style={styles.vitalBadge}>{card.badge}</Text>
      </View>
      <View style={{ marginTop: 16 }}>
        <View style={{ flexDirection: 'row', alignItems: 'flex-end', gap: 4 }}>
          <Text style={styles.vitalValue}>{card.value}</Text>
          <Text style={styles.vitalUnit}>{card.unit}</Text>
        </View>
        <Text style={[styles.vitalLabel, { marginTop: 4 }]}>{card.label}</Text>
      </View>
    </View>
  )
}

function LogVitalCTA() {
  return (
    <Pressable style={({ pressed }) => [styles.ctaBtn, pressed && { opacity: 0.8 }]}>
      <LinearGradient
        colors={['#006a63', '#4db6ac']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.ctaGradientCircle}
      >
        <MaterialCommunityIcons name="plus" size={30} color="#ffffff" />
      </LinearGradient>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.ctaTitle}>Log Vital</Text>
        <Text style={styles.ctaSubtitle}>Record a new health metric</Text>
      </View>
    </Pressable>
  )
}

// ── Page ───────────────────────────────────────────────────────────────────────

export function FamilyHubPage() {
  const insets = useSafeAreaInsets()

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      {/* App bar — sits above ScrollView, does not scroll */}
      <View style={[styles.appBar, { paddingTop: insets.top + 8 }]}>
        <View style={styles.appBarLeft}>
          <View style={styles.userAvatar}>
            <Text style={styles.userAvatarText}>S</Text>
          </View>
          <Text style={styles.greeting}>Good morning, Sarah</Text>
        </View>
        <Pressable
          onPress={() => {}}
          style={({ pressed }) => pressed && { opacity: 0.7 }}
        >
          <MaterialCommunityIcons name="bell-outline" size={24} color={colors.primary} />
        </Pressable>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 16, paddingBottom: 120, gap: 32 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Member carousel */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 20, paddingVertical: 8 }}
        >
          {FAMILY_MEMBERS.map(m => <MemberAvatar key={m.id} member={m} />)}
          <AddMemberButton />
        </ScrollView>

        {/* Alert card */}
        <AlertCard />

        {/* Vitals grid */}
        <View>
          <Text style={styles.sectionHeading}>Latest Vitals</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 16 }}>
            {VITALS.map(card => <VitalCardItem key={card.label} card={card} />)}
          </View>
        </View>

        {/* Log Vital CTA */}
        <LogVitalCTA />
      </ScrollView>
    </View>
  )
}

// ── Styles ─────────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: 'rgba(244,251,249,0.85)',
    paddingHorizontal: 24,
    paddingBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#161d1c',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.04,
    shadowRadius: 20,
  },
  appBarLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primaryContainer,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.primaryContainer,
    elevation: 1,
    shadowColor: '#161d1c',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 2,
  },
  userAvatarText: {
    fontFamily: fontFamilies.headline,
    fontSize: 14,
    color: colors.onPrimaryContainer,
  },
  greeting: {
    fontFamily: fontFamilies.headline,
    fontSize: 24,
    color: colors.primary,
    letterSpacing: -0.5,
  },
  sectionHeading: {
    fontFamily: fontFamilies.headline,
    fontSize: 20,
    color: colors.onSurface,
    marginBottom: 16,
  },
  // Member avatars
  memberAvatarWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
    flexShrink: 0,
  },
  memberAvatarOuter: {
    width: 64,
    height: 64,
    borderRadius: 32,
    padding: 4,
    elevation: 1,
    shadowColor: '#161d1c',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 2,
  },
  memberAvatarInner: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: colors.surfaceContainerLow,
    borderWidth: 2,
    borderColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  memberInitials: {
    fontFamily: fontFamilies.headline,
    fontSize: 18,
    color: colors.primary,
  },
  memberName: {
    fontSize: 12,
    fontFamily: fontFamilies.bodyMedium,
    color: colors.onSurfaceVariant,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  addMemberCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 1.5,
    borderStyle: 'solid',
    borderColor: colors.outlineVariant,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Alert card
  alertCard: {
    backgroundColor: 'rgba(77,182,172,0.10)',
    borderRadius: 24,
    padding: 24,
    overflow: 'hidden',
  },
  alertDecorativeCircle: {
    position: 'absolute',
    top: -16,
    right: -16,
    width: 128,
    height: 128,
    borderRadius: 64,
    backgroundColor: 'rgba(0,106,99,0.05)',
  },
  alertTitle: {
    fontFamily: fontFamilies.headline,
    fontSize: 18,
    color: colors.primary,
  },
  alertBody: {
    fontSize: 14,
    color: colors.onSurfaceVariant,
    maxWidth: 200,
  },
  alertButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 9999,
    elevation: 1,
    shadowColor: '#161d1c',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 2,
  },
  alertButtonText: {
    color: colors.onPrimary,
    fontSize: 14,
    fontFamily: fontFamilies.bodyMedium,
  },
  // Vital cards
  vitalNarrow: {
    flex: 1,
    minWidth: '47%',
    backgroundColor: colors.surfaceContainerLowest,
    padding: 20,
    borderRadius: 16,
    height: 160,
    justifyContent: 'space-between',
    elevation: 2,
    shadowColor: '#161d1c',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.03,
    shadowRadius: 10,
  },
  vitalWide: {
    width: '100%',
    backgroundColor: colors.surfaceContainerLowest,
    padding: 20,
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#161d1c',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.03,
    shadowRadius: 10,
  },
  vitalIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  vitalIconContainerLg: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  vitalBadge: {
    fontSize: 10,
    fontFamily: fontFamilies.labelBold,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    color: colors.onSurfaceVariant,
  },
  vitalValue: {
    fontSize: 30,
    fontFamily: fontFamilies.headline,
    color: colors.primary,
  },
  vitalUnit: {
    fontSize: 14,
    fontFamily: fontFamilies.bodyMedium,
    color: colors.onSurfaceVariant,
  },
  vitalLabel: {
    fontSize: 12,
    fontFamily: fontFamilies.bodyMedium,
    color: colors.onSurfaceVariant,
  },
  // CTA
  ctaBtn: {
    backgroundColor: colors.surfaceContainerHigh,
    borderRadius: 24,
    padding: 32,
    alignItems: 'center',
    gap: 16,
    borderWidth: 1.5,
    borderColor: 'rgba(189,201,198,0.30)',
  },
  ctaGradientCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
    shadowColor: '#006a63',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
  },
  ctaTitle: {
    fontFamily: fontFamilies.headline,
    fontSize: 18,
    color: colors.primary,
  },
  ctaSubtitle: {
    fontSize: 14,
    color: colors.onSurfaceVariant,
    fontFamily: fontFamilies.body,
  },
})
