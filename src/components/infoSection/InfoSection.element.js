import styled from "styled-components";

export const InfoSec = styled.div`
    color: #fff;
    padding: 100px 0;
    background: ${({ lightBg}) => (lightBg ? '#fff' : '#101522')};
`;

export const InfoSecs = styled.div`
    color: #fff;
    padding: 60px 0;
    background: ${({ lightBg}) => (lightBg ? '#fff' : '#101522')};
`;

export const InfoRow = styled.div`
    display: flex;
    margin: 0 -10px -10px -10px;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
`;

export const InfoColumn = styled.div`
    margin-bottom: 5px;
    margin-left: 5px;
    padding-right: 5px;
    padding-left: 5px;
    flex: 1;
    max-width: 100%;

    @media screen and (max-width: 768px) {
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;

    @media scree and (max-width: 768px) {
        padding-bottom: 65px;
    }
`;

export const TopLine = styled.div`
    color: ${({ligthTopLine}) => (ligthTopLine ? '#a9b3c1' : '#4b59f7')};
    font-size: 18px;
    line-height: 16px;
    letter-spacing: 1.4px;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    background: linear-gradient(
        110.78deg,
        rgb(118, 230, 80) -1.13%,
        rgb(249, 214, 73) 15.22%,
        rgb(240, 142, 53) 32.09%,
        rgb(236, 81, 87) 48.96%,
        rgb(255, 24, 189) 67.94%,
        rgb(26, 75, 255) 85.34%,
        rgb(98, 216, 249) 99.57%
    );
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
`;

export const HeadingTwo = styled.h1`
    margin-top: 15px;
    margin-bottom: 15px;
    font-size: 18px;
    line-height: 1.1;
    background: linear-gradient(
        110.78deg,
        rgb(118, 230, 80) -1.13%,
        rgb(249, 214, 73) 15.22%,
        rgb(240, 142, 53) 32.09%,
        rgb(236, 81, 87) 48.96%,
        rgb(255, 24, 189) 67.94%,
        rgb(26, 75, 255) 85.34%,
        rgb(98, 216, 249) 99.57%
    );
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({lightTextDesc}) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
`;

export const ImgWrapper = styled.div`
    max-width: 555px;
    display: flex;
    justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;

export const Img = styled.img`
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    max-height: 500px;
`;