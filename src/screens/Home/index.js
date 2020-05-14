import React from "react";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

import * as Styled from "./styles";

import Suggestions from "../../components/Suggestions";
import Activities from "../../components/Activities";
import Tips from "../../components/Tips";
import Banner from "../../components/Banner";

export default function Home() {
  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.Header>
          <MaterialCommunityIcons
            name="qrcode-scan"
            size={30}
            color="#10c86e"
          />

          <Styled.BalanceContainer>
            <Styled.BalanceTitle>Meu Saldo</Styled.BalanceTitle>
            <Styled.Balance>R$ 0,00</Styled.Balance>
          </Styled.BalanceContainer>

          <AntDesign name="gift" size={30} color="#10c86e" />
        </Styled.Header>

        <Suggestions />
        <Activities />
        <Tips />
        <Banner />
      </Styled.Container>
    </Styled.Wrapper>
  );
}
