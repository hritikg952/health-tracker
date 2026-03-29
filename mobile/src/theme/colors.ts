export const colors = {
  // Primary — Teal
  primary:                 '#006a63',
  onPrimary:               '#ffffff',
  primaryContainer:        '#4db6ac',
  onPrimaryContainer:      '#00433f',
  primaryFixed:            '#8ef4e9',
  primaryFixedDim:         '#71d7cd',
  onPrimaryFixed:          '#00201d',
  onPrimaryFixedVariant:   '#00504a',
  inversePrimary:          '#71d7cd',
  // Secondary — Green
  secondary:               '#286b33',
  onSecondary:             '#ffffff',
  secondaryContainer:      '#abf4ac',
  onSecondaryContainer:    '#2e7238',
  secondaryFixed:          '#abf4ac',
  secondaryFixedDim:       '#90d792',
  onSecondaryFixed:        '#002107',
  onSecondaryFixedVariant: '#07521d',
  // Tertiary — Warm Orange
  tertiary:                '#94492d',
  onTertiary:              '#ffffff',
  tertiaryContainer:       '#ea8e6d',
  onTertiaryContainer:     '#67280e',
  tertiaryFixed:           '#ffdbcf',
  tertiaryFixedDim:        '#ffb59b',
  onTertiaryFixed:         '#380d00',
  onTertiaryFixedVariant:  '#763219',
  // Error
  error:                   '#ba1a1a',
  onError:                 '#ffffff',
  errorContainer:          '#ffdad6',
  onErrorContainer:        '#93000a',
  // Background & Surface
  background:              '#f4fbf9',
  onBackground:            '#161d1c',
  surface:                 '#f4fbf9',
  onSurface:               '#161d1c',
  surfaceVariant:          '#dde4e2',
  onSurfaceVariant:        '#3d4947',
  surfaceBright:           '#f4fbf9',
  surfaceDim:              '#d4dbda',
  // Surface containers
  surfaceContainerLowest:  '#ffffff',
  surfaceContainerLow:     '#eef5f3',
  surfaceContainer:        '#e8efed',
  surfaceContainerHigh:    '#e3eae8',
  surfaceContainerHighest: '#dde4e2',
  // Outline & Misc
  outline:                 '#6d7a77',
  outlineVariant:          '#bdc9c6',
  inverseSurface:          '#2b3231',
  inverseOnSurface:        '#ebf2f0',
  surfaceTint:             '#006a63',
} as const

export type ColorToken = keyof typeof colors
