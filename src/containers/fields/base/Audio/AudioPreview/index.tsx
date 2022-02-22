import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { Store } from 'redux';
import {
    assignFieldValueAction,
    getFileObject,
} from '../../../../../store/ducks/formState';

interface AudioPreviewProps {
    fieldName: string;
    fieldValue: any;
    fileObject: any;
    assignFieldValueActionCreator: any;
}

class AudioPreview extends React.Component<AudioPreviewProps> {
    public render() {
        const { fieldName, fieldValue, assignFieldValueActionCreator } = this.props;
        console.log('value of audio file: ', fieldValue);
        const removeHandler = () => {
            assignFieldValueActionCreator(fieldName, null);
        };
        return (
            <>
                <p className="text-muted">
                    Uploaded File Name: <strong className="text-primary"> {fieldValue} </strong>
                </p>
                {/* <audio id="sound" controls src={URL.createObjectURL(fieldValue)}></audio> */}
                <br></br>
                <Button size="sm" color="danger" onClick={removeHandler}>
                    Remove File
                </Button>
            </>
        );
    }
}

/** connect the component to the store */

/** Interface to describe props from mapStateToProps */
interface DispatchedStateProps {
    fileObject: any;
}

/** Interface to describe props from parent */
interface ParentProps {
    fieldName: string;
    fieldValue: any;
}

/** Map props to state  */
const mapStateToProps = (
    state: Partial<Store>,
    parentProps: ParentProps
): DispatchedStateProps => {
    const { fieldValue } = parentProps;
    const result = {
        fileObject: getFileObject(state, fieldValue),
    };
    return result;
};

/** map props to actions */
const mapDispatchToProps = {
    assignFieldValueActionCreator: assignFieldValueAction,
};

/** connect AudioPreview component to the redux store */
const ConnectedAudioPreview = connect(
    mapStateToProps,
    mapDispatchToProps
)(AudioPreview);

export default ConnectedAudioPreview;
