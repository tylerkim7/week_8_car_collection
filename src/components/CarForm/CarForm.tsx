// Imports from React and packages
import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';

// Local Imports
import { chooseMake, chooseModel, choosePrice, chooseYear, chooseAcceleration, chooseSpeed, chooseWeight } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';



interface CarFormProps {
    id?:string;
    data?: {}
}

interface CarState {
    make: string;
    model: string;
    price: number;
    year: string;
    acceleration: string;
    max_speed: string;
    weight: string;
}

export const CarForm = (props:CarFormProps) => {
    const dispatch = useDispatch();
    let { carData, getData } = useGetData();
    const store = useStore();
    const { register, handleSubmit } = useForm({ })

    const onSubmit = async (data:any, event: any) => {
        console.log(props.id)
        if (props.id!) {
            await serverCalls.update(props.id!, data)
            console.log(`Updated: ${data} ${props.id}`)
            window.location.reload()
            event.target.reset()
        } else {
            dispatch(chooseMake(data.make))
            dispatch(chooseModel(data.model))
            dispatch(choosePrice(data.price))
            dispatch(chooseYear(data.year))
            dispatch(chooseAcceleration(data.acceleration))
            dispatch(chooseSpeed(data.max_speed))
            dispatch(chooseWeight(data.weight))
            await serverCalls.create(store.getState())
            window.location.reload()
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
            <div>
                    <label htmlFor="make">Car Make</label>
                    <Input {...register('make')} name="make" placeholder='Make' />
                </div>
                <div>
                    <label htmlFor="model">Model</label>
                    <Input {...register('model')} name="model" placeholder="Model"/>
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <Input {...register('price')} name="price" placeholder="Price"/>
                </div>
                <div>
                    <label htmlFor="year">Year</label>
                    <Input {...register('year')} name="year" placeholder="Year"/>
                </div>
                <div>
                    <label htmlFor="acceleration">Acceleration</label>
                    <Input {...register('acceleration')} name="acceleration" placeholder="Acceleration"/>
                </div>
                <div>
                    <label htmlFor="max_speed">Speed</label>
                    <Input {...register('max_speed')} name="max_speed" placeholder="Speed"/>
                </div>
                <div>
                    <label htmlFor="weight">Weight</label>
                    <Input {...register('weight')} name="weight" placeholder="Weight"/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}