import {Writable, writable} from "svelte/store";
import type { Email } from "../types/emails";

export const emails = writable([
    {
        "id": 61,
        "userId": 1,
        "personCompanyId": 19,
        "personId": 36,
        "firstName": "svelte ",
        "lastName": "Developer",
        "subject": "Testing it out",
        "body": null,
        "originalBody": null,
        "email": null,
        "fromEmail": "mail+tester_8adff2151dc97d86@hirehive.io",
        "incoming": false,
        "date": "2021-02-24T14:55:03.983",
        "applicationId": null,
        "adminName": "Test Admin",
        "fullName": "svelte  Developer",
        "senderName": null,
        "unRead": false,
        "threadCount": 3,
        "delayed": false,
        "delayedDate": null,
        "attachments": null,
        "toList": null,
        "ccList": null,
        "formattedDate": "24 Feb 21",
    },
    {
        "id": 60,
        "userId": 1,
        "personCompanyId": 47,
        "personId": 65,
        "firstName": "Micky",
        "lastName": "Joe",
        "subject": "Invite to First Interview",
        "body": null,
        "originalBody": null,
        "email": null,
        "fromEmail": "mail+tester_41fa8507599eb3c5@hirehive.io",
        "incoming": true,
        "date": "2021-02-24T10:37:31.34",
        "applicationId": null,
        "adminName": "Test Admin",
        "fullName": "Micky Joe",
        "senderName": null,
        "unRead": false,
        "threadCount": 1,
        "delayed": false,
        "delayedDate": null,
        "attachments": null,
        "toList": null,
        "ccList": null,
        "formattedDate": "24 Feb 21",
    },
    {
        "id": 58,
        "userId": 1,
        "personCompanyId": 49,
        "personId": 67,
        "firstName": "Conor",
        "lastName": "O Shea",
        "subject": "Application to updatedName",
        "body": null,
        "originalBody": null,
        "email": null,
        "fromEmail": "mail+tester_317a7dbe0d695707@hirehive.io",
        "incoming": false,
        "date": "2021-02-23T12:17:34.133",
        "applicationId": null,
        "adminName": "Test Admin",
        "fullName": "Conor O Shea",
        "senderName": null,
        "unRead": true,
        "threadCount": 2,
        "delayed": false,
        "delayedDate": null,
        "attachments": null,
        "toList": null,
        "ccList": null,
        "formattedDate": "23 Feb 21",
    },
    {
        "id": 34,
        "userId": 1,
        "personCompanyId": 16,
        "personId": 26,
        "firstName": "kathleen",
        "lastName": "O Mahony",
        "subject": "updatedName: Additional info required",
        "body": null,
        "originalBody": null,
        "email": null,
        "fromEmail": "mail+tester_d791769e2d6ec0b0@hirehive.io",
        "incoming": false,
        "date": "2021-01-15T17:52:29.703",
        "applicationId": null,
        "adminName": "Test Admin",
        "fullName": "kathleen O Mahony",
        "senderName": null,
        "unRead": false,
        "threadCount": 2,
        "delayed": false,
        "delayedDate": null,
        "attachments": null,
        "toList": null,
        "ccList": null,
        "formattedDate": "15 Jan 21",
    },
    {
        "id": 32,
        "userId": 1,
        "personCompanyId": 15,
        "personId": 23,
        "firstName": "Conor",
        "lastName": "O Shea",
        "subject": "updatedName: Additional info required",
        "body": null,
        "originalBody": null,
        "email": null,
        "fromEmail": "mail+tester_90468b99f0acc0e9@hirehive.io",
        "incoming": false,
        "date": "2021-01-15T17:35:03.71",
        "applicationId": null,
        "adminName": "Test Admin",
        "fullName": "Conor O Shea",
        "senderName": null,
        "unRead": false,
        "threadCount": 4,
        "delayed": false,
        "delayedDate": null,
        "attachments": null,
        "toList": null,
        "ccList": null,
        "formattedDate": "15 Jan 21",
    },
    {
        "id": 29,
        "userId": 1,
        "personCompanyId": 3,
        "personId": 4,
        "firstName": "conor",
        "lastName": "cv",
        "subject": "updatedName: Additional info required",
        "body": null,
        "originalBody": null,
        "email": null,
        "fromEmail": "mail+tester_96ea6ba2159f7711@hirehive.io",
        "incoming": true,
        "date": "2021-01-15T11:50:34.623",
        "applicationId": null,
        "adminName": "Test Admin",
        "fullName": "conor cv",
        "senderName": null,
        "unRead": false,
        "threadCount": 8,
        "delayed": false,
        "delayedDate": null,
        "attachments": null,
        "toList": null,
        "ccList": null,
        "formattedDate": "15 Jan 21",
    },
    {
        "id": 15,
        "userId": 1,
        "personCompanyId": 1,
        "personId": 1,
        "firstName": "test",
        "lastName": "o shea",
        "subject": "Application to updatedName",
        "body": null,
        "originalBody": null,
        "email": null,
        "fromEmail": "mail+tester_ec30f3fc4e9fe845@hirehive.io",
        "incoming": true,
        "date": "2020-11-11T09:51:07.853",
        "applicationId": null,
        "adminName": "Test Admin",
        "fullName": "test o shea",
        "senderName": null,
        "unRead": false,
        "threadCount": 2,
        "delayed": false,
        "delayedDate": null,
        "attachments": null,
        "toList": null,
        "ccList": null,
        "formattedDate": "11 Nov 20",
    },
    {
        "id": 11,
        "userId": 1,
        "personCompanyId": 2,
        "personId": 2,
        "firstName": "conor",
        "lastName": "o shea",
        "subject": "Test",
        "body": null,
        "originalBody": null,
        "email": null,
        "fromEmail": "mail+tester_96ea6ba2159f7711@hirehive.io",
        "incoming": false,
        "date": "2020-11-10T11:16:37.11",
        "applicationId": null,
        "adminName": "Test Admin",
        "fullName": "conor o shea",
        "senderName": null,
        "unRead": false,
        "threadCount": 3,
        "delayed": false,
        "delayedDate": null,
        "attachments": null,
        "toList": null,
        "ccList": null,
        "formattedDate": "10 Nov 20",
    }
]);


