function Greeting() {
  const user = { name: 'Budi', age: 28 }
  const items = ['Latte', 'Toast', 'Iced Tea']
  const price = 18000

  return (
    <div className="greeting">
      <h2>Hello {user.name}</h2>
      <p>You are {user.age} years old</p>
      <p>{items.length} items in your cart</p>
      <p>Total: {price * items.length}</p>
      <p>{user.name.toUpperCase()}</p>
    </div>
  )
}

export default Greeting
