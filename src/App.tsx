import React, { useState } from 'react';
import { html, css } from 'react-strict-dom';
import { Platform, Linking } from 'react-native';

/**
 * Application Style Definitions
 *
 * React Strict DOM uses css.create() to create style objects
 * On the web, these styles are compiled by StyleX into efficient CSS without requiring react-native-web
 * On native platforms, these styles are converted to React Native style objects
 * React Strict DOM handles all necessary transformations internally for both web and native platforms
 */
const styles = css.create({
  // Main container styles
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    paddingTop: 40
  },
  // Title styles
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: '#333333',
  },
  // Subtitle styles
  subtitle: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 16,
    textAlign: 'center',
    color: '#555555',
  },
  // Paragraph text styles
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 12,
    color: '#666666',
    maxWidth: 500,
    lineHeight: 1.5,
  },
  // Card container styles
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 24,
    marginTop: 24,
    marginBottom: 24,
    width: "80vw",
    maxWidth: "80vw",
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  // Button styles
  button: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
    marginTop: 24,
    minWidth: 160,
    textAlign: 'center',
    borderWidth: 0,
    cursor: 'pointer',
    // Hover state styles
    ':hover': {
      backgroundColor: '#0056b3',
    },
  },
  // Button text styles
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  // Counter text styles
  counter: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007AFF',
    marginTop: 16,
  },
  // Feature list styles
  featureList: {
    margin: 16
  },
  // Feature item styles
  featureItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  // Feature icon styles
  featureIcon: {
    marginRight: 12,
    color: '#007AFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  // Feature text styles
  featureText: {
    fontSize: 16,
    color: '#555555',
  },
  // Footer styles
  footer: {
    marginTop: 40,
    fontSize: 14,
    color: '#999999',
    textAlign: 'center',
  },
  // Link styles
  link: {
    color: '#007AFF',
    fontWeight: '500',
  },
});

/**
 * React Strict DOM Template Application
 *
 * This component demonstrates the basic usage of React Strict DOM,
 * including component structure, style definitions, and simple interactions.
 */
const App: React.FC = () => {
  // Use React state to manage the counter
  const [count, setCount] = useState(0);

  // Increment count when button is clicked
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <React.StrictMode>
      <html.div style={styles.container}>
        {/* Title section */}
        <html.h1 style={styles.title}>React Strict DOM Template</html.h1>
        <html.h2 style={styles.subtitle}>Cross-platform app development starts here</html.h2>

        {/* Introduction card */}
        <html.div style={styles.card}>
          <html.p style={styles.text}>
            This is a cross-platform application template built with React Strict DOM.
            React Strict DOM allows you to create applications that run on both web and native platforms using Web APIs.
          </html.p>

          {/* Feature list */}
          <html.div style={styles.featureList}>
            <html.div style={styles.featureItem}>
              <html.span style={styles.featureIcon}>✓</html.span>
              <html.span style={styles.featureText}>Strict HTML components with type safety</html.span>
            </html.div>
            <html.div style={styles.featureItem}>
              <html.span style={styles.featureIcon}>✓</html.span>
              <html.span style={styles.featureText}>Cross-platform styling system powered by StyleX</html.span>
            </html.div>
            <html.div style={styles.featureItem}>
              <html.span style={styles.featureIcon}>✓</html.span>
              <html.span style={styles.featureText}>Renders truly native components on native platforms</html.span>
            </html.div>
          </html.div>

          {/* Interactive button example */}
          <html.button
            style={styles.button}
            onClick={handleClick}
            aria-label="Increment counter"
          >
            <html.span style={styles.buttonText}>Click Me</html.span>
          </html.button>

          {/* Counter display */}
          <html.p style={styles.counter}>Count: {count}</html.p>
        </html.div>

        {/* Footer */}
        <html.p style={styles.footer}>
          Powered by React Strict DOM • View{' '}
          {Platform.OS === 'web' ? (
            <html.a
              href="https://facebook.github.io/react-strict-dom/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              Documentation
            </html.a>
          ) : (
            <html.span
              style={styles.link}
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
