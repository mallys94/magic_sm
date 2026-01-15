
# build_files.sh
echo " BUILDING PROJECT START"

# Install dependencies
python3.12 -m pip install -r requirements.txt

# Run collectstatic without database checks
# Using --no-input and ensuring the destination exists
python3.12 manage.py collectstatic --noinput --clear

echo " BUILDING PROJECT END"