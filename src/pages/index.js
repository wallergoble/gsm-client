import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Well from '../components/well'
import { PictureRow } from '../components/pictureRow';

import trailer from '../images/trailer.jpg'
import handshake from '../images/handshake.jpg'
import mover from '../images/mover.jpg'
import onTrailer from '../images/on-trailer.jpg'
import ramp from '../images/ramp.jpg'


const IndexPage = () => (
  <Layout>
    <Well />

    <PictureRow image={trailer}>
      <h1>hi</h1>
    </PictureRow>
    <PictureRow image={handshake} invert={true}>
      <h1>hi</h1>
    </PictureRow>
    <PictureRow image={ramp}>
      <h1>hi</h1>
    </PictureRow>
    <PictureRow image={onTrailer} invert={true}>
      <h1>hi</h1>
    </PictureRow>
    <PictureRow image={mover}>
      <h1>hi</h1>
    </PictureRow>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout >
)

export default IndexPage

