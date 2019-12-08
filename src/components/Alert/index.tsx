import * as React from 'react';
import { Alert } from 'reactstrap';

export interface KbAlertProps {
  headerText: string;
  bodyText: string;
  handleToggle: any;
  isOpen: boolean;
  color: string;
}

class KbAlert extends React.Component<KbAlertProps> {
  public render() {
    const { headerText, bodyText, handleToggle, isOpen, color } = this.props;
    return (
      <Alert color={color} isOpen={isOpen} toggle={handleToggle}>
        <h4 className="alert-heading">{headerText}</h4>
        <p>{bodyText}</p>
      </Alert>
    );
  }
}

export default KbAlert;
