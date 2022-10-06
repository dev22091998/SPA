import React from 'react'
import { useHistory, useLocation, useParams } from 'react-router-dom'
import { getFilterCategory } from '../../api';
import { useState, useEffect } from 'react';
import Loader from '../Loader';
import MealList from '../MealList';
import Search from './Search';

export default function Category() {
  const {name} = useParams();
  const [meals, setMeals] = useState([]);
  const [filteredMeals, setFilteredMeals] = useState([]); 
  const {pathname, search} = useLocation();
  const {push} = useHistory();


  const handleSearch = (str) => {
    setFilteredMeals(meals.filter(item => item.strMeal.toLowerCase().includes(str.toLowerCase())))
    push({
      pathname,
      search: `?search=${str}`
    })
  }
  useEffect(()=>{
    getFilterCategory(name).then(data =>{
      setMeals(data.meals)
      setFilteredMeals(search ? 
        data.meals.filter(item =>
          item.strMeal.toLowerCase().includes(search.split("=")[1].toLowerCase())):
          data.meals)
    } )
    
  }, [name, search])
  console.log(meals)
  return (
    <>
      <Search cb={handleSearch}/>
      {!meals.length ? <Loader/> : <MealList meals={filteredMeals}/>}
    </>
  )
}
