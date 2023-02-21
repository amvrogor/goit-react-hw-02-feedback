import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { Title } from './Title/Title';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  LeaveFeedback = options => {
    this.setState(prevState => {
      console.log(options);
      return [options].value + 1;
    });
  };

  render() {
    return (
      <div>
        <Layout>
          <Title title="Please leave feedback">
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.LeaveFeedback}
            />
          </Title>
          <GlobalStyle />
        </Layout>
      </div>
    );
  }
}
