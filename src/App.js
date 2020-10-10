import React, { Component }from 'react';
import Header from './components/header';
import Headline from './components/headline';
import SharedButton from './components/button';
import ListItem from './components/listItem';
import { connect } from 'react-redux';
import { fetchPosts } from './actions/posts';
import './app.scss';

const tempArr = [{
  fName: 'Joe',
  lName: 'Bloggs',
  email: 'jb@mailinator.com',
  age: 24,
  onlineStatus: true
}];

const initialState = {
  isBtnHidden: false
}

class App extends Component {
  constructor(props) {
    super(props);
    this.fetch = this.fetch.bind(this);
    this.state = {...initialState};
  }

  fetch() {
    this.props.fetchPosts();
    this.toggleBtn();
  }

  toggleBtn() {
    const { isBtnHidden } = this.state;

    this.setState({
      isBtnHidden: !isBtnHidden
    })
  }

  methodReturnsValue(number) {
    return number + 1;
  }

  render() {
    const { posts } = this.props;
    const { isBtnHidden } = this.state;

    const configButton = {
      buttonText: 'Get posts',
      emitEvent: this.fetch
    }

    return (
      <div className="App" data-test="appComponent">
        <Header />
        <section className="main-section">
          <Headline header="Posts" desc="Click the button to render posts" tempArr={tempArr} />
          {!isBtnHidden && <SharedButton {...configButton} />}
          {posts.length > 0 &&
            <div>
              {posts.map((post, index) => {
                const { title, body } = post;
                const configListItem = {
                  title,
                  desc: body
                }

                return (
                  <ListItem key={index} {...configListItem} />
                )
              })}
            </div>
          }
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
};

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => fetchPosts(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
