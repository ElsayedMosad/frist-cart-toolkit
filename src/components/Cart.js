import React from "react";
import Table from "react-bootstrap/Table";

import Button from "react-bootstrap/Button";

import { useDispatch, useSelector } from "react-redux";
import {
  clear,
  decreaseCount,
  deleteFromCard,
  increaseCount,
} from "../rtk/slices/cartSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart);
  // console.log(cartProducts);
  let totalPrice = cartProducts.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.price * currentValue.count;
  }, 0);
  // console.log(totalPrice);
  return (
    <>
      {cartProducts.length ? (
        <Button
          variant="danger"
          className="px-4 py-2   fs-5"
          onClick={() => dispatch(clear())}
          style={{ display: "block", margin: "10px auto", width: "220px" }}
        >
          Clear Your Cart
        </Button>
      ) : (
        ""
      )}
      <h5>Total Price : {totalPrice.toFixed(2)}$</h5>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>img</th>
            <th>price</th>
            <th>description</th>
            <th>count</th>
            <th>actions</th>
          </tr>
        </thead>
        {cartProducts.length ? (
          <>
            <tbody>
              {cartProducts.map((product) => {
                return (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.title}</td>
                    <td>
                      <img src={product.image} alt="" width={60} />
                    </td>
                    <td>{product.price}</td>
                    <td>{product.description}</td>
                    <td>{product.count}</td>
                    <td>
                      <Button
                        variant="outline-primary"
                        style={{ display: "inline-block", margin: "0 2px" }}
                        onClick={() => dispatch(increaseCount(product))}
                      >
                        +
                      </Button>
                      <Button
                        variant="outline-warning"
                        style={{ display: "inline-block", margin: "0 2px" }}
                        onClick={() => dispatch(decreaseCount(product))}
                      >
                        -
                      </Button>
                      <Button
                        className="mt-1"
                        variant="danger"
                        onClick={() => dispatch(deleteFromCard(product))}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </>
        ) : (
          <tbody>
            <tr className="text-center">
              <td colSpan={7}>You Don't Add Any Product</td>
            </tr>
          </tbody>
        )}
      </Table>
    </>
  );
}
