import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '../../globalStyles';
import { 
  InfoSec, 
  InfoRow, 
  InfoColumn, 
  TextWrapper,
  HeadingTwo,
  Heading,
  Subtitle,
  ImgWrapper,
  Img
} from './InfoSection.element';
import { FaTelegram, FaTwitter, FaDiscord, FaYoutube } from 'react-icons/fa';
import { SocialIconLink } from '../Footer/Footer.elements';

const InfoSection = ({ 
  priamry,
  lightBg, 
  imgStart,
  lightTextDesc,
  supplyTotal, 
  buttonLabel, 
  buttonLabelbuy, 
  description, 
  headline, 
  lightText,
  img,
  alt,
  start 
}) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>

              <Heading lightText={lightText}>{headline}</Heading>
                
                {/* <TopLine lightTopLine={lightTopLine}>{topline}</TopLine> */}
                <SocialIconLink href="/" target="_blank" aria-label="Telegram">
                    <FaTelegram />
                </SocialIconLink>

                <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                    <FaTwitter />
                </SocialIconLink>

                <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                    <FaDiscord />
                </SocialIconLink>

                <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                    <FaYoutube />
                </SocialIconLink> 

                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <HeadingTwo lightText={lightText}>{supplyTotal}</HeadingTwo>

                <Link to="/launch_app">
                  <Button big fontBig primary={priamry}>
                    {buttonLabel}
                  </Button>
                </Link>

              </TextWrapper>
            </InfoColumn> 

            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
            
          </InfoRow>
          
        </Container>
      </InfoSec>
    </>
  )
}

export default InfoSection;