import {writable} from "svelte/store"; 

export const hiringTeam = writable([
    {
        "editable": true,
        "jobCount": 1,
        "permissions": [
            {
                "type": "SENSITIVE_INFO",
                "allowed": false
            }
        ],
        "reviewerStatuses": [
            {
                "id": 5,
                "parentName": null,
                "workflowStatusName": "WorkFlow4",
                "parentStatusId": 4,
                "workflowStatusId": 5,
                "allowed": false
            },
            {
                "id": 7,
                "parentName": null,
                "workflowStatusName": "WorkFlow6",
                "parentStatusId": 4,
                "workflowStatusId": 7,
                "allowed": false
            },
            {
                "id": 8,
                "parentName": null,
                "workflowStatusName": "WorkFlow7",
                "parentStatusId": 4,
                "workflowStatusId": 8,
                "allowed": false
            },
            {
                "id": 9,
                "parentName": null,
                "workflowStatusName": "WorkFlow8",
                "parentStatusId": 4,
                "workflowStatusId": 9,
                "allowed": false
            },
            {
                "id": 10,
                "parentName": null,
                "workflowStatusName": "WorkFlow9",
                "parentStatusId": 4,
                "workflowStatusId": 10,
                "allowed": false
            },
            {
                "id": 12,
                "parentName": null,
                "workflowStatusName": "On board",
                "parentStatusId": 6,
                "workflowStatusId": 12,
                "allowed": true
            },
            {
                "id": 13,
                "parentName": null,
                "workflowStatusName": "CV Review by Practice lead",
                "parentStatusId": 3,
                "workflowStatusId": 13,
                "allowed": false
            },
            {
                "id": 14,
                "parentName": null,
                "workflowStatusName": "no",
                "parentStatusId": 1,
                "workflowStatusId": 14,
                "allowed": false
            },
            {
                "id": 15,
                "parentName": null,
                "workflowStatusName": "Screening 2",
                "parentStatusId": 3,
                "workflowStatusId": 15,
                "allowed": false
            },
            {
                "id": 1,
                "parentName": "Rejected",
                "workflowStatusName": null,
                "parentStatusId": 1,
                "workflowStatusId": null,
                "allowed": false
            },
            {
                "id": 2,
                "parentName": "New",
                "workflowStatusName": null,
                "parentStatusId": 2,
                "workflowStatusId": null,
                "allowed": false
            },
            {
                "id": 3,
                "parentName": "Screening",
                "workflowStatusName": null,
                "parentStatusId": 3,
                "workflowStatusId": null,
                "allowed": false
            },
            {
                "id": 4,
                "parentName": "Interviewing",
                "workflowStatusName": null,
                "parentStatusId": 4,
                "workflowStatusId": null,
                "allowed": false
            },
            {
                "id": 5,
                "parentName": "Offered",
                "workflowStatusName": null,
                "parentStatusId": 5,
                "workflowStatusId": null,
                "allowed": false
            },
            {
                "id": 6,
                "parentName": "Hired",
                "workflowStatusName": null,
                "parentStatusId": 6,
                "workflowStatusId": null,
                "allowed": true
            }
        ],
        "jobId": 0,
        "hasPermission": false,
        "id": 46,
        "firstName": "Conor",
        "lastName": "O Shea",
        "picUrl": null,
        "email": "hide@profile.com",
        "typeId": 6,
        "categoryId": null,
        "categoryName": "Product",
        "logins": [
            "Password"
        ],
        "linkedUserCandidates": [],
        "defaultPermissions": [
            {
                "type": "SENSITIVE_INFO",
                "allowed": false
            }
        ],
        "defaultType": 6
    },
    {
        "editable": true,
        "jobCount": 2,
        "permissions": [
            {
                "type": "SENSITIVE_INFO",
                "allowed": false
            }
        ],
        "reviewerStatuses": [
            {
                "id": 5,
                "parentName": null,
                "workflowStatusName": "WorkFlow4",
                "parentStatusId": 4,
                "workflowStatusId": 5,
                "allowed": true
            },
            {
                "id": 7,
                "parentName": null,
                "workflowStatusName": "WorkFlow6",
                "parentStatusId": 4,
                "workflowStatusId": 7,
                "allowed": false
            },
            {
                "id": 8,
                "parentName": null,
                "workflowStatusName": "WorkFlow7",
                "parentStatusId": 4,
                "workflowStatusId": 8,
                "allowed": false
            },
            {
                "id": 9,
                "parentName": null,
                "workflowStatusName": "WorkFlow8",
                "parentStatusId": 4,
                "workflowStatusId": 9,
                "allowed": false
            },
            {
                "id": 10,
                "parentName": null,
                "workflowStatusName": "WorkFlow9",
                "parentStatusId": 4,
                "workflowStatusId": 10,
                "allowed": false
            },
            {
                "id": 12,
                "parentName": null,
                "workflowStatusName": "On board",
                "parentStatusId": 6,
                "workflowStatusId": 12,
                "allowed": true
            },
            {
                "id": 13,
                "parentName": null,
                "workflowStatusName": "CV Review by Practice lead",
                "parentStatusId": 3,
                "workflowStatusId": 13,
                "allowed": true
            },
            {
                "id": 14,
                "parentName": null,
                "workflowStatusName": "no",
                "parentStatusId": 1,
                "workflowStatusId": 14,
                "allowed": false
            },
            {
                "id": 15,
                "parentName": null,
                "workflowStatusName": "Screening 2",
                "parentStatusId": 3,
                "workflowStatusId": 15,
                "allowed": true
            },
            {
                "id": 1,
                "parentName": "Rejected",
                "workflowStatusName": null,
                "parentStatusId": 1,
                "workflowStatusId": null,
                "allowed": false
            },
            {
                "id": 2,
                "parentName": "New",
                "workflowStatusName": null,
                "parentStatusId": 2,
                "workflowStatusId": null,
                "allowed": false
            },
            {
                "id": 3,
                "parentName": "Screening",
                "workflowStatusName": null,
                "parentStatusId": 3,
                "workflowStatusId": null,
                "allowed": false
            },
            {
                "id": 4,
                "parentName": "Interviewing",
                "workflowStatusName": null,
                "parentStatusId": 4,
                "workflowStatusId": null,
                "allowed": false
            },
            {
                "id": 5,
                "parentName": "Offered",
                "workflowStatusName": null,
                "parentStatusId": 5,
                "workflowStatusId": null,
                "allowed": false
            },
            {
                "id": 6,
                "parentName": "Hired",
                "workflowStatusName": null,
                "parentStatusId": 6,
                "workflowStatusId": null,
                "allowed": false
            }
        ],
        "jobId": 0,
        "hasPermission": false,
        "id": 44,
        "firstName": "new",
        "lastName": "user",
        "picUrl": null,
        "email": "hiredUser@hire.com",
        "typeId": 6,
        "categoryId": null,
        "categoryName": "Product",
        "logins": [
            "Password"
        ],
        "linkedUserCandidates": [],
        "defaultPermissions": [
            {
                "type": "SENSITIVE_INFO",
                "allowed": false
            }
        ],
        "defaultType": 6
    },
    {
        "editable": true,
        "jobCount": 1,
        "permissions": [
            {
                "type": "SENSITIVE_INFO",
                "allowed": false
            }
        ],
        "reviewerStatuses": [
            {
                "id": 5,
                "parentName": null,
                "workflowStatusName": "WorkFlow4",
                "parentStatusId": 4,
                "workflowStatusId": 5,
                "allowed": false
            },
            {
                "id": 7,
                "parentName": null,
                "workflowStatusName": "WorkFlow6",
                "parentStatusId": 4,
                "workflowStatusId": 7,
                "allowed": false
            },
            {
                "id": 8,
                "parentName": null,
                "workflowStatusName": "WorkFlow7",
                "parentStatusId": 4,
                "workflowStatusId": 8,
                "allowed": false
            },
            {
                "id": 9,
                "parentName": null,
                "workflowStatusName": "WorkFlow8",
                "parentStatusId": 4,
                "workflowStatusId": 9,
                "allowed": false
            },
            {
                "id": 10,
                "parentName": null,
                "workflowStatusName": "WorkFlow9",
                "parentStatusId": 4,
                "workflowStatusId": 10,
                "allowed": false
            },
            {
                "id": 12,
                "parentName": null,
                "workflowStatusName": "On board",
                "parentStatusId": 6,
                "workflowStatusId": 12,
                "allowed": true
            },
            {
                "id": 13,
                "parentName": null,
                "workflowStatusName": "CV Review by Practice lead",
                "parentStatusId": 3,
                "workflowStatusId": 13,
                "allowed": false
            },
            {
                "id": 14,
                "parentName": null,
                "workflowStatusName": "no",
                "parentStatusId": 1,
                "workflowStatusId": 14,
                "allowed": false
            },
            {
                "id": 15,
                "parentName": null,
                "workflowStatusName": "Screening 2",
                "parentStatusId": 3,
                "workflowStatusId": 15,
                "allowed": false
            },
            {
                "id": 1,
                "parentName": "Rejected",
                "workflowStatusName": null,
                "parentStatusId": 1,
                "workflowStatusId": null,
                "allowed": false
            },
            {
                "id": 2,
                "parentName": "New",
                "workflowStatusName": null,
                "parentStatusId": 2,
                "workflowStatusId": null,
                "allowed": false
            },
            {
                "id": 3,
                "parentName": "Screening",
                "workflowStatusName": null,
                "parentStatusId": 3,
                "workflowStatusId": null,
                "allowed": false
            },
            {
                "id": 4,
                "parentName": "Interviewing",
                "workflowStatusName": null,
                "parentStatusId": 4,
                "workflowStatusId": null,
                "allowed": false
            },
            {
                "id": 5,
                "parentName": "Offered",
                "workflowStatusName": null,
                "parentStatusId": 5,
                "workflowStatusId": null,
                "allowed": false
            },
            {
                "id": 6,
                "parentName": "Hired",
                "workflowStatusName": null,
                "parentStatusId": 6,
                "workflowStatusId": null,
                "allowed": true
            }
        ],
        "jobId": 0,
        "hasPermission": false,
        "id": 48,
        "firstName": "review",
        "lastName": "er",
        "picUrl": null,
        "email": "conor@hirehive.com",
        "typeId": 6,
        "categoryId": null,
        "categoryName": "Product",
        "logins": [],
        "linkedUserCandidates": [],
        "defaultPermissions": [
            {
                "type": "SENSITIVE_INFO",
                "allowed": false
            }
        ],
        "defaultType": 6
    },
    {
        "editable": true,
        "jobCount": 0,
        "permissions": [
            {
                "type": "MESSAGE_CANDIDATE",
                "allowed": true
            },
            {
                "type": "MANAGE_JOBS",
                "allowed": true
            },
            {
                "type": "JOB_PUBLISH",
                "allowed": true
            },
            {
                "type": "SENSITIVE_INFO",
                "allowed": true
            },
            {
                "type": "SETTINGS_JOBBOARD",
                "allowed": false
            }
        ],
        "reviewerStatuses": [
            {
                "id": 5,
                "parentName": null,
                "workflowStatusName": "WorkFlow4",
                "parentStatusId": 4,
                "workflowStatusId": 5,
                "allowed": false
            },
            {
                "id": 7,
                "parentName": null,
                "workflowStatusName": "WorkFlow6",
                "parentStatusId": 4,
                "workflowStatusId": 7,
                "allowed": false
            },
            {
                "id": 8,
                "parentName": null,
                "workflowStatusName": "WorkFlow7",
                "parentStatusId": 4,
                "workflowStatusId": 8,
                "allowed": false
            },
            {
                "id": 9,
                "parentName": null,
                "workflowStatusName": "WorkFlow8",
                "parentStatusId": 4,
                "workflowStatusId": 9,
                "allowed": false
            },
            {
                "id": 10,
                "parentName": null,
                "workflowStatusName": "WorkFlow9",
                "parentStatusId": 4,
                "workflowStatusId": 10,
                "allowed": false
            },
            {
                "id": 12,
                "parentName": null,
                "workflowStatusName": "On board",
                "parentStatusId": 6,
                "workflowStatusId": 12,
                "allowed": false
            },
            {
                "id": 13,
                "parentName": null,
                "workflowStatusName": "CV Review by Practice lead",
                "parentStatusId": 3,
                "workflowStatusId": 13,
                "allowed": false
            },
            {
                "id": 14,
                "parentName": null,
                "workflowStatusName": "no",
                "parentStatusId": 1,
                "workflowStatusId": 14,
                "allowed": false
            },
            {
                "id": 15,
                "parentName": null,
                "workflowStatusName": "Screening 2",
                "parentStatusId": 3,
                "workflowStatusId": 15,
                "allowed": false
            },
            {
                "id": 1,
                "parentName": "Rejected",
                "workflowStatusName": null,
                "parentStatusId": 1,
                "workflowStatusId": null,
                "allowed": false
            },
            {
                "id": 2,
                "parentName": "New",
                "workflowStatusName": null,
                "parentStatusId": 2,
                "workflowStatusId": null,
                "allowed": false
            },
            {
                "id": 3,
                "parentName": "Screening",
                "workflowStatusName": null,
                "parentStatusId": 3,
                "workflowStatusId": null,
                "allowed": false
            },
            {
                "id": 4,
                "parentName": "Interviewing",
                "workflowStatusName": null,
                "parentStatusId": 4,
                "workflowStatusId": null,
                "allowed": false
            },
            {
                "id": 5,
                "parentName": "Offered",
                "workflowStatusName": null,
                "parentStatusId": 5,
                "workflowStatusId": null,
                "allowed": false
            },
            {
                "id": 6,
                "parentName": "Hired",
                "workflowStatusName": null,
                "parentStatusId": 6,
                "workflowStatusId": null,
                "allowed": false
            }
        ],
        "jobId": 0,
        "hasPermission": false,
        "id": 2,
        "firstName": "Test",
        "lastName": "Test",
        "picUrl": null,
        "email": "TestHR@gmail.com",
        "typeId": 4,
        "categoryId": null,
        "categoryName": "Tech",
        "logins": [],
        "linkedUserCandidates": [],
        "defaultPermissions": [
            {
                "type": "MESSAGE_CANDIDATE",
                "allowed": true
            },
            {
                "type": "MANAGE_JOBS",
                "allowed": true
            },
            {
                "type": "JOB_PUBLISH",
                "allowed": true
            },
            {
                "type": "SENSITIVE_INFO",
                "allowed": true
            },
            {
                "type": "SETTINGS_JOBBOARD",
                "allowed": false
            }
        ],
        "defaultType": 4
    },
    {
        "editable": true,
        "jobCount": 0,
        "permissions": [
            {
                "type": "MESSAGE_CANDIDATE",
                "allowed": true
            },
            {
                "type": "MANAGE_JOBS",
                "allowed": true
            },
            {
                "type": "JOB_PUBLISH",
                "allowed": true
            },
            {
                "type": "SENSITIVE_INFO",
                "allowed": false
            },
            {
                "type": "SETTINGS_JOBBOARD",
                "allowed": false
            }
        ],
        "reviewerStatuses": [
            {
                "id": 5,
                "parentName": null,
                "workflowStatusName": "WorkFlow4",
                "parentStatusId": 4,
                "workflowStatusId": 5,
                "allowed": false
            },
            {
                "id": 7,
                "parentName": null,
                "workflowStatusName": "WorkFlow6",
                "parentStatusId": 4,
                "workflowStatusId": 7,
                "allowed": false
            },
            {
                "id": 8,
                "parentName": null,
                "workflowStatusName": "WorkFlow7",
                "parentStatusId": 4,
                "workflowStatusId": 8,
                "allowed": false
            },
            {
                "id": 9,
                "parentName": null,
                "workflowStatusName": "WorkFlow8",
                "parentStatusId": 4,
                "workflowStatusId": 9,
                "allowed": false
            },
            {
                "id": 10,
                "parentName": null,
                "workflowStatusName": "WorkFlow9",
                "parentStatusId": 4,
                "workflowStatusId": 10,
                "allowed": false
            },
            {
                "id": 12,
                "parentName": null,
                "workflowStatusName": "On board",
                "parentStatusId": 6,
                "workflowStatusId": 12,
                "allowed": false
            },
            {
                "id": 13,
                "parentName": null,
                "workflowStatusName": "CV Review by Practice lead",
                "parentStatusId": 3,
                "workflowStatusId": 13,
                "allowed": false
            },
            {
                "id": 14,
                "parentName": null,
                "workflowStatusName": "no",
                "parentStatusId": 1,
                "workflowStatusId": 14,
                "allowed": false
            },
            {
                "id": 15,
                "parentName": null,
                "workflowStatusName": "Screening 2",
                "parentStatusId": 3,
                "workflowStatusId": 15,
                "allowed": false
            },
            {
                "id": 1,
                "parentName": "Rejected",
                "workflowStatusName": null,
                "parentStatusId": 1,
                "workflowStatusId": null,
                "allowed": false
            },
            {
                "id": 2,
                "parentName": "New",
                "workflowStatusName": null,
                "parentStatusId": 2,
                "workflowStatusId": null,
                "allowed": false
            },
            {
                "id": 3,
                "parentName": "Screening",
                "workflowStatusName": null,
                "parentStatusId": 3,
                "workflowStatusId": null,
                "allowed": false
            },
            {
                "id": 4,
                "parentName": "Interviewing",
                "workflowStatusName": null,
                "parentStatusId": 4,
                "workflowStatusId": null,
                "allowed": false
            },
            {
                "id": 5,
                "parentName": "Offered",
                "workflowStatusName": null,
                "parentStatusId": 5,
                "workflowStatusId": null,
                "allowed": false
            },
            {
                "id": 6,
                "parentName": "Hired",
                "workflowStatusName": null,
                "parentStatusId": 6,
                "workflowStatusId": null,
                "allowed": false
            }
        ],
        "jobId": 0,
        "hasPermission": false,
        "id": 25,
        "firstName": "test",
        "lastName": "o shea",
        "picUrl": null,
        "email": "cdcdcdc@gmail.com",
        "typeId": 4,
        "categoryId": null,
        "categoryName": "Tech",
        "logins": [],
        "linkedUserCandidates": [],
        "defaultPermissions": [
            {
                "type": "MESSAGE_CANDIDATE",
                "allowed": true
            },
            {
                "type": "MANAGE_JOBS",
                "allowed": true
            },
            {
                "type": "JOB_PUBLISH",
                "allowed": true
            },
            {
                "type": "SENSITIVE_INFO",
                "allowed": false
            },
            {
                "type": "SETTINGS_JOBBOARD",
                "allowed": false
            }
        ],
        "defaultType": 4
    },
    {
        "editable": true,
        "jobCount": 0,
        "permissions": [
            {
                "type": "MESSAGE_CANDIDATE",
                "allowed": true
            },
            {
                "type": "MANAGE_JOBS",
                "allowed": true
            },
            {
                "type": "JOB_PUBLISH",
                "allowed": true
            },
            {
                "type": "SENSITIVE_INFO",
                "allowed": false
            },
            {
                "type": "SETTINGS_JOBBOARD",
                "allowed": false
            }
        ],
        "reviewerStatuses": [
            {
                "id": 5,
                "parentName": null,
                "workflowStatusName": "WorkFlow4",
                "parentStatusId": 4,
                "workflowStatusId": 5,
                "allowed": false
            },
            {
                "id": 7,
                "parentName": null,
                "workflowStatusName": "WorkFlow6",
                "parentStatusId": 4,
                "workflowStatusId": 7,
                "allowed": false
            },
            {
                "id": 8,
                "parentName": null,
                "workflowStatusName": "WorkFlow7",
                "parentStatusId": 4,
                "workflowStatusId": 8,
                "allowed": false
            },
            {
                "id": 9,
                "parentName": null,
                "workflowStatusName": "WorkFlow8",
                "parentStatusId": 4,
                "workflowStatusId": 9,
                "allowed": false
            },
            {
                "id": 10,
                "parentName": null,
                "workflowStatusName": "WorkFlow9",
                "parentStatusId": 4,
                "workflowStatusId": 10,
                "allowed": false
            },
            {
                "id": 12,
                "parentName": null,
                "workflowStatusName": "On board",
                "parentStatusId": 6,
                "workflowStatusId": 12,
                "allowed": false
            },
            {
                "id": 13,
                "parentName": null,
                "workflowStatusName": "CV Review by Practice lead",
                "parentStatusId": 3,
                "workflowStatusId": 13,
                "allowed": false
            },
            {
                "id": 14,
                "parentName": null,
                "workflowStatusName": "no",
                "parentStatusId": 1,
                "workflowStatusId": 14,
                "allowed": false
            },
            {
                "id": 15,
                "parentName": null,
                "workflowStatusName": "Screening 2",
                "parentStatusId": 3,
                "workflowStatusId": 15,
                "allowed": false
            },
            {
                "id": 1,
                "parentName": "Rejected",
                "workflowStatusName": null,
                "parentStatusId": 1,
                "workflowStatusId": null,
                "allowed": false
            },
            {
                "id": 2,
                "parentName": "New",
                "workflowStatusName": null,
                "parentStatusId": 2,
                "workflowStatusId": null,
                "allowed": false
            },
            {
                "id": 3,
                "parentName": "Screening",
                "workflowStatusName": null,
                "parentStatusId": 3,
                "workflowStatusId": null,
                "allowed": false
            },
            {
                "id": 4,
                "parentName": "Interviewing",
                "workflowStatusName": null,
                "parentStatusId": 4,
                "workflowStatusId": null,
                "allowed": false
            },
            {
                "id": 5,
                "parentName": "Offered",
                "workflowStatusName": null,
                "parentStatusId": 5,
                "workflowStatusId": null,
                "allowed": false
            },
            {
                "id": 6,
                "parentName": "Hired",
                "workflowStatusName": null,
                "parentStatusId": 6,
                "workflowStatusId": null,
                "allowed": false
            }
        ],
        "jobId": 0,
        "hasPermission": false,
        "id": 34,
        "firstName": "test",
        "lastName": "o shea",
        "picUrl": null,
        "email": "cdcdccd@gmail.ocm",
        "typeId": 4,
        "categoryId": null,
        "categoryName": "Finance",
        "logins": [],
        "linkedUserCandidates": [],
        "defaultPermissions": [
            {
                "type": "MESSAGE_CANDIDATE",
                "allowed": true
            },
            {
                "type": "MANAGE_JOBS",
                "allowed": true
            },
            {
                "type": "JOB_PUBLISH",
                "allowed": true
            },
            {
                "type": "SENSITIVE_INFO",
                "allowed": false
            },
            {
                "type": "SETTINGS_JOBBOARD",
                "allowed": false
            }
        ],
        "defaultType": 4
    }
]);