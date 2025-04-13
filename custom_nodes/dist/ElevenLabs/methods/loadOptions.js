"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadOptions = void 0;
async function loadResource(resource) {
    const results = await this.helpers.httpRequest({
        url: 'https://api.elevenlabs.io/v1/voice-generation/generate-voice/parameters',
    });
    return results[resource].map((entry) => ({
        name: entry.name,
        value: entry.code,
    }));
}
async function loadModels() {
    const results = await this.helpers.httpRequestWithAuthentication.call(this, 'elevenLabsApi', {
        url: 'https://api.elevenlabs.io/v1/models',
    });
    return results.map((entry) => ({
        name: entry.name,
        value: entry.model_id,
    }));
}
exports.loadOptions = {
    async listVoiceGenders() {
        return await loadResource.call(this, 'genders');
    },
    async listVoiceAges() {
        return await loadResource.call(this, 'ages');
    },
    async listVoiceAccents() {
        return await loadResource.call(this, 'accents');
    },
    async listModels() {
        return await loadModels.call(this);
    },
};
