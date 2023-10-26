import React, { useRef, useEffect } from 'react';
import './familiar.css';
import boxes from './Boxes.json';
import Box from './Box';
import {  useInView, useAnimation } from 'framer-motion';
// import { bounce } from 'react-animations';
// import Radium, {StyleRoot} from 'radium';
import ghost from './assets/ghosts/ghost.mp4';

function Familiar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView.inView) {
      console.log("true")
      mainControls.start('visible');
    }
  }, [isInView]);

  return (
    <div className="Familiar">

      <div className='combine'>

      <h1 className='heading'>Does this sound Familiar...</h1>
      {/* <div className='ghost'>
        <img src={ghost} height={170} className='ghost-image' />
      </div> */}
      </div>
      <div className="boxHandle">
        <div className="boxContainer">

          {boxes.map((e, index) => (
            <Box
              key={index}
              text={e.text}
              color={e.color}
              head={e.head}
              desc={e.desc}
              emoji={e.emoji}
              rotate={e.rotate} // Disable rotation by default
            />
          ))}
          {boxes.map((e, index) => (
            <Box
              key={index + boxes.length}
              text={e.text}
              color={e.color}
              head={e.head}
              desc={e.desc}
              emoji={e.emoji}
              rotate={e.rotate}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Familiar;