export const threads = writable([
    {
        "id": 11,
        "userId": 1,
        "personCompanyId": 2,
        "personId": 2,
        "firstName": "conor",
        "lastName": "o shea",
        "subject": "Test",
        "body": "<div>Hey  conor cv</div>",
        "originalBody": null,
        "email": null,
        "fromEmail": "mail+tester_96ea6ba2159f7711@hirehive.io",
        "incoming": false,
        "date": "2020-11-10T11:16:37.11",
        "applicationId": null,
        "adminName": null,
        "fullName": null,
        "senderName": "Test Admin",
        "unRead": false,
        "threadCount": 0,
        "delayed": false,
        "delayedDate": null,
        "attachments": [],
        "toList": [
            {
                "userId": null,
                "firstName": "conor",
                "lastName": "o shea",
                "email": "conor@conor.com",
                "displayName": null,
                "$$hashKey": "object:100"
            }
        ],
        "ccList": [
            {
                "userId": 2,
                "firstName": "Test",
                "lastName": "Test",
                "email": "TestHR@gmail.com",
                "displayName": null,
                "$$hashKey": "object:102"
            }
        ]
    },
    {
        "id": 10,
        "userId": 1,
        "personCompanyId": 2,
        "personId": 2,
        "firstName": "conor",
        "lastName": "o shea",
        "subject": "Application to updatedName",
        "body": "Dear conor,<div>Thanks again for your recent application for the role of Form at updatedName.</div><div>After careful consideration I regret to inform you that on this occasion we have decided not to progress your application any further. Thanks again for your interest in updatedName and we wish you the very best for the future.</div>",
        "originalBody": null,
        "email": null,
        "fromEmail": "mail+tester_96ea6ba2159f7711@hirehive.io",
        "incoming": false,
        "date": "2020-11-10T11:14:20.673",
        "applicationId": null,
        "adminName": null,
        "fullName": null,
        "senderName": "Test Admin",
        "unRead": false,
        "threadCount": 0,
        "delayed": false,
        "delayedDate": null,
        "attachments": [
            {
                "id": 1,
                "fileId": 19,
                "fileName": "250dpi.PNG",
                "fileType": "image/png",
                "sizeInKB": 216170
            }
        ],
        "toList": [
            {
                "userId": null,
                "firstName": "conor",
                "lastName": "o shea",
                "email": "conor@conor.com",
                "displayName": null,
                "$$hashKey": "object:110"
            }
        ],
        "ccList": []
    },
    {
        "id": 8,
        "userId": 1,
        "personCompanyId": 2,
        "personId": 2,
        "firstName": "conor",
        "lastName": "o shea",
        "subject": "Application to updatedName",
        "body": "Dear test,<div>Thanks again for your recent application for the role of Not linked to a job at updatedName.</div><div>After careful consideration I regret to inform you that on this occasion we have decided not to progress your application any further. Thanks again for your interest in updatedName and we wish you the very best for the future.</div>",
        "originalBody": null,
        "email": null,
        "fromEmail": "mail+tester_ec30f3fc4e9fe845@hirehive.io",
        "incoming": true,
        "date": "2020-11-09T16:58:10.907",
        "applicationId": null,
        "adminName": null,
        "fullName": null,
        "senderName": "conor o shea",
        "unRead": false,
        "threadCount": 0,
        "delayed": false,
        "delayedDate": null,
        "attachments": [],
        "toList": [
            {
                "userId": 1,
                "firstName": "Test",
                "lastName": "Admin",
                "email": "testing123@testing.com",
                "displayName": null,
                "$$hashKey": "object:118"
            }
        ],
        "ccList": []
    }
]);


