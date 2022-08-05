import React from "react";
import styled from "styled-components";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../theme/index";
import GlobalFonts from "../fonts/index";

const HomePage = () => (
  <Layout>
    <StyledThemeProvider theme={theme}>
      <GlobalFonts />
      <GlobalStyle />
      <Title>Тестовое задание</Title>
      <Wrapper>
        <Column>
          <ColumnHeader>
            <ColumnTitle>Ваша корзина</ColumnTitle>
            <ColumnBalance>Ваш баланс: 130 уе</ColumnBalance>
          </ColumnHeader>
          <ColumnBody>
            <ProductItem>
              <ProductName>
                Яблоко <ProductCount>(71)</ProductCount>
              </ProductName>
              <ProductPrice>5 уе</ProductPrice>
            </ProductItem>
            <ProductItem>
              <ProductName>
                Груша <ProductCount>(56)</ProductCount>
              </ProductName>
              <ProductPrice>12 уе</ProductPrice>
            </ProductItem>
            <ProductItem>
              <ProductName>
                Банан <ProductCount>(2)</ProductCount>
              </ProductName>
              <ProductPrice>9 уе</ProductPrice>
            </ProductItem>
          </ColumnBody>
        </Column>
        <Column>
          <ColumnHeader>
            <ColumnTitle>Статус покупки/продажи: Подажа</ColumnTitle>
            <ColumnBalance>Вы получите: 185 уе</ColumnBalance>
          </ColumnHeader>
          <ColumnBody>
            <ProductItem>
              <ProductName>
                Яблоко <ProductCount>(5)</ProductCount>
              </ProductName>
              <ProductPrice>9 уе</ProductPrice>
            </ProductItem>
            <ProductItem>
              <ProductName>
                Банан <ProductCount>(28)</ProductCount>
              </ProductName>
              <ProductPrice>5 уе</ProductPrice>
            </ProductItem>
          </ColumnBody>
        </Column>
        <Column>
          <ColumnHeader>
            <ColumnTitle>Корзина продовца</ColumnTitle>
            <ColumnBalance>Ваш баланс: 15000 уе</ColumnBalance>
          </ColumnHeader>
          <ColumnBody>
            <ProductItem>
              <ProductName>
                Вишня <ProductCount>(100)</ProductCount>
              </ProductName>
              <ProductPrice>5 уе</ProductPrice>
            </ProductItem>
            <ProductItem>
              <ProductName>
                Клубника <ProductCount>(135)</ProductCount>
              </ProductName>
              <ProductPrice>7 уе</ProductPrice>
            </ProductItem>
            <ProductItem>
              <ProductName>
                Арбуз <ProductCount>(7)</ProductCount>
              </ProductName>
              <ProductPrice>8 уе</ProductPrice>
            </ProductItem>
            <ProductItem>
              <ProductName>
                Черника <ProductCount>(29)</ProductCount>
              </ProductName>
              <ProductPrice>9 уе</ProductPrice>
            </ProductItem>
            <ProductItem>
              <ProductName>
                Ежевика <ProductCount>(37)</ProductCount>
              </ProductName>
              <ProductPrice>7 уе</ProductPrice>
            </ProductItem>
            <ProductItem>
              <ProductName>
                Малина <ProductCount>(37)</ProductCount>
              </ProductName>
              <ProductPrice>6 уе</ProductPrice>
            </ProductItem>
            <ProductItem>
              <ProductName>
                Яблоко <ProductCount>(11)</ProductCount>
              </ProductName>
              <ProductPrice>5 уе</ProductPrice>
            </ProductItem>
          </ColumnBody>
        </Column>
      </Wrapper>
      <BtnWrapper>
        <MakeDeal>Совершить сделку</MakeDeal>
      </BtnWrapper>
    </StyledThemeProvider>
  </Layout>
);

export default HomePage;

const Title = styled.h1`
  font-size: 32px;
  text-align: center;
`;

const Layout = styled.div``;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 900px;
  margin: 50px auto 0;
`;

const Column = styled.div`
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

const ProductItem = styled.div`
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

const ProductPrice = styled.div``;

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
