import React, { useState } from 'react';
import { ContainerBar,
  Bar,
  Experience,
  CurrentExperience,
  Success} from './styles';

const ExperienceBar: React.FC = () => {
  

  return (
    <ContainerBar>
    <Experience>0 px</Experience>
    <Bar>
        <Success style={{ width: '50%' }} />
        <CurrentExperience style={{ left: '50%' }}>300 px</CurrentExperience>
    </Bar>
    <Experience>600 px</Experience>
</ContainerBar>
  );
};

export default ExperienceBar;
