import React, { FC } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  addBuyerProduct,
  cnangeBuyerBalance,
} from "../../store/reducers/BuyerSlice";
import { removeAllDealProducts } from "../../store/reducers/DealSlice";
import { addProduct } from "../../store/reducers/ProductSlice";

const MakeDealBtn: FC<props> = ({ setModalFlag, setActive, setModalText }) => {
  const dispatch = useAppDispatch();
  const { status, dealProducts, dealBalance } = useAppSelector(
    (state) => state.dealReducer
  );

  const { buyerBalance } = useAppSelector((state) => state.buyerReducer);

  const makeBuy = () => {
    if (buyerBalance >= dealBalance) {
      dealProducts.map((item) => dispatch(addBuyerProduct(item)));
      dispatch(removeAllDealProducts());
    }

    if (buyerBalance < dealBalance) {
      setModalFlag("Text");
      setModalText("Баланса не хватает");
      setActive(true);
    }
  };

  const makeSale = () => {
    dealProducts.map((item) => dispatch(addProduct(item)));
    dispatch(removeAllDealProducts());
    dispatch(cnangeBuyerBalance());
  };

  const makeADeal = (status: String) =>
    status === "buy" ? makeBuy() : makeSale();

  return (
    <BtnWrapper>
      <MakeDeal onClick={() => makeADeal(status)}>Совершить сделку</MakeDeal>
    </BtnWrapper>
  );
};

interface props {
  setModalFlag?: any;
  setActive?: any;
  setModalText?: any;
}

export default MakeDealBtn;

const BtnWrapper = styled.div`
  max-width: 900px;
  margin: 30px auto 0;
  text-align: center;
`;

const MakeDeal = styled.a`
  color: #fff;
  background-color: #107f8c;
  border: 0;
  cursor: pointer;
  transition: all 0.3s;
  padding: 9px 16px;
  margin: 0 auto;
  display: inline-block;

  &:hover {
    background-color: #15b2c5;
  }
`;
