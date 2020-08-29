import React from 'react';
import courseData from '../../course-data';
import { useState } from 'react';
import './Course.css';
import Subject from '../Subject/Subject';
import Cart from '../Cart/Cart';


const Course = () => {
    const first12 = courseData.slice(0, 12);
    const [course, setCourses] =  useState (first12);
    const [cart, setCart] = useState ([]);
    const handleAddProduct = (Product) =>{
       
        const newCart = [...cart, Product];
        setCart(newCart);
    }
    return (
        <div className= 'course-container'>
            
            <div className = 'subject-container'>
    
   
{
 course.map(course => <Subject
 handleAddProduct = {handleAddProduct} subject={course}></Subject> )   
}

  
            </div>
            <div className = 'cart-container'>
                <Cart cart = {cart}> </Cart>
            
            </div>
        </div>
    );
};

export default Course;