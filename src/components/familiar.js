import React, { useRef, useEffect } from 'react';
import './familiar.css';
import boxes from './Boxes.json';
import Box from './Box';
import { motion, useInView, useAnimation } from 'framer-motion';

function Familiar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView.inView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  return (
    <div className="Familiar">
      <motion.div
        ref={ref}
        className="heading"
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 0.5,
        }}
      >
        <h1>Does this sound Familiar...</h1>
      </motion.div>
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
              rotate={e.rotate} 
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
