import React from 'react';
import Footer from './Footer';
import Nav from './Nav';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
<<<<<<< HEAD
import Typography from '../styles/Typography';
=======
>>>>>>> 95d43f6bbbbdef2841282938eb6b9669596b17c3

export default function Layout({ children }) {
  return (
    <div>
      <GlobalStyles />
<<<<<<< HEAD
      <Typography />
=======
      {/* <Typography /> */}
>>>>>>> 95d43f6bbbbdef2841282938eb6b9669596b17c3
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
