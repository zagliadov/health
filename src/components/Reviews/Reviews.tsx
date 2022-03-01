import { FC } from "react";
import styled from "styled-components";
import { Carousel, Typography } from "antd";
import firstRev from "../../img/reviews/firstRev.png";
import secondRev from "../../img/reviews/secondRev.png";

const { Title, Text } = Typography;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    align-items: center;
  }
`;

const ReviewsTitle = styled(Title)`
  padding-left: 20px;
  padding-top: 20px;
`;

const CarouselWrapper = styled(Carousel)`
  position: relative;
  z-index: 1;
  padding: 20px;
  @media (min-width: 768px) {
    width: 450px;
  }
  @media (min-width: 992px) {
    width: 650px;
  }
`;

const CarouselItem = styled.div`
  box-shadow: 4px 8px 24px rgba(11, 16, 65, 0.04);
  border-radius: 24px;
  padding-top: 30px;
  height: 230px;
  background: #ffffff;
`;

const CarouselItemHeader = styled.div`
  display: flex;
  height: 50%;
`;

const CarouselItemBody = styled.div`
  height: 50%;
`;

interface IImage {
  img: string;
}
const Avatar = styled.div<IImage>`
  position: relative;
  top: -20px;
  left: 15px;
  z-index: 2;
  width: 87px;
  height: 87px;
  background: url(${({ img }) => img && img});
  background-position: center center;
  background-size: contain;
  border-radius: 16px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 40px;
`;

export const Reviews: FC = () => {
  return (
    <Wrapper>
      <ReviewsTitle>Reviews</ReviewsTitle>
      <CarouselWrapper autoplay>
        <CarouselItem>
          <CarouselItemHeader>
            <Avatar img={firstRev} />
            <InfoWrapper>
              <Title>Klarck Beitern</Title>
              <Text>USA, New York</Text>
            </InfoWrapper>
          </CarouselItemHeader>
          <CarouselItemBody>
            <Text>
              This system gives me reassurance to know that if I have a fall I
              am being monitored daily. It allows me to stay in my own home for
              longer, which helps me to stay independent.
            </Text>
          </CarouselItemBody>
        </CarouselItem>

        <CarouselItem>
          <CarouselItemHeader>
            <Avatar img={secondRev} />
            <InfoWrapper>
              <Title>Maurisa Gui</Title>
              <Text>USA, New York</Text>
            </InfoWrapper>
          </CarouselItemHeader>
          <CarouselItemBody>
            <Text>
              This system gives me reassurance to know that if I have a fall I
              am being monitored daily. It allows me to stay in my own home for
              longer, which helps me to stay independent.
            </Text>
          </CarouselItemBody>
        </CarouselItem>

        <CarouselItem>
          <CarouselItemHeader>
            <Avatar img={secondRev} />
            <InfoWrapper>
              <Title>Maur Gu</Title>
              <Text>USA, New York</Text>
            </InfoWrapper>
          </CarouselItemHeader>
          <CarouselItemBody>
            <Text>
              This system gives me reassurance to know that if I have a fall I
              am being monitored daily. It allows me to stay in my own home for
              longer, which helps me to stay independent.
            </Text>
          </CarouselItemBody>
        </CarouselItem>
      </CarouselWrapper>
    </Wrapper>
  );
};
