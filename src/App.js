// This if for importing all the elements which are needed to be displayed inside the webpage
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import About from './pages/About/About.js';
import Contact from './pages/Contact/Contact.js';
import Home from './pages/Home/Home.js';
import Services from './pages/Courses/Courses.js';
import Editor from './pages/TextEditor/TextEditor.js';
import Navbar from './Components/Navbar/Navbar.js'
import Footer from './Components/Footer/Footer'
import BottomUp from './Components/BottomUp/BottomUp'
//This is for the context api for the news to appear in the home page
import { NewsContextProvider } from './NewsContext';
//import News from './pages/News/News'

const App = () => {
  return (
//This is for Routing between each and every webpage
    <Router>
      <Navbar />
{/* This contains all the Routes to the webpages and having different content in it. */}
      <main>
        <Switch>
          <Route path="/" exact>
          
            <NewsContextProvider>
            <Home />
            {/* <News /> */}
            </NewsContextProvider>
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/services" exact>
            <Services />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
          <Route path="/Editor" exact>
            <Editor />
          </Route>
        </Switch>
        <BottomUp />
        <Footer />
    
      </main>

    </Router>
  );
}

export default App;
