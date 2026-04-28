import os
import glob
from rembg import remove
from PIL import Image

def process_images():
    # Find all images ending with -bg.png in Assets directory
    assets_dir = "./Assets"
    pattern = os.path.join(assets_dir, "*-bg.png")
    image_files = glob.glob(pattern)
    
    if not image_files:
        print("No files matching '*-bg.png' found.")
        return

    print(f"Found {len(image_files)} images to process.")

    for img_path in image_files:
        # Generate new filename
        filename = os.path.basename(img_path)
        new_filename = filename.replace('-bg.png', '_nobg.png')
        output_path = os.path.join(assets_dir, new_filename)
        
        print(f"Processing: {filename} -> {new_filename}")
        
        try:
            input_image = Image.open(img_path)
            output_image = remove(input_image)
            output_image.save(output_path)
            print(f"Successfully saved {new_filename}")
        except Exception as e:
            print(f"Error processing {filename}: {e}")

if __name__ == "__main__":
    process_images()
