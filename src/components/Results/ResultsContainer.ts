import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactGA from 'react-ga';
import ReactPixel from 'react-facebook-pixel';

import './Results.scss';
import calcSpheresResults from 'utils/spheresCalculator';
import { mapStateToProps, mapDispatcherToProps } from './ResultsRedux';
import ResultsView from './ResultsView';

type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatcherToProps>;
type MatchProps = RouteComponentProps<{ id: string }>;
type Props = ReduxType & MatchProps;

type State = {
  results: any
  spheresResults: any
};

class Results extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      results: null,
      spheresResults: null,
    };

    this.loadFromStore = this.loadFromStore.bind(this);
    this.loadFromDatabase = this.loadFromDatabase.bind(this);
  }

  componentDidMount = async () => {
    const { id } = this.props.match.params;
    const { resultsHistory } = this.props;
    const resultsSavedInStore = resultsHistory.some((el) => el.id === id);

    if (resultsSavedInStore) {
      await this.loadFromStore(id);
    } else {
      await this.loadFromDatabase(id);
    }

    this.setState((state) => ({
      spheresResults: calcSpheresResults(state.results),
    }));

    ReactGA.event({
      category: 'Results',
      action: 'Opened',
      label: id,
    });

    ReactPixel.trackCustom('ResultsOpen', {
      id,
    });
  }

  loadFromStore(id: string) {
    const { resultsHistory } = this.props;
    const resultsData = resultsHistory.find((results) => results.id === id);

    this.setState({
      results: resultsData,
    });
  }

  async loadFromDatabase(id: string) {
    const { getAndSetResultsById } = this.props;
    await getAndSetResultsById(id);
    const { resultsData } = this.props;

    if (resultsData.id !== id) {
      this.props.history.push('/404');
    }

    this.setState({
      results: resultsData,
    });
  }

  render = () => ResultsView({
    loading: this.props.loading,
    results: this.state.results,
    spheresResults: this.state.spheresResults,
  })
}

export default withRouter(
  connect(mapStateToProps, mapDispatcherToProps)(Results),
);
