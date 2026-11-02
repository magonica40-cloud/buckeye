"""
Upscale all low-res case study and hero images for the Buckeye website.
Uses LANCZOS resampling for best quality. Saves at high JPEG quality.
"""
from PIL import Image
import os

ASSETS_DIR = r'd:\buckey\public\assets'

# (filename, target_width, target_height)
IMAGES = [
    ('kinetic.jpg',           1600, 900),
    ('atelier.jpg',           1600, 900),
    ('war_room.jpg',          1600, 900),
    ('omnia.jpg',             1600, 900),
    ('indiranagar_office.jpg',1600, 900),
    ('horizon.jpg',           1600, 900),
    ('studio_hq.jpg',         1600, 900),
    ('rhea.jpg',              1600, 900),
]

for fname, tw, th in IMAGES:
    path = os.path.join(ASSETS_DIR, fname)
    if not os.path.exists(path):
        print(f"SKIP (not found): {fname}")
        continue
    
    img = Image.open(path)
    orig_size = img.size
    
    # Upscale with LANCZOS (best for enlarging)
    img_resized = img.resize((tw, th), Image.LANCZOS)
    
    # Save at high quality
    img_resized.save(path, 'JPEG', quality=92, optimize=True, progressive=True)
    new_size = os.path.getsize(path)
    print(f"  {fname}: {orig_size} -> ({tw}, {th}) | {new_size//1024}KB")

print("\nDone!")

