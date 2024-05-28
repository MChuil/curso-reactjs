import { OrderActions } from '../reducers/orderReducer'
import type { Item } from '../types'

type MenuItemProps = {
  item: Item
  dispatch : React.Dispatch<OrderActions>
}

export const MenuItem = ({item, dispatch }: MenuItemProps) => {
  return (
    <>
      <button className='border-2 border-indigo-400 hover:bg-indigo-200 w-full p-3 flex justify-between'
        onClick={()=> dispatch({type: 'addItem', payload:{item: item}})}
      >
        <p>{ item.name }</p>
        <p className='font-black'>${ item.price }</p>
      </button>
    </>
  )
}