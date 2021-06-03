export enum userType {
    PRIMARY_ADMIN = 1,
    ADMIN = 2,
    USER = 4,
    REVIEWER = 6,
}

const adminPermissions = [
    {
        label: "Manage team members",
        type: "MANAGE_TEAM",
        value: "MANAGE_TEAM",
        allowed: false
    },
    {
        label: "Manage subscription",
        type: "SETTINGS_BILLING",
        value: "SETTINGS_BILLING",
        allowed: false
    },
    {
        label: "Can manage job boards and place sponsored postings",
        type: "SETTINGS_JOBBOARD",
        value: "SETTINGS_JOBBOARD",
        allowed: false
    },
    {
        label: "Access to restricted candidate information",
        type: "SENSITIVE_INFO",
        value: "SENSITIVE_INFO",
        allowed: false
    }
];

const hiringMangerPermissions = [
    {
        label: "Send emails to candidates",
        type: "MESSAGE_CANDIDATE",
        value: "MESSAGE_CANDIDATE",
        allowed: true
    },
    {
        label: "Create and edit jobs",
        type: "MANAGE_JOBS",
        value: "MANAGE_JOBS",
        allowed: true
    },
    {
        label: "Publish jobs and assign team members",
        type: "JOB_PUBLISH",
        value: "JOB_PUBLISH",
        allowed: true
    },
    {
        label: "Access to restricted candidate information",
        type: "SENSITIVE_INFO",
        value: "SENSITIVE_INFO",
        allowed: false
    }
];

const reviewerPermissions = [
    {
        label: "Access to restricted candidate information",
        type: "SENSITIVE_INFO",
        value: "SENSITIVE_INFO",
        allowed: false
    }
];