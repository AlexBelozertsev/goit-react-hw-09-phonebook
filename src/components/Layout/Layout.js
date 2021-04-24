import React from 'react';
import AppBar from '../AppBar';
import Footer from '../Footer';
import Container from '../Container';
import './Layout.css';

const Layout = ({ children }) => (
  <>
    <div className="content">
      <AppBar />
      <Container>{children}</Container>
    </div>
    <Footer />
  </>
);

export default Layout;
