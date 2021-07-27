import React, { Component } from "react";
import { Item, Button } from "semantic-ui-react";
import { connect } from "react-redux";

class LeaderBoard extends Component {
  render() {
    const { usersList } = this.props;
    const sortedUsers = usersList.sort((a, b) => b.totalScore - a.totalScore);
    return (
      <div>
        {sortedUsers.map((user) => (
          <Item.Group divided key={user.id}>
            <Item>
              <Item.Image size="tiny" src={user.avatarURL} />
              <Item.Content verticalAlign="middle">
                <h4>{user.name}</h4>
                <p>Answered Question:{Object.keys(user.answers).length}</p>
                <p>Created Question:{user.questions.length}</p>
              </Item.Content>
              <Button circular>
                {Object.keys(user.answers).length + user.questions.length}
              </Button>
            </Item>
          </Item.Group>
        ))}
      </div>
    );
  }
}
function mapStateToProps({ users }) {
  const usersList = Object.values(users);
  return {
    usersList,
  };
}
export default connect(mapStateToProps)(LeaderBoard);
