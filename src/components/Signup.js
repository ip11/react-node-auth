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

export default class signup extends Component {
  render() {
    return (
      <div className="container text-center">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h1 className="text-center mt-5">Signup</h1>
            <Form>
              <FormGroup>
                <div className="controls">
                  <InputGroup className="input-prepend">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="fas fa-user" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input type="text" placeholder="Name" name="name" />
                  </InputGroup>
                </div>
              </FormGroup>
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
              <FormGroup>
                <div className="controls">
                  <InputGroup className="input-prepend">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="fas fa-lock" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      type="text"
                      placeholder="Confirm Password"
                      name="cpassword"
                    />
                  </InputGroup>
                </div>
              </FormGroup>

              <Button>Signup</Button>
              <Link to="/signin">
                <Button className="ml-4">Signin</Button>
              </Link>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
