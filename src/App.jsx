import { Suspense, useState } from 'react'
import { FaTools} from 'react-icons/fa'

import './App.css'
import { Canvas } from '@react-three/fiber'
import Three from './components/Three';
import { Physics } from '@react-three/cannon/dist';

function App() {
  const [showPanel, setShowPanel] = useState(false);

  return (
    <div className='w-full h-screen relative'>
      {!showPanel&&<button
        className='hover:bg-black w-16 h-16 m-3 absolute shadow-black shadow-md rounded-full flex justify-center items-center z-30'
        onClick={() => setShowPanel(true)}
      >
        <FaTools size={35} color='#3cb043' className='text-white' />
      </button>}
      {showPanel && (
        <div className='absolute w-80 h-screen bg-gray-200'>
          <button
            className='w-8 h-8 text-white m-3 absolute shadow-black shadow-md rounded-full flex justify-center items-center bg-red-600 right-0 z-30'
            onClick={() => setShowPanel(false)}
          >
            X
          </button>
          
          <h1 className='font-semibold text-lg h-8 m-3 flex justify-center items-center'>ToolBox</h1>
        </div>
      )}
      <Canvas className='h-full w-full'>
        <Suspense fallback={null}>
          <Physics>
          {/* in suspense you can pass a items you need to show before load inner elements*/}
          {/* */}
          <Three/>
          </Physics>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App
