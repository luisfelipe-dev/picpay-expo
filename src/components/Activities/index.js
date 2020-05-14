import React from "react";
import { Feather, MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

import * as Styled from "./styles";

import avatar from "../../images/avatar.png";

export default function Activities() {
  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Title>Atividades</Styled.Title>

        <Styled.Card>
          <Styled.CardHeader>
            <Styled.Avatar source={avatar}></Styled.Avatar>
            <Styled.Description>
              <Styled.Bold>Você</Styled.Bold> pagou a{" "}
              <Styled.Bold>Luís Felipe</Styled.Bold>
            </Styled.Description>
          </Styled.CardHeader>

          <Styled.CardBody>
            <Styled.UserName>Luís Felipe</Styled.UserName>
          </Styled.CardBody>

          <Styled.CardFooter>
            <Styled.Details>
              <Styled.Value>R$ 18,00</Styled.Value>
              <Styled.Divider />
              <Feather name="lock" color="#fff" size={14} />
              <Styled.Date>há 2 anos</Styled.Date>
            </Styled.Details>

            <Styled.Actions>
              <Styled.Option>
                <MaterialCommunityIcons
                  name="comment-outline"
                  size={14}
                  color="#fff"
                />
                <Styled.OptionLabel>
                  0
                </Styled.OptionLabel>
              </Styled.Option>

              <Styled.Option>
                <AntDesign
                  name="hearto"
                  size={14}
                  color="#fff"
                />
                <Styled.OptionLabel>
                  0
                </Styled.OptionLabel>
              </Styled.Option>
            </Styled.Actions>
          </Styled.CardFooter>
        </Styled.Card>
      </Styled.Header>
    </Styled.Container>
  );
}
