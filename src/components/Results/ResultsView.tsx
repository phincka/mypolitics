import * as React from 'react';
import { Helmet } from 'react-helmet';

import myPoliticsResultsThumbnail from 'assets/images/thumbnails/mypolitics-results.png';
import LoadingInfo from 'components/LoadingInfo';
import { Results } from 'store/results/types';
import { SpheresType } from 'utils/spheresCalculator';
import Axes from './Axes';
import Ideology from './Ideology';
import Compass from './Compass';
import Party from './Party';
import Actions from './Actions';

type Props = {
  loading: boolean
  results: Results
  spheresResults: SpheresType
};

const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };

const ResultsView: React.FC<Props> = (props) => {
  const { loading, results, spheresResults } = props;
  return (
    <main className="results">
      <Helmet>
        <title>myPolitics – Wyniki</title>
        <meta property="og:title" content="myPolitics – Wyniki" />
        <meta name="description" content="Sprawdź moje wyniki w teście politycznym myPolitics!" />
        <meta property="og:description" content="Sprawdź moje wyniki w teście politycznym myPolitics!" />
        <meta property="og:image" content={myPoliticsResultsThumbnail} />
      </Helmet>
      {!loading && spheresResults && (
        <div>
          <h1 className="results__title">
            Wyniki z
            {' '}
            {new Date(results.additionDate).toLocaleDateString(
              'pl-PL',
              dateOptions,
            )}
          </h1>

          <div className="results__inner">
            <div className="results__inner__column">
              <Axes results={results} />
            </div>
            <div className="results__inner__column">
              <Ideology spheresResults={spheresResults} />
              <Compass spheresResults={spheresResults} />
              <Party spheresResults={spheresResults} />
            </div>
          </div>
          <Actions results={results} />
        </div>
      )}
      {loading && <LoadingInfo colorHEX="#111" />}
    </main>
  );
};

export default ResultsView;
