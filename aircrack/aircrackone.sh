#!/bin/sh
# set inteface to minitor
echo "inteface?"
read myinterface
airmon-ng start $myinterface

