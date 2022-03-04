#!/bin/bash
sudo docker run -d -v $(pwd):/home/node/app -p 8080:8080 --name vue-container vue-image
sudo docker start vue-container
