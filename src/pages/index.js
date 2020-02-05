import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/layout'

import DaohausLogo from '../images/projects/daohaus__logo--black.png'
import PokemolLogo from '../images/projects/pokemol__brand--standard.png'
import MetaCartelLogo from '../images/projects/meta_chill.png'
import MolochLogo from '../images/projects/moloch__logo--red.png'
import DisplacementMap from '../images/displacement_map_repeat.jpg'
import VenBanner from '../images/venbanner.png'


const IndexPage = () => {
  const [PIXI, setPIXI] = useState(null);
  useEffect(() => {
    const poller = setInterval(() => {

      if (window.PIXI) {
        setPIXI(window.PIXI)
        clearInterval(poller)

        console.log('setPIXI called')
      }
    }, 500)

    return () => clearInterval(poller)
  }, [])

  useEffect(() => {

    const PIXI = window.PIXI;
    console.log(PIXI);
    if (!PIXI) {
      return;
    }


    const app = new PIXI.Application();
document.body.appendChild(app.view);

app.stage.interactive = true;

const container = new PIXI.Container();

app.stage.addChild(container);

const flag = PIXI.Sprite.from(VenBanner);
container.addChild(flag);
flag.x = 200;
flag.y = 10;
flag.width = 450;
flag.height= 600;

const displacementSprite = PIXI.Sprite.from(DisplacementMap);
// Make sure the sprite is wrapping.
displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
const displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
displacementFilter.padding = 10;

displacementSprite.position = flag.position;

app.stage.addChild(displacementSprite);

flag.filters = [displacementFilter];

displacementFilter.scale.x = 30;
displacementFilter.scale.y = 60;

// Opt-in to interactivity
flag.interactive = true;

// Shows hand cursor
flag.buttonMode = true;

// Pointers normalize touch and mouse
flag.on('pointerdown', onClick);

function onClick() {
  displacementSprite.scale.x /= 1.25;
  displacementSprite.scale.y /= 1.25;
}



app.ticker.add(() => {
    // Offset the sprite position to make vFilterCoord update to larger value. Repeat wrapping makes sure there's still pixels on the coordinates.
    displacementSprite.x++;
    // Reset x to 0 when it's over width to keep values from going to very huge numbers.
    if (displacementSprite.x > displacementSprite.width) { displacementSprite.x = 0; }
});




  }, [PIXI])

  return (<Layout>
    <div className="Hero Home BackgroundImage">
      <div className="Hero__Contents">
        <h1>Raid Guild</h1>
        <p>
          A dao for builders to form Raid Parties and team up on epic boss
          fights (open source web3 projects).
        </p>
        <Link to={`/lore`}>View Lore</Link>
      </div>
    </div>
    <div className="Block">
      <div className="Block__Contents">
        <h2>RAID On!</h2>
        <p>
          We believe in Web3, and are here to build it, use it, propagate it.
        </p>
        <p>
          DAOs will power the future of work. Through the network of MetaCartel,
          the builders have united to form a decentralized agency; a working
          group of freelancers, bounty hunters and hired guns ready to slay your
          web3 product monsters.
        </p>
        <h2>Skills</h2>
        <ul>
          <li>Full Stack Development</li>
          <li>Smart Contracts</li>
          <li>UX/UI Design</li>
          <li>Branding</li>
          <li>Visual Design</li>
          <li>Marketing</li>
          <li>Product</li>
          <li>Content</li>
          <li>Memes</li>
        </ul>
      </div>
    </div>
    <div className="Block">
      <div className="Block__Contents">
        <h2>Project Partners</h2>
        <p>
          We're very new, but work with a variety of projects in the ecosystem.
        </p>
        <div className="ProjectLogos">
          <img src={DaohausLogo} />
          <img src={PokemolLogo} />
          <img src={MetaCartelLogo} />
          <img src={MolochLogo} />
        </div>
      </div>
    </div>
  </Layout>)
}

export default IndexPage
