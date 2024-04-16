import styled from "styled-components";
import { useState } from "react";
import MenuIcon from "../Images/menu-button.svg";
import CancelIcon from "../Images/cancel-icon.svg";

const ProductRegistrationInquiry=(props)=>{
    const [showSideBar, setShowSideBar]=useState(false);

    const handleShowSideBar=()=>{
        setShowSideBar(!showSideBar);
    }

    const [brand, setBrand]=useState("");
    const [productName, setProductName]=useState("");
    const [modelNumber, setModelNumber]=useState("");

    return(
        <ContentContainer>
            {showSideBar&&<NavigationContainer>
                <NavigationTitle>고객센터</NavigationTitle>
                <SideBarClose src={CancelIcon} onClick={handleShowSideBar}></SideBarClose>
                <CategoryContainer>
                    <NavigationElement onClick={()=>props.handleMenu(0)}>공지사항</NavigationElement>
                    <NavigationElement onClick={()=>props.handleMenu(1)}>이벤트</NavigationElement>
                    <NavigationElement onClick={()=>props.handleMenu(2)}>서비스 안내</NavigationElement>
                </CategoryContainer>
                <CategoryContainer>
                    <NavigationElement onClick={()=>props.handleMenu(3)}>상품 등록 문의</NavigationElement>
                    <NavigationElement onClick={()=>props.handleMenu(4)}>기타 문의</NavigationElement>
                </CategoryContainer>
            </NavigationContainer>}
            <MenuImg src={MenuIcon} onClick={handleShowSideBar}></MenuImg>
            <ContentTitle>상품 등록 문의</ContentTitle>
            <InquiryContainer>
                <InquiryElement>
                    <InquiryLabel htmlFor="brand">브랜드</InquiryLabel>
                    <InquiryInput
                        id="brand"
                        type="text"
                        onChange={(e)=>{setBrand(e.target.value)}}
                    ></InquiryInput>
                </InquiryElement>
                <InquiryElement>
                    <InquiryLabel htmlFor="product-name">상품명</InquiryLabel>
                    <InquiryInput
                        id="product-name"
                        type="text"
                        onChange={(e)=>{setProductName(e.target.value)}}
                    ></InquiryInput>
                </InquiryElement>
                <InquiryElement>
                    <InquiryLabel htmlFor="model-number">모델번호</InquiryLabel>
                    <InquiryInput
                        id="model-number"
                        type="text"
                        onChange={(e)=>{setModelNumber(e.target.value)}}
                    ></InquiryInput>
                </InquiryElement>
                <SubmitButton>제출</SubmitButton>
            </InquiryContainer>
        </ContentContainer>
    );
}

const ContentContainer=styled.div`
    flex: 2;
`

const NavigationContainer=styled.div`
    position: fixed;
    left: 10%;
    background-color: #f5f5f7;
    width: 125px;
    height: 500px;
`

const NavigationTitle=styled.h3`
    margin: 0px;
    margin-bottom: 20px;
    cursor: default;
    display: inline-block;
    margin-right: 15px;
`

const SideBarClose=styled.img`
    cursor: pointer;
    width: 15px;
`

const CategoryContainer=styled.div`
    margin-bottom: 15px;
`

const NavigationElement=styled.h5`
    margin: 0px;
    margin-bottom: 10px;
    font-weight: normal;
    cursor: pointer;
`

const MenuImg=styled.img`
    width: 18px;
    margin-right: 15px;
    cursor: pointer;

    @media (min-width:600px){
        display: none;
    }
`

const ContentTitle=styled.h3`
    margin: 0px;
    margin-bottom: 20px;
    cursor: default;
    display: inline-block;
`

const InquiryContainer=styled.div`
    height: 450px;
`

const InquiryElement=styled.div`
    display: flex;
    margin-bottom: 20px;
`

const InquiryLabel=styled.label`
    padding: 10px 0px;
    width: 60px;
    display: inline-block;
    font-size: 0.83em;
    font-weight: bold;
    margin-right: 15px;
`

const InquiryInput=styled.input`
    flex: 2;
    border: 1px solid #979797;
    padding: 10px 0px 10px 10px;
    border-radius: 10px;
`

const SubmitButton=styled.button`
    float: right;
    border: 0;
    background-color: #d9d9d9;
    padding: 10px 20px;
    border-radius: 15px;
`

export default ProductRegistrationInquiry;