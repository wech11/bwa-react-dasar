type ProductRowProps = {
  readonly name: string;
  readonly price: number;
  readonly currency?: string;
  readonly inOnSale?: boolean;
  readonly isSoldOut?: boolean;
};

// function ProductRow(props) {
//   return (
//     <div>
//       <span>{props.name}</span>
//       <span>{props.price}</span>
//     </div>
//   )
// }

function ProductRow({
  name,
  price,
  currency = "Rp.",
  inOnSale,
  isSoldOut,
}: ProductRowProps) {
  // destructuring props
  if (isSoldOut) {
    return <div>{name} is sold out</div>;
  }
  return (
    <div>
      <span style={{ marginRight: 10 }}>{name}</span>
      <span>
        {currency} {price.toLocaleString("id-ID")}
      </span>
      {inOnSale ? <span> (sale)</span> : <span> (regular)</span>}
    </div>
  );
}

export default ProductRow;
