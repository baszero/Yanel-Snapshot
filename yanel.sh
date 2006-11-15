#!/bin/sh

echo "Start/Stop Yanel ..."

# ----- Check for JAVA_HOME
JAVA_HOME="$JAVA_HOME"
if [ "$JAVA_HOME" = "" ];then
  echo "ERROR: No JAVA_HOME set!"
  echo "       Have you installed JDK (Java Development Kit)? If so, then set JAVA_HOME ..."
  echo "       MacOS X : setenv JAVA_HOME /System/Library/Frameworks/JavaVM.framework/Home"
  echo "       Linux   : export JAVA_HOME=/usr/local/j2sdk-..."
  echo "       Windows : Click Start ..."
  exit 1
fi

# ----- Set Environment Variables
unset ANT_HOME
ANT_HOME=$PWD/tools/apache-ant-1.6.5
#echo $ANT_HOME

PATH=$PWD/tools/maven-2.0.4/bin:$ANT_HOME/bin:$PATH
#echo $PATH

# ----- Start/Stop Yanel
#mvn --version
ant -version
if [ "$1" == "start" ]; then
  ant -f src/build/build.xml start-tomcat
elif [ "$1" == "stop" ]; then
  ant -f src/build/build.xml stop-tomcat
else
  ant -f src/build/build.xml run-yanel-cmdl -Dyanel.path=$1
fi
