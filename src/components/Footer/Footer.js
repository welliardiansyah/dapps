import React from 'react';
import Logo from '../images/logo.png';
import { FaDiscord, FaTelegram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { 
    FooterContainer,
    SocialIcons,
    SocialMedia,
    SocialMediaWrapper,
    SocialMediaLogo,
    WebsiteRights,
    SocialIconLink
 } from './Footer.elements';

const Footer = () => {
  return (
    <FooterContainer>
        <SocialMedia>
            <SocialMediaWrapper>
                <SocialMediaLogo to="/">
                    <img src={Logo} alt="NeoBit" style={{width: "50px"}}/>
                </SocialMediaLogo>

                <WebsiteRights>© 2022 NeoBit. All rights Reserved.</WebsiteRights>

                <SocialIcons>
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
                </SocialIcons>

            </SocialMediaWrapper>
        </SocialMedia>
        
    </FooterContainer>
    
  )
}

export default Footer
