import { useState } from 'react';

export default function VideoApp() {
  const [videoSrc, setVideoSrc] = useState('');

  const handleVideoUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoSrc(url);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Video Upload & Preview</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <input
          type="file"
          accept="video/*"
          onChange={handleVideoUpload}
          style={{ padding: '10px', cursor: 'pointer' }}
        />
      </div>

      {videoSrc && (
        <video
          src={videoSrc}
          controls
          width="100%"
          style={{ border: '1px solid #ddd', borderRadius: '4px' }}
        />
      )}
    </div>
  );
}