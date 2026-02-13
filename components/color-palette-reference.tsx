/**
 * Color Palette Reference Component
 * Displays all available colors in the JusKel design system
 * Use this for development reference or add to a style guide page
 */

import { COLORS } from '@/lib/colors'

export function ColorPaletteReference() {
  const renderColorBox = (name: string, hex: string) => (
    <div key={hex} className="flex flex-col items-center gap-2">
      <div
        className="w-32 h-32 rounded-lg shadow-md border border-gray-200"
        style={{ backgroundColor: hex }}
      />
      <div className="text-center">
        <p className="text-sm font-semibold text-gray-900">{name}</p>
        <p className="text-xs text-gray-600 font-mono">{hex}</p>
      </div>
    </div>
  )

  return (
    <div className="p-8 bg-white">
      <h1 className="text-3xl font-bold mb-12 text-gray-900">JusKel Color System</h1>

      {/* Primary Colors */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Primary Brand Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {renderColorBox('Charcoal Teal', COLORS.primary.charcoal)}
          {renderColorBox('Dark Teal', COLORS.primary.teal)}
          {renderColorBox('Teal Dark', COLORS.primary.darkTeal)}
          {renderColorBox('Teal Medium', COLORS.primary.mediumTeal)}
          {renderColorBox('Teal Data', COLORS.primary.dataTeal)}
          {renderColorBox('Teal Light', COLORS.primary.lightTeal)}
        </div>
      </section>

      {/* Gold Colors */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Gold Accents</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {renderColorBox('Gold Primary', COLORS.gold.primary)}
          {renderColorBox('Gold Light', COLORS.gold.light)}
        </div>
      </section>

      {/* Neutral Colors */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Neutral Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {renderColorBox('Text Dark', COLORS.neutral.dark)}
          {renderColorBox('Text Body', COLORS.neutral.text)}
          {renderColorBox('Text Secondary', COLORS.neutral.lightText)}
          {renderColorBox('Border', COLORS.neutral.border)}
          {renderColorBox('Light BG', COLORS.neutral.lightBg)}
          {renderColorBox('White', COLORS.neutral.white)}
        </div>
      </section>

      {/* Status Colors */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Status Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {renderColorBox('Success', COLORS.status.success)}
          {renderColorBox('Warning', COLORS.status.warning)}
          {renderColorBox('Error', COLORS.status.error)}
          {renderColorBox('Info', COLORS.status.info)}
        </div>
      </section>

      {/* Usage Examples */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Usage Examples</h2>
        <div className="space-y-4 bg-gray-50 p-6 rounded-lg">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">In TypeScript/React:</h3>
            <code className="block bg-gray-100 p-3 rounded text-sm text-gray-800 overflow-x-auto">
              {`import { COLORS } from '@/lib/colors'
<div style={{ backgroundColor: COLORS.primary.charcoal }} />`}
            </code>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">In Tailwind (CSS Variables):</h3>
            <code className="block bg-gray-100 p-3 rounded text-sm text-gray-800 overflow-x-auto">
              {`<div className="bg-[var(--color-charcoal-teal)] text-[var(--color-white)]" />`}
            </code>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">In Custom CSS:</h3>
            <code className="block bg-gray-100 p-3 rounded text-sm text-gray-800 overflow-x-auto">
              {`.my-class {
  background: var(--color-charcoal-teal);
  color: var(--color-white);
}`}
            </code>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ColorPaletteReference
