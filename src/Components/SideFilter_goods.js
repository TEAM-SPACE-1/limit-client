import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MinusIcon from '../Images/icon-minus.svg';
import PlusIcon from '../Images/icon-plus.svg';

const SideFilterGoods = () => {
    const [isDeliverySelected, setIsDeliverySelected] = useState(false);
    const [isDirectTradeSelected, setIsDirectTradeSelected] = useState(false);
    const [isBeanieSelected, setIsBeanieSelected] = useState(false);
    const [isBuckethatSelected, setIsBuckethatSelected] = useState(false);
    const [isBallcapSelected, setIsBallcapSelected] = useState(false);
    const [isCapsSelected, setIsCapsSelected] = useState(false);
    const [isMufflerSelected, setIsMufflerSelected] = useState(false);
    const [isScarfSelected, setIsScarfSelected] = useState(false);
    const [isTieSelected, setIsTieSelected] = useState(false);
    const [isGlovesSelected, setIsGlovesSelected] = useState(false);
    const [isSocksSelected, setIsSocksSelected] = useState(false);
    const [isFashionGoodsSelected, setIsFashionGoodsSelected] = useState(false);
    const [isMaleSelected, setIsMaleSelected] = useState(false);
    const [isFemaleSelected, setIsFemaleSelected] = useState(false);
    const [showResetButton, setShowResetButton] = useState(false);
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [isGenderOpen, setIsGenderOpen] = useState(false);

    useEffect(() => {
        setShowResetButton(
            isDeliverySelected ||
            isDirectTradeSelected ||
            isBeanieSelected ||
            isBuckethatSelected ||
            isBallcapSelected ||
            isCapsSelected ||
            isMufflerSelected ||
            isScarfSelected ||
            isTieSelected ||
            isGlovesSelected ||
            isSocksSelected ||
            isFashionGoodsSelected ||
            isMaleSelected ||
            isFemaleSelected
        );
    }, [
        isDeliverySelected,
        isDirectTradeSelected,
        isBeanieSelected,
        isBuckethatSelected,
        isBallcapSelected,
        isCapsSelected,
        isMufflerSelected,
        isScarfSelected,
        isTieSelected,
        isGlovesSelected,
        isSocksSelected,
        isFashionGoodsSelected,
        isMaleSelected,
        isFemaleSelected
    ]);

    const toggleDelivery = () => {
        setIsDeliverySelected(prevState => !prevState);  
    };

    const toggleDirectTrade = () => {
        setIsDirectTradeSelected(prevState => !prevState); 
    };

    const toggleBeanie = () => {
        setIsBeanieSelected(prevState => !prevState);
    };

    const toggleBuckethat = () => {
        setIsBuckethatSelected(prevState => !prevState);
    };

    const toggleBallcap = () => {
        setIsBallcapSelected(prevState => !prevState);
    };

    const toggleCaps = () => {
        setIsCapsSelected(prevState => !prevState);
    };

    const toggleMuffler = () => {
        setIsMufflerSelected(prevState => !prevState);
    };

    const toggleScarf = () => {
        setIsScarfSelected(prevState => !prevState);
    };

    const toggleTie = () => {
        setIsTieSelected(prevState => !prevState);
    };

    const toggleGloves = () => {
        setIsGlovesSelected(prevState => !prevState);
    };

    const toggleSocks = () => {
        setIsSocksSelected(prevState => !prevState);
    };

    const toggleFashionGoods = () => {
        setIsFashionGoodsSelected(prevState => !prevState);
    };

    const toggleMale = () => {
        setIsMaleSelected(prevState => !prevState);
    };

    const toggleFemale = () => {
        setIsFemaleSelected(prevState => !prevState);
    };

    const resetFilters = () => {
        setIsDeliverySelected(false);
        setIsDirectTradeSelected(false);
        setIsBeanieSelected(false);
        setIsBuckethatSelected(false);
        setIsBallcapSelected(false);
        setIsCapsSelected(false);
        setIsMufflerSelected(false);
        setIsScarfSelected(false);
        setIsTieSelected(false);
        setIsGlovesSelected(false);
        setIsSocksSelected(false);
        setIsFashionGoodsSelected(false);
        setIsMaleSelected(false);
        setIsFemaleSelected(false);
    };

    const toggleCategory = () => {
        setIsCategoryOpen(prevState => !prevState);
    };

    const toggleGender = () => {
        setIsGenderOpen(prevState => !prevState);
    };

    return (
        <GoodsContainer>
            <Container>
                <div className='filter_container'>
                    <TopFilterArray>
                        <select name='array_type' id='aType'>
                            <option value="popular">인기순</option>
                            <option value="lately">최신순</option>
                        
                        </select>
                    </TopFilterArray>
                    <StatusFilter>
                        <FiltersContainer>
                            <StatusFilterBox>
                                <div className='status_filter_text'>
                                    <h1>필터</h1>
                                </div>
                                <div className='status_filter_btn'>
                                    <button className={`status_filter_btn_opt1 ${isDeliverySelected ? 'selected' : ''}`} onClick={toggleDelivery}>택배</button>
                                    <button className={`status_filter_btn_opt2 ${isDirectTradeSelected ? 'selected' : ''}`} onClick={toggleDirectTrade}>직거래</button>
                                </div>
                            </StatusFilterBox>
                            <CateFilterBox>
                                <div className='cate_filter_text'>
                                    <h1>카테고리</h1>
                                    <ToggleIcon onClick={toggleCategory} src={isCategoryOpen ? MinusIcon : PlusIcon} alt="카테고리 펼치기/접기 아이콘" />
                                </div>
                                {isCategoryOpen && (
                                    <div className='cate_filter_checkbox'>
                                        <label><input type='checkbox' name='checkbox_beanie' checked={isBeanieSelected} onChange={toggleBeanie}></input>비니</label>
                                        <label><input type='checkbox' name='checkbox_buckethat' checked={isBuckethatSelected} onChange={toggleBuckethat}></input>버킷햇</label>
                                        <label><input type='checkbox' name='checkbox_ballcap' checked={isBallcapSelected} onChange={toggleBallcap}></input>볼캡</label>
                                        <label><input type='checkbox' name='checkbox_caps' checked={isCapsSelected} onChange={toggleCaps}></input>기타 모자</label>
                                        <label><input type='checkbox' name='checkbox_muffler' checked={isMufflerSelected} onChange={toggleMuffler}></input>머플러</label>
                                        <label><input type='checkbox' name='checkbox_scarf' checked={isScarfSelected} onChange={toggleScarf}></input>스카프</label>
                                        <label><input type='checkbox' name='checkbox_tie' checked={isTieSelected} onChange={toggleTie}></input>넥타이</label>
                                        <label><input type='checkbox' name='checkbox_gloves' checked={isGlovesSelected} onChange={toggleGloves}></input>장갑</label>
                                        <label><input type='checkbox' name='checkbox_socks' checked={isSocksSelected} onChange={toggleSocks}></input>양말</label>
                                        <label><input type='checkbox' name='checkbox_fashion_goods' checked={isFashionGoodsSelected} onChange={toggleFashionGoods}></input>기타 패션잡화</label>
                                    </div>
                                )}
                            </CateFilterBox>
                            <GenderFilterBox>
                                <div className='gender_filter_text'>
                                    <h1>성별</h1>
                                    <ToggleIcon onClick={toggleGender} src={isGenderOpen ? MinusIcon : PlusIcon} alt="성별 펼치기/접기 아이콘" />
                                </div>
                                {isGenderOpen && (
                                    <div className='gender_filter_checkbox'>
                                        <label><input type='checkbox' name='checkbox_male' checked={isMaleSelected} onChange={toggleMale}></input>남성</label>
                                        <label><input type='checkbox' name='checkbox_female' checked={isFemaleSelected} onChange={toggleFemale}></input>여성</label>
                                    </div>
                                )}
                            </GenderFilterBox>
                        </FiltersContainer>
                    </StatusFilter>
                    {showResetButton && <ResetButton onClick={resetFilters}>초기화</ResetButton>}
                </div>
            </Container>
        </GoodsContainer>
    );
}

