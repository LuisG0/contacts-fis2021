RUN npm install

COPY index.js .
COPY db.js .
COPY server.js .

EXPOSE 3000

