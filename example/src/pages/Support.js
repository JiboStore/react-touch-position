import React, { Component } from 'react';
import {
  Col,
  Grid,
  Jumbotron,
  Row
} from 'react-bootstrap';
import Helmet from 'react-helmet';

import Header from '../components/Header';

import 'bootstrap/dist/css/bootstrap.css';
import '../../styles/app.css';

class  Support extends Component {
    render() {
        return (
            <div>
                <Helmet title="Image Magnify | React Touch Position" />
                <Header {...this.props}/>
                <Jumbotron>
                    <Grid>
                        <Row>
                            <Col sm={12}>
                                <h2>Support</h2>
                            </Col>
                        </Row>
                    </Grid>
                </Jumbotron>
                <Grid>
                    <Row>
                        <Col sm={12}>
                            Please&nbsp;
                            <a href="https://github.com/ethanselzer/react-touch-position/issues">
                                open an issue
                            </a> on GitHub. Thanks! ✨
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Support;
