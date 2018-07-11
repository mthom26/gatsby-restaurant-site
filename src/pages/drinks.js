import React from 'react';

import DrinksHeader from '../components/DrinksHeader';
import DrinksItems from '../components/DrinksItems';
import Events from '../components/Events';
import ContactAndMap from '../components/ContactAndMap';

const Drinks = ({ data }) => {
  const { header, eventsImage } = data;
  return (
    <div>
      <DrinksHeader data={header}/>
      <DrinksItems />
      <Events eventsImage={eventsImage}/>
      <ContactAndMap />
    </div>
  );
};

export const query = graphql`
  query drinksQuery {
    header: file(relativePath: { eq: "images/drink.jpg"}) {
      childImageSharp {
        sizes(maxWidth: 1920) {
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

export default Drinks;