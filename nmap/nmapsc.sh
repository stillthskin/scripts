#!/bin/sh

echo "target?"
read target &&
echo "fileName"
read filename &&
sudo nmap -v -A -p 1-65535 -sV -O -sS -T5 $target -oA $filename
