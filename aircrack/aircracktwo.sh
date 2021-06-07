#!/bin/sh
#capture variables
echo "Inteface?"
read myinteface &&
echo "channel?"
read mychannel &&
echo "Store file name?"
read myfile &&
#set inteface to monitor
airmon-ng start $myinterface &&
#capture trafic
airodump-ng -c $mychannel --bssid $mybssid -w $myfile $myinterface
