import React from "react";
import { MdMessage } from "react-icons/md";

import * as C from "./styles";

const Default = () => {
  return (
    <C.Container>
      <MdMessage />
      <C.Title>🚀 Chat App By: Yuri Jorge D.</C.Title>
      <C.Info>
        Envie e receba mensagens para qualquern e-mail Google sem precisar de
        cadastro.
      </C.Info>
    </C.Container>
  );
};

export default Default;
