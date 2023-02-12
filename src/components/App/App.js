import styled from 'styled-components/macro';
import GlobalStyles from './GlobalStyles';
import Header from '../Header';
import Form from '../Form';

function App() {
  return (
    <div className='App'>
      <Header />
      <Form />
      <GlobalStyles />
    </div>
  );
}

export default App;
