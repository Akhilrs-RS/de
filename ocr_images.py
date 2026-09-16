import os
try:
    from PIL import Image
    import pytesseract
except ImportError:
    os.system("pip install pillow pytesseract")
    from PIL import Image
    import pytesseract

def ocr_recent_images():
    upload_dir = "/Users/akhilrs/.gemini/antigravity-ide/brain/0108f7d4-c816-42e5-a297-826dead7e97c/.user_uploaded/"
    files = sorted([os.path.join(upload_dir, f) for f in os.listdir(upload_dir) if f.endswith('.png') or f.endswith('.jpg')], key=os.path.getmtime, reverse=True)
    
    # We want to check files from today and yesterday that might contain the cards text
    for file_path in files[1:10]: # skip the most recent one since we know it's the header
        print(f"\n--- Reading {os.path.basename(file_path)} ---")
        try:
            text = pytesseract.image_to_string(Image.open(file_path))
            print(text.strip())
        except Exception as e:
            print(f"Error reading {file_path}: {e}")

ocr_recent_images()
