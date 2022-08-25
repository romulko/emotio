import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';

import { Routes } from './routes';
import { Apollo } from './services/apollo';
import { I18NProvider } from './services/i18n';

export const App = () => (
  <Apollo>
    <I18NProvider>
      <Router>
        <Routes />
      </Router>
    </I18NProvider>
  </Apollo>
);