const GoodsContainer = styled.div`

    @media (max-width: 600px) {
        background-color: white;  
        width: 100%;
        margin-top: -55px; 
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    transition: width 0.3s ease-in-out;
    
    @media (max-width: 600px) {
        width: 90%; 
        margin: 0 auto;  
        align-items: center;  
    }
`;

const TopFilterArray = styled.div` /* 인기순, 최신순 */
    display: flex;
    width: 100%;  
    order: 2;  
    justify-content: flex-start;

    @media (max-width: 600px) {
        display: none;
    }

    select {
        width: auto; 
        height: 30px;
        border: none;
        background-color: transparent;
        font-size: 14px;
        font-weight: bold;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        padding-right: 30px;
        background-repeat: no-repeat;
        background-position: right 10px center; 
        background-size: 17px; 
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-arrows-sort' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M3 9l4-4l4 4m-4 -4v14' /%3E%3Cpath d='M21 15l-4 4l-4-4m4 4v-14' /%3E%3C/svg%3E");
        outline: none;
    }
`;

const StatusFilter = styled.div` /* 택배, 직거래, 카테고리, 성별 */
    margin-bottom: 20px;

    @media (max-width: 600px) {
        flex: 1;
    }
`;

const StatusFilterBox = styled.div` /* 택배, 직거래 버튼 */
    margin-top: 5px;

    .status_filter_text h1 {
        font-size: 14px;
        flex: 1;

        @media (max-width: 600px) {
            display: none;
        }
    }

    .status_filter_btn img {
        display: none;

        @media (max-width: 600px){
            display: block;
        }
    }

    .status_filter_btn {
        display: flex;

        @media (max-width: 600px) {
            width: 135px; 
        }

        .status_filter_btn_opt1 {
            font-size: 12px;
            background-color: transparent;
            width: 70px;
            padding: 5px;
            border-radius: 20px;
            border: 1px solid #d9d9d9;
            transition: background-color 0.3s;
        }

        .status_filter_btn_opt2 {
            font-size: 12px;
            background-color: transparent;
            width: 70px;
            padding: 5px;
            border-radius: 20px;
            border: 1px solid #d9d9d9;
            margin-left: 5px;
            margin-right: 10px;
            transition: background-color 0.3s;
        }

        .status_filter_btn_opt1:active,
        .status_filter_btn_opt1.selected,
        .status_filter_btn_opt2:active,
        .status_filter_btn_opt2.selected {
            background-color: #d9d9d9;
            font-weight: bold;
        }
    }
`;

