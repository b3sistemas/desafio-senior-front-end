#!/bin/bash
sudo docker stop vue-container
sudo docker rm vue-container
sudo docker rmi vue-image
