FROM nginx:latest

RUN apt-get update -y

RUN apt-get install -y curl git build-essential

RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -

RUN apt-get install -y nodejs

RUN npm install -g bower

RUN npm install -g @angular/cli

CMD ["nginx", "-g", "daemon off;"]