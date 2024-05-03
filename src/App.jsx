import React from 'react';
import MainPage from "./pages/MainPage.jsx";
import About from "./pages/About.jsx";
import {ModalProvider} from "./pages/ModalContext.jsx";

const App = () => {
  return (
      <ModalProvider>
        <MainPage />
        <About />
      </ModalProvider>
  );
};

export default App;

// import React, { useRef } from 'react'

// const App = () => {

//     const nameRef = useRef(null)
// const usernameRef = useRef(null)
// const emailRef = useRef(null)

// const getData = (value) =>{
//     const Data = {
//         name:nameRef.current.value,
//         username:usernameRef.current.value,
//         email:emailRef.current.value
//     }
//     console.log(Data);
    
// }

//    return (
//     <div>
//       <input  placeholder='name' type='name' ref={nameRef}/>
//       <input  placeholder='username' type='username ' ref={usernameRef}/>
//       <input placeholder='email'  type='email' ref={emailRef}/>
//       <button onClick={getData}>отправить</button>
//     </div>
//   )
// }

// export default App