import React, { useState } from 'react';
import { uploadVideo, transcribeVideo } from './api';

const SubtitleGenerator = () => {
    const [videoFile, setVideoFile] = useState(null);
    const [subtitles, setSubtitles] = useState('');

    const handleVideoUpload = async (event) => {
        const file = event.target.files[0];
        setVideoFile(file);
        const transcription = await transcribeVideo(file); // Assume this returns Thai subtitles
        setSubtitles(transcription);
    };

    return (
        <div>
            <h1>Subtitle Generator</h1>
            <input type="file" accept="video/*" onChange={handleVideoUpload} />
            {subtitles && <div><h2>Subtitles:</h2><p>{subtitles}</p></div>}
        </div>
    );
};

export default SubtitleGenerator;