import React from 'react'
import { useState } from 'react'

export const Water = () => {
    
    const [Weight , setWeight] = useState<number>(0);
    const [Drink , setDrink] = useState<number>(0);

    const onChangeWeight = (event:React.ChangeEvent<HTMLInputElement>) =>{
        setWeight(+event.target.value);
    };
    const onSubmit =(event: React.FormEvent<HTMLInputElement>) =>{
        event.preventDefault();
        const Drink = (Weight *2.2 *(30/2)).toFixed(2);
        setDrink(Drink);
    }

  return (
    <>
        <h1>How many water should I drink?</h1>
        <h2>{Drink} x ml.</h2>
        <form onSubmit = {onSubmit}>
            <label htmlFor="name"> Weight: </label>
            <input type="number" id="Weight" name="name" onChange={onChangeWeight} placeholder='Enter your weight'/>
            <input type="submit"/>
        </form>

    </>
    
  )
}
