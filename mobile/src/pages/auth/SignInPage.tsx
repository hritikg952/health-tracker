import { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { colors } from '../../theme/colors'
import { fontFamilies } from '../../theme/typography'

type Props = {
  onSignIn: () => void
}

export function SignInPage({ onSignIn }: Props) {
  const insets = useSafeAreaInsets()
  const [phone, setPhone] = useState('')

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: colors.background }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      {/* Organic blob decorations */}
      <View style={styles.blobTopRight} pointerEvents="none" />
      <View style={styles.blobMidLeft} pointerEvents="none" />
      <View style={styles.blobBottomRight} pointerEvents="none" />

      <ScrollView
        contentContainerStyle={[
          styles.scrollContent,
          { paddingTop: insets.top + 16, paddingBottom: insets.bottom + 32 },
        ]}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Brand header */}
        <View style={styles.brandRow}>
          <LinearGradient
            colors={['#006a63', '#4db6ac']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.brandIcon}
          >
            <MaterialCommunityIcons name="heart" size={16} color="#ffffff" />
          </LinearGradient>
          <Text style={styles.brandName}>Teal Care</Text>
        </View>

        {/* Hero copy */}
        <View style={styles.heroSection}>
          <Text style={styles.heroHeadline}>
            Welcome back to{'\n'}
            <Text style={styles.heroHeadlineAccent}>your sanctuary.</Text>
          </Text>
          <Text style={styles.heroSubtext}>
            Enter your number to resume your health journey.
          </Text>
        </View>

        {/* Sign In card */}
        <View style={styles.card}>
          {/* Phone label */}
          <Text style={styles.inputLabel}>PHONE NUMBER</Text>

          {/* Phone input row */}
          <View style={styles.inputRow}>
            <View style={styles.countryCodeRow}>
              <MaterialCommunityIcons name="phone" size={18} color={colors.primary} />
              <Text style={styles.countryCode}>+1</Text>
              <View style={styles.inputDivider} />
            </View>
            <TextInput
              style={styles.textInput}
              placeholder="(555) 000-0000"
              placeholderTextColor={colors.outline}
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone}
              returnKeyType="done"
            />
          </View>

          {/* Get OTP button */}
          <Pressable
            onPress={onSignIn}
            style={({ pressed }) => pressed && { opacity: 0.92 }}
          >
            <LinearGradient
              colors={['#006a63', '#4db6ac']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.ctaButton}
            >
              <Text style={styles.ctaButtonText}>Get OTP</Text>
              <MaterialCommunityIcons name="arrow-right" size={20} color="#ffffff" />
            </LinearGradient>
          </Pressable>
        </View>

        {/* OR divider */}
        <View style={styles.dividerRow}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>or continue with</Text>
          <View style={styles.dividerLine} />
        </View>

        {/* Social logins */}
        <View style={styles.socialRow}>
          <Pressable
            aria-label="Sign in with Google"
            style={({ pressed }) => [styles.socialButton, pressed && { opacity: 0.75 }]}
          >
            <MaterialCommunityIcons name="google" size={24} color="#4285F4" />
          </Pressable>
          <Pressable
            aria-label="Sign in with Apple"
            style={({ pressed }) => [styles.socialButton, pressed && { opacity: 0.75 }]}
          >
            <MaterialCommunityIcons name="apple" size={24} color={colors.onSurface} />
          </Pressable>
          <Pressable
            aria-label="Sign in with Facebook"
            style={({ pressed }) => [styles.socialButton, pressed && { opacity: 0.75 }]}
          >
            <MaterialCommunityIcons name="facebook" size={24} color="#1877F2" />
          </Pressable>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have an account? </Text>
          <Text style={styles.footerLink}>Sign Up</Text>
        </View>

        <Text style={styles.securityNote}>
          YOUR DATA IS SECURED BY INDUSTRY-LEADING ENCRYPTION.
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  // Blob decorations
  blobTopRight: {
    position: 'absolute',
    top: -64,
    right: -64,
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: 'rgba(77,182,172,0.14)',
  },
  blobMidLeft: {
    position: 'absolute',
    top: '40%',
    left: -80,
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: 'rgba(0,106,99,0.07)',
  },
  blobBottomRight: {
    position: 'absolute',
    bottom: -48,
    right: 16,
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: 'rgba(77,182,172,0.10)',
  },
  // Scroll
  scrollContent: {
    paddingHorizontal: 24,
    flexGrow: 1,
  },
  // Brand
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 40,
  },
  brandIcon: {
    width: 28,
    height: 28,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandName: {
    fontFamily: fontFamilies.headline,
    fontSize: 24,
    color: colors.primary,
    letterSpacing: -0.5,
  },
  // Hero
  heroSection: {
    marginBottom: 32,
  },
  heroHeadline: {
    fontFamily: fontFamilies.headlineBold,
    fontSize: 34,
    lineHeight: 42,
    color: colors.onSurface,
    letterSpacing: -0.5,
  },
  heroHeadlineAccent: {
    fontFamily: fontFamilies.headlineBold,
    fontSize: 34,
    lineHeight: 42,
    color: colors.primary,
  },
  heroSubtext: {
    fontFamily: fontFamilies.body,
    fontSize: 16,
    lineHeight: 24,
    color: colors.onSurfaceVariant,
    marginTop: 12,
  },
  // Card
  card: {
    backgroundColor: colors.surfaceContainerLowest,
    borderRadius: 24,
    padding: 24,
    gap: 16,
    shadowColor: '#161d1c',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.05,
    shadowRadius: 40,
    elevation: 4,
  },
  inputLabel: {
    fontFamily: fontFamilies.labelBold,
    fontSize: 10,
    letterSpacing: 1.5,
    color: colors.onSurfaceVariant,
    marginLeft: 4,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surfaceContainerHigh,
    borderRadius: 16,
    paddingHorizontal: 16,
    height: 56,
  },
  countryCodeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginRight: 4,
  },
  countryCode: {
    fontFamily: fontFamilies.bodyMedium,
    fontSize: 14,
    color: colors.onSurface,
  },
  inputDivider: {
    width: 1,
    height: 16,
    backgroundColor: colors.outlineVariant,
    marginLeft: 4,
  },
  textInput: {
    flex: 1,
    fontFamily: fontFamilies.body,
    fontSize: 16,
    color: colors.onSurface,
    paddingLeft: 12,
    height: '100%',
  },
  // CTA
  ctaButton: {
    height: 56,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    shadowColor: '#006a63',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.22,
    shadowRadius: 24,
    elevation: 6,
  },
  ctaButtonText: {
    fontFamily: fontFamilies.bodyBold,
    fontSize: 16,
    color: '#ffffff',
    letterSpacing: 0.3,
  },
  // Divider
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginVertical: 28,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.surfaceContainerHighest,
  },
  dividerText: {
    fontFamily: fontFamilies.labelBold,
    fontSize: 10,
    letterSpacing: 1.5,
    color: colors.outline,
    textTransform: 'uppercase',
  },
  // Social
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
  },
  socialButton: {
    width: 64,
    height: 64,
    borderRadius: 16,
    backgroundColor: colors.surfaceContainerLowest,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#161d1c',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 12,
    elevation: 2,
  },
  // Footer
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 32,
  },
  footerText: {
    fontFamily: fontFamilies.body,
    fontSize: 14,
    color: colors.onSurfaceVariant,
  },
  footerLink: {
    fontFamily: fontFamilies.bodyBold,
    fontSize: 14,
    color: colors.primary,
  },
  securityNote: {
    fontFamily: fontFamilies.labelBold,
    fontSize: 9,
    letterSpacing: 1.5,
    color: colors.outlineVariant,
    textAlign: 'center',
    marginTop: 16,
    textTransform: 'uppercase',
  },
})
