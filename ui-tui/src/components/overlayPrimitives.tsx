import { Text } from '@hermes/ink'

import type { Theme } from '../theme.js'

/** A numbered menu row with the ▸ cursor (mirrors ClarifyPrompt). */
export function MenuRow({ active, index, label, t }: { active: boolean; index: number; label: string; t: Theme }) {
  return (
    <Text>
      <Text bold={active} color={active ? t.color.label : t.color.muted} inverse={active}>
        {active ? '▸ ' : '  '}
        {index}. {label}
      </Text>
    </Text>
  )
}

/** Plain (non-numbered) action row with the ▸ cursor (confirm screens). */
export function ActionRow({ active, label, color, t }: { active: boolean; label: string; color?: string; t: Theme }) {
  return (
    <Text>
      <Text color={active ? t.color.accent : t.color.muted}>{active ? '▸ ' : '  '}</Text>
      <Text bold={active} color={active ? (color ?? t.color.text) : t.color.muted}>
        {label}
      </Text>
    </Text>
  )
}

export const BAR_CELLS = 10

/** ratio in [0,1] -> { bar: '█…░…', pct: 0-100 } using `cells` cells. */
export function barCells(ratio: number, cells: number = BAR_CELLS): { bar: string; pct: number } {
  const r = Math.max(0, Math.min(1, ratio))

  const filled = Math.round(r * cells)

  return { bar: '█'.repeat(filled) + '░'.repeat(cells - filled), pct: Math.round(r * 100) }
}

export const footer = (extra: string, t: Theme) => <Text color={t.color.muted}>{extra}</Text>
