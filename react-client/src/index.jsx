import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import BookingComponent from './components/BookingComponent.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={}
  }

  render() {
    return (
        <div>
          <h1>Availability Details</h1>
            <span>
              <BookingComponent />
            </span>
        </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));