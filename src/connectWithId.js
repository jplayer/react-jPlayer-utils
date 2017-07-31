import { connect } from 'react-redux';
import { compose, getContext } from 'recompose';
import PropTypes from 'prop-types';

export default (mapStateToProps, mapDispatchToProps = {}, mergeProps) => compose(
  getContext({ id: PropTypes.string }),
  connect(mapStateToProps, mapDispatchToProps, mergeProps),
);
