export const fontFamilies = {
  headline:     'Fraunces_600SemiBold',
  headlineBold: 'Fraunces_700Bold',
  body:         'Outfit_400Regular',
  bodyMedium:   'Outfit_500Medium',
  bodyBold:     'Outfit_700Bold',
  label:        'Outfit_400Regular',
  labelBold:    'Outfit_700Bold',
  data:         'Newsreader_400Regular',
} as const

export const typeScale = {
  displayLg:  { fontSize: 36, lineHeight: 44, fontFamily: 'Fraunces_600SemiBold' },
  headlineLg: { fontSize: 28, lineHeight: 36, fontFamily: 'Fraunces_600SemiBold' },
  headlineMd: { fontSize: 24, lineHeight: 32, fontFamily: 'Fraunces_600SemiBold' },
  headlineSm: { fontSize: 20, lineHeight: 28, fontFamily: 'Fraunces_600SemiBold' },
  titleLg:    { fontSize: 18, lineHeight: 26, fontFamily: 'Outfit_700Bold' },
  titleMd:    { fontSize: 16, lineHeight: 24, fontFamily: 'Outfit_500Medium' },
  titleSm:    { fontSize: 14, lineHeight: 20, fontFamily: 'Outfit_700Bold' },
  bodyLg:     { fontSize: 16, lineHeight: 24, fontFamily: 'Outfit_400Regular' },
  bodyMd:     { fontSize: 14, lineHeight: 20, fontFamily: 'Outfit_400Regular' },
  bodySm:     { fontSize: 12, lineHeight: 16, fontFamily: 'Outfit_400Regular' },
  labelLg:    { fontSize: 12, lineHeight: 16, fontFamily: 'Outfit_700Bold' },
  labelSm:    { fontSize: 10, lineHeight: 14, fontFamily: 'Outfit_700Bold', letterSpacing: 1.5 },
  dataLg:     { fontSize: 32, lineHeight: 40, fontFamily: 'Newsreader_400Regular' },
} as const
