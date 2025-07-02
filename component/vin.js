import Script from 'next/script';

export default function Vin() {
  return (
    <>
      <Script
        src="https://player.vimeo.com/api/player.js"
        strategy="afterInteractive"
      />

      <style jsx>{`
        html,
        body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }

        .video-grid {
          display: flex;
          flex-direction: column;
          width: 100%;
          padding: 16px 0; /* top/bottom padding */
          gap: 16px;
        }

        .video-item {
          position: relative;
          width: 100%;
          height: 100vh;
        }

        .video-item iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }

        @media (min-width: 1024px) {
          .video-grid {
            flex-direction: row;
            padding: 0;
            gap: 0;
          }

          .video-item {
            width: 33.3333%;
            margin: 0; /* remove spacing */
          }
        }
      `}</style>

      <div className="video-grid">
        <div className="video-item">
          <iframe
            src="https://player.vimeo.com/video/1098027413?badge=0&autopause=0&player_id=0&app_id=58479"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            title="Designed by @moatazreda.designs"
          ></iframe>
        </div>

        <div className="video-item">
          <iframe
            src="https://player.vimeo.com/video/1098026203?badge=0&autopause=0&player_id=0&app_id=58479"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            title="Bohemian escape home"
          ></iframe>
        </div>

        <div className="video-item">
          <iframe
            src="https://player.vimeo.com/video/1098024949?badge=0&autopause=0&player_id=0&app_id=58479"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            title="Noani Home signature furniture"
          ></iframe>
        </div>
      </div>
    </>
  );
}
