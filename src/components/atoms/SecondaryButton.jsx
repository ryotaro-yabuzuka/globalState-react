import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const SecondaryButton = (props) => {
  const { children, onClick } = props;
  return <SButton onClick={onClick}>{children}</SButton>;
};

//以下のように上書きできる
const SButton = styled(BaseButton)`
  background-color: #11999e;
`;
