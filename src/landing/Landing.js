import React from 'react'
import ReactDOM from 'react-dom';
import ContentBlock from './ContentBlock';
import '../css/landing.css';
import '../css/landingCommon.css';

import CommunityImg from "../images/community.png";
import TeamImg from "../images/team.png";
import FOSSImg from '../images/FOSS.png';
import InvestorsImg from "../images/investors.png";

class Landing extends React.Component {
  render() {
    const pTexts = [
      "You can join us offline in San Francisco or online using video, voice and chat communication. You need to be registered in both cases. ",
      "You’ll work on challenges collaboratively and present projects as a team. If you don’t have one, don’t worry, you can still apply, and you’ll be assigned to other free students.",
      "You’ll build projects under open source licenses which will be hosted for public use. The requirement of this hackathon is to use only FOSS development tools and operating systems.",
      "Apart from praises of the global open source community, the best performing teams will receive 5000$+ in rewards. The best projects will be funded by our investors and get necessary promotion for further growth. 50+ projects already received funding, many of them became successful businesses.",
    ];

    const hTexts = [
      "Participate in the hackathon with 100+ like-minded individuals",
      "Teams with up to 5 members can be registered",
      "Take your chance to make open source ecosystem shine and benefit global community",
      "Your effort pays off",
    ];

    return (
      <div>
        <h1 class="landing-h1">
          Here we build open source software to empower the future
        </h1>
        <div className="content-wrapper">
          <ContentBlock mainText={hTexts[0]} pText={pTexts[0]} image={CommunityImg}/>
          <ContentBlock mainText={hTexts[1]} pText={pTexts[1]} image={TeamImg} divClass="image-on-left" />
          <ContentBlock mainText={hTexts[2]} pText={pTexts[2]} image={FOSSImg}/>
          <ContentBlock mainText={hTexts[3]} pText={pTexts[3]} image={InvestorsImg} divClass="image-on-left" />
        </div>
      </div>
    );
  }
}

export default Landing;
