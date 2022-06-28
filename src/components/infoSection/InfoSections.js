import React, {useEffect, useState} from 'react';
import {IconContext} from 'react-icons/lib';
import { FaBars, FaTimes, FaWallet} from 'react-icons/fa';
import { AiOutlineDollar } from 'react-icons/ai';
import { GiPoolTriangle } from 'react-icons/gi';
import { Container, Button } from '../../globalStyles';
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon,
    NavMenu,
    NavItemBtn,
    NavBtnLink
} from '../Navbar/Navbar.element';
import Logo from '../images/logo.png';
import { MainCenter, MainTextHeader  } from './InfoSections.elements';
import { 
  InfoSec, 
  InfoRow, 
  InfoColumn, 
} from './InfoSection.element';

import { providers, ethers } from 'ethers';
import detectEthereumProvider from '@metamask/detect-provider';
import { darkTheme, lightTheme, SwapWidget } from '@uniswap/widgets'

let darkMode = true

const infuraId = process.env.REACT_APP_INFURA_ID;
const JsonRpcEndpoint = `https://mainnet.infura.io/v3/${infuraId}`;
const JsonRpcProvider = new providers.JsonRpcProvider(JsonRpcEndpoint);
const provider = new ethers.providers.Web3Provider(JsonRpcProvider);

const InfoSections = ({
  lightBg, 
  imgStart
  
}) => {

  const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    // BUTTON
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton);

    const [account, setAccount] = useState({
        address: '',
        provider: provider
      })
    
      async function connectWallet() {
        const ethereumProvider = await detectEthereumProvider();
    
        if (ethereumProvider) {
          const address = await window.ethereum.request({
            method: 'eth_requestAccounts'
          })
          setAccount({
            address: address[0],
            provider: ethereumProvider
          })
        }
      }

  return (
    <>
    <IconContext.Provider value={{ color: '#fff'}} >
      <Nav>
        <NavbarContainer>

            <NavLogo to="/">
                <img src={Logo} alt="NeoBit" style={{width: "70px"}}/>  
            </NavLogo>

            <MobileIcon onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>

            <NavMenu onClick={handleClick} click={click}>

                <NavItemBtn>
                  <NavBtnLink to='/'>
                    <Button primary ><GiPoolTriangle /> Pool</Button>
                  </NavBtnLink>
                </NavItemBtn>

                <NavItemBtn>
                  <NavBtnLink to='/'>
                    <Button primary ><AiOutlineDollar /> Liquidity</Button>
                  </NavBtnLink>
                </NavItemBtn>

                <NavItemBtn>
                    {button ? (
                        <NavBtnLink to='/'>
                            <Button primary onClick={connectWallet}><FaWallet /> Connect Wallet</Button>
                        </NavBtnLink>
                    ) : (
                        <NavBtnLink to='/'>
                            <Button fontBig primary onClick={connectWallet}>Connect</Button>
                        </NavBtnLink>
                    )}
                </NavItemBtn>
            
            </NavMenu>

        </NavbarContainer>
      </Nav>
      </IconContext.Provider>

    <InfoSec lightBg={lightBg}>
      <Container>
        <InfoRow imgStart={imgStart}>
          <InfoColumn>
            
            <MainCenter>
              <MainTextHeader>
                Make a Swap at No Cost
              </MainTextHeader>
              
              <SwapWidget 
                provider={account.provider}
                JsonRpcEndpoint={JsonRpcEndpoint} 
                theme={darkMode ? darkTheme : lightTheme}
                width={550}
              />
              
            </MainCenter>

          </InfoColumn>
        </InfoRow>
        
      </Container>
    </InfoSec>
    </>
  )
}

export default InfoSections
