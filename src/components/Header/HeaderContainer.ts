import * as React from 'react';
import HeaderView from './HeaderView';

type State = {
  showNav: boolean
};

class App extends React.Component<any, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      showNav: false,
    };

    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState((state) => ({
      showNav: !state.showNav,
    }));
  }

  render = () => HeaderView({
    toggleNav: this.toggleNav,
    showNav: this.state.showNav,
  })
}

export default App;
