import React from 'react';

import FoodMenuHeader from '../components/FoodMenuHeader';
import FoodMenuItems from '../components/FoodMenuItems';
import Events from '../components/Events';
import ContactAndMap from '../components/ContactAndMap';

const FoodMenu = ({ data }) => {
  const { header, eventsImage } = data;
  return (
    <div>
      <FoodMenuHeader data={header}/>
      <FoodMenuItems />
      <Events eventsImage={eventsImage}/>
      <ContactAndMap />
    </div>
  );
};

export const query = graphql`
  query foodMenuQuery {
    header: file(relativePath: { eq: "images/localFlavour.jpg"}) {
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

export default FoodMenu;