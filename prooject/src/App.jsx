import { BrowserRouter, Routes, Route, Outlet, Link, useLocation } from "react-router-dom";
import './index.css'
import { Icon } from '@iconify/react';
import xiaohua from './xiaohua.jpg';
import sanse from './sanse.jpg';
import niunai from './niunai.jpg';
import xiaohuang from './xiaohuang.jpg';

function Navbar(){
  const location = useLocation();
  return(
    <nav className='flex items-center w-full px-8 py-6 text-5xl'>
      <div>
        <Link to="/">
      <Icon icon="cil:cat"/>
        </Link>
      </div>
      <ul className='flex gap-12 text-base text-3xl ml-20'>
        {[
          ["/","主页"],
          ["xiaohua","小花"],
          ["sanse","三色"],
          ["niunai","牛奶"],
          ["xiaohuang","小黄"],
          ["mumao","母猫"],
          ["pingping","平平"],
          ["anan","安安"],
          ["humei","虎妹"],
        ].map(([path,label]) => (
          <li className="w-24 text-center ">
            <Link to={path} className="relative">
              {label}
              {path === location.pathname}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function 主页(){
   return(
    <div className='flex-1 flex items-center justify-center text-9xl'>      
    <h1>
     欢迎来到我的猫猫图鉴
    </h1>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4">
      <Icon icon="fluent:animal-cat-20-filled" className="w-full h-full text-black opacity-[5%] " />
    </div>
    </div>
   )
}

function Layout(){
  return<>
    <Navbar/>
    <Outlet/>
    </>
}

function 小花(){
  return(
  <div className='text-3xl flex flex-row mt-5'>      
  <img className="xiaohua" src={xiaohua}/>
  <div className="flex flex-col">  
    <h5 className="text-5xl">
    小花
  </h5>
  <h5 className="mt-3">
    出生日期：12月12日
  </h5>
  <h5>
    岁数：3岁
  </h5>
  <h5>
    体重：5kg
  </h5>
  <h5>
    性格：胆小
  </h5>
  <h5>
    状态：领养
  </h5>
    </div>
  </div>
  )
}

function 三色(){
  return(
  <div className='text-3xl flex flex-row mt-5'>      
  <img src={sanse}/>
  <div className="flex flex-col">  
    <h5 className="text-5xl">
    三色
  </h5>
  <h5 className="mt-3">
    出生日期：3月13日
  </h5>
  <h5>
    岁数：2岁
  </h5>
  <h5>
    体重：3.5kg
  </h5>
  <h5>
    性格：随和
  </h5>
  <h5>
    状态：领养
  </h5>
    </div>
  </div>
  )
}

function 牛奶(){
  return(
  <div className='text-3xl flex flex-row mt-5'> 
  <img src={niunai}/>
  <div className="flex flex-col">  
    <h5 className="text-5xl">
    牛奶
  </h5>
  <h5 className="mt-3">
    出生日期：3月13日
  </h5>
  <h5>
    体重：4.3kg
  </h5>
  <h5>
    性格：暴躁
  </h5>
  <h5>
    状态：领养
  </h5>
    </div>    
  </div>
  )
}

function 小黄(){
  return(
  <div className='text-3xl flex flex-row mt-5'>      
  <img src={xiaohuang}/>
  <div className="flex flex-col">  
    <h5 className="text-5xl">
    小黄
  </h5>
  <h5 className="mt-3">
    岁数：1岁
  </h5>
  <h5>
    体重：4.3kg
  </h5>
  <h5>
    性格：温顺
  </h5>
  <h5>
    状态：放养
  </h5>
    </div> 
  </div>
  )
}

function 母猫(){
  return(
  <div className='flex-1 flex items-center justify-center text-3xl'>      
  <h1>
   ok
  </h1>
  </div>
  )
}

function 平平(){
  return(
  <div className='flex-1 flex items-center justify-center text-3xl'>      
  <h1>
   ok
  </h1>
  </div>
  )
}

function 安安(){
  return(
  <div className='flex-1 flex items-center justify-center text-3xl'>      
  <h1>
   ok
  </h1>
  </div>
  )
}

function 虎妹(){
  return(
  <div className='flex-1 flex items-center justify-center text-3xl'>      
  <h1>
   ok
  </h1>
  </div>
  )
}

function App(){
  return (
    <div className="App w-full min-h-screen flex flex-col items-center text-3xl">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<主页/>}/>
            <Route path="xiaohua" element={<小花/>}/>
            <Route path="sanse" element={<三色/>}/>
            <Route path="niunai" element={<牛奶/>}/>
            <Route path="xiaohuang" element={<小黄/>}/>
            <Route path="mumao" element={<母猫/>}/>
            <Route path="pingping" element={<平平/>}/>
            <Route path="anan" element={<安安/>}/>
            <Route path="humei" element={<虎妹/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
  }

export default App

