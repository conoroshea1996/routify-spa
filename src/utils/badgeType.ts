import { userType } from "../types/roles";

enum BadgeType {
    admin = "gray",
    reviewer = "red",
    user = "blue",
    owner = "indigo",
}



export const userBadgeType = (type: userType): BadgeType => {
    let result : BadgeType = BadgeType.admin;
    switch (type) {
        case userType.ADMIN:
            result = BadgeType.admin
            break;
        
        case userType.USER:
            result =  BadgeType.owner;
            break;

        case userType.REVIEWER:
            result = BadgeType.reviewer;
            break;
    }

    return result;
}


export const userTypeAsString = (type: userType):string => {
    let result: string = "";
    switch (type) {
        case userType.PRIMARY_ADMIN:
            result = "Admin"
            break;
        
        case userType.USER:
            result =  "User";
            break;

        case userType.REVIEWER:
            result = "Reviewer";
            break;
    }
    return result;
}

