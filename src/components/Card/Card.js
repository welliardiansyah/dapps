import {
  CardWrapper,
  CardTextWrapper,
  CardTextDate,
  CardTextTitle,
  CardTextBody
} from "./Card.elements";

export const Card = ({ title }) => {
  return (
      <CardWrapper>
        <CardTextWrapper>
          <CardTextDate>Launch App Information</CardTextDate>
          <CardTextTitle>{title}</CardTextTitle>
          <CardTextBody>
          $NeoBit is the native token for Staking incentives. Tax distribution benefits every token holder in NeoBit. merely for holding $NeoBit tokens.
          </CardTextBody>
        </CardTextWrapper>
        {/* <CardStatWrapper>
          <CardStats>
            <LinkText href="#">website</LinkText>
          </CardStats>
          <CardStats>
            <LinkText href="#">github</LinkText>
          </CardStats>
        </CardStatWrapper> */}
      </CardWrapper>
      
  );
};
