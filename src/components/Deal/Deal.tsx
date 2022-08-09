import React, { FC } from "react";
import ColumnLayout from "../../components/ColumnLayout";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { addBuyerProduct } from "../../store/reducers/BuyerSlice";
import { removeDealProductId } from "../../store/reducers/DealSlice";
import { addProduct } from "../../store/reducers/ProductSlice";

const Deal: FC = () => {
  const { status, dealBalance, dealProducts } = useAppSelector(
    (state) => state.dealReducer
  );

  const dispatch = useAppDispatch();

  let title = "Статус покупки/продажи";
  let subTitle = "курс"

  switch (status) {
    case "buy":
      title = "Статус покупки/продажи: покупка";
      subTitle = "Вы потратите"
      break
    case "sale":
      title = "Статус покупки/продажи: продажа";
      subTitle = "Вы получите"
      break
    default:
      title = "Статус покупки/продажи";
      subTitle = "курс"
  }

  const clickProduct = ( productId: number) => {
    const product = dealProducts.filter(product => product.id === productId)[0]

    dispatch(removeDealProductId(productId))

    if (status === 'sale') {
        dispatch(addBuyerProduct(product))
    }

    if (status === 'buy') {
        dispatch(addProduct(product))
    }
  }

  return (
    <ColumnLayout
      title={title}
      subTitle={subTitle}
      balance={dealBalance}
      products={dealProducts}
      clickProduct={clickProduct}
    />
  );
};

export default Deal;
