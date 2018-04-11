# todolistApi

To build docker image:
docker build -t:todolistapi .

To run in docker:
docker run -d -p:8080:3000 todolistapi

Some test urls:

curl http://0.0.0.0:8080

curl http://0.0.0.0:8080/api/stuff?myParam=5
