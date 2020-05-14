import React from "react";

import * as Styled from "./styles";

import img13 from "../../images/13.png";

export default function Banner() {
  return (
    <Styled.Container>
      <Styled.Details>
        <Styled.Title>
          Cobre um amigo
        </Styled.Title>

        <Styled.Description>
          Mantenha suas parcerias em dia, use o PicPay para fazer suas cobranças.
        </Styled.Description>
      </Styled.Details>

      <Styled.Img source={img13} />
    </Styled.Container>
  );
}
