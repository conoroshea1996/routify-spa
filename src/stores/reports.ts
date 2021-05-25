import { writable} from "svelte/store";
 

export const overView = writable({
    "data": {
        "views": {
            "dates": [
                "23 Sep 20",
                "30 Sep 20",
                "7 Oct 20",
                "14 Oct 20",
                "21 Oct 20",
                "28 Oct 20",
                "4 Nov 20",
                "11 Nov 20",
                "18 Nov 20",
                "25 Nov 20",
                "2 Dec 20",
                "9 Dec 20",
                "16 Dec 20",
                "23 Dec 20",
                "30 Dec 20",
                "6 Jan 21",
                "13 Jan 21",
                "20 Jan 21",
                "27 Jan 21"
            ],
            "values": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                0,
                3
            ]
        },
        "applications": {
            "dates": [
                "23 Sep 20",
                "30 Sep 20",
                "7 Oct 20",
                "14 Oct 20",
                "21 Oct 20",
                "28 Oct 20",
                "4 Nov 20",
                "11 Nov 20",
                "18 Nov 20",
                "25 Nov 20",
                "2 Dec 20",
                "9 Dec 20",
                "16 Dec 20",
                "23 Dec 20",
                "30 Dec 20",
                "6 Jan 21",
                "13 Jan 21",
                "20 Jan 21",
                "27 Jan 21"
            ],
            "values": [
                1,
                1,
                0,
                2,
                1,
                1,
                2,
                0,
                0,
                0,
                0,
                0,
                4,
                0,
                7,
                0,
                16,
                32,
                7
            ]
        },
        "daysOpen": 128,
        "firstDate": "23rd Sep 2020",
        "lastDate": "29th Jan 2021",
        "totalViews": 4,
        "totalApplications": 74,
        "interviewing": 2,
        "offered": 3,
        "hired": 14
    },
});

