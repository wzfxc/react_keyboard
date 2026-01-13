import React from 'react';

type State = {
  pressedKey: string | null;
};

export class App extends React.Component<{}, State> {
  state: State = {
    pressedKey: null,
  };

  handleKey = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', event => this.handleKey(event));
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', event => this.handleKey(event));
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressedKey === null
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${this.state.pressedKey}]`}
        </p>
      </div>
    );
  }
}
