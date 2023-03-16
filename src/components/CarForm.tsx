import React from 'react'
import Button from './Button'
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from '../api/server'
import { useDispatch, useStore } from 'react-redux'
import { chooseMake, chooseModel, chooseColor, chooseNickname } from '../redux/slices/RootSlice'

// interface
interface ContactFormProps {
  id?: string[],
}

const CarForm = (props:ContactFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${props.id}`);
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(data.make)
      console.log(data.model)
      console.log(data.color)
      console.log(data.nickname)
      console.log(`Updated info: ${ data } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()
    } else {
      console.log(data.make)
      console.log(data.model)
      console.log(data.color)
      console.log(data.nickname)
      // Uses dispatch to update the state in our store
      dispatch(chooseMake(data.make));
      dispatch(chooseModel(data.model));
      dispatch(chooseColor(data.color));
      dispatch(chooseNickname(data.nickname));

      server_calls.create(store.getState());
      setTimeout( () => {window.location.reload()}, 500);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor='make'>Car Make</label>
          <Input {...register('make')} name='make' placeholder='Make'/>
        </div>
        <div>
          <label htmlFor='model'>Car Model</label>
          <Input {...register('model')} name='model' placeholder='Model'/>
        </div>
        <div>
          <label htmlFor='color'>Car Color</label>
          <Input {...register('color')} name='color' placeholder='Color'/>
        </div>
        <div>
          <label htmlFor='nickname'>Car Nickname</label>
          <Input {...register('nickname')} name='nickname' placeholder='Nickname'/>
        </div>
        <div className="flex p-1 justify-center">
          <Button
            className='p-2 bg-green-200 m-3 rounded border-2 border-black drop-shadow-md font-mono hover:bg-green-500 hover:text-white transition ease-linear duration-200'
            >
              Submit
            </Button>
        </div>
      </form>
    </div>
  )
}

export default CarForm

