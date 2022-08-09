import React, { FC } from "react";
import { useState } from "react";
import styled from "styled-components";
import CloseSvg from "../../assets/CloseSvg";
import { useDispatch } from 'react-redux'
import { removeProductById, removeProduct } from '../../store/reducers/ProductSlice'
import { addDealProduct } from '../../store/reducers/DealSlice'
import { removeBuyerProduct, removeBuyerProductById } from "../../store/reducers/BuyerSlice";
import { useAppSelector } from "../../hooks/redux";

const Modal: FC<Props> = ({
  active,
  setActive,
  flag,
  maxRangeCount,
  productId,
  productOwner,
  modalText
}) => {
  const [value, setValue] = useState(1);
  const dispatch = useDispatch();
  const { products } = useAppSelector((state) => state.productReducer)
  const { buyerProducts } = useAppSelector((state) => state.buyerReducer)

  const handleChange = (
    event: React.SyntheticEvent<HTMLInputElement, Event>
  ) => {
    setValue(Number(event.currentTarget.value));
  };

  const closeModal = () => {
    setActive(false);
    setValue(1);
  }

  const makeSale = (productId: number) => {
    if (maxRangeCount > value) {
      if (productOwner === 'Buyer') {
        let product = {...buyerProducts.filter((product) => product.id === productId)[0]}
        product.count = value

        dispatch(addDealProduct(product))
        dispatch(removeBuyerProduct(product))

        closeModal()
      } else if (productOwner === 'Seller') {
        let product = {...products.filter((product) => product.id === productId)[0]}
        product.count = value

        dispatch(addDealProduct(product))
        dispatch(removeProduct(product))

        closeModal()
      }
    } else {
      if (productOwner === 'Buyer') {
        let product = {...buyerProducts.filter((product) => product.id === productId)[0]}

        dispatch(addDealProduct(product))
        dispatch(removeBuyerProductById(product.id))

        closeModal()
      } else if (productOwner === 'Seller') {
        let product = {...products.filter((product) => product.id === productId)[0]}

        dispatch(addDealProduct(product))
        dispatch(removeProductById(product.id))

        closeModal()
      }
    }
  }

  return (
    <>
      <Overlay active={active} onClick={closeModal} />
      <PopUp active={active}>
        <StyledCloseSvg onClick={closeModal} />
        <Content>
          {flag === "Range" ? (
            <>
              <Title>Количество товара:</Title>
              <InputWrapper>
                <input
                  type="range"
                  min="1"
                  max={maxRangeCount}
                  step="1"
                  value={value}
                  onChange={handleChange}
                />
                <InputLableMin>1</InputLableMin>
                <InputLableMax>{maxRangeCount}</InputLableMax>
              </InputWrapper>

              <BtnWrapper>
                <Btn onClick={() => makeSale(productId)}>Добавить в сделку {value}</Btn>
              </BtnWrapper>
            </>
          ) : (
            modalText
          )}
        </Content>
      </PopUp>
    </>
  );
};

interface Props {
  active: boolean;
  setActive?: any;
  flag: string;
  maxRangeCount: number;
  productId: number;
  productOwner?: String;
  modalText?: String
}

export default Modal;

const Overlay = styled.div<{ active: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: ${({ active }) => (active ? "block" : "none")};
  cursor: pointer;
`;

const PopUp = styled.div<{ active: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  background-color: #fff;
  padding: 15px;
  display: ${({ active }) => (active ? "block" : "none")};
`;

const StyledCloseSvg = styled(CloseSvg)`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const Content = styled.div``;

const Title = styled.div`
  margin-bottom: 25px;
`;
const BtnWrapper = styled.div`
  max-width: 900px;
  margin: 30px auto 0;
  text-align: center;
`;

const Btn = styled.a`
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

const InputWrapper = styled.div`
  width: 100%;
  position: relative;

  & input {
    width: 100%;
  }
`

const InputLableMin = styled.div`
  position: absolute;
  left: 6px;
  top: 20px;
`

const InputLableMax = styled.div`
  position: absolute;
  right: 0;
  top: 20px;
`