const CateFilterBox = styled.div` /* 카테고리 체크박스 */
    margin-top: 1px;
    width: 180px;

    @media (max-width: 600px) {
        flex: 1;
        width: 140px;
        margin-left: 10px;
    }

    .cate_filter_text {
        display: flex;
        justify-content: space-between;
        align-items: center;

        h1 {
            font-size: 14px;
            font-weight: bold;
        }
    }

    .cate_filter_checkbox label {
        display: inline-block;
        width: 100%;
        margin-top: 5px;
        font-size: 13px; 
    }

    .cate_filter_checkbox input {
        margin-right: 5px;
    }

    .cate_filter_checkbox input[type="checkbox"] {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        width: 13px; 
        height: 13px;
        margin-right: 10px;
        position: relative;
        top: 1.5px;
    }

    .cate_filter_checkbox input[type="checkbox"]::before {
        content: "";
        display: inline-block;
        width: 13px; 
        height: 13px;
        background-color: transparent; 
        border: 1px solid #d9d9d9; 
    }

    .cate_filter_checkbox input[type="checkbox"]:checked::before {
        background-color: #d9d9d9; 
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='6' viewBox='0 0 8 6'%3E%3Cline x1='0.353553' y1='2.64645' x2='3.35355' y2='5.64645' stroke='black'/%3E%3Cline x1='2.64645' y1='5.64645' x2='7.64645' y2='0.646447' stroke='black'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: 50%;
    }
`;

const FiltersContainer = styled.div`
    display: flex;
    flex-direction: row;  
    justify-content: space-between; 
    flex-wrap: wrap;  
    width: 100%; 
    margin-bottom: -15px;  
`;

const GenderFilterBox = styled.div` /* 성별 체크박스 css */
    margin-top: 1px;
    width: 180px;

    @media (max-width: 600px) {
        flex: 1;
        width: 140px;
        margin-left: 10px;
    }

    .gender_filter_text {
        display: flex;
        justify-content: space-between;
        align-items: center;

        h1 {
            font-size: 14px;
            font-weight: bold;
        }
    }

    .gender_filter_checkbox label {
        display: inline-block;
        width: 100%;
        margin-top: 5px;
        font-size: 13px;
    }

    .gender_filter_checkbox input {
        margin-right: 5px;
    }

    .gender_filter_checkbox input[type="checkbox"] {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        width: 13px; 
        height: 13px;
        margin-right: 10px;
        position: relative;
        top: 1.5px;
    }

    .gender_filter_checkbox input[type="checkbox"]::before {
        content: "";
        display: inline-block;
        width: 13px; 
        height: 13px;
        background-color: transparent; 
        border: 1px solid #d9d9d9; 
    }

    .gender_filter_checkbox input[type="checkbox"]:checked::before {
        background-color: #d9d9d9; 
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='6' viewBox='0 0 8 6'%3E%3Cline x1='0.353553' y1='2.64645' x2='3.35355' y2='5.64645' stroke='black'/%3E%3Cline x1='2.64645' y1='5.64645' x2='7.64645' y2='0.646447' stroke='black'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: 50%;
    }
`;

const ResetButton = styled.button` /* 초기화 버튼 */
    display: flex;
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 12px;
    margin-top: 10px;
    text-decoration: underline;
    line-height: 1.5;
    color: #979797;
    font-weight: bold;
    margin-left: auto;
`;

const ToggleIcon = styled.img` /* +,- 아이콘 */
    width: 10px;
    height: 10px;
    cursor: pointer;
`;

export default SideFilterGoods;