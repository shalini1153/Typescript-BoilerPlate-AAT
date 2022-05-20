import { injectable } from "inversify";
import { IUser } from "../../models/user/IUser";
import { users } from "../../constants/ResponseConstant";

export interface IUserService {
    getAll(): IUser[];
    getUserById(id: number): IUser;
    searchByGroup(groupName: string): IUser[];
}

@injectable()
export class UserService implements IUserService {
    getAll = (): IUser[] => {
        return users;
    };

    getUserById = (id: number): IUser => {
        return users.filter(user => {
            return user.id === id;
        })[0];
    };

    searchByGroup = (groupName: string): IUser[] => {
        return users.filter(user => {
            return user.group_name === groupName;
        });
    };
}
