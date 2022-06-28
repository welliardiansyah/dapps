import React from 'react';
import GlobalStyles from './globalStyles';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Footer } from './components';

// SEARCH PAGE MASTER

import Home from './components/pages/Home/Home'

// END SEARCH PAGE MASTER

function App() {
  return (
    <Router>

      <GlobalStyles />

        <Routes>
          <Route path="/" caseSensitive={false} exact element={<Home />} />
        </Routes>

        <Footer />

    </Router>
  );
}

export default App;
