import React from 'react';
import Item from '../components/Item';
import Navigation from '../components/Navigation';


const MainPage = () => {
  return(
    <div className="container">
      <Navigation />
      <div class="flex">
      <Item pict={'https://d1jbdnkobaa8jr.cloudfront.net/media/catalog/product/h/u/hugo-2-seater-preston-ash-oak-legs-scandinavian-design-slim-front_1.jpg'}  />
      <Item pict={'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/788/0378892_PE556222_S4.jpg'}/>
      <Item pict={'https://ikea.azureedge.net/images/680x680/1/variantimages/49193733/0.jpg'}/>
      </div>
    </div >
  );
}

export default MainPage;
