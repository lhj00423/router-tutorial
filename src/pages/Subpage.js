import React from 'react';
import { useParams } from 'react-router-dom';

const Subpage = () => {
    const { id } = useParams();
    return (
        <div>
            <h2>서브페이지{id}</h2>
        </div>
    );
};



export default Subpage; 