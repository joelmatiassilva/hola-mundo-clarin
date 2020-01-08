FROM registry.agea.com.ar:5000/agea/node10:1811

ARG ssh_key_private
RUN echo "$ssh_key_private" > /root/.ssh/id_rsa
RUN chmod 600 /root/.ssh/id_rsa

WORKDIR /dist
COPY package.json ./

RUN npm install

ADD ./ /dist

EXPOSE 3000

ENTRYPOINT [ "/dist/start.sh" ]  
