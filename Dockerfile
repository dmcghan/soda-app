FROM oraclelinux:7-slim

# Point TNS_ADMIN to /db_credentials
# Volume mapping to be provided via "docker run"
ENV TNS_ADMIN /db_credentials

# Set NODE_PATH to point to the globals which are
# used in the lab to reduce cross platform issues
ENV NODE_PATH /usr/lib/node_modules

# Create app directory
WORKDIR /usr/src/app

RUN yum update -y && \
  yum install -y oracle-release-el7 && \
  yum install -y oracle-instantclient19.3-basic.x86_64 && \
  yum install -y oracle-nodejs-release-el7 && \
  yum install -y --disablerepo=ol7_developer_EPEL nodejs && \
  yum clean all && \
  npm install pm2 -g && \
  npm install express@4.16.4 -g && \
  npm install morgan@1.9.1 -g && \
  npm install oracledb@4.0.0 -g && \
  npm install todomvc@0.1.1 -g && \
  node --version && \
  npm --version && \
  echo Installed

CMD ["pm2-runtime", "/app/process.json"]