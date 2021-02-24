import React from 'react';
import { Container } from './styles';

const Profile: React.FC = () => (
  <Container>
    <img src="https://github.com/liscamarini.png" alt="Laís Camarini" />

    <div>
      <strong>Laís Camarini</strong>
      <p>
        <img src="icons/level.svg" alt="Level" />
        Level 1
      </p>
    </div>
  </Container>
);

export default Profile;