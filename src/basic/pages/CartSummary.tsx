function CartSummary({ total }: { readonly total: number }) {
  return (
    <div>
      <strong>Total</strong>
      <strong>Rp {total.toLocaleString('id-ID')}</strong>
    </div>
  )
}

export default CartSummary
