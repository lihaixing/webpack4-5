import React, { useState, useEffect } from 'react';

// import banner from 'src@/banner.jpg';
// import style from 'src@/style.scss';

// 模块联邦引用 引用了webpack5目录下的a模块
import add from 'webpack5/a';
// webpack5新增资源引用方式
const banner:any = new URL('./banner.jpg',import.meta.url);

const IndexView = (props: any) => {
  const [txt, setText] = useState('你好好');

  useEffect(() => {
    setText('hello world');
    // 模块联邦调用webpack5目录下的a模块
    console.log('add===>',add(1,3));
    // 测试webpack5的变量命名变化，contenthash值是否会变, 理应不变的
    const b = 1;
    console.log(b);
  }, []);


  return (
    <div className='loading'>
      <div>{txt}</div>
      <img src={banner} alt="" />
    </div>
  );
};

export default IndexView;