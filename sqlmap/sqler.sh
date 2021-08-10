#!/bin/bash
echo "Url?"
read inputurl
./sqlmap.py -u inputurl
