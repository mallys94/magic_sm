
# build_files.sh
echo " BUILDING PROJECT START"

# Install dependencies
python3.12 -m pip install -r requirements.txt

# Run collectstatic. 
# We use --noinput to prevent hangs and ensure the folder is created.
python3.12 manage.py collectstatic --noinput

echo " BUILDING PROJECT END"