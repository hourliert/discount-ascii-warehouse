import React, { Component, PropTypes } from 'react';
import { CircularProgress } from 'material-ui';
import pureRender from 'pure-render-decorator';
import InfiniteScroll from 'react-infinite-scroller';

import GridItem from './GridItem';
import AdBanner from './AdBanner';
import Product from './Product';

const styles = {
  container: {
    margin: 10,
  },

};

@pureRender
export default class ProductGrid extends Component {
  static get propTypes() {
    return {
      products: PropTypes.array,
      hasMoreProducts: PropTypes.bool,
      ads: PropTypes.array,

      generateAd: PropTypes.func,
      loadMore: PropTypes.func,
    };
  }

  static get defaultProps() {
    return {
      products: [],
      hasMoreProducts: true,
      ads: [],
    };
  }

  componentWillReceiveProps() {
    this.requestAds();
  }

  requestAds() {
    const { products, ads, generateAd } = this.props;

    const nbAds = (1 + (products.length / 20)) - ads.length;

    generateAd(nbAds);
  }

  generateGrid() {
    const { products, ads } = this.props;
    let adIndex = 0;
    let productIndex = 0;

    const gridItems = [];

    for (; productIndex < products.length; productIndex += 1) {
      if (productIndex % 20 === 0) {
        gridItems.push(<AdBanner id={ads[adIndex]} />);
        adIndex += 1;
      }

      gridItems.push(<Product item={products[productIndex]} />);
    }

    return gridItems;
  }

  render() {
    const { hasMoreProducts, loadMore } = this.props;
    const loader = (
      <div className="layout vertical center-center">
        <div>Loading...</div>
        <CircularProgress />
      </div>
    );

    return (
      <InfiniteScroll
        pageStart={0}
        loader={loader}
        loadMore={loadMore}
        hasMore={hasMoreProducts}
        useWindow={false}
      >

        <div style={styles.container} className="layout horizontal wrap">
          {this.generateGrid().map((c, i) => (
            <GridItem key={i} wide={c.type === AdBanner}>
              {c}
            </GridItem>
          ))}
        </div>
        {!hasMoreProducts && <div className="layout vertical center">~ end of catalogue ~</div>}
      </InfiniteScroll>
    );
  }
}
