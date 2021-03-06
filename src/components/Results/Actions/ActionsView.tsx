import * as React from 'react';
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { HashLink as Link } from 'react-router-hash-link';
import ReactGA from 'react-ga';
import ReactPixel from 'react-facebook-pixel';

import './Actions.scss';

library.add(faArrowRight);

interface Props {
  results: any;
}

const ActionsView: React.FC<Props> = (props) => {
  const { results } = props;

  const copyToClipboard = (e: any) => {
    e.target.select();
    document.execCommand('copy');

    ReactGA.event({
      category: 'Results',
      action: 'Share Button Clicked',
      label: results.id,
    });

    ReactPixel.trackCustom('ResultsShareButtonClick', {
      id: results.id,
    });
  };

  return (
    <div className="results__actions">
      <Link className="results__actions__ideologies" smooth to="/#ideologies">
        Opisy ideologii
        <FaIcon icon={faArrowRight} />
      </Link>
      <div className="results__actions__share">
        <span>Udostępnij</span>
        <input
          type="text"
          value={`https://mypolitics.pl/results/${results.id}`}
          onFocus={(e) => copyToClipboard(e)}
          readOnly
        />
      </div>
    </div>
  );
};

export default ActionsView;
