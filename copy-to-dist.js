import { cpSync, existsSync, rmSync } from 'fs';
import { join } from 'path';

const sourceDir = join(process.cwd(), '.output', 'public');
const destDir = join(process.cwd(), 'dist');

try {
  // Check if source directory exists
  if (!existsSync(sourceDir)) {
    console.error('✗ Error: .output/public directory does not exist');
    console.error('  Make sure you run "nuxt generate" first');
    process.exit(1);
  }

  // Remove existing dist directory if it exists
  if (existsSync(destDir)) {
    rmSync(destDir, { recursive: true, force: true });
    console.log('✓ Removed existing dist directory');
  }

  // Copy files
  cpSync(sourceDir, destDir, { recursive: true });
  console.log('✓ Successfully copied files from .output/public to dist');
} catch (error) {
  console.error('✗ Error copying files:', error);
  process.exit(1);
}

