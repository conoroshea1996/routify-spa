import {writable} from "svelte/store";

export type FeedBackForm = {
    type: number;
    name: string;
    questions: Array<FeedBackQuestion>
}


export type FeedBackQuestion = {
    type: number;
    question: string;
    options: Array<any>;
    required: boolean;
    editing: boolean;
}




export const forms = writable([{
    "id": 0,
    "type": 1,
    "questions": [
        {
            "identifier": "16216074832591848322830",
            "type": 3,
            "question": "Mutiple Choice",
            "options": [
                {
                    "focus": true,
                    "label": "Choice One",
                    "identifier": "16216074833700969255831",
                    "$$hashKey": "object:81",
                    "showTagBox": false,
                    "tag": {
                        "id": 0,
                        "name": "Tag"
                    },
                    "valid": 10
                },
                {
                    "focus": true,
                    "label": "Choice Two",
                    "identifier": "16216075150530046944922",
                    "$$hashKey": "object:100",
                    "valid": 10
                }
            ],
            "required": true,
            "editing": false,
            "submitted": true,
            "private": true,
            "valid": true
        },
        {
            "type": 1,
            "question": "Single Line",
            "options": [],
            "required": false,
            "editing": false,
            "identifier": "16216075266360173108996",
            "submitted": true,
            "private": true,
            "valid": true
        },
        {
            "type": 4,
            "question": "Checkboxes",
            "options": [
                {
                    "focus": true,
                    "label": "Checkbox One",
                    "identifier": "16216075419130370627559",
                    "$$hashKey": "object:168",
                    "valid": 12
                },
                {
                    "focus": true,
                    "label": "Checkbox Two",
                    "identifier": "16216075580811606388285",
                    "$$hashKey": "object:176",
                    "valid": 12
                }
            ],
            "required": false,
            "editing": false,
            "identifier": "16216075381110352610350",
            "submitted": true,
            "valid": true
        },
        {
            "type": 6,
            "question": "File",
            "options": [],
            "required": false,
            "editing": false,
            "identifier": "16216075831141230961566",
            "submitted": true,
            "valid": true
        },
        {
            "type": 5,
            "question": "Drop Down",
            "options": [
                {
                    "focus": true,
                    "label": "Down One",
                    "identifier": "16216076003361098816691",
                    "$$hashKey": "object:260",
                    "valid": 8
                },
                {
                    "focus": true,
                    "label": "Down Two",
                    "identifier": "16216076137710569812968",
                    "$$hashKey": "object:268",
                    "valid": 8
                }
            ],
            "required": true,
            "editing": false,
            "identifier": "16216075970090816870779",
            "submitted": true,
            "private": true,
            "valid": true
        }
    ],
    "name": "Form Name"
},
{
    "id": 1,
    "type": 1,
    "questions": [
        {
            "identifier": "16216074832591848322830",
            "type": 3,
            "question": "Mutiple Choice",
            "options": [
                {
                    "focus": true,
                    "label": "Choice One",
                    "identifier": "16216074833700969255831",
                    "$$hashKey": "object:81",
                    "showTagBox": false,
                    "tag": {
                        "id": 0,
                        "name": "Tag"
                    },
                    "valid": 10
                },
                {
                    "focus": true,
                    "label": "Choice Two",
                    "identifier": "16216075150530046944922",
                    "$$hashKey": "object:100",
                    "valid": 10
                }
            ],
            "required": true,
            "editing": false,
            "submitted": true,
            "private": true,
            "valid": true
        },
        {
            "type": 1,
            "question": "Single Line",
            "options": [],
            "required": false,
            "editing": false,
            "identifier": "16216075266360173108996",
            "submitted": true,
            "private": true,
            "valid": true
        },
        {
            "type": 5,
            "question": "Drop Down",
            "options": [
                {
                    "focus": true,
                    "label": "Down One",
                    "identifier": "16216076003361098816691",
                    "$$hashKey": "object:260",
                    "valid": 8
                },
                {
                    "focus": true,
                    "label": "Down Two",
                    "identifier": "16216076137710569812968",
                    "$$hashKey": "object:268",
                    "valid": 8
                }
            ],
            "required": true,
            "editing": false,
            "identifier": "16216075970090816870779",
            "submitted": true,
            "private": true,
            "valid": true
        }
    ],
    "name": "Next Form"
}]);