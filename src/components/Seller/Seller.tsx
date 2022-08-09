import React, { FC } from "react";
import ColumnLayout from "../../components/ColumnLayout";

const Seller: FC<Props> = ({ balance, products, clickProduct }) => {
  const handleProduct = (productId: number, productCount: number) => {
    clickProduct(productId, productCount, "Seller");
  };

  return (
    <ColumnLayout
      title={"Корзина продовца"}
      subTitle={"Баланс"}
      balance={balance}
      products={products}
      clickProduct={handleProduct}
    />
  );
};

interface Props {
  balance: number;
  products?: any[];
  openModal?: any;
  clickProduct?: any;
}

export default Seller;
