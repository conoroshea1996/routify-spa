export interface Email {
    id: number;
    userId: number;
    personCompanyId: number;
    personId: number;
    firstName: string;
    lastName: string;
    subject: string;
    body: string;
    originalBody: string;
    email: string;
    fromEmail: string;
    incoming: boolean;
    date: Date;
    formattedDate: string;
    applicationId: number;
    adminName: string;
    fullName: string;
    senderName: string;
    unRead: boolean;
    attachments: Array<EmailAttachment>;
    delayedDate: any;
    deleted: boolean;
    ccList: Array<any>;
}

export interface EmailAttachment {
    id: number;
    fileId: number;
    fileName: string;
    fileType: string;
    sizeInKB: number;
    readableSize: string;
}

const qestionTemplate = {
    "questions": [
        {
            "id": 37,
            "type": 3,
            "question": "Question One",
            "description": null,
            "options": [
                {
                    "id": 40,
                    "label": "Multi One",
                    "description": null,
                    "value": "40",
                    "deleted": false,
                    "tag": {
                        "id": 10,
                        "name": "Tag ONe"
                    },
                    "rating": 0,
                    "note": null,
                    "selected": false,
                    "$$hashKey": "object:63"
                },
                {
                    "id": 41,
                    "label": "Multi Two",
                    "description": null,
                    "value": "41",
                    "deleted": false,
                    "tag": {
                        "id": 11,
                        "name": "Dev"
                    },
                    "rating": 0,
                    "note": null,
                    "selected": false,
                    "$$hashKey": "object:64"
                }
            ],
            "required": false,
            "private": false,
            "deleted": false,
            "displayOrder": 1,
            "identifier": "16242728699180769247260",
            "answerText": null,
            "selectedOption": null
        }
    ],
    "id": 12,
    "name": "New form",
    "type": 1
}