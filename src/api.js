// api.js

// Function to handle API calls to OpenAI Whisper for transcription

const fetch = require('node-fetch');

// Replace with your actual OpenAI API key
const API_KEY = 'your_openai_api_key';
const WHISPER_API_URL = 'https://api.openai.com/v1/audio/transcriptions';

/**
 * Transcribe audio file using OpenAI Whisper API
 * @param {string} audioFilePath - The path to the audio file to transcribe.
 * @returns {Promise<string>} - The transcription result.
 */
async function transcribeAudio(audioFilePath) {
    const formData = new FormData();
    formData.append('file', fs.createReadStream(audioFilePath));
    formData.append('model', 'whisper-1');

    const response = await fetch(WHISPER_API_URL, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
        },
        body: formData,
    });

    if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.text;
}

module.exports = { transcribeAudio };