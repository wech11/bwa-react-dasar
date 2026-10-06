// function ProductRow(props) {
//   return (
//     <div>
//       <span>{props.name}</span>
//       <span>{props.price}</span>
//     </div>
//   )
// }
// bukan kode aplikasi — contoh lesson konsep
function ProductRow({ name, price } : { readonly name:  string, readonly price: number }) {
    
  return (
    <div>
      <span style={{ marginRight: 10 }}>{name}</span>
      <span>Rp {price.toLocaleString('id-ID')}</span>
    </div>
  )
}


export default ProductRow
