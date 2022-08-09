import React, { FC } from "react";
import ColumnLayout from "../../components/ColumnLayout";
import { useAppSelector } from "../../hooks/redux";

const Buyer: FC<Props> = ({ clickProduct }) => {
  const { buyerBalance, buyerProducts } = useAppSelector((state) => state.buyerReducer);

  const handleProduct = (productId: number, productCount: number) => {
    clickProduct(productId, productCount, 'Buyer')
  }

  return (
    <ColumnLayout
      title={"Ваша корзина"}
      subTitle={"Ваш баланс"}
      balance={buyerBalance}
      products={buyerProducts}
      clickProduct={handleProduct}
    />
  );
};

interface Props {
    clickProduct?: any
}

export default Buyer;
