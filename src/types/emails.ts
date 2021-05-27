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