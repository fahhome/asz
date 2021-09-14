import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteUser, updateUser } from "../actions/action.js";
import UserModalWindow from "./common/UsersModalWindow.js";

class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModalForEdit: false
    };
    this.ModalClose = this.ModalClose.bind(this);
  }

  ModalClose() {
    this.setState({
      showModalForEdit: false
    });
  }
   

  render(){
    
    return(
        <div>


        </div>
    )

  }  


}


function mapStateToProps(state){
  
  return {
      users :  state.users.users
  }

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({deleteUser,updateUser} , dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(UsersList)