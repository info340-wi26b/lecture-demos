import React, { useState } from 'react';
import NavBar from './NavBar';
import { FECGames } from './FECGames.jsx';
import { CreateOrEditGame } from './CreateOrEditGame.jsx'
import { AboutPage } from './About.jsx';
import { ErrorPage } from './ErrorPage.jsx';

import FECGameList from '../data/FECGameList.json';

console.log(FECGameList)

function App() {

  const [gameArray, setGameArray] = useState(FECGameList)

  const addGame = (gameobj) => {
    const updateGameArray = [...gameArray, gameobj];
    setGameArray(updateGameArray); //update state and re-render
  }
  

  return (
    <div className='container'>
      <div className="App">
          <NavBar />
          <FECGames FECGameList={gameArray} />
          <CreateOrEditGame addNewGameCallback={addGame}/>
          <AboutPage />
          <ErrorPage />
      </div>
    </div>
  );
}

// // Added react-router and routes to the app component. Also added import statements for Routes and Route at top of file.

// import React, { useState } from 'react';
// import { Routes, Route } from 'react-router';
// import NavBar from './NavBar';
// import { FECGames } from './FECGames.jsx';
// import { CreateOrEditGame } from './CreateOrEditGame.jsx'
// import { AboutPage } from './About.jsx';
// import { ErrorPage } from './ErrorPage.jsx';

// import FECGameList from '../data/FECGameList.json';

// console.log(FECGameList)

// function App() {

//   const [gameArray, setGameArray] = useState(FECGameList)

//   const addGame = (gameobj) => {
//     const updateGameArray = [...gameArray, gameobj];
//     setGameArray(updateGameArray); //update state and re-render
//   }
  

//   return (
//     <div className='container'>
//       <div className="App">
//          <NavBar />
//         <Routes>
//           <Route index element={<FECGames FECGameList={gameArray} />} />
//           <Route path="/create" element={<CreateOrEditGame addNewGameCallback={addGame}/>} />
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="*" element={<ErrorPage />} />
//         </Routes>
//       </div>
//     </div>
//   );
// }
export default App;

