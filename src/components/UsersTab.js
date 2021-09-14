import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {addUser} from "../actions/action.js";
import {Button} from "antd";
import UsersList from "./UsersList.js";
import UserModalWindow from "./common/UsersModalWindow.js";

class UsersTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }
   
  render(){

    let ModalClose = () => this.setState({ showModal: false });
   
    return(
    <div>
      <Button
        variant="primary"
        onClick={() => {
          this.setState({ showModal: true });
        }}
      >
        Create a User
      </Button>

      <UserModalWindow
        show={this.state.showModal}
        onHide = {ModalClose}
        user="true"
        update="false"
      />

    <UsersList />
  </div>
    )
  } 
    

}


function mapDispatchToProps(dispatch){
  return bindActionCreators({addUser} , dispatch);
}


export default connect(()=>{},mapDispatchToProps)(UsersTab) ;
