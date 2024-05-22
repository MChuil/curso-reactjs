import type { Item } from '../types'

type MenuItemProps = {
  item: Item
  addItem: (item: Item) => void
}

export const MenuItem = ({item, addItem }: MenuItemProps) => {
  return (
    <>
      <button className='border-2 border-indigo-400 hover:bg-indigo-200 w-full p-3 flex justify-between'
        onClick={()=> addItem(item)}
      >
        <p>{ item.name }</p>
        <p className='font-black'>${ item.price }</p>
      </button>
    </>
  )
}