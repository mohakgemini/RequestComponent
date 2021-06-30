import React from 'react'
import styled from 'styled-components'
import { RiErrorWarningFill, RiFilePaperLine } from 'react-icons/ri'
import { VscFilePdf } from 'react-icons/vsc'
import { HiChevronDown } from 'react-icons/hi'


export default function Card() {

    const CardContainer = styled.div`
        border-top: 1px solid #252525;
        border-bottom: 1px solid #252525;
        max-width: 900px;
        margin: auto;
    `

    const RequestTitle = styled.div`
        display:flex;
        justify-content: space-between;

    `

    const RequestHeading = styled.p`
        margin-top: 17px;
        margin-bottom: 0px;
        font-size: 22px;
        font-weight: 500;
        max-width: 500px;
        
    `

    const RequestSubHeading = styled.p`
        font-size: 15px;
        margin-bottom: 20px;
        margin-top: 11px;
        font-weight: 500;
        
    `

    const RequestDetails = styled.div`
        display: flex;
        justify-content: flex-start;
        flex-direction: row;
    ` 
    const RequestDetailsComponent = styled.div`
    
        border-left: 1px solid #767676;
        padding-left: 10px;
        padding-right: 25px;
        margin-bottom: 18px;
        max-height: 600px;
    `

    const RequestDetailsComponentHeading = styled.p`
        margin-bottom: 8px;
        margin-top: 0px;
        color: #767676;
    `
    const RequestDetailsComponentData = styled.p`
        margin-top: 0px;
        margin-bottom: 0px;
        font-weight: 500;
        padding: 0px;
        align-items: center;
    `

    const RequestControlsActions = styled.div`
        display: flex;
        flex-direction: row;
        margin-top: 15px;
        align-items: center;
    `

    const Divider = styled.p`
        margin-left:20px;
        margin-right:20px;
        margin-bottom:29px;
        font-size:25px;
    `

    const Button = styled.button`
        background: ${props => props.primary ? "#4D6474" : "white"};
        color: ${props => props.primary ? "white" : "#4D6474"};
        font-size: 15px;
        margin-right:${props => props.primary ? "0px" : "10px"};;
        margin-left:0px;
        padding: 10px 20px;
        border: 2px solid #4D6474;
    `
    const Bottom = styled.div`
        display:flex;
        justify-content: space-between;
    `
    const FullDetails = styled.p`
    font-weight:500;
    margin-top:30px
    `

        

    return (
        <CardContainer>
            <RequestTitle>
                <div>
                <RequestHeading>
                Cancel / recall payment, GBP 1,000.00
                </RequestHeading>
                <RequestSubHeading>
                1234567890123456 (GB), KUIML Business Company
                </RequestSubHeading>
                </div>
                
                <RequestControlsActions>
                <VscFilePdf size="18px" style={{marginLeft:"20px"}}/>
                <Divider> | </Divider>
                <RiFilePaperLine  size="18px" style={{marginRight:"20px"}}/>
                <Button>Reject</Button>
                <Button primary>Authorise</Button>
                </RequestControlsActions>
                
            </RequestTitle>
            <Bottom>
            <RequestDetails>
                <RequestDetailsComponent>
                    <RequestDetailsComponentHeading>Request reference</RequestDetailsComponentHeading>
                    <RequestDetailsComponentData>SET29383ABCH</RequestDetailsComponentData>
                    </RequestDetailsComponent>
                    <RequestDetailsComponent>
                    <RequestDetailsComponentHeading>Category</RequestDetailsComponentHeading>
                    <RequestDetailsComponentData>Payment</RequestDetailsComponentData>
                    </RequestDetailsComponent>
                    <RequestDetailsComponent>
                    <RequestDetailsComponentHeading>Request status</RequestDetailsComponentHeading>
                    <RequestDetailsComponentData><RiErrorWarningFill /> Pending authorisation</RequestDetailsComponentData>
                </RequestDetailsComponent>
            </RequestDetails>
            <FullDetails>Full Details -</FullDetails>

            </Bottom>
            


        </CardContainer>
    )
}
