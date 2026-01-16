#!/bin/bash

# Exit on error
set -e

echo "--- Installing Requirements ---"
python3.12 -m pip install -r requirements.txt

echo "--- Collecting Static Files ---"
# This is crucial for Whitenoise to work
python3.12 manage.py collectstatic --noinput --clear

echo "--- Build Complete ---"