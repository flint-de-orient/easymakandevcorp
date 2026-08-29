# Compress Video for Vercel

Use online tools to compress your video:

1. **Online Converter**: https://www.freeconvert.com/video-compressor
2. **CloudConvert**: https://cloudconvert.com/mp4-converter
3. **Handbrake** (Desktop app): https://handbrake.fr/

## Settings to reduce size:
- Resolution: 1280x720 (instead of 1920x1080)
- Bitrate: 1000-2000 kbps
- Format: MP4 (H.264)
- Target size: Under 10MB

## After compression:
1. Replace bg_easymakan.mp4 with compressed version
2. Run: npm run build
3. Run: npx vercel deploy --prod