import { DELETE_USER, EDIT_USER, SIGNUP_USER, UPDATE_USER } from "../constants/userManagerConstant";

export const signUpUser = (valueUser) => ({
    type: SIGNUP_USER,
    valueUser,
});
export const deleteUser = (user) => ({
    type: DELETE_USER,
    user,
});
export const editUser = (user) => ({
    type: EDIT_USER,
    user,
});
export const updateUser = (userUpdate) => ({
    type: UPDATE_USER,
    userUpdate,
});