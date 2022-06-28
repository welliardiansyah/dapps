import React from 'react';
import { CardSingle } from '../Card/CardSingle';
import { MainCenter, MainTextHeaderSmall, MainSubTextSmall  } from './InfoSections.elements';
import { Container } from '../../globalStyles';
import { CardContainerLarge } from './InfoSections.elements';
import { 
  InfoSecs, 
  InfoRow, 
  InfoColumn, 
} from './InfoSection.element';

const WhitepaperSection = ({
    lightBg, 
    imgStart
  }) => {
  return (
    <>
    <InfoSecs lightBg={lightBg}>
        <Container>
            <InfoRow imgStart={imgStart}>
                <InfoColumn>
                    
                    <MainCenter>
                        <MainTextHeaderSmall>
                            Make a Swap at No Cost
                        </MainTextHeaderSmall>
                        
                    <MainSubTextSmall>
                        Fee reimbursement of up to 70% in BSW tokens, 10% is credited to your Robi Boost & Squid Energy. You can change the percentage.
                    </MainSubTextSmall>
                    
                        <CardContainerLarge>
                            <CardSingle />
                        </CardContainerLarge>
                    </MainCenter>
                </InfoColumn>
            </InfoRow>   
        </Container>
    </InfoSecs>
    </>
  )
}

export default WhitepaperSection
