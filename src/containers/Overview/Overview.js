import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import classes from './Overview.module.css';

import { updateObject } from '../../shared/utility';

class Overview extends Component {
    state = {
        data: {
            overview: null
        }
    }

    componentDidMount() {
        if (this.props.selected) {
            this.loadData();
        }
    }

    loadData = () => {
        const updatedData = updateObject(this.state.data, {
            overview: this.props.selected.billing.overview
        });
        this.setState({ data: updatedData });
    }

    render() {
        let showData = this.state.data.overview ? true : false;

        return (
            <div className={classes.Overview}>
                <div className={classes.Card}>
                    <Card className="text-left">
                        <CardHeader tag="h5">OVERVIEW</CardHeader>
                        <CardBody style={{ margin: '0px', padding: '0px' }}>
                            <Container>
                                <Row>
                                    <Col xs="12" md="5" xl="5" style={{ margin: '0px', padding: '0px' }}>
                                        <div className={classes.ColumnOne}>
                                            <Container>
                                                <Row>
                                                    <Col xs="6" sm="6" className="text-left">
                                                        <div className={classes.FieldLabel}>Status</div>
                                                    </Col>
                                                    <Col xs="6" sm="6" className="text-right">
                                                        <div className={classes.FieldStatus}>
                                                            {showData && this.state.data.overview.status === 'Active' ? <FontAwesomeIcon className={classes.IconLeft} icon={faCheck} /> : null}
                                                            {showData ? this.state.data.overview.status : null}
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs="6" sm="6" className="text-left">
                                                        <div className={classes.FieldLabel}>Method</div>
                                                    </Col>
                                                    <Col xs="6" sm="6" className="text-right">
                                                        <div className={classes.FieldData}>{showData ? this.state.data.overview.method : null}</div>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs="6" sm="6" className="text-left">
                                                        <div className={classes.FieldLabel}>Capacity</div>
                                                    </Col>
                                                    <Col xs="6" sm="6" className="text-right">
                                                        <div className={classes.FieldData}>{showData ? this.state.data.overview.capacity : null}</div>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs="6" sm="6" className="text-left">
                                                        <div className={classes.FieldLabel}>Drayage</div>
                                                    </Col>
                                                    <Col xs="6" sm="6" className="text-right">
                                                        <div className={classes.FieldData}>{showData ? this.state.data.overview.drayage : null}</div>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </div>
                                    </Col>
                                    <Col xs="12" md="7" xl="7" style={{ margin: '0px', padding: '0px' }}>
                                        <div className={classes.ColumnTwo}>
                                            <Container>
                                                <Row>
                                                    <Col xs="6" sm="6" className="text-left">
                                                        <div className={classes.FieldLabel}>Incoterms</div>
                                                    </Col>
                                                    <Col xs="6" sm="6" className="text-right">
                                                        <div className={classes.FieldData}>{showData ? this.state.data.overview.incoterms : null}</div>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs="6" sm="6" className="text-left">
                                                        <div className={classes.FieldLabel}>Service Options</div>
                                                    </Col>
                                                    <Col xs="6" sm="6" className="text-right">
                                                        <div className={classes.FieldData}>{showData ? this.state.data.overview.serviceOptions : null}</div>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs="6" sm="6" className="text-left">
                                                        <div className={classes.FieldNull}></div>
                                                    </Col>
                                                    <Col xs="6" sm="6" className="text-right">
                                                        <div className={classes.FieldNull}></div>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs="6" sm="6" className="text-left">
                                                        <div className={classes.FieldLabel}>Hazardous or forbbiden commodities</div>
                                                    </Col>
                                                    <Col xs="6" sm="6" className="text-right">
                                                        <div className={classes.FieldData}>{showData ? this.state.data.overview.comodities.hazardousOrForbbiden : null}</div>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
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

export default connect(mapStateToProps)(Overview);