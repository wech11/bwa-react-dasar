
type ThemeBadgeProps = {
  readonly theme: string
}

function ThemeBadge({ theme }: ThemeBadgeProps) {
  return <span>Theme: {theme}</span>
}

export default ThemeBadge
