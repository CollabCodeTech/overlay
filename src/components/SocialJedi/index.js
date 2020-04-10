import React from "react";
import { Wrapper, Content } from "./styles";

const SocialJedi = ({ content = "@MarcoBrunoDev", social = "instagram" }) => (
  <Wrapper>
    <i className={`nes-icon ${social} is-large`}></i>
    <Content>{content}</Content>
  </Wrapper>
);

export default SocialJedi;
