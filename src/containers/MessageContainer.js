import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import Message from './../features/message/message'


class MessageContainer extends Component {
  render () {
    
 const {message} = this.props;
    return (
      <Message message={message} />
    )
  }
}

MessageContainer.propTypes = {
  message: PropTypes.string.isRequired
}
 var mapStateToProps = state => {
  return {
    message: state.message
  }
}



export default connect(
  mapStateToProps,
  null
)(MessageContainer)
