//@flow

import styled from "styled-components";
import { onlyUpdateForKeys, compose } from "recompose";

const enhance = compose(onlyUpdateForKeys(["mobileMenuIsOpen"]));

const setTransformWidth = ({
  mobileMenuIsOpen,
  mobileMenuWidth
}: {
  mobileMenuIsOpen: boolean,
  mobileMenuWidth: number
}): number => {
  console.log(mobileMenuIsOpen);
  console.log(mobileMenuWidth);
  return mobileMenuIsOpen ? mobileMenuWidth : 0;
};

export const MainWrapper = styled.div.attrs({
  style: props => ({
    transform: `translateX(${setTransformWidth(props)}px)`
  })
})`
  position: relative;
  height: 100%;
  width: 100%;
  will-change: transform;
  transition: transform 0.4s ease-in-out;
`;
