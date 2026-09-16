import re

with open('/Users/akhilrs/Desktop/Galletrix/de/frontend/src/pages/Services.jsx', 'r') as f:
    content = f.read()

# Replace image: s2, with image: 's2',
for i in range(2, 15):
    content = re.sub(rf"image:\s*s{i},", f"image: 's{i}',", content)

with open('/Users/akhilrs/Desktop/Galletrix/de/frontend/src/pages/Services.jsx', 'w') as f:
    f.write(content)

with open('/Users/akhilrs/Desktop/Galletrix/de/frontend/src/pages/OurStory.jsx', 'r') as f:
    content = f.read()

content = re.sub(r"image:\s*storyCrowns", "image: 'storyCrowns'", content)
content = re.sub(r"image:\s*storyAligners", "image: 'storyAligners'", content)
content = re.sub(r"image:\s*storyWhitening", "image: 'storyWhitening'", content)

with open('/Users/akhilrs/Desktop/Galletrix/de/frontend/src/pages/OurStory.jsx', 'w') as f:
    f.write(content)

print("Done")
