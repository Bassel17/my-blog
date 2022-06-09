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
        I love to experiment with new programming tools and technologies, I want
        to use this blog to share some of my experiences and hopefully pass on
        some of the knowledge that I acquired and will acquire.
        <br />
        <br />I will also be using youtube as a platform to publish video style
        content, if you would like to go through this journey discovering all
        the various parts of software development subscribe to my channel{' '}
        <a
          href="https://www.youtube.com/channel/UCfKIZTxxhwiKolfjW4R8DSg"
          target="_blank"
          rel="noreferrer"
        >
          basseldev
        </a>
        <br />
        <br />
        If you want to talk about a project with me or talk about software over
        a cup of coffee, feel free to contact me on this email:{' '}
        <a href="mailto: contact@basseldev.com">contact@basseldev.com </a>
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
