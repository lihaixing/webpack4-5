import React, { useState,useEffect } from 'react';
import banner from 'src@/banner.jpg';
import style from 'src@/style.scss';
// import printMe from './print';
const IndexView = (props:any) => {
    const [text,setText] = useState('你好');
    useEffect(()=>{
      // printMe();
        setText('hello world')
    },[]);

	return (
		<div className={style.loading}>
			<div>{text}</div>
            <img src={banner} alt=""/>
		</div>
	);
};

export default IndexView;