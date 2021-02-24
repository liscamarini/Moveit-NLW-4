import Head from 'next/head'
import React from 'react'
import CompletedChallenges from '../components/CompletedChallenge'
import CountDown from '../components/Countdown'

import  ExperienceBar  from '../components/ExperienceBar'
import  Profile  from '../components/Profile'
import { Container } from '../styles/global'
import { Section } from '../styles/HomePage/home'

const Home: React.FC = () =>  {
  return (
    <Container>
      <Head>
        <title>Home | Movi it</title>
      </Head>
      <ExperienceBar />
      <Section>
        <div>
          <Profile />
          <CompletedChallenges />
          <CountDown />
        </div>
        <div>

        </div>
      </Section>
    </Container>
  );
};
export default Home;