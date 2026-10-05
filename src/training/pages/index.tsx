// const user = { name: 'Budi', age: 28 }

// console.log('Hello ' + user.name)

// const name = 'Budi'
// const age = '28'
// const isActive = true

// let city = 'Bandung'
// const country = 'Indonesia'

// console.log(name, age, isActive)
// console.log(city, country)          // hover disini
// console.log(age);

// ═════════════════════════════════════════════════════════════════════════════════════════════════════
// const product: { name: string; price: number } = {
//   name: 'Latte',
//   price: 18000
// }

// console.log(product.name, product.price)

// ═════════════════════════════════════════════════════════════════════════════════════════════════════
// type Product = {
//   name: string
//   price: number
// }

// const latte: Product = { name: 'Latte', price: 18000 }
// const toast: Product = { name: 'Toast', price: 12000 }

// console.log(latte, toast)

// ═════════════════════════════════════════════════════════════════════════════════════════════════════
// const numbers: number[] = [1, 2, 3]
// const words: string[] = ['one', 'two']

// console.log(numbers, words)

// type Product = {
//   name: string
//   price: number
// }

// const cart: Product[] = [
//   { name: 'Latte', price: 18000 },
//   { name: 'Toast', price: 12000 },
//   { name: 'Iced Tea', price: 8000 }
// ]

// console.log(cart.length)

// ═════════════════════════════════════════════════════════════════════════════════════════════════════
// object type & array type
// type Product = {
//   name: string
//   price: number
// }

// const cart: Product[] = [
//   { name: 'Latte', price: 18000 },
//   { name: 'Toast', price: 12000 },
//   { name: 'Iced Tea', price: 8000 }
// ]

// const total = cart.reduce((sum, product) => sum + product.price, 0)

// console.log(cart.length + ' items')
// console.log('Total ' + total)

// ═════════════════════════════════════════════════════════════════════════════════════════════════════
// union type
// type OrderStatus = 'pending' | 'shipped' | 'done'
// type Answer = 'yes' | 'no' | 'maybe'
// type Size = 1 | 2 | 3
// type Result = string | number

// type Order = {
//   code: string
//   status: OrderStatus
// }

// const order: Order = { code: 'INV-001', status: 'shipped' }

// console.log(order)

// ═════════════════════════════════════════════════════════════════════════════════════════════════════
// optional property
// type Order = {
//   code: string
//   status: OrderStatus
//   note?: string
// }

// const withoutNote: Order = { code: 'INV-001', status: 'pending' }
// const withNote: Order = {
//   code: 'INV-002',
//   status: 'shipped',
//   note: 'Please wrap it neatly'
// }

// console.log(withoutNote, withNote)
// console.log(withoutNote.note?.length)


// ═════════════════════════════════════════════════════════════════════════════════════════════════════
type OrderStatus = 'pending' | 'shipped' | 'done'

type Order = {
  code: string
  status: OrderStatus
  note?: string
}

const orders: Order[] = [
  { code: 'INV-001', status: 'pending' },
  { code: 'INV-002', status: 'shipped', note: 'Please wrap it neatly' },
  { code: 'INV-003', status: 'done' }
]

const unfinished = orders.filter((order) => order.status !== 'done')

console.log(unfinished.length + ' unfinished orders')


// console.log(order.note!.toUpperCase())


// ═════════════════════════════════════════════════════════════════════════════════════════════════════
// mengembalikan nilai kosong
function log(message: string): void {
  console.log('[log] ' + message)
}

log('Order saved')


// ═════════════════════════════════════════════════════════════════════════════════════════════════════
// default parameter
function greet(name: string, greeting = 'Hello') {
  return greeting + ' ' + name
}

console.log(greet('Budi'))
console.log(greet('Siti', 'Good morning'))


// ═════════════════════════════════════════════════════════════════════════════════════════════════════
// generic type
const numbers = [1, 2, 3]

console.log(numbers.map((n) => n * 2))


// ═════════════════════════════════════════════════════════════════════════════════════════════════════
// higher order function
function repeat(times: number, run: (index: number) => void) {
  for (let i = 1; i <= times; i++) {
    run(i)
  }
}

repeat(3, (index) => console.log('Attempt ' + index))


// ═════════════════════════════════════════════════════════════════════════════════════════════════════
// callback function
// type Product = {
//   name: string
//   price: number
// }

// function calculateTotal(items: Product[]): number {
//   return items.reduce((sum, product) => sum + product.price, 0)
// }

// function formatPrice(value: number): string {
//   return 'Rp ' + value.toLocaleString('id-ID')
// }

// function show(items: Product[], transform: (value: number) => string): void {
//   console.log(items.length + ' items, total ' + transform(calculateTotal(items)))
// }

// const cart: Product[] = [
//   { name: 'Latte', price: 18000 },
//   { name: 'Toast', price: 12000 }
// ]

// show(cart, formatPrice)

// ═════════════════════════════════════════════════════════════════════════════════════════════════════
// generic function
function takeFirst(items: string[]): string {
  return items[0]
}

console.log(takeFirst(['a', 'b', 'c']))

// ═════════════════════════════════════════════════════════════════════════════════════════════════════
// generic function
function takeSecond<T>(items: T[]): T {
  return items[0]
}

const letter = takeSecond(['a', 'b', 'c'])
const number = takeSecond([1, 2, 3])

console.log(letter, number)



// ═════════════════════════════════════════════════════════════════════════════════════════════════════
// generic type
type Product = {
  name: string
  price: number
}

const emptyCart: Product[] = []
const emptyNumbers: number[] = []

console.log(emptyCart.length, emptyNumbers.length)

// const [count, setCount] = useState(0)




