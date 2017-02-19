#!/bin/sh

cd /code

npm install semantic-ui

bower install --allow-root

nginx -g "deamon off;"