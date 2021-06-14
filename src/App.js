import React from 'react';
// import ReactDOM from 'react-dom';
// import logo from './logo.svg';

import Card from './card';
import './index.css';
import Sdata from './Sdata';

// function ncard(val){
//   return(
//     <Card 
//       imgsrc={val.imgsrc} 
//        tittle={val.tittle} 
//        sname={val.sname}
//        link={val.link}
// />
//   );
// }

const App=()=>(
<>
<h1 className='heading_style'>This is my top 5 list to netflix series</h1>

  {Sdata.map(function ncard(val){
  return(
    <Card 
      imgsrc={val.imgsrc} 
       tittle={val.tittle} 
       sname={val.sname}
       link={val.link}
/>
  );
})}

</>
)


export default App;