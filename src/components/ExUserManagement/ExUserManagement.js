import React, { Component } from 'react'
import FormSignUp from '../FormSignUp/FormSignUp'
import TableUser from '../TableUser/TableUser'

export default class ExUserManagement extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="text-center my-3">Quản lý người dùng</h3>
                        <FormSignUp />
                        <TableUser />
                    </div>
                </div>
            </div>
        )
    }
}
