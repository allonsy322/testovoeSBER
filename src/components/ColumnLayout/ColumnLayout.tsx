import ProductItem from "../../components/ProductItem";
import React, { FC } from "react";
import styled from "styled-components";
import { IProduct } from "../../models/IProducts";

const ColumnLayout: FC<Props> = ({
  title,
  subTitle,
  balance,
  products,
  clickProduct,
}) => {

  return (
    <ColumnMako>
      <ColumnHeader>
        <ColumnTitle>{title}</ColumnTitle>
        <ColumnBalance>
          {subTitle}: {balance} уе
        </ColumnBalance>
      </ColumnHeader>
      <ColumnBody>
        {products &&
          products.map((item: IProduct) => (
            <ProductItem
              key={item.id}
              id={item.id}
              name={item.Name}
              count={item.count}
              price={item.price}
              clickProduct={clickProduct}
            />
          ))}
      </ColumnBody>
    </ColumnMako>
  );
};

interface Props {
  title: String;
  subTitle: String;
  balance: number;
  products?: any;
  clickProduct?: Function;
}

export default ColumnLayout;

const ColumnMako = styled.div`
  width: 280px;
`;

const ColumnHeader = styled.div`
  background-color: #107f8c;
  color: #fff;
  padding: 10px;
`;

const ColumnTitle = styled.div``;

const ColumnBalance = styled.div``;

const ColumnBody = styled.div`
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.04);
  height: 310px;
  overflow-y: auto;
`;
