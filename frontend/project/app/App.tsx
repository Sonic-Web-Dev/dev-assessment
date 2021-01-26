import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header, Footer } from '@/components';
import { HomePage, RocketPage } from '@/areas';

const App: React.FunctionComponent = () => (
  <>
    <Header />
    <div className="sonic-container bg-black-500 text-white h-full overflow-y-scroll">
      <div className="h-full flex flex-col">
        <Switch>
          <Route component={HomePage} exact path="/" />
          <Route component={RocketPage} exact path="/rockets/:rocket_id" />
        </Switch>
      </div>
    </div>
    <Footer />
  </>
);

export default App;
