import React from 'react';

import { Link } from 'react-router-dom'


export default function(props) {
  return (
    <>
      <p>We respect your privacy, so we can keep things simple:</p>
      <ul>
        <li>We do not store your personal data (because we don't need to).</li>
        <li>We use essential cookies only. No tracking, analytics, or advertising.</li>
        <li>We are incorporated in the UK. Our servers are provided by AWS.</li>
        <li>We delete your code from our servers after checks are finished.</li>
      </ul>
      <Link to={'/'}>home</Link>
    </>
  );
}
