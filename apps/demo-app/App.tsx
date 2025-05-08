/**
 * Example App using Tailwind style system
 */

import React, { useState } from 'react';
import { css, html } from 'react-strict-dom';
import { Platform, Linking } from 'react-native';
import { tw } from 'react-strict-dom-tailwind';
console.log(tw, '11111')
const tws = tw;
const sty = css.create({
  bar: (val) => ({
    fontSize: val,
  }),
  w: (val) => ({
    width: val
  })
});
console.log(sty, '----')
/**
 * Example App using Tailwind style system
 * This is a rewrite of the original App.tsx, using the tw function instead of direct StyleX styles
 */
const App: React.FC = () => {
  // Use React state to manage the counter
  const [count, setCount] = useState(0);

  // Increase count when button is clicked
  const handleClick = () => {
    setCount(count + 1);
  };


  

  return (
    <html.div>
      <html.div style={tws('text-[20]')}>
        <html.p style={tws('size-[100]')}>
          overflow-x1
        </html.p>
        <html.p>
          overflow-x2
        </html.p>
      </html.div>
      <html.p>
        overflow-y
      </html.p>
      <html.p style={sty.bar(30)}>
        测试
      </html.p>
    </html.div>
  );
};

export default App;
