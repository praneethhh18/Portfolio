const sharp = require('sharp');
// png-to-ico is published as an ES module. We'll dynamically import it inside the
// async function so this CommonJS script can still call it.
// const pngToIco = require('png-to-ico');
const fs = require('fs');
const path = require('path');

async function run() {
  const publicDir = path.join(__dirname, '..', 'public');
  const src = path.join(publicDir, 'icon.png');
  if (!fs.existsSync(src)) {
    console.error('Source icon.png not found in public/. Please add public/icon.png and re-run.');
    process.exit(1);
  }

  const out512 = path.join(publicDir, 'icon-512.png');
  const out192 = path.join(publicDir, 'icon-192.png');
  const out180 = path.join(publicDir, 'apple-touch-icon.png');
  const out32 = path.join(publicDir, 'icon-32.png');
  const out16 = path.join(publicDir, 'icon-16.png');
  const outFavicon = path.join(publicDir, 'favicon.ico');

  try {
    console.log('Generating PNG sizes...');
    await sharp(src).resize(512, 512, { fit: 'contain' }).toFile(out512);
    await sharp(src).resize(192, 192, { fit: 'contain' }).toFile(out192);
    await sharp(src).resize(180, 180, { fit: 'contain' }).toFile(out180);
    await sharp(src).resize(32, 32, { fit: 'contain' }).toFile(out32);
    await sharp(src).resize(16, 16, { fit: 'contain' }).toFile(out16);

    console.log('Creating favicon.ico from 48/32/16 PNGs...');
    // create buffers for ico
  const buf48 = await sharp(src).resize(48,48,{fit:'contain'}).png().toBuffer();
  const buf32 = await sharp(src).resize(32,32,{fit:'contain'}).png().toBuffer();
  const buf16 = await sharp(src).resize(16,16,{fit:'contain'}).png().toBuffer();

  // dynamic import for ESM-only module
  const pngToIcoModule = await import('png-to-ico');
  const pngToIco = pngToIcoModule.default || pngToIcoModule;
  const icoBuffer = await pngToIco([buf48, buf32, buf16]);
    fs.writeFileSync(outFavicon, icoBuffer);

    console.log('Favicons generated successfully:');
    console.log(' -', outFavicon);
    console.log(' -', out512);
    console.log(' -', out192);
    console.log(' -', out180);
    console.log(' -', out32);
    console.log(' -', out16);
  } catch (err) {
    console.error('Error generating favicons:', err);
    process.exit(2);
  }
}

run();
