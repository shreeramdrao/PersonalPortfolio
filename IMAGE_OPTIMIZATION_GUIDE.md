# Image Optimization Guide

## WebP Conversion Instructions

Your HTML has been updated to use WebP images with fallbacks. Follow these steps to convert your images:

### Images to Convert:

1. **assets/drraj.png** → **assets/drraj.webp**
2. **assets/ML_Certificate.jpeg** → **assets/ML_Certificate.webp**
3. **assets/JS_Certificate.png** → **assets/JS_Certificate.webp**

### Option 1: Online Tools (Easiest)

1. Visit: https://cloudconvert.com/png-to-webp
2. Upload each image
3. Set quality to 85%
4. Download and save to assets/ folder
5. Keep original files as backup

### Option 2: Using Command Line (macOS/Linux)

Install cwebp (WebP encoder):
```bash
# macOS
brew install webp

# Ubuntu/Debian
sudo apt-get install webp
```

Convert images:
```bash
cd assets/

# Convert profile image
cwebp -q 85 drraj.png -o drraj.webp

# Convert ML certificate
cwebp -q 85 ML_Certificate.jpeg -o ML_Certificate.webp

# Convert JS certificate
cwebp -q 85 JS_Certificate.png -o JS_Certificate.webp
```

### Option 3: Using Online Bulk Converter

1. Visit: https://squoosh.app/
2. Upload each image
3. Select WebP format
4. Set quality to 85
5. Resize if needed (target: ≤200 KB per image)
6. Download optimized images

### Target File Sizes:

- drraj.webp: ≤ 100 KB (original size: ~300×300)
- ML_Certificate.webp: ≤ 200 KB
- JS_Certificate.webp: ≤ 200 KB

### Verification:

After conversion, verify images load correctly:
1. Place .webp files in assets/ folder
2. Open index.html in browser
3. Check that images display properly
4. Test in multiple browsers (Chrome, Firefox, Safari)

### Fallback Support:

Your HTML uses `<picture>` tags with fallbacks:
- Modern browsers will use .webp (better quality, smaller size)
- Older browsers will use original .png/.jpeg files
- This ensures compatibility across all browsers

---

**Note**: Keep original PNG/JPEG files as backups. The HTML references both formats for maximum compatibility.

