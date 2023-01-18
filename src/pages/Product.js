import React from 'react';
import {useParams } from 'react-router-dom';

const data = {
    item1:{
        title : "아이폰",
        price : "150만원",
        desc : "비싸고 예뻐요"
    },
    item2:{
        title : "갤럭시",
        price : "30만원",
        desc : "싸고 예뻐요"
    },
}
const Product = () => {
    //params는 객체
    //key -> 라우터 안에 있는 이름 지정된거를 함
    const {productname} = useParams(); //객체를 리턴 { productname : 'item1' }
    const product = data[productname]; 
    return (
        <div>
            <h2>제품페이지</h2>
            <p>제품페이지 입니다.</p>
            { product ? <div>
                <h3>{product.title}</h3>
                <p>{product.price}</p>
                <p>{product.desc}</p>
            </div> :
            <p>존재하지 않는 페이지 입니다.</p>
            }
            
        </div>
    );
}; 

export default Product;