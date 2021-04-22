import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { AddLineIcon, SubtractLineIcon, CloseLineIcon } from '../components/Icons/'
import { Table } from '../components/'
import pokemonInfo from '../assets/pokemonInfo'

const TableContainer = () => {
  const [ cart, setCart ] = useState(pokemonInfo)

  const removeFromCart = (e) => {
    let newCart = [...cart]
    delete newCart[e.target.dataset.id]
    newCart = newCart.filter(Boolean)
    setCart(newCart)
  }

  return (
    <Table>
      <Table.TableFrame>
        <Table.TBody>
          { cart && cart.map((item,idx) => (
            <Row 
              key={ uuid() } 
              item={ item }
              idx={ idx }
              removeFromCart={ removeFromCart } 
            />
          ))}        
        </Table.TBody>
      </Table.TableFrame>
    </Table>
  )
}

const Row = ({ item, idx, removeFromCart }) => {
  const [ counter, setCounter ] = useState(item.quantity)
  const decrement = (e) => (counter > 1) && setCounter(counter - 1)
  const increment = (e) => (counter < 10) && setCounter(counter + 1)
  const handleCounter = (e) => setCounter(+e.target.value)
  
  return (
    <Table.Row>
      <Table.Column>
        <img 
          src={ item.image } 
          alt={ `pokemon-${ item.pokemon }` }
        />
      </Table.Column>
      <Table.Column>{ item.pokemon }</Table.Column>
      <Table.Column>
        <button 
          onClick={ decrement }
        ><SubtractLineIcon size="1em" /> 
        </button>
        <input 
          type="number" 
          value={ counter } 
          onChange={ handleCounter } 
        />
        <button 
          onClick={ increment } 
        ><AddLineIcon size="1em" />
        </button>
      </Table.Column>
      <Table.Column>${ item.price }</Table.Column>
      <Table.Column>
        <button 
          data-id={ idx }
          onClick={ removeFromCart }
        ><CloseLineIcon size="1em" /> 
        </button>
      </Table.Column>
    </Table.Row>
  )
}

export default TableContainer