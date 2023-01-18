import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({sitename}) => {
    const navigate = useNavigate();
    const goBack = () =>{
        //이전 페이지로 이동
        navigate(-1);
    };
    const goSubpage = () =>{
        //경로 페이지로 이동
        navigate('/subpages');
    };

    return (
        <div>
            <h1>{sitename}</h1>
            <ul>
                <li><Link to ="/">home</Link></li>
                <li><Link to ="/product/item1">아이폰</Link></li>
                <li><Link to ="/product/item2">갤럭시</Link></li>
                <li><Link to ="/about?name=green&age=0423">소개페이지</Link></li>
                <li><Link to ="/subpages">서브페이지</Link></li>
            </ul>
            <div>
                <button onClick={goBack}>뒤로가기</button>
                <button onClick={goSubpage}>서브페이지</button>
            </div>
        </div>
    );
};

export default Header;