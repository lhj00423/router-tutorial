import React from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

const About = () => {
    const location = useLocation(); //location 객체
    // http://localhost:3001/about?name=green&age=30
    // {nam : "green" , age: "30"}
    const [searchParams, setSearchParams] = useSearchParams();  //배열을 리턴 get으로 접근 -> key이름입력(name)
    const name = searchParams.get('name'); //get을 통해 name값을 접근할수있음
    const age = searchParams.get('age');
    return (
        <div>
            <h2>소개페이지</h2>
            <p>소개페이지 입니다.</p>
            <p>{location.search}</p>
            <p>name값은 {name}</p>
            <p>age값은 {age}</p>
        </div>
    );
};

export default About;