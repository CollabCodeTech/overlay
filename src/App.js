import React from 'react';
import { MainJedi } from './components/MainJedi';
import { BarJedi } from './components/BarJedi';
import GueioVoante from './components/GueioVoante';
import SocialJedi from './components/SocialJedi';
import { WrapperSocial } from './components/WrapperSocial';

const App = () => (
  <MainJedi>
    <BarJedi className="nes-container is-rounded is-dark">
      <GueioVoante />

      <WrapperSocial>
        <SocialJedi social="github" />
        <SocialJedi social="instagram" />
        <SocialJedi social="twitter" />
      </WrapperSocial>
    </BarJedi>
  </MainJedi>
);

export default App;
