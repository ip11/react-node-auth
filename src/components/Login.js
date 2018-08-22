import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from "reactstrap";

export default class Login extends Component {
  render() {
    return (
      <div className="container text-center">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h1 className="text-center mt-5">Signin</h1>
            <Form>
              <FormGroup>
                <div className="controls">
                  <InputGroup className="input-prepend">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="fas fa-at" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input type="text" placeholder="Email" name="email" />
                  </InputGroup>
                </div>
              </FormGroup>
              <FormGroup>
                <div className="controls">
                  <InputGroup className="input-prepend">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="fas fa-lock" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input type="text" placeholder="Password" name="password" />
                  </InputGroup>
                </div>
              </FormGroup>
              <Button>Signin</Button>
              <Link to="/signup">
                <Button className="ml-4">Signup</Button>
              </Link>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
