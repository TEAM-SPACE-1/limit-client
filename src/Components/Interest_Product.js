import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Cookies from 'js-cookie';
import axios from 'axios';
import Product from "./Product";

// 모든 찜한 상품을 서버에서 가져오는 함수
const fetchAllBookmarks = async () => {
    try {
        const token = Cookies.get("accessToken");
        const response = await axios.get('https://api.lim-it.one/api/v1/products/wishes', {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        // 서버에서 찜한 상품만 반환됨
        return response.data;
    } catch (error) {
        console.error('찜 목록을 가져오는 중 오류 발생:', error);
        return [];
    }
};

export default function Interest_Product() {
    const [bookmarkedProducts, setBookmarkedProducts] = useState([]);

    // useEffect로 컴포넌트가 마운트될 때 찜한 상품을 불러옴
    useEffect(() => {
        const loadBookmarks = async () => {
            const bookmarks = await fetchAllBookmarks();
            console.log('찜한 상품 목록:', bookmarks); // 데이터를 로그로 확인
            setBookmarkedProducts(bookmarks); // 찜한 상품 목록 설정
        };

        loadBookmarks();
    }, []);

    return (
        <Container>
            <Title>관심 상품 목록</Title>
            <ProductList>
                {bookmarkedProducts.length > 0 ? (
                    bookmarkedProducts.map(product => (
                        <Product 
                            key={product.productId}  // productId를 key로 사용
                            product={product}        // 개별 상품 데이터 전달
                        />
                    ))
                ) : (
                    <p>찜한 상품이 없습니다.</p>
                )}
            </ProductList>
        </Container>
    );
}

// 스타일링 컴포넌트
const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const Title = styled.div`
    font-size: 17.5px;
    font-weight: bold;

    @media (max-width: 800px) {
        display: none;
    }
`;

const ProductList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px; 
`;
