import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signUpUser, updateUser } from '../../redux/actions/userManagerAction';

class FormSignUp extends Component {

    state ={
        values:{
            account:'',
            fullName:'',
            password:'',
            email:'',
            phoneNumber:'',
            userType:''
        },
        errors:{
            account:'',
            fullName:'',
            password:'',
            email:'',
            phoneNumber:'',
            userType:''
        }
    }

    handleChangeValue = (e)=>{
        let {name,value,type} = e.target;
        let newValues = {...this.state.values,[name]:value};
        let newErrors = {...this.state.errors}
		// kiem tra xem choi co rong hay khong
		if(value.trim() === ''){
			newErrors[name] = name + ' vui lòng nhập trường này'
		}else{
			newErrors[name] = ''
		}
		// kiem tra email
		if(type === 'email'){ 
			const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			
			if(!regexEmail.test(value)){
				newErrors[name] = name + 'chưa đúng định dạng'
			}else{
				newErrors[name] = ''
			}
		}
        // check phoneNumber
        if(name === 'phoneNumber'){
            const regexPhone = /([+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/
            if(!regexPhone.test(value)){
                newErrors[name] = name + ' chưa đúng định dạng'
			}else{
				newErrors[name] = ''
			}
            
        }

        this.setState({
            values: newValues,
            errors: newErrors
        },()=>{
            console.log(this.state.values);
        })
    }
    handleSignUpUser = () =>{
        let {values} = this.state;
        let valid = true;
        let valueUser = {id:Date.now(),}
        let errorUser = {}
        for (let key in values){
            if(values[key] === ''){
                valid = false;
                errorUser[key] = key + ' vui long nhap truong nay';
            }
            valueUser[key] = values[key]
        }
        if(!valid){
            this.setState({
                errors:errorUser,
            })
        }
        if(valid === true){
            this.props.dispatch(signUpUser(valueUser))
            this.setState({
                values:{
                    account:'',
                    fullName:'',
                    password:'',
                    email:'',
                    phoneNumber:'',
                    userType:''
                }
            })
        }
        
    }
    handleUpdateUser = () => {
        this.props.dispatch(updateUser(this.state.values))
        this.setState({
            values:{
                account:'',
                fullName:'',
                password:'',
                email:'',
                phoneNumber:'',
                userType:''
            }
        })

    }
    componentDidUpdate (prevProps,prevState) {
        if(prevProps.userEdit.id !== this.props.userEdit.id){
            // let {id,account,fullName,password,email,phoneNumber,userType} = this.props.userEdit
            this.setState({
                values:{
                    id:this.props.userEdit.id,
                    account:this.props.userEdit.account,
                    fullName:this.props.userEdit.fullName,
                    password:this.props.userEdit.password,
                    email:this.props.userEdit.email,
                    phoneNumber:this.props.userEdit.phoneNumber,
                    userType:this.props.userEdit.userType
                }
            })
        }
    }

    render() {
        return (
           
            <div className="card">
                <h5 className="card-header bg-dark text-light">Form đăng ký</h5>
                <div className="card-body">
                    <div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="account">Tài khoản</label>
                                <input 
                                    value={this.state.values.account}
                                    type="text" 
                                    name="account" 
                                    className="form-control" 
                                    id="account" 
                                    onChange={this.handleChangeValue}
                                    />
                                <span className="text-danger">{this.state.errors.account}</span>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="fullName">Họ và Tên</label>
                                <input 

                                    value={this.state.values.fullName}
                                    type="text" 
                                    name="fullName" 
                                    className="form-control" 
                                    id="fullName" 
                                    onChange={this.handleChangeValue}
                                    />
                                <span className="text-danger">{this.state.errors.fullName}</span>

                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="password">Mật khẩu</label>
                                <input 

                                    value={this.state.values.password}
                                    type="password" 
                                    name="password" 
                                    className="form-control" 
                                    id="password" 
                                    onChange={this.handleChangeValue}
                                    />
                                <span className="text-danger">{this.state.errors.password}</span>

                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="phoneNumber">Số điện thoại</label>
                                <input 

                                    value={this.state.values.phoneNumber}
                                    type="text" 
                                    name="phoneNumber" 
                                    className="form-control" 
                                    id="phoneNumber" 
                                    onChange={this.handleChangeValue}
                                    />
                                <span className="text-danger">{this.state.errors.phoneNumber}</span>

                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="email">Email</label>
                                <input 

                                    value={this.state.values.email}
                                    type="email" 
                                    name="email" 
                                    className="form-control" 
                                    id="email" 
                                    onChange={this.handleChangeValue}
                                    />
                                <span className="text-danger">{this.state.errors.email}</span>

                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="userType">Mã loại người dùng</label>
                                <select 
                                    id="userType" 
                                    className="form-control" 
                                    name="userType"
                                    onChange={this.handleChangeValue}
                                    value={this.state.values.userType}
                                    >
                                    <option value="3">Khách hàng</option>
                                    <option value="2">nhân viên</option>
                                    <option value="1">admin</option>
                                </select>
                                <span className="text-danger">{this.state.errors.userType}</span>

                            </div>
                        </div>
                        <button disabled={this.props.disabled} type="submit" className="btn btn-success mr-2"
                            onClick={()=> this.handleSignUpUser() }>Đăng ký</button>
                        <button disabled={this.props.disabledUpdate} type="submit" className="btn btn-primary"
                            onClick={()=> this.handleUpdateUser()}>Cập nhập</button>
                    </div>

                </div>
            </div>

            
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        userEdit:state.userManager.userEdit,
        disabled:state.userManager.disabled,
        disabledUpdate:state.userManager.disabledUpdate,
    }
}

export default connect(mapStateToProps)(FormSignUp);