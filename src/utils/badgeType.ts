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

enum JobStatusBadgeType {
    DRAFTED = "gray",
    PUBLISHED = "green",
    CLOSED = "pink",
    INTERNAL = "yellow",
}
export enum JobStatusType {
    DRAFTED = "Drafted",
    PUBLISHED = "Published",
    CLOSED = "Closed",
    INTERNAL = "Internal",
}

export const jobBadgeType = (type: JobStatusType) : JobStatusBadgeType => {
    let result: JobStatusBadgeType = JobStatusBadgeType.DRAFTED;
    switch (type) {
        case JobStatusType.DRAFTED:
            result = JobStatusBadgeType.DRAFTED
            break;
        
        case JobStatusType.PUBLISHED:
            result = JobStatusBadgeType.PUBLISHED ;
            break;

        case JobStatusType.CLOSED:
            result = JobStatusBadgeType.CLOSED;
            break;
        case JobStatusType.INTERNAL:
            result = JobStatusBadgeType.INTERNAL;
            break;
    }
    return result;
} 

export const getRandomBadgeColor = () : string => {
   const colors = ["green" , "gray" , "red" , "yellow" , "blue" , "indigo" , "purple" , "pink"]
   return colors[Math.floor(Math.random() * colors.length)];
}