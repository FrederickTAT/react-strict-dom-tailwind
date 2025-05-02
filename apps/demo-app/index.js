// Required for CSS to work on Expo Web.
import './stylex.css';
// Required for Fast Refresh to work on Expo Web
import '@expo/metro-runtime';

import { registerRootComponent } from 'expo';
import App from './App'; // Original App

// Register root component
registerRootComponent(App);
