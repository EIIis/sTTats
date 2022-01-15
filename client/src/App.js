import React from 'react';
import './App.css';

import Navbar from './components/Navbar';

import Homepage from './pages/Homepage';


import { css, StyleSheet } from 'aphrodite';





class App extends React.Component {
  render() {
      return (
            <main className={css(styles.container)}>
                <Navbar />

                <Homepage />

            </main>    
        );
    }
}

const styles = StyleSheet.create({
  container: {
      overflowX: 'hidden',
  },


});

export default App;