export const pipeLine = writable({
    "interviews": 1,
    "views": 0,
    "applications": 0,
    "applied": 51,
    "added": 3,
    "linkedToJob": 0,
    "referred": 0,
    "forwarded": 3,
    "statuses": [
        {
            "note": null,
            "name": "New",
            "parentStatusId": 2,
            "total": 54,
            "movedForward": 28,
            "movedBackwards": 0,
            "noChange": 26,
            "movedForwardDetails": {
                "cv Review by ...": 1,
                "cv Review by Practice lead": 1,
                "hired": 1,
                "screening": 1,
                "screening 2": 1,
                "offered": 1,
                "on board": 1
            },
            "movedBackwardsDetails": {},
            "userProgressDetails": {
                "test Admin": {
                    "movedForward": 28,
                    "movedBackwards": 0,
                    "noChange": 2
                }
            },
            "funnel": "81.82%",
            "className": "status-new",
            "hasForwardDetails": true,
            "hasBackwardsDetails": false,
            "$$hashKey": "object:48"
        },
        {
            "note": null,
            "name": "All Screening Stages",
            "parentStatusId": 3,
            "total": 66,
            "movedForward": 53,
            "movedBackwards": 2,
            "noChange": 11,
            "movedForwardDetails": {
                "cv Review by ...": 2,
                "cv Review by Practice lead": 2,
                "hired": 2,
                "screening": 3,
                "on board": 1
            },
            "movedBackwardsDetails": {
                "new": 2
            },
            "userProgressDetails": {},
            "funnel": "100.00%",
            "className": "status-screening",
            "hasForwardDetails": true,
            "hasBackwardsDetails": true,
            "$$hashKey": "object:49"
        },
        {
            "note": "Screening",
            "name": "Screening",
            "parentStatusId": 3,
            "total": 28,
            "movedForward": 26,
            "movedBackwards": 1,
            "noChange": 1,
            "movedForwardDetails": {
                "cv Review by ...": 1,
                "cv Review by Practice lead": 1,
                "screening": 1,
                "hired": 1
            },
            "movedBackwardsDetails": {
                "new": 1
            },
            "userProgressDetails": {
                "test Admin": {
                    "movedForward": 26,
                    "movedBackwards": 1,
                    "noChange": 1
                }
            },
            "className": "status-screening",
            "hasForwardDetails": true,
            "hasBackwardsDetails": true,
            "$$hashKey": "object:59"
        },
        {
            "note": "CV Review by ...",
            "name": "CV Review by ...",
            "parentStatusId": 3,
            "total": 32,
            "movedForward": 25,
            "movedBackwards": 1,
            "noChange": 6,
            "movedForwardDetails": {
                "cv Review by ...": 1,
                "hired": 1,
                "screening": 1,
                "on board": 1
            },
            "movedBackwardsDetails": {
                "new": 1
            },
            "userProgressDetails": {
                "test Admin": {
                    "movedForward": 25,
                    "movedBackwards": 1,
                    "noChange": 6
                }
            },
            "className": "status-screening",
            "hasForwardDetails": true,
            "hasBackwardsDetails": true,
            "$$hashKey": "object:60"
        },
        {
            "note": "Screening 2",
            "name": "Screening 2",
            "parentStatusId": 3,
            "total": 3,
            "movedForward": 2,
            "movedBackwards": 0,
            "noChange": 1,
            "movedForwardDetails": {
                "cv Review by Practice lead": 1,
                "screening": 1
            },
            "movedBackwardsDetails": {},
            "userProgressDetails": {
                "test Admin": {
                    "movedForward": 2,
                    "movedBackwards": 0,
                    "noChange": 1
                }
            },
            "className": "status-screening",
            "hasForwardDetails": true,
            "hasBackwardsDetails": false,
            "$$hashKey": "object:61"
        },
        {
            "note": "CV Review by Practice lead",
            "name": "CV Review by Practice lead",
            "parentStatusId": 3,
            "total": 3,
            "movedForward": 0,
            "movedBackwards": 0,
            "noChange": 3,
            "movedForwardDetails": {},
            "movedBackwardsDetails": {},
            "userProgressDetails": {
                "test Admin": {
                    "movedForward": 0,
                    "movedBackwards": 0,
                    "noChange": 3
                }
            },
            "className": "status-screening",
            "hasForwardDetails": false,
            "hasBackwardsDetails": false,
            "$$hashKey": "object:62"
        },
        {
            "note": null,
            "name": "Interviewing",
            "parentStatusId": 4,
            "total": 2,
            "movedForward": 0,
            "movedBackwards": 2,
            "noChange": 0,
            "movedForwardDetails": {},
            "movedBackwardsDetails": {
                "cv Review by ...": 1
            },
            "userProgressDetails": {
                "test Admin": {
                    "movedForward": 0,
                    "movedBackwards": 2,
                    "noChange": 0
                }
            },
            "funnel": "3.03%",
            "className": "status-interviewing",
            "hasForwardDetails": false,
            "hasBackwardsDetails": true,
            "$$hashKey": "object:50"
        },
        {
            "note": null,
            "name": "Offered",
            "parentStatusId": 5,
            "total": 3,
            "movedForward": 3,
            "movedBackwards": 0,
            "noChange": 0,
            "movedForwardDetails": {
                "hired": 1,
                "on board": 1
            },
            "movedBackwardsDetails": {},
            "userProgressDetails": {
                "test Admin": {
                    "movedForward": 3,
                    "movedBackwards": 0,
                    "noChange": 0
                }
            },
            "funnel": "4.55%",
            "className": "status-offered",
            "hasForwardDetails": true,
            "hasBackwardsDetails": false,
            "$$hashKey": "object:51"
        },
        {
            "note": null,
            "name": "All Hired Stages",
            "parentStatusId": 6,
            "total": 14,
            "movedForward": 2,
            "movedBackwards": 8,
            "noChange": 4,
            "movedForwardDetails": {
                "hired": 1,
                "on board": 1
            },
            "movedBackwardsDetails": {
                "cv Review by ...": 1,
                "interviewing": 2,
                "screening": 1,
                "offered": 1
            },
            "userProgressDetails": {},
            "funnel": "21.21%",
            "className": "status-hired",
            "hasForwardDetails": true,
            "hasBackwardsDetails": true,
            "$$hashKey": "object:52"
        },
        {
            "note": "Hired",
            "name": "Hired",
            "parentStatusId": 6,
            "total": 7,
            "movedForward": 1,
            "movedBackwards": 3,
            "noChange": 3,
            "movedForwardDetails": {
                "on board": 1
            },
            "movedBackwardsDetails": {
                "interviewing": 1,
                "offered": 1
            },
            "userProgressDetails": {
                "test Admin": {
                    "movedForward": 1,
                    "movedBackwards": 3,
                    "noChange": 3
                }
            },
            "className": "status-hired",
            "hasForwardDetails": true,
            "hasBackwardsDetails": true,
            "$$hashKey": "object:63"
        },
        {
            "note": "On board",
            "name": "On board",
            "parentStatusId": 6,
            "total": 7,
            "movedForward": 1,
            "movedBackwards": 5,
            "noChange": 1,
            "movedForwardDetails": {
                "hired": 1
            },
            "movedBackwardsDetails": {
                "cv Review by ...": 1,
                "interviewing": 1,
                "screening": 1
            },
            "userProgressDetails": {
                "test Admin": {
                    "movedForward": 1,
                    "movedBackwards": 5,
                    "noChange": 1
                }
            },
            "className": "status-hired",
            "hasForwardDetails": true,
            "hasBackwardsDetails": true,
            "$$hashKey": "object:64"
        }
    ],
    "firstDate": "23rd Sep 2020",
    "lastDate": "14th May 2021",
    "statusGroups": []
})

