import { userType } from "../types/roles";

enum UserBadgeType {
    admin = "gray",
    reviewer = "pink",
    user = "blue",
    owner = "indigo",
}



export const userBadgeType = (type: userType): UserBadgeType => {
    let result : UserBadgeType = UserBadgeType.admin;
    switch (type) {
        case userType.ADMIN:
            result = UserBadgeType.admin
            break;
        
        case userType.USER:
            result =  UserBadgeType.user;
            break;

        case userType.REVIEWER:
            result = UserBadgeType.reviewer;
            break;
    }

    return result;
}


export const userTypeAsString = (type: userType):string => {
    let result: string = "";
    switch (type) {
        case userType.PRIMARY_ADMIN:
            result = "Primary Admin"
            break;

        case userType.ADMIN:
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

enum CandidateStatusBadgeType {
    new = "gray",
    screening = "pink",
    interviewing = "blue",
    offered = "yellow",
    hired = "green",
}

enum CandidateStatuses {
    new = 2,
    screening = 3,
    interviewing = 4,
    offered = 5,
    hired = 6,
}


export const candidateBadgeType = (type: CandidateStatuses) : CandidateStatusBadgeType => {
    let result: CandidateStatusBadgeType = CandidateStatusBadgeType.new;
    switch (type) {
        case CandidateStatuses.new:
            result = CandidateStatusBadgeType.new
            break;
        
        case CandidateStatuses.screening:
            result = CandidateStatusBadgeType.screening ;
            break;

        case CandidateStatuses.interviewing:
            result = CandidateStatusBadgeType.interviewing;
            break;
        case CandidateStatuses.offered:
            result = CandidateStatusBadgeType.offered;
            break;
            
        case CandidateStatuses.hired:
            result = CandidateStatusBadgeType.hired;
            break;
    }
    
    return result;
} 