import {writable} from "svelte/store";

export const agendas = writable({
    "interviews": [
        {
            "id": 19,
            "personCompanyId": 47,
            "personApplicationId": 82,
            "candidateName": "Micky Joe",
            "jobTitle": "Developer",
            "jobId": 34,
            "type": 2,
            "location": null,
            "timeZone": "Europe/London",
            "attendees": [
                {
                    "id": 0,
                    "userId": null,
                    "applicationId": 82,
                    "status": 2,
                    "externalEmail": null,
                    "firstName": "Micky",
                    "lastName": "Joe",
                    "fullName": "Micky Joe <span class=\"pos--rel z-0\">(Candidate)</span>",
                    "organizer": false,
                    "inviteIdentifier": "e01327406a08b6d2",
                    "$$hashKey": "object:63"
                },
                {
                    "id": 0,
                    "userId": 1,
                    "applicationId": null,
                    "status": 2,
                    "externalEmail": null,
                    "firstName": "Test",
                    "lastName": "Admin",
                    "fullName": "Test Admin",
                    "organizer": true,
                    "inviteIdentifier": "11da1d63ca0bb88e",
                    "$$hashKey": "object:64"
                }
            ],
            "startTime": "2021-06-26T14:30:00Z",
            "startTimeUTC": "2021-06-27T16:00:00",
            "endTime": "2021-06-27T16:30:00",
            "endTimeUTC": "2021-06-27T16:30:00",
            "hasMoreInfo": false,
            "cancelled": true,
            "organiser": {
                "id": 0,
                "userId": 1,
                "applicationId": null,
                "status": 1,
                "externalEmail": null,
                "firstName": "Test",
                "lastName": "Admin",
                "fullName": "Test Admin",
                "organizer": true,
                "inviteIdentifier": null
            },
            "includeCV": false,
            "startHour": 0,
            "startMinute": 0,
            "endHour": 0,
            "endMinute": 0,
            "noteForCandidate": "",
            "noteForAdmins": "",
            "title": "Interview with Micky Joe",
            "canView": true,
            "$$hashKey": "object:56"
        },
        {
            "id": 22,
            "personCompanyId": 33,
            "personApplicationId": 55,
            "candidateName": "conor o shea",
            "jobTitle": "Developer",
            "jobId": 34,
            "type": 2,
            "location": null,
            "timeZone": "Europe/London",
            "attendees": [
                {
                    "id": 0,
                    "userId": null,
                    "applicationId": 55,
                    "status": 4,
                    "externalEmail": null,
                    "firstName": "conor",
                    "lastName": "o shea",
                    "fullName": "conor o shea <span class=\"pos--rel z-0\">(Candidate)</span>",
                    "organizer": false,
                    "inviteIdentifier": "b1d7712e1bb7a050",
                    "$$hashKey": "object:77"
                },
                {
                    "id": 0,
                    "userId": 44,
                    "applicationId": null,
                    "status": 2,
                    "externalEmail": null,
                    "firstName": "new",
                    "lastName": "user",
                    "fullName": "new user <span class=\"pos--rel z-0\">(You)</span>",
                    "organizer": true,
                    "inviteIdentifier": "a6b9d3ac5a01977e",
                    "$$hashKey": "object:78"
                }
            ],
            "startTime": "2021-06-26T14:30:00Z",
            "startTimeUTC": "2021-05-27T14:30:00",
            "endTime": "2021-05-27T16:00:00",
            "endTimeUTC": "2021-05-27T15:00:00",
            "hasMoreInfo": false,
            "cancelled": false,
            "organiser": {
                "id": 0,
                "userId": 44,
                "applicationId": null,
                "status": 1,
                "externalEmail": null,
                "firstName": "new",
                "lastName": "user",
                "fullName": "new user",
                "organizer": true,
                "inviteIdentifier": null
            },
            "includeCV": false,
            "startHour": 0,
            "startMinute": 0,
            "endHour": 0,
            "endMinute": 0,
            "noteForCandidate": "",
            "noteForAdmins": "",
            "title": "Interview with Conor O Shea",
            "canView": true,
            "$$hashKey": "object:57"
        },
        {
            "id": 22,
            "personCompanyId": 33,
            "personApplicationId": 55,
            "candidateName": "conor o shea",
            "jobTitle": "Developer",
            "jobId": 34,
            "type": 2,
            "location": null,
            "timeZone": "Europe/London",
            "attendees": [
                {
                    "id": 0,
                    "userId": null,
                    "applicationId": 55,
                    "status": 4,
                    "externalEmail": null,
                    "firstName": "conor",
                    "lastName": "o shea",
                    "fullName": "conor o shea <span class=\"pos--rel z-0\">(Candidate)</span>",
                    "organizer": false,
                    "inviteIdentifier": "b1d7712e1bb7a050",
                    "$$hashKey": "object:77"
                },
                {
                    "id": 0,
                    "userId": 44,
                    "applicationId": null,
                    "status": 2,
                    "externalEmail": null,
                    "firstName": "new",
                    "lastName": "user",
                    "fullName": "new user <span class=\"pos--rel z-0\">(You)</span>",
                    "organizer": true,
                    "inviteIdentifier": "a6b9d3ac5a01977e",
                    "$$hashKey": "object:78"
                }
            ],
            "startTime": "2021-06-26T14:30:00Z",
            "startTimeUTC": "2021-06-27T08:30:00",
            "endTime": "2021-06-27T08:00:00",
            "endTimeUTC": "2021-06-27T08:00:00",
            "hasMoreInfo": false,
            "cancelled": false,
            "organiser": {
                "id": 0,
                "userId": 44,
                "applicationId": null,
                "status": 1,
                "externalEmail": null,
                "firstName": "new",
                "lastName": "user",
                "fullName": "new user",
                "organizer": true,
                "inviteIdentifier": null
            },
            "includeCV": false,
            "startHour": 0,
            "startMinute": 0,
            "endHour": 0,
            "endMinute": 0,
            "noteForCandidate": "",
            "noteForAdmins": "",
            "title": "Interview with Conor O Shea",
            "canView": true,
            "$$hashKey": "object:57"
        }
    ],
    "calendars": [
        {
            "id": "HireHive Interviews",
            "calendarId": null,
            "name": "Interviews Agenda",
            "title": null,
            "start": "2021-06-26T14:30:00Z",
            "end": null,
            "category": null,
            "dueDateClass": null,
            "location": null,
            "attendees": null,
            "recurrenceRule": false,
            "isPending": false,
            "isFocused": false,
            "isVisible": false,
            "isReadOnly": false,
            "isPrivate": false,
            "isAllDay": false,
            "color": "#373738",
            "bgColor": "#f5c400",
            "dragBgColor": "#f5c400",
            "borderColor": "#f5c400",
            "customStyle": null,
            "accessRole": null,
            "eventsFetched": false,
            "type": null,
            "isOwner": false,
            "state": null
        }
    ],
    "events": [
        {
            "id": "22",
            "calendarId": "HireHive Interviews",
            "name": null,
            "title": "Interview with Conor O Shea",
            "start": "2021-06-26T14:30:00Z",
            "end": "2021-05-26T15:00:00Z",
            "category": "time",
            "dueDateClass": null,
            "location": null,
            "attendees": [],
            "recurrenceRule": false,
            "isPending": false,
            "isFocused": false,
            "isVisible": true,
            "isReadOnly": true,
            "isPrivate": false,
            "isAllDay": false,
            "color": "#373738",
            "bgColor": "#f5c400",
            "dragBgColor": "#f5c400",
            "borderColor": "#f5c400",
            "customStyle": null,
            "accessRole": null,
            "eventsFetched": false,
            "type": null,
            "isOwner": false,
            "state": null
        },
        {
            "id": "21",
            "calendarId": "HireHive Interviews",
            "name": null,
            "title": "Interview with Conor O Shea",
            "start": "2021-06-26T14:30:00Z",
            "end": "2021-05-28T16:00:00Z",
            "category": "time",
            "dueDateClass": null,
            "location": null,
            "attendees": [],
            "recurrenceRule": false,
            "isPending": false,
            "isFocused": false,
            "isVisible": true,
            "isReadOnly": true,
            "isPrivate": false,
            "isAllDay": false,
            "color": "#373738",
            "bgColor": "#f5c400",
            "dragBgColor": "#f5c400",
            "borderColor": "#f5c400",
            "customStyle": null,
            "accessRole": null,
            "eventsFetched": false,
            "type": null,
            "isOwner": false,
            "state": null
        },
        {
            "id": "20",
            "calendarId": "HireHive Interviews",
            "name": null,
            "title": "Interview with Conor O Shea",
            "start": "2021-06-26T14:30:00Z",
            "end": "2021-05-27T13:15:00Z",
            "category": "time",
            "dueDateClass": null,
            "location": "OnSite",
            "attendees": [],
            "recurrenceRule": false,
            "isPending": false,
            "isFocused": false,
            "isVisible": true,
            "isReadOnly": true,
            "isPrivate": false,
            "isAllDay": false,
            "color": "#373738",
            "bgColor": "#f5c400",
            "dragBgColor": "#f5c400",
            "borderColor": "#f5c400",
            "customStyle": null,
            "accessRole": null,
            "eventsFetched": false,
            "type": null,
            "isOwner": false,
            "state": null
        },
        {
            "id": "19",
            "calendarId": "HireHive Interviews",
            "name": null,
            "title": "Interview with Micky Joe",
            "start": "2021-06-26T14:30:00Z",
            "end": "2021-06-26T11:30:00Z",
            "category": "time",
            "dueDateClass": null,
            "location": null,
            "attendees": [],
            "recurrenceRule": false,
            "isPending": false,
            "isFocused": false,
            "isVisible": true,
            "isReadOnly": true,
            "isPrivate": false,
            "isAllDay": false,
            "color": "#373738",
            "bgColor": "#f5c400",
            "dragBgColor": "#f5c400",
            "borderColor": "#f5c400",
            "customStyle": null,
            "accessRole": null,
            "eventsFetched": false,
            "type": null,
            "isOwner": false,
            "state": null
        }
    ]
})

