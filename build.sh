
# build_files.sh
echo " BUILDING PROJECT START"

# Install dependencies
python3 -m pip install -r requirements.txt

# Run collectstatic without database checks
# Using --no-input and ensuring the destination exists
python3 manage.py collectstatic --noinput --clear
python3 manage.py migrate --noinput --clear
python3 manage.py makemigrations --noinput --clear

echo " BUILDING PROJECT END"