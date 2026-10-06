// bukan kode aplikasi — contoh lesson konsep
import type { ReactNode } from 'react'

type CardProps = {
  readonly title: string
  readonly children: ReactNode
}

function Card({ title, children }: CardProps) {
  return (
    <div className="card">
      <h3>{title}</h3>
      {children}
    </div>
  )
}

export default Card