export let otherApplications = [
    {
        "jobId": 33,
        "personApplicationId": 76,
        "jobTitle": "Sample 1",
        "parentStatusId": 2,
        "date": "27th Jan 2021",
        "statusName": "New",
        "canView": true,
        "$$hashKey": "object:176"
    },
    {
        "jobId": 33,
        "personApplicationId": 77,
        "jobTitle": "Sample 1",
        "parentStatusId": 2,
        "date": "27th Jan 2021",
        "statusName": "New",
        "canView": true,
        "$$hashKey": "object:175"
    },
    {
        "jobId": 33,
        "personApplicationId": 78,
        "jobTitle": "Sample 1",
        "parentStatusId": 2,
        "date": "27th Jan 2021",
        "statusName": "New",
        "canView": true,
        "$$hashKey": "object:174"
    },
    {
        "jobId": 33,
        "personApplicationId": 79,
        "jobTitle": "Sample 1",
        "parentStatusId": 2,
        "date": "27th Jan 2021",
        "statusName": "New",
        "canView": true,
        "$$hashKey": "object:173"
    },
    {
        "jobId": 33,
        "personApplicationId": 80,
        "jobTitle": "Sample 1",
        "parentStatusId": 2,
        "date": "27th Jan 2021",
        "statusName": "New",
        "canView": true,
        "$$hashKey": "object:172"
    }
]