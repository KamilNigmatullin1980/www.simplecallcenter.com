import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, dirname, extname, basename } from 'path';
import { existsSync } from 'fs';

async function convertImageToWebP(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .webp({ quality: 85 })
      .toFile(outputPath);
    console.log(`✓ Converted: ${inputPath} → ${outputPath}`);
    return true;
  } catch (error) {
    console.error(`✗ Error converting ${inputPath}:`, error.message);
    return false;
  }
}

async function processDirectory(dir) {
  try {
    const entries = await readdir(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = join(dir, entry.name);
      
      if (entry.isDirectory()) {
        // Recursively process subdirectories
        await processDirectory(fullPath);
      } else if (entry.isFile()) {
        const ext = extname(entry.name).toLowerCase();
        
        // Convert PNG and JPG/JPEG to WebP (REPLACE original files)
        if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
          const baseName = basename(entry.name, ext);
          const webpPath = join(dir, `${baseName}.webp`);
          
          // Convert to WebP and then delete the original
          if (await convertImageToWebP(fullPath, webpPath)) {
            // Delete the original PNG/JPG file after successful conversion
            const { unlink } = await import('fs/promises');
            await unlink(fullPath);
            console.log(`  → Deleted original: ${fullPath}`);
          }
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dir}:`, error.message);
  }
}

async function main() {
  const imagesDir = join(process.cwd(), 'assets', 'images');
  
  console.log('🖼️  Converting images to WebP format...\n');
  console.log(`📁 Processing directory: ${imagesDir}\n`);
  
  if (!existsSync(imagesDir)) {
    console.error(`✗ Error: Directory ${imagesDir} does not exist`);
    process.exit(1);
  }
  
  await processDirectory(imagesDir);
  
  console.log('\n✅ Conversion complete!');
}

main().catch(console.error);






