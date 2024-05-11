import { CartProps } from '../HomePage'

import burgerImage from '../../../../../../resources/burger.png'
import hotdogImage from '../../../../../../resources/hotdog.png'
import pizzaImage from '../../../../../../resources/pizza.png'

type props = {
  cart: CartProps
  onDelete: () => void
  onMin: () => void
}

function CartCard(props: props) {
  const imageFood = {
    pizza: pizzaImage,
    burger: burgerImage,
    hotdog: hotdogImage
  }

  return (
    <div key={props.cart.name} className="shadow-md  flex rounded-sm py-2 ">
      <div className="flex-1">
        <img
          src={imageFood[props.cart.type]}
          alt={imageFood[props.cart.type]}
          className="h-12 w-20"
        />
      </div>
      <div className="flex-[4]">
        <h1 className="line-clamp-1 ">{props.cart.name}</h1>
        <h2>{props.cart.quantity}</h2>
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <button onClick={props.onDelete}>X</button>
        <button onClick={props.onMin}>-</button>
      </div>
    </div>
  )
}

export default CartCard
