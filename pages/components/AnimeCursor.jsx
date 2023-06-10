import React from "react";
import dynamic from 'next/dynamic'

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});


export default function AnimeCur(props) {
  return (
    <div className="App">
    <AnimatedCursor
      innerSize={20}
      outerSize={10}
      color={props.mouseC}
      outerAlpha={0.4}
      innerScale={1}
      outerScale={6}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
    </div>
  );
}