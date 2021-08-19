import React, { useCallback } from 'react';
import {IProduct} from '../store/modules/cart/types';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCartRequest } from '../store/modules/cart/actions';
import { IState } from '../store';

interface CatalogItemProps {
  product: IProduct;
}

export function CatalogItem({product}:CatalogItemProps) {
  const dispatch = useDispatch();

  const hasFailedStock = useSelector<IState, boolean>(state => {
    return state.cart.failedStockCheck.includes(product.id);
  })
  
  const handleAddProductToCart = useCallback(() =>{
    dispatch(addProductToCartRequest(product))
  }, [dispatch, product]);

  return (
    <article>
        <strong>{product.title}</strong> {" - "}
        <span>{product.price}</span> {"  "}

        <button 
          type="button"
          onClick={handleAddProductToCart}
        >
        Comprar
      </button>

      {hasFailedStock && <span style={{color: 'red'}}>Falta de estoque</span>}
    </article>
  );
}