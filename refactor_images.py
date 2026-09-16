import os
import re
import glob

pages_dir = '/Users/akhilrs/Desktop/Galletrix/de/frontend/src/pages'
jsx_files = glob.glob(os.path.join(pages_dir, '*.jsx'))
# Also components may have images
components_dir = '/Users/akhilrs/Desktop/Galletrix/de/frontend/src/components'
jsx_files.extend(glob.glob(os.path.join(components_dir, '*.jsx')))
jsx_files.extend(glob.glob(os.path.join(components_dir, '**/*.jsx')))


for file_path in jsx_files:
    if not os.path.isfile(file_path): continue
    with open(file_path, 'r') as f:
        content = f.read()

    # Find all image imports from '../assets/' or '../../assets/'
    import_pattern = re.compile(r"import\s+(\w+)\s+from\s+['\"](?:\.\./)+assets/([^'\"]+)['\"];?\n?")
    
    imports = {}
    for match in import_pattern.finditer(content):
        var_name = match.group(1)
        imports[var_name] = True
    
    # Remove imports from content
    content = import_pattern.sub("", content)

    # Remove the variable from getImage('...', '...', varName)
    for var_name in imports.keys():
        # Look for the variable name as the third argument to getImage
        # Pattern: getImage(arg1, arg2, var_name)
        # Note: arg1 and arg2 could be single or double quotes, or variables.
        # We'll just replace `, \s*var_name` with nothing inside getImage.
        # It's safer to just look for ", var_name)" and replace with ")"
        content = re.sub(rf",\s*{var_name}\s*\)", ")", content)

    with open(file_path, 'w') as f:
        f.write(content)

print("Refactored all JSX files.")
