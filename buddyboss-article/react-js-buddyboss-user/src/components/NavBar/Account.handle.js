import React, { Component } from 'react'
import { useHistory } from "react-router-dom";
import { connect } from "react-redux"

class AccountHandle1 extends Component {

  //navigate to login page
  onClickMyAccount = () => {
    console.log("------------onClickMyAccount---------------");
    if(localStorage.getItem('Token') !== null)
    {
      console.log("----------if----------------");
      this.props.history.replace('/user-dashboard/blog-management')
    }
    else
    {
    this.props.history.replace('/login')
    }
  }

  render() {
    return (
      <div className='Account-handle-component'>
        <div className='my-account' onClick={() => this.onClickMyAccount()}>My Account</div>
        {/* <div className='btn-pricing-div'><button className='btn-pricing'>Pricing</button></div> */}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    // initialState: state.AddReducer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // editData1: (payload) => dispatch(editData(payload)),
  }
}

const Add = connect(mapStateToProps, mapDispatchToProps)(AccountHandle1);

function AccountHandle(props) {
  const history = useHistory();
  return <Add {...props} history={history} />
}
export default AccountHandle;

