import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card, CardBody, Button, ButtonGroup } from 'reactstrap';

import classes from './Process.module.css';
import imgMap from '../../assets/images/map.png';
import imgDiagramStep from '../../assets/images/step.png';

import { updateObject } from '../../shared/utility';

class Process extends Component {
    state = {
        data: {
            process: null
        },
        option: 'diagram'
    }

    componentDidMount() {
        if (this.props.selected) {
            this.loadData();
        }
    }

    loadData = () => {
        const updatedData = updateObject(this.state.data, {
            process: this.props.selected.billing.process
        });
        this.setState({ data: updatedData });
    }

    onOptionChangeHandler = option => {
        this.setState({ option: option });
    }

    render() {
        let showData = this.state.data.process ? true : false;

        return (
            <div className={classes.Process}>
                <div className={classes.HeaderContainer}>
                    <div className={classes.Buttons}>
                        <ButtonGroup>
                            <Button outline color="secondary" onClick={() => this.onOptionChangeHandler('diagram')}>Diagram</Button>
                            <Button outline color="secondary" onClick={() => this.onOptionChangeHandler('map')}>Map</Button>
                        </ButtonGroup>
                    </div>
                    <div className={classes.ProcessText}>{showData ? this.state.data.process.text : 'Text'}</div>
                </div>
                <div className={classes.Card}>
                    <Card className="text-left">
                        <CardBody style={{ padding: '0px', margin: '0px' }}>
                            {this.state.option === 'diagram'
                                ? <div className={classes.Diagram}>
                                    <div className={classes.Line}></div>
                                    <div className={classes.Line2}></div>
                                    <div className={classes.Step}>
                                        <img src={imgDiagramStep} alt="step1" draggable="false" />
                                    </div>
                                    <div className={classes.Step}>
                                        <img src={imgDiagramStep} alt="step2" draggable="false" />
                                    </div>
                                    <div className={classes.Step}>
                                        <img src={imgDiagramStep} alt="step3" draggable="false" />
                                    </div>
                                    <div className={classes.Step}>
                                        <img src={imgDiagramStep} alt="step4" draggable="false" />
                                    </div>
                                    <div className={classes.Step}>
                                        <img src={imgDiagramStep} alt="step5" draggable="false" />
                                    </div>
                                    <div className={classes.Step}>
                                        <img src={imgDiagramStep} alt="step6" draggable="false" />
                                    </div>
                                    <div className={classes.Step}>
                                        <img src={imgDiagramStep} alt="step7" draggable="false" />
                                    </div>
                                </div>
                                : <div className={classes.Map}>
                                    <img src={imgMap} alt="map" draggable="false" />
                                </div>}
                        </CardBody>
                    </Card>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        selected: state.data.selected
    };
};

export default connect(mapStateToProps)(Process);