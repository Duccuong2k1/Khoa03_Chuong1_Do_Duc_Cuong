import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteUser, editUser } from '../../redux/actions/userManagerAction';

class TableUser extends Component {

    renderListUser = ()=>{
        return (
            this.props.listUser.map((user,index)=>{
                return (
                    <tr key={index}>
                        <th>{index+1}</th>
                        <td>{user.account}</td>
                        <td>{user.fullName}</td>
                        <td>{user.password}</td>
                        <td>{user.email}</td>
                        <td>{user.phoneNumber}</td>
                        <td>
                            {
                                user.userType === '1' ? 'admin' : user.userType === '2' ? 'nhân viên' : 'khách hàng'
                            }
                        </td>
                        <td>
                            <button className="btn btn-outline-warning"
                                onClick={()=> {
                                    this.props.dispatch(editUser(user))
                                }}
                            >
                                <i className="fas fa-edit"></i>
                            </button>
                            <button className="btn btn-outline-danger ml-2"
                                onClick={()=> {
                                    this.props.dispatch(deleteUser(user))
                                }}
                            
                            >
                                <i className="fas fa-trash-alt"></i>
                            </button>
                        </td>
                    </tr>
                )
            })
        )
    }


    render() {
        return (
            <div className="card  my-5">
                <h5 className="card-header bg-dark text-light">Danh sách người dùng</h5>
                <div className="card-body">
                                        
                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                                <th >Stt</th>
                                <th >Tài khoản</th>
                                <th >Họ và tên</th>
                                <th >Mật khẩu</th>
                                <th >Email</th>
                                <th >Số Điện Thoại</th>
                                <th >Loại Người dùng</th>
                                <th ></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderListUser()}
                            
                        </tbody>
                    </table>

                </div>
            </div>
        );
    }
}
const mapStateToProps = (state)=>{
    return {
        listUser:state.userManager.listUser
    }
}
export default connect(mapStateToProps)(TableUser);
