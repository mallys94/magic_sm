
#!/bin/bash

echo "--- Building Project ---"

# 1. Install dependencies
# Using python3.12 to match the Vercel runtime
python3.12 -m pip install -r requirements.txt

echo "--- Database Migrations ---"
# 2. Run Migrations
# Adding --noinput ensures the build doesn't hang waiting for user confirmation
python3.12 manage.py makemigrations --noinput
python3.12 manage.py migrate --noinput

echo "--- Collecting Static Files ---"
# 3. Collect Static
# This moves files to the 'staticfiles' folder defined in your vercel.json
python3.12 manage.py collectstatic --noinput --clear

echo "--- Build Finished ---"