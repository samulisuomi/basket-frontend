import React from 'react';
import PropTypes from 'prop-types';
import './ItemRow.css';

import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import Checkbox from 'material-ui/Checkbox';

class ItemRow extends React.PureComponent {
  render() {
    return (
      <div className="ItemRow">
        <div style={{visibility: this.props.textFieldOnly ? 'hidden' : 'visible'}}>
          <Checkbox />
        </div>
        <div className="ItemRow-input-container">
          <TextField id="ItemRow-input-todoprops" autoFocus={true} fullWidth={true} placeholder="Add a new item..." />
        </div>
        <div style={{visibility: this.props.textFieldOnly ? 'hidden' : 'visible'}}>
          <IconButton className="ItemRow-delete" tooltip="Delete">
            <ActionDelete />
          </IconButton>
        </div>
      </div>
    );
  }
}

ItemRow.propTypes = {
  textFieldOnly: PropTypes.bool
}

export default ItemRow;
