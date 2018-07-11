import React from 'react';

import Landing from '../components/Landing';
import Container from '../components/Container';
import AwardWinning from '../components/AwardWinning';
import OpeningTimes from '../components/OpeningTimes';
import LocalFlavour from '../components/LocalFlavour';
import FoodAndDrink from '../components/FoodAndDrink';
import ContactAndMap from '../components/ContactAndMap';
import Events from '../components/Events';

import './index.css';

const Index = ({ data }) => {
  const {
    mainImage,
    openingTimesImage,
    localFlavourImage,
    foodImage,
    drinkImage,
    eventsImage
  } = data;

  return (
    <div>
      <Landing data={mainImage}/>
      <AwardWinning />
      <OpeningTimes data={openingTimesImage}/>
      <LocalFlavour data={localFlavourImage}/>
      <FoodAndDrink foodImage={foodImage} drinkImage={drinkImage}/>
      <Events eventsImage={eventsImage}/>
      <ContactAndMap />
    </div>
  );
};

export const query = graphql`
  query indexQuery {
    mainImage: file(relativePath: { eq: "images/homeImage.jpg"}) {
      childImageSharp {
        sizes(maxWidth: 1920) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    openingTimesImage: file(relativePath: { eq: "images/openingTimesImage.jpg"}) {
      childImageSharp {
        sizes(maxWidth: 1000) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    localFlavourImage: file(relativePath: { eq: "images/localFlavour.jpg"}) {
      childImageSharp {
        sizes(maxWidth: 1920) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    foodImage: file(relativePath: { eq: "images/food.jpg"}) {
      childImageSharp {
        sizes(maxWidth: 1000) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    drinkImage: file(relativePath: { eq: "images/drink.jpg"}) {
      childImageSharp {
        sizes(maxWidth: 1000) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    eventsImage: file(relativePath: { eq: "images/eventsImage.jpg"}) {
      childImageSharp {
        sizes(maxWidth: 1920) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;

export default Index;
