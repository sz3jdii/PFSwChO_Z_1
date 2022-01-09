# Fibonacci Calculator

1) Utworzenie programu
2) Skonfigurowanie Dockerfile.dev i docker-compose.dev do działania lokalnego
3) Skonfigurowanie Dockerfile i docker-compose do działania produkcyjnego
4) Skonfigurowanie pliku .travis.yml i wysłanie zmian na repozytorium
5) Utworzenie konta na AWS EBS i stworzenie aplikacji
6) Utworzenie konta na Travis CI, podanie secretów do aplikacji EBS
7) Uruchomienie triggera na Travis

Link do aplikacji: http://pfswcholab8-env.eba-pjzmtfss.us-east-2.elasticbeanstalk.com/

## Steps to work with the app locally (Docker):

- Clone the github repo:
```
git clone https://github.com/sz3jdii/PFSwChO_LAB_8.git
```
- Change into directory, install packages and start application
```
docker-compose -f docker-compose.dev.yml up -d
```
- Go to http://localhost:3000

## Steps to work with the app locally (npm):

- Clone the github repo:
```
git clone https://github.com/sz3jdii/PFSwChO_LAB_8.git
```
- Change into directory, install packages and start application
```
npm install
npm start
```
- Go to http://localhost:3000

## Steps to work with the app in production (Docker):

- Clone the github repo:
```
git clone https://github.com/sz3jdii/PFSwChO_LAB_8.git
```
- Change into directory, install packages and start application
```
docker-compose up -d
```
- Go to http://localhost