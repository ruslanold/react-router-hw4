import { Route, Switch } from 'react-router';

import './App.css';
import Header from './components/header/Header'
import Content from './components/content/Content'
import Recipe from './components/recipe/Recipe';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/recipe/:id" component={Recipe} />
        <Route path="/recipes" component={Content} />
        <Route path="/" component={Content} />
      </Switch>
      
      <Footer />
    </div>
  );
}

export default App;
