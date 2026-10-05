
import ThemeBadge from './ThemeBadge'

type ToolbarProps = {
  readonly theme: string
}

function Toolbar({ theme }: ToolbarProps) {
  return (
    <div>
      <button type="button">Save</button>
      <ThemeBadge theme={theme} />
    </div>
  )
}

export default Toolbar
