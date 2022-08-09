import React from "react";
import styled from "styled-components";

import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { useEffect, useState } from "react";
import { fetchProducts } from "../store/reducers/ActionCreators";

import Buyer from "../components/Buyer";
import Deal from "../components/Deal";
import Seller from "../components/Seller";
import Modal from "../components/Modal";
import MakeDealBtn from "../components/MakeDealBtn";

import { removeProductById } from "../store/reducers/ProductSlice";
import { addDealProduct, changeStatus } from "../store/reducers/DealSlice";
import { removeBuyerProductById } from "../store/reducers/BuyerSlice";

const HomePage = () => {
  const [modalActive, setModalActive] = useState(false);
  const [modalFlag, setModalFlag] = useState("");
  const [maxRangeCount, setMaxRangeCount] = useState(0);
  const [productId, setProductId] = useState(0);
  const [productOwner, setProductOwner] = useState('');
  const [modalText, setModalText] = useState('');

  const dispatch = useAppDispatch();
  const { products, isLoading, balance } = useAppSelector(
    (state) => state.productReducer
  );

  const { buyerProducts } = useAppSelector(
    (state) => state.buyerReducer
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const openModal = (productId: number, productCount: number, owner: string) => {
    if (productCount === 1) {
      if ( owner === 'Buyer') {
        dispatch(removeBuyerProductById(productId));
        dispatch(changeStatus("sale"));
        dispatch(
          addDealProduct(buyerProducts.filter((product) => product.id === productId)[0])
        );
      }

      if (owner === 'Seller') {
        dispatch(removeProductById(productId));
        dispatch(changeStatus("buy"));
        dispatch(
          addDealProduct(products.filter((product) => product.id === productId)[0])
        );
      }
    }

    if (productCount > 1) {
      owner === 'Buyer' ? dispatch(changeStatus("sale")) :  dispatch(changeStatus("buy"))

      setProductId(productId);
      setModalFlag("Range");
      setMaxRangeCount(productCount);
      setModalActive(true);
    }

    setProductOwner(owner)
  };

  return (
    <>
      {isLoading ? (
        <Title>Connect...</Title>
      ) : (
        <>
          <Title>Тестовое задание</Title>
          <Wrapper>
            <Buyer clickProduct={openModal} />
            <Deal />
            <Seller
              balance={balance}
              products={products}
              clickProduct={openModal}
            />
          </Wrapper>
          <MakeDealBtn setModalFlag={setModalFlag} setActive={setModalActive} setModalText={setModalText} />
          <Modal
            active={modalActive}
            setActive={setModalActive}
            flag={modalFlag}
            maxRangeCount={maxRangeCount}
            productId={productId}
            productOwner={productOwner}
            modalText={modalText}
          />
        </>
      )}
    </>
  );
};

export default HomePage;

const Title = styled.h1`
  font-size: 32px;
  text-align: center;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 900px;
  margin: 50px auto 0;
`;
