import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import messagesES from './components/i18n/messages_es';
import messagesEN from './components/i18n/messages_en';
import RobotPage from './components/RobotPage';

const messages = {
  es: messagesES,
  en: messagesEN,
};

function App() {
  const [locale, setLocale] = useState('es'); 

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <div className="App">
        <button className="btn btn-sm btn-outline-secondary m-2" onClick={() => setLocale(locale === 'es' ? 'en' : 'es')}>
          🌐 Cambiar a {locale === 'es' ? 'English' : 'Español'}
        </button>
        <RobotPage />
      </div>
    </IntlProvider>
  );
}

export default App;
