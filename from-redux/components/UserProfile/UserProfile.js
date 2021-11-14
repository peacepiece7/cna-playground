import React from 'react'
import PropTypes from 'prop-types'

const UserProfile = ({ user }) => {
  return <div>welcome {user.nickname}</div>
}

UserProfile.propTyles = {
  user: PropTypes.object.isRequired,
}

export default UserProfile
