function CartSummary({ total }: { readonly total: number }) {
  return (
    <div>
      <strong>Total</strong>
      <strong style={{ marginLeft: '10px' }}>Rp {total.toLocaleString('id-ID')}</strong>
    </div>
  )
}

export default CartSummary
