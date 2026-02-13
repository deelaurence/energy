/**
 * Hook for accessing colors in React components
 * Provides an easy way to access the centralized color system
 */

import { useMemo } from 'react'
import { COLORS, colorMap } from '@/lib/colors'

export function useColors() {
  return useMemo(() => ({
    // Primary colors
    charcoalTeal: COLORS.primary.charcoal,
    darkTeal: COLORS.primary.teal,
    mediumTeal: COLORS.primary.dataTeal,
    lightTeal: COLORS.primary.lightTeal,

    // Gold accents
    gold: COLORS.gold.primary,
    goldLight: COLORS.gold.light,

    // Text colors
    textDark: COLORS.neutral.dark,
    textBody: COLORS.neutral.text,
    textSecondary: COLORS.neutral.lightText,

    // Background colors
    bgLight: COLORS.neutral.lightBg,
    bgCharcoal: COLORS.bg.charcoal,

    // Borders and other
    border: COLORS.neutral.border,
    white: COLORS.neutral.white,

    // Status colors
    success: COLORS.status.success,
    warning: COLORS.status.warning,
    error: COLORS.status.error,
    info: COLORS.status.info,

    // Utility function to get any color from the main COLORS object
    get: (path: string) => {
      return path.split('.').reduce((obj: any, key) => obj?.[key], COLORS)
    },
  }), [])
}

export default useColors