export const timeLine = writable({
    "publishedJobs": 2,
    "jobsFilled": 2,
    "totalHires": 13,
    "averageDaysToHire": 36,
    "jobs": [
        {
            "id": 34,
            "title": "Developer",
            "location": "City",
            "state": null,
            "country": "Canada",
            "jobOwner": "Test Admin",
            "publishedDate": "2021-01-19T08:43:05.217",
            "dateOpened": "2021-01-19T08:43:05.19",
            "dateFilled": "2021-02-24T11:34:02.65",
            "daysToFill": 36,
            "totalHires": 10,
            "hireDetails": [
                {
                    "hireName": "Hire",
                    "daysToHire": 36,
                    "$$hashKey": "object:54"
                },
                {
                    "hireName": "Hire",
                    "daysToHire": 36,
                    "$$hashKey": "object:55"
                },
                {
                    "hireName": "Hire",
                    "daysToHire": 36,
                    "$$hashKey": "object:56"
                },
                {
                    "hireName": "Hire",
                    "daysToHire": 112,
                    "$$hashKey": "object:57"
                },
                {
                    "hireName": "Hire",
                    "daysToHire": 112,
                    "$$hashKey": "object:58"
                },
                {
                    "hireName": "Hire",
                    "daysToHire": 112,
                    "$$hashKey": "object:59"
                },
                {
                    "hireName": "Hire",
                    "daysToHire": 112,
                    "$$hashKey": "object:60"
                },
                {
                    "hireName": "Hire",
                    "daysToHire": 113,
                    "$$hashKey": "object:61"
                },
                {
                    "hireName": "Hire",
                    "daysToHire": 113,
                    "$$hashKey": "object:62"
                },
                {
                    "hireName": "Hire",
                    "daysToHire": 113,
                    "$$hashKey": "object:63"
                }
            ],
            "avgDaysToFill": 90,
            "$$hashKey": "object:47"
        },
        {
            "id": 33,
            "title": "Sample 1",
            "location": "cork",
            "state": null,
            "country": "United Kingdom",
            "jobOwner": "Test Admin",
            "publishedDate": "2021-01-18T17:25:23.703",
            "dateOpened": "2021-01-18T17:37:12.9533333",
            "dateFilled": "2021-02-24T10:49:53.237",
            "daysToFill": 36,
            "totalHires": 3,
            "hireDetails": [
                {
                    "hireName": "Hire",
                    "daysToHire": 36,
                    "$$hashKey": "object:77"
                },
                {
                    "hireName": "Hire",
                    "daysToHire": 36,
                    "$$hashKey": "object:78"
                },
                {
                    "hireName": "Hire",
                    "daysToHire": 112,
                    "$$hashKey": "object:79"
                }
            ],
            "avgDaysToFill": 61,
            "$$hashKey": "object:48"
        }
    ]
})


export const demographics = writable([
    {
        "personApplicationId": 0,
        "personId": 0,
        "channelId": 2,
        "sourceHostId": null,
        "sourceHostName": "tester.localhost",
        "statusId": null,
        "sourceId": 2,
        "contactId": null,
        "dateApplied": "0001-01-01T00:00:00",
        "count": 65,
        "interviewCount": 1,
        "offeredCount": 2,
        "hiredCount": 9,
        "$$hashKey": "object:56"
    },
    {
        "personApplicationId": 0,
        "personId": 0,
        "channelId": 0,
        "sourceHostId": null,
        "sourceHostName": "Added by admin",
        "statusId": null,
        "sourceId": 1,
        "contactId": null,
        "dateApplied": "0001-01-01T00:00:00",
        "count": 5,
        "interviewCount": 0,
        "offeredCount": 1,
        "hiredCount": 1,
        "$$hashKey": "object:57"
    },
    {
        "personApplicationId": 0,
        "personId": 0,
        "channelId": 0,
        "sourceHostId": null,
        "sourceHostName": "Referred",
        "statusId": null,
        "sourceId": 1,
        "contactId": 2,
        "dateApplied": "0001-01-01T00:00:00",
        "count": 2,
        "interviewCount": 0,
        "offeredCount": 0,
        "hiredCount": 0,
        "$$hashKey": "object:60"
    },
    {
        "personApplicationId": 0,
        "personId": 0,
        "channelId": 0,
        "sourceHostId": null,
        "sourceHostName": "Email",
        "statusId": null,
        "sourceId": 1,
        "contactId": 2,
        "dateApplied": "0001-01-01T00:00:00",
        "count": 1,
        "interviewCount": 0,
        "offeredCount": 0,
        "hiredCount": 0,
        "$$hashKey": "object:59"
    },
    {
        "personApplicationId": 0,
        "personId": 0,
        "channelId": 1,
        "sourceHostId": null,
        "sourceHostName": "HireHive career page",
        "statusId": null,
        "sourceId": 2,
        "contactId": null,
        "dateApplied": "0001-01-01T00:00:00",
        "count": 1,
        "interviewCount": 0,
        "offeredCount": 0,
        "hiredCount": 0,
        "$$hashKey": "object:58"
    }
]);