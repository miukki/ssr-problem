#!/bin/bash
# description: Tools for React.js / Node.js - docker, docker-compose sysadmin (MERM stack)


# Environment settings
INSTALL_DIR=`echo $0 | sed 's/tools\.sh//g'`
DOCKERCOMPOSE_BIN=`which docker-compose` ;
DOCKER_BIN=`which docker` ;
#SH_BIN =`which sh` ;
set -x


removeAllFromDocker() {
  echo "Stop all containers.."
  $DOCKER_BIN stop `docker ps -qa`
  echo "Remove all containers.."
  $DOCKER_BIN rm `docker ps -qa`
  echo "Remove all images.."
  $DOCKER_BIN rmi -f `docker images -qa `
  $DOCKER_BIN volume rm $(docker volume ls -qf dangling=true)
  echo "Containes left.."
  $DOCKER_BIN ps -a
}

rebuildEnvironment() {
  $DOCKERCOMPOSE_BIN --file ./docker-compose.yml stop
  echo "Build images.."
  $DOCKERCOMPOSE_BIN --file ./docker-compose.yml build
  echo "Check images.."
  $DOCKER_BIN image ls --no-trunc 
  echo "Up containers.."
  $DOCKERCOMPOSE_BIN --file ./docker-compose.yml up -d
  $DOCKER_BIN ps
}

deployCode() {
  $DOCKER_BIN exec -it frontend rm -rf /usr/src/build
  $DOCKER_BIN exec -i frontend mkdir /usr/src/build
  $DOCKER_BIN exec -i frontend ls -lasht /usr/src/build
  $DOCKERCOMPOSE_BIN --file ./docker-compose.yml stop
  $DOCKERCOMPOSE_BIN --file ./docker-compose.yml rm
  $DOCKERCOMPOSE_BIN --file ./docker-compose.yml build
  $DOCKERCOMPOSE_BIN --file ./docker-compose.yml up -d
}

case "$1" in
  removeAllFromDocker)
    removeAllFromDocker
    echo "Remove All From Docker complete.."
    ;;
  rebuildEnvironment)
    rebuildEnvironment
    echo "Rebuild Environment complete.."
    ;;
  *)
echo "

SYNOPSIS
    sh bin/tools.sh
    sh bin/tools.sh [-- [OPTIONS...]] [-- [ENVIRONMENT...]]

OPTIONS
    rebuildEnvironment          Re-build environment
    removeAllFromDocker         Remove all docker and start from scratch

"
    >&2
    exit 1
    ;;
esac
