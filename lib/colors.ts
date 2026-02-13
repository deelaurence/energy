/**
 * Centralized Color System for JusKel
 * All colors used across the application are defined here
 */

export const COLORS = {
  // Primary Brand Colors
  primary: {
    charcoal: '#0E2F2A',      // Main dark teal (used in navbar, backgrounds)
    teal: '#1a2e2a',          // Slightly lighter teal
    darkTeal: '#153D35',       // Dark teal variant
    mediumTeal: '#1F6F68',     // Medium teal
    dataTeal: '#2a7a6e',       // Data/accent teal
    lightTeal: '#e6f2ee',      // Light teal background
  },

  // Secondary Brand Colors
  gold: {
    primary: '#CBA052',        // Main gold
    light: '#e8c876',          // Light gold
  },

  // Neutral Colors
  neutral: {
    dark: '#1a2e2a',           // Dark text
    text: '#6b7c78',           // Body text
    lightText: '#4a5854',      // Secondary text
    border: '#d5d0c8',         // Border color
    lightBg: '#F0EDE8',        // Light background
    white: '#ffffff',
  },

  // Semantic Colors
  status: {
    success: '#2a7a6e',        // Green/teal for success
    warning: '#CBA052',        // Gold for warning
    error: '#d94a4a',          // Red for errors
    info: '#4a8fd9',           // Blue for info
  },

  // Background Colors
  bg: {
    charcoal: '#0E2F2A',       // Dark backgrounds
    light: '#F0EDE8',          // Light backgrounds
    white: '#ffffff',
    gradient: {
      start: '#0E2F2A',
      mid: '#153D35',
      end: '#1F6F68',
    },
  },

  // Legacy hardcoded values (for gradual migration)
  legacy: {
    jetBlack: '#1a2e2a',
    darkGreen: '#0E2F2A',
    tealGreen: '#2a7a6e',
    lightCream: '#F0EDE8',
    gold: '#CBA052',
    lightGold: '#e8c876',
    grayText: '#6b7c78',
    borderGray: '#d5d0c8',
    white: '#ffffff',
  },
} as const

// Export as CSS variable names for easy tailwind integration
export const colorVariables = {
  '--primary-charcoal': COLORS.primary.charcoal,
  '--primary-teal': COLORS.primary.teal,
  '--primary-dark-teal': COLORS.primary.darkTeal,
  '--primary-medium-teal': COLORS.primary.mediumTeal,
  '--primary-data-teal': COLORS.primary.dataTeal,
  '--primary-light-teal': COLORS.primary.lightTeal,
  '--gold-primary': COLORS.gold.primary,
  '--gold-light': COLORS.gold.light,
  '--neutral-dark': COLORS.neutral.dark,
  '--neutral-text': COLORS.neutral.text,
  '--neutral-light-text': COLORS.neutral.lightText,
  '--neutral-border': COLORS.neutral.border,
  '--neutral-light-bg': COLORS.neutral.lightBg,
  '--status-success': COLORS.status.success,
  '--status-warning': COLORS.status.warning,
  '--status-error': COLORS.status.error,
  '--status-info': COLORS.status.info,
} as const

export const colorMap = {
  charcoalTeal: COLORS.primary.charcoal,
  darkTeal: COLORS.primary.teal,
  mediumTeal: COLORS.primary.dataTeal,
  gold: COLORS.gold.primary,
  lightGold: COLORS.gold.light,
  textDark: COLORS.neutral.dark,
  textMuted: COLORS.neutral.text,
  borderLight: COLORS.neutral.border,
  bgLight: COLORS.neutral.lightBg,
  white: COLORS.neutral.white,
} as const
