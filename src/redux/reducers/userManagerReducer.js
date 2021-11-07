import { DELETE_USER, EDIT_USER, SIGNUP_USER, UPDATE_USER } from "../constants/userManagerConstant";

const initialState = {
    listUser: [{
            id: 1,
            account: 'duccuong',
            fullName: "Do Duc Cuong",
            password: '123',
            email: 'doduccuong2001@gmail.com',
            phoneNumber: '4546576879',
            userType: '1',
        },
        {
            id: 2,
            account: 'nguyena',
            fullName: "van an",
            password: '323',
            email: 'nguyenvana@gmail.com',
            phoneNumber: '786550022',
            userType: '2',
        }
    ],
    userEdit: {
        id: 10,
        account: 'hoangha',
        fullName: "pham hoang ha",
        password: '5445',
        email: 'phanhangha@gmail.com',
        phoneNumber: '56565',
        userType: '1',
    },
    disabled: false,
    disabledUpdate: true,
}

const userManagerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_USER:
            {
                console.log('thong tin dang ky', action)
                let listUserUpdate = [...state.listUser]
                let checkEmail = listUserUpdate.findIndex(user => user.email === action.valueUser.email);
                if (checkEmail !== -1) {
                    alert('email nay da ton tai trong tai khoan');
                    return {...state }
                } else {
                    listUserUpdate.push(action.valueUser);
                }

                state.listUser = listUserUpdate
                return {...state }
            }
        case EDIT_USER:
            {
                let userEditUpdate = {...state.userEdit }
                let index = state.listUser.findIndex(user => user.id === action.user.id);
                if (index !== -1) {
                    userEditUpdate = state.listUser[index];
                    state.disabled = true;
                    state.disabledUpdate = false;
                }
                return {...state, userEdit: userEditUpdate, disabled: state.disabled, disabledUpdate: state.disabledUpdate }
            }
        case UPDATE_USER:
            {
                console.log('user cap nhap ', action)
                let listUserUpdate = [...state.listUser];
                let index = listUserUpdate.findIndex(user => user.id === action.userUpdate.id);
                if (index !== -1) {
                    listUserUpdate[index] = action.userUpdate;
                    state.disabled = false;
                }
                return {...state, listUser: listUserUpdate, disabled: state.disabled }
            }
        case DELETE_USER:
            {
                console.log('user bi xoa', action);
                return {...state, listUser: state.listUser.filter(user => user.id !== action.user.id) }
            }
        default:
            return {...state }
    }
}

export default userManagerReducer;