"""
Generate a razor-sharp, perfectly proportioned Buckeye logo badge from IMG_1478.PNG.
- Preserves exact aspect ratio: 513 x 156 (3.288:1)
- Cleans background to pure brand crimson #C8102E
- Enhances white text contrast and sharpness
- Saves at 3x Retina resolution (1539 x 468)
"""
from PIL import Image, ImageEnhance, ImageFilter
import numpy as np

# Load original uploaded source
img = Image.open(r'd:\buckey\IMG_1478.PNG')

# Text bbox in original: x=[121, 587] (width 466), y=[298, 419] (height 121)
# Standard padding: 24px left/right, 18px top/bottom
# Exact crop:
crop_x1 = 121 - 24  # 97
crop_y1 = 298 - 18  # 280
crop_x2 = 587 + 23  # 610
crop_y2 = 419 + 17  # 436

cropped = img.crop((crop_x1, crop_y1, crop_x2, crop_y2))
w, h = cropped.size
print(f"Native badge crop size: {w}x{h}, aspect ratio: {w/h:.3f}")

# Target 3x Retina scale: 1539 x 468
target_w = w * 3
target_h = h * 3

# Resample using high-quality LANCZOS
hires = cropped.resize((target_w, target_h), Image.LANCZOS)

# Color and contrast enhancement
arr = np.array(hires).astype(float)

# Background color in brand palette: #C8102E -> RGB(200, 16, 46)
brand_crimson = np.array([200.0, 16.0, 46.0])

# Distance from pure white
white_score = (arr[:, :, 0] + arr[:, :, 1] + arr[:, :, 2]) / 3.0
# The text is bright (white_score > 160)
# Pixels with white_score < 140 are background
text_weight = np.clip((white_score - 120.0) / (220.0 - 120.0), 0.0, 1.0)
text_weight = np.expand_dims(text_weight, axis=2)

# Blend: where text_weight is 0 -> pure brand crimson, where text_weight is 1 -> crisp bright white [255, 255, 255]
crisp_text = np.array([255.0, 255.0, 255.0])
final_arr = brand_crimson * (1.0 - text_weight) + crisp_text * text_weight
final_arr = np.clip(final_arr, 0, 255).astype(np.uint8)

final_img = Image.fromarray(final_arr)

# Apply gentle unsharp mask for razor-sharp edges
sharpened = final_img.filter(ImageFilter.UnsharpMask(radius=1.5, percent=130, threshold=3))

out_path = r'd:\buckey\public\assets\buckeye_logo_cropped.png'
sharpened.save(out_path, 'PNG', optimize=True)
print(f"Saved razor-sharp logo: {out_path} ({sharpened.size})")

# Also save an alternate SVG/PNG asset if needed
out_path2 = r'd:\buckey\public\assets\buckeye_logo.png'
sharpened.save(out_path2, 'PNG', optimize=True)
print("Logo generation complete!")

