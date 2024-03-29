import styled from 'styled-components';
import { useState } from 'react';

const DoBid=({type})=>{
    const [bidPrice, setBidPrice]=useState("");
    
    return(
        <div>
            <BidPriceContainer>
                <PurchaseSaleTitle>{type==="purchase"?"구매":"판매"} 희망가</PurchaseSaleTitle>
                <BidPriceInputContainer>
                    <BidPriceInput type='number' onChange={(e)=>{setBidPrice(Number(e.target.value))}}></BidPriceInput>
                    <BidPriceWon>원</BidPriceWon>
                </BidPriceInputContainer>
            </BidPriceContainer>
            <BidPeriodContainer>
                <PurchaseSaleTitle>입찰 마감기한</PurchaseSaleTitle>
                <BidPeriodDetail>입찰 마감기한은 30일입니다.</BidPeriodDetail>
                <BidPeriodDetail>30일이 지날 경우에는 입찰이 종료되며 그 이후에도 입찰을 원하신다면 다시 입찰을 등록하셔야 합니다.</BidPeriodDetail>
                <BidPeriodDetail>종료된 입찰은 마이페이지에서 삭제 가능합니다.</BidPeriodDetail>
            </BidPeriodContainer>
            <BidSumbit type={type}>{type==="purchase"?"구매":"판매"} 입찰하기</BidSumbit>
        </div>
        
    );
}

const PurchaseSaleTitle=styled.h5`
    margin: 0px;
    margin-bottom: 5px;
`

const BidPriceContainer=styled.div`
    height: 45px;
    padding-bottom: 5px;
    border-bottom: 1px solid #979797;
    margin-bottom: 30px;
`

const BidPriceInputContainer=styled.div`
    float: right;
`

const BidPriceInput=styled.input`
    border: 0;
    outline: none;
    font-size: 1.17em;
    text-align: right;
    font-weight: bold;
    background-color: transparent;
`

const BidPriceWon=styled.h3`
    margin: 0px;
    display: inline-block;
`

const BidPeriodContainer=styled.div`
    margin-bottom: 30px
`

const BidPeriodDetail=styled.p`
    margin: 0px;
    font-size: 0.83em;
    color: #979797;
`

const BidSumbit=styled.button`
    width: 100%;
    border: none;
    background-color: ${props => props.type === "purchase" ? "#ffc9394c" : "#72b8df4c"};
    padding: 10px;
    font-weight: bold;
    border-radius: 10px;
`

export default DoBid;