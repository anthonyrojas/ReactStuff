import React from 'react';
import Aux from '../../../HOC/AuxHOC';
import Button from '../../UI/Button/Button';

const orderSummary = (props)=>{
    const ingredientSummary = Object.keys(props.ingredients)
        .map(ingredient =>{
            return(
            <li key={ingredient}>
                <span style={{textTransform: 'capitalize'}}>{ingredient}</span>: {props.ingredients[ingredient]}
            </li>);
        });
    return(
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    )
};

export default orderSummary;