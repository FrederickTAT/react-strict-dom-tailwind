/**
 * Example App using Tailwind style system
 */

import React, { useState } from 'react';
import { html } from 'react-strict-dom';
import { Platform, Linking } from 'react-native';
import { tw } from 'react-strict-dom-tailwind';

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
    <React.StrictMode>
      <html.div style={tw('w-full flex flex-col items-center justify-center p-5 pt-10 bg-gray-100 min-h-screen')}>
        {/* Title section */}
        <html.h1 style={tw('text-3xl font-bold mb-6 text-center text-gray-800')}>
          React Strict DOM Tailwind
        </html.h1>
        <html.h2 style={tw('text-xl font-medium mb-4 text-center text-gray-600')}>
          Cross-platform app development starts here
        </html.h2>

        {/* Introduction card */}
        <html.div style={tw('bg-white rounded-lg shadow-md p-6 mb-6 w-4/5 max-w-4xl')}>
          <html.p style={tw('text-base text-center text-gray-600 mb-3')}>
            This is a cross-platform application template built with React Strict DOM and Tailwind style system.
            React Strict DOM allows you to create applications that run on both Web and native platforms using Web API.
          </html.p>

          {/* Features list */}
          <html.div style={tw('my-4')}>
            <html.div style={tw('flex items-center mb-3')}>
              <html.span style={tw('text-green-500 mr-3')}>✓</html.span>
              <html.span style={tw('text-gray-600')}>Type-safe strict HTML components</html.span>
            </html.div>
            <html.div style={tw('flex items-center mb-3')}>
              <html.span style={tw('text-green-500 mr-3')}>✓</html.span>
              <html.span style={tw('text-gray-600')}>Cross-platform styling system powered by StyleX</html.span>
            </html.div>
            <html.div style={tw('flex items-center mb-3')}>
              <html.span style={tw('text-green-500 mr-3')}>✓</html.span>
              <html.span style={tw('text-gray-600')}>Renders true native components on native platforms</html.span>
            </html.div>
            <html.div style={tw('flex items-center mb-3')}>
              <html.span style={tw('text-green-500 mr-3')}>✓</html.span>
              <html.span style={tw('text-gray-600')}>Style using familiar Tailwind class names</html.span>
            </html.div>
          </html.div>

          {/* Interactive button example */}
          <html.button
            style={tw('bg-blue-500 hover:bg-blue-600 text-white font-medium py-4 px-6 rounded mx-auto block mt-6 border-none shadow-md')}
            onClick={handleClick}
            aria-label="Increase counter"
          >
            <html.span style={tw('text-white font-bold')}>Click me</html.span>
          </html.button>

          {/* Counter display */}
          <html.p style={tw('text-xl font-bold text-blue-500 mt-4 text-center')}>
            Count: {count}
          </html.p>
        </html.div>

        {/* Footer */}
        <html.p style={tw('text-sm text-gray-500 text-center mt-10')}>
          Powered by React Strict DOM and Tailwind style system • View{' '}
          {Platform.OS === 'web' ? (
            <html.a
              href="https://facebook.github.io/react-strict-dom/"
              target="_blank"
              rel="noopener noreferrer"
              style={tw('text-blue-500 font-medium')}
            >
              Documentation
            </html.a>
          ) : (
            <html.span
              style={tw('text-blue-500 font-medium')}
              onClick={() => Linking.openURL('https://facebook.github.io/react-strict-dom/')}
            >
              Documentation
            </html.span>
          )}
        </html.p>
      </html.div>
    </React.StrictMode>
  );
};

export default App;
