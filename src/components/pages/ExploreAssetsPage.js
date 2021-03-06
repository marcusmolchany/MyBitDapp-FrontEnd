import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'carbon-components-react';
import '../../styles/ExploreAssetsPage.css';
import Asset from '../Asset';
import NotFoundPage from './NotFoundPage';
import LoadingPage from './LoadingPage';
import { getPrettyCategoryName } from '../../util/helpers';

const ExploreAssetsPage = ({
  state,
  match,
}) => {
  const { category } = match.params;

  if (!category) {
    return <NotFoundPage />;
  }

  const loading = state.loading.assets;
  const assetsInCategory =
    state.assets.filter(asset => asset.category === match.params.category);

  const backButton = (
    <Link key="/explore" to="/explore" href="/explore">
      <Button
        kind="secondary"
        className="ExploreAssetsPage__back-button"
      >
      BACK
      </Button>
    </Link>
  );

  const assets = [
    backButton,
    assetsInCategory.map(asset => (
      <Asset
        id={asset.assetID}
        key={asset.assetID}
        funded={asset.amountRaisedInUSD}
        goal={asset.amountToBeRaised}
        city="unknown"
        country="unknown"
        name="unknown"
        category={getPrettyCategoryName(asset.category)}
      />
    )),
  ];

  const loadingElement = loading && (
    <LoadingPage
      message="Loading assets"
      hasBackButton
      path="/explore"
    />
  );

  // const noElements =
  //   !loading && (
  //     <div style={{ width: '100%' }}>
  //       {backButton}
  //       <p
  //         className="ExploreAssetsPage__message-no-elements"
  //       >
  //         {`No assets found in the ${category} category.`}
  //       </p>
  //     </div>
  //   );

  let renderedOutput = null;
  if (loading) {
    renderedOutput = loadingElement;
  } else if (assets[1].length === 0) {
    renderedOutput = <NotFoundPage message="The desired category could not be found. Assets previously listed under this category may no longer exist." />;
  } else {
    renderedOutput = assets;
  }

  return (
    <div className="ExploreAssetsPage grid">
      {renderedOutput}
    </div>
  );
};

ExploreAssetsPage.propTypes = {
  state: PropTypes.shape({ params: PropTypes.object }).isRequired,
  match: PropTypes.shape({ params: PropTypes.object }).isRequired,
};

export default ExploreAssetsPage;
