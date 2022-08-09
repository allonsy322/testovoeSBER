import React, { FC } from "react";
import styled from "styled-components";

const ProductItem: FC<Props> = ({ id, name, count, price, clickProduct }) => {
  return (
    <Product onClick={() => clickProduct(id, count)}>
      <ProductName>
        {name} <ProductCount>({count})</ProductCount>
      </ProductName>
      <ProductPrice>{price} уе</ProductPrice>
    </Product>
  );
};

interface Props {
    id: number;
    name: String;
    count: number;
    price: number;
    clickProduct?: any;
}

export default ProductItem;

const Product = styled.div`
  width: 100%;
  padding: 10px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.3s;
  margin-bottom: 10px;

  &:hover {
    box-shadow: 1px 1px 10px 1px rgb(0 0 0 / 10%);
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const ProductName = styled.div``;

const ProductCount = styled.span``;

const ProductPrice = styled.div`
  min-width: 50px;
  text-align: right;
`;