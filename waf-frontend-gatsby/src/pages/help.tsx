import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';


const centered: any = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center'
}

const HelpPage = () => (
  <Layout>
    <SEO title='Page two' />

    <div style={centered}>

      <h1>WaF App Help</h1>
      <hr />
      <p>We're very sorry you are having trouble!</p>
      <p>You may email us any questions or concerns directly here: help@wafapp.io </p>
      <p>We do our best to respond to all inquiries within 24 hours, and we value each and every user very much! ❤️</p>
      <hr />

      <h1>Frequent Asked Questions</h1>
      <hr />
      <h3>- What is WaF App?</h3>
      <p>WaF app is a web application meant to meaningfully connect people in the real world by allowing peopel to find and meet with other people in their area to engage in fun activities.</p>
      <hr />
      <h3>- Is WaF App Free To Use?</h3>
      <p>Yes! WaF App is and always will be usable and provide value as a free app. You message others about their listings and create your own listings at no charge!</p>
      <hr />
      <h3>- What Comes With WaF Premium?</h3>
      <p>A WaF premium account will get you these pro features:
        </p>
      <ul>
        <li>
          While a free accound only allows you to have 1 listing active at a time, with a premium !
          </li>
        <li>
          See listings within 100 miles of your location (vs 25 for a free account).
          </li>
      </ul>
    </div>
  </Layout>
);

export default HelpPage;
