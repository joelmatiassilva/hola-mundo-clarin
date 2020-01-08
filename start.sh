#!/bin/bash

#TODO: poner la llamada al consul template

if [[ ${APP_ENV} == "devel" ]]
then
    echo "Running in devel";
    # top
    cd /devel              
    if [ ! -h /devel/node_modules  ]; then
      ln -s /dist/node_modules /devel 
    fi
    npm start
else
    echo "Running in production";
    npm start
fi
