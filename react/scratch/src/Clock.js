import React from 'react';
import { addSeconds, format } from 'date-fns'

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dateTime: new Date() };
  }
  
  componentDidMount = () => {
    const tickId = setInterval(this.tick, 1000);
    this.setState({ tickId });
  }

  componentWillUnmount = () => {
    clearInterval(this.state.tickId)
  }

  tick = () => {
    this.setState({ dateTime: addSeconds(this.state.dateTime, 1) });
  }

  render() {
    return <div>{format(this.state.dateTime, 'hh:mm:ss')}</div>;
  }
}

export default Clock;