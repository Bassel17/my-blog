import React from 'react';
import Layout from '../components/Layout';

export const About = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'About | Bassel',
      }}
    >
      <h1>Hello, I&apos;m Bassel Kanso, a software developer</h1>
      <p>
        {' '}
        I consider software development to be my craft, as a craftsperson I
        value my craft and I want to craft the best product I can, I value the
        way I write my code, I like to share it with other people and to talk
        about software as well. I hope to be someone who can inspire people into
        doing what they love and to pursue it passionately whatever it is.
        <br />
        As a software developer, I enjoy using my obsessive attention to detail,
        my unequivocal love for making things, and my mission-driven work ethic
        to literally change the world.
        <br />
        <br />
        If you want to talk about a project with me or talk about software over
        a cup of coffee, feel free to contact me on this email:{' '}
        <a href="mailto: basselkanso82@gmail.com">basselkanso82@gmail.com </a>
        or hit me up on any of my social media accounts
      </p>
      <br />
      <br />
      <h2>Technologies:</h2>
      <br />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <i
          className="devicon-javascript-plain"
          style={{ fontSize: '40px', padding: '5px' }}
        />
        <i
          className="devicon-rust-plain"
          style={{ fontSize: '40px', padding: '5px' }}
        />
        <i
          className="devicon-react-original"
          style={{ fontSize: '40px', padding: '5px' }}
        />
        <i
          className="devicon-vuejs-plain"
          style={{ fontSize: '40px', padding: '5px' }}
        />
        <i
          className="devicon-meteor-plain"
          style={{ fontSize: '40px', padding: '5px' }}
        />
        <i
          className="devicon-html5-plain"
          style={{ fontSize: '40px', padding: '5px' }}
        />
        <i
          className="devicon-sass-plain"
          style={{ fontSize: '40px', padding: '5px' }}
        />
        <i
          className="devicon-jasmine-plain"
          style={{ fontSize: '40px', padding: '5px' }}
        />
        <i
          className="devicon-mongodb-plain"
          style={{ fontSize: '40px', padding: '5px' }}
        />
        <i
          className="devicon-docker-plain"
          style={{ fontSize: '40px', padding: '5px' }}
        />
        <i
          className="devicon-git-plain"
          style={{ fontSize: '40px', padding: '5px' }}
        />
      </div>
      <br />
      <br />
      <h2>Tools:</h2>
      <br />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <i
          className="devicon-github-original"
          style={{ fontSize: '40px', padding: '5px' }}
        />
        <i
          className="devicon-heroku-plain"
          style={{ fontSize: '40px', padding: '5px' }}
        />
        <i
          className="devicon-linux-plain"
          style={{ fontSize: '40px', padding: '5px' }}
        />
        <i
          className="devicon-figma-plain"
          style={{ fontSize: '40px', padding: '5px' }}
        />
      </div>
      <br />
      <br />
      <hr />
    </Layout>
  );
};

export default About;
