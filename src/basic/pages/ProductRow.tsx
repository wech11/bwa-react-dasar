type ProductRowProps = {
  readonly name: string
  readonly price: number
  readonly currency?: string
}


// function ProductRow(props) {
//   return (
//     <div>
//       <span>{props.name}</span>
//       <span>{props.price}</span>
//     </div>
//   )
// }

function ProductRow({ name, price, currency = 'Rp.' }: ProductRowProps) {            // destructuring props
    
  return (
    <div>
      <span style={{ marginRight: 10 }}>{name}</span>
      <span>{currency} {price.toLocaleString('id-ID')}</span>
    </div>
  )
}


export default ProductRow
