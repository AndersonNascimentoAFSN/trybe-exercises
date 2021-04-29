import React from 'react';
import Image from './Image';
import PropTypes from  'prop-types';
// import PropTypes from 'PropTypes'

class UserProfile extends React.Component {
  render() {
    // const { name, email, avatar } = this.props.user;
    console.log(this.props.user)
    return (
      <div>
        <p> { this.props.user.name } </p>
        <p> { this.props.user.email } </p>
        <Image source={ this.props.user.avatar } alternativeText="User avatar" />
      </div>
    )
  }
}

UserProfile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  })
};

// UserProfile.propTypes = {
//   user: PropTypes.object.isRequired,
// };


// class UserProfile extends React.Component {
//   render() {
//     // console.log(this.props.UserName, this.props.UserAvatar);
//     return (
//       <div>
//         <p> { this.props.UserName } </p>
//         <p> { this.props.UserEmail } </p>
//         <Image source={ this.props.UserAvatar } alternativeText="User avatar" />
//       </div>
//     )
//   }
// }

// UserProfile.propTypes = {
//   UserName: propTypes.string.isRequired,
//   UserEmail: propTypes.string.isRequired,
//   UserAvatar: propTypes.string.isRequired,

// };



// class UserProfile extends React.Component {
//   render() {
//     const { name, email, avatar } = this.props.user;
//     console.log(this.props.user)
//     return (
//       <div>
//         <p> { name } </p>
//         <p> { email } </p>
//         <Image source={ avatar } alternativeText="User avatar" />
//       </div>
//     )
//   }
// }

// UserProfile.propTypes = {
//   user: propTypes.object.isRequired,
// };

export default UserProfile;
