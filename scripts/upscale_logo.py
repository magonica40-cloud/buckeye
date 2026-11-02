"""
Upscale the Buckeye logo cropped PNG for crisper rendering.
Also attempt to re-crop from the original IMG_1478.PNG if available.
"""
from PIL import Image
import os

ASSETS_DIR = r'd:\buckey\public\assets'
ROOT_DIR = r'd:\buckey'

# Try to re-crop from original high-quality source
original_path = os.path.join(ROOT_DIR, 'IMG_1478.PNG')
logo_out_path = os.path.join(ASSETS_DIR, 'buckeye_logo_cropped.png')

if os.path.exists(original_path):
    img = Image.open(original_path)
    print(f"Original: {img.size} {img.mode}")
    
    # The original is 718x709 RGB - a photo of the Buckeye badge
    # The badge is roughly centered in the image
    # Try to crop to just the badge area (horizontal strip)
    w, h = img.size
    
    # The badge appears to be a rectangular logo occupying most of the square image
    # Crop the badge with some padding: roughly center area 
    # First convert to RGBA for proper handling
    if img.mode == 'RGB':
        img_rgba = img.convert('RGBA')
    else:
        img_rgba = img
    
    # Try multiple crop strategies
    # The badge in IMG_1478.PNG appears to fill most of the frame
    # Let's crop tightly: take center 80% width, keep height proportional to logo
    margin_x = int(w * 0.02)
    margin_y = int(h * 0.10)
    cropped = img.crop((margin_x, margin_y, w - margin_x, h - margin_y))
    
    # Now upscale to 3x the original logo's target render size
    # Logo renders at ~h-11 (44px) in header = 44px tall
    # At 3x DPI = 132px tall, aspect ratio ~3.3:1 → 132 * 3.3 = ~435px wide
    # Let's save at 1540 x 462 (3× the standard display)
    target_w, target_h = 1540, 462
    upscaled = cropped.resize((target_w, target_h), Image.LANCZOS)
    
    # Save as PNG at max quality
    upscaled.save(logo_out_path, 'PNG', optimize=True)
    print(f"Logo saved: {logo_out_path} -> {upscaled.size}")
    print(f"File size: {os.path.getsize(logo_out_path) // 1024}KB")
else:
    # If original not available, just upscale existing logo
    img = Image.open(logo_out_path)
    print(f"Existing logo: {img.size}")
    
    # Upscale 3x with LANCZOS
    upscaled = img.resize((img.width * 3, img.height * 3), Image.LANCZOS)
    upscaled.save(logo_out_path, 'PNG', optimize=True)
    print(f"Logo upscaled to: {upscaled.size}")
    print(f"File size: {os.path.getsize(logo_out_path) // 1024}KB")

