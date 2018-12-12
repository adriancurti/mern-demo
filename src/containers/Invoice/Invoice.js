import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Container, Row, Col, Card, CardHeader, CardBody, Tooltip } from 'reactstrap';

import classes from './Invoice.module.css';

import { updateObject } from '../../shared/utility';

class Invoice extends Component {
    state = {
        data: {
            invoice: null
        },
        tooltipOpen: false
    }

    componentDidMount() {
        if (this.props.selected) {
            this.loadData();
        }
    }

    loadData = () => {
        const updatedData = updateObject(this.state.data, {
            invoice: this.props.selected.billing.invoice
        });
        this.setState({ data: updatedData });
    }

    tooltipToggleHandler = () => {
        this.setState({ tooltipOpen: !this.state.tooltipOpen });
    }

    render() {
        let showData = this.state.data.invoice ? true : false;

        return (
            <div className={classes.Invoice}>
                <div className={classes.HeaderContainer}>
                    <h3 className={classes.InvoiceTitle}>Invoice</h3>
                    <h5 id="invoiceNumber" className={classes.InvoiceTitleNumber}>{showData ? this.state.data.invoice.number : null}</h5>
                    <Tooltip placement="top" isOpen={this.state.tooltipOpen} target={'invoiceNumber'} toggle={this.tooltipToggleHandler}>
                        Invoice Number
                    </Tooltip>
                </div>
                <div className={classes.Card}>
                    <Card className="text-left">
                        <CardHeader tag="h5">INVOICE - REVISION</CardHeader>
                        <CardBody style={{ margin: '0px', padding: '0px' }}>
                            <Container>
                                <Row>
                                    <Col xs="12" md="6" lg="4" xl="3" style={{ margin: '0px', padding: '0px' }}>
                                        <div className={classes.ColumnOne}>
                                            <Container>
                                                <Row>
                                                    <Col xs="6" sm="6" className="text-left">
                                                        <div className={classes.FieldLabel}>Invoice #</div>
                                                    </Col>
                                                    <Col xs="6" sm="6" className="text-right">
                                                        <div className={classes.FieldData}>{showData ? this.state.data.invoice.revision.invoiceNumeral : null}</div>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs="6" sm="6" className="text-left">
                                                        <div className={classes.FieldLabel}>Date</div>
                                                    </Col>
                                                    <Col xs="6" sm="6" className="text-right">
                                                        <div className={classes.FieldData}>{showData ? this.state.data.invoice.revision.date : null}</div>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs="6" sm="6" className="text-left">
                                                        <div className={classes.FieldLabel}>Due Date</div>
                                                    </Col>
                                                    <Col xs="6" sm="6" className="text-right">
                                                        <div className={classes.FieldData}>{showData ? this.state.data.invoice.revision.dueDate : null}</div>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs="6" sm="6" className="text-left">
                                                        <div className={classes.FieldLabel}>Terms</div>
                                                    </Col>
                                                    <Col xs="6" sm="6" className="text-right">
                                                        <div className={classes.FieldData}>{showData ? this.state.data.invoice.revision.terms : null}</div>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </div>
                                    </Col>
                                    <Col xs="12" md="6" lg="4" xl="6" style={{ margin: '0px', padding: '0px' }}>
                                        <div className={classes.ColumnTwo}>
                                            <div className={classes.FieldTitle}>Bill To</div>
                                        </div>
                                    </Col>
                                    <Col xs="12" md="12" lg="4" xl="3" style={{ margin: '0px', padding: '0px' }}>
                                        <div className={classes.ColumnThree}>
                                            <div className={classes.FieldTitle}>New Balance upon Re-booking</div>
                                            <div className={classes.FieldBalance}>${showData ? this.state.data.invoice.revision.balance : '0'}</div>
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

export default connect(mapStateToProps)(Invoice);