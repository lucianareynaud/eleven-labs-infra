"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElevenLabs = void 0;
const listSearch_1 = require("./methods/listSearch");
const loadOptions_1 = require("./methods/loadOptions");
// import { debugRequest } from './methods/debugRequest';
const history_1 = require("./resources/history");
const speech_1 = require("./resources/speech");
const user_1 = require("./resources/user");
const voice_1 = require("./resources/voice");
class ElevenLabs {
    constructor() {
        this.description = {
            displayName: 'ElevenLabs',
            name: 'elevenLabs',
            icon: 'file:elevenlabs.png',
            group: ['transform'],
            version: 1,
            subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
            description: 'WIP',
            defaults: {
                name: 'ElevenLabs',
            },
            inputs: ["main" /* NodeConnectionType.Main */],
            outputs: ["main" /* NodeConnectionType.Main */],
            credentials: [
                {
                    name: 'elevenLabsApi',
                    required: true,
                },
            ],
            requestDefaults: {
                method: 'POST',
                baseURL: 'https://api.elevenlabs.io/v1',
                headers: {
                    'Content-Type': 'application/json',
                },
            },
            properties: [
                {
                    displayName: `This node is currently in <b>BETA</b> and under active development.<br/>
				<a href="http://go.n8n.ninja/811" target="_blank">Visit this page</a> for more information or <a href="http://go.n8n.ninja/x" target="_blank">contact the n8Ninja on X</a>.<br/><br/>
				To support my work, please <a href="https://youtu.be/R2qFRdu8CMY" target="_blank">share this youtube video</a> 🥷🙏`,
                    name: 'notice',
                    type: 'notice',
                    default: '',
                },
                {
                    displayName: 'Resource',
                    name: 'resource',
                    type: 'options',
                    noDataExpression: true,
                    options: [
                        {
                            name: 'Speech',
                            value: 'speech',
                        },
                        {
                            name: 'Voice',
                            value: 'voice',
                        },
                        {
                            name: 'History',
                            value: 'history',
                        },
                        {
                            name: 'User',
                            value: 'user',
                        },
                    ],
                    default: 'speech',
                    // routing: {
                    // 	send: {
                    // 		preSend: [debugRequest],
                    // 	},
                    // },
                },
                ...speech_1.SpeechOperations,
                ...voice_1.VoiceOperations,
                ...history_1.HistoryOperations,
                ...user_1.UserOperations,
            ],
        };
        this.methods = {
            loadOptions: loadOptions_1.loadOptions,
            listSearch: listSearch_1.listSearch,
        };
    }
}
exports.ElevenLabs = ElevenLabs;
