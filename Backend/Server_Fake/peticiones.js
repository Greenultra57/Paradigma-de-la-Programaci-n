/* GET 1
curl --location 'http://localhost:3000/MT/2'

// GET 2
curl --location 'http://localhost:3000/MT/1'

// POST 1
curl --location 'http://localhost:3000/MT' \
--header 'Content-Type: application/json' \
--data-raw '{
    "id": "12",
    "first_name": "Dante",
    "last_name": "Aliegheri",
    "email": "correofalso@g.co",
    "gender": "Masculina",
    "ip_address": "221.36.208.223",
    "carro": "Bicicleta",
    "Raza": "Haitiano",
    "App": "BS"
}' 

// POST 2
curl --location 'http://localhost:3000/MT' \
--header 'Content-Type: application/json' \
--data-raw '{
    "id": "13",
    "first_name": "Ernesto",
    "last_name": "Caracoles",
    "email": "ernestocaracoles@g.co",
    "gender": "Masculino",
    "ip_address": "223.36.208.223",
    "carro": "Avión",
    "Raza": "Marciano",
    "App": "Happy Mod"
}' 

// PUT 1
 curl --location --request PUT 'http://localhost:3000/MT/1' \
--header 'Content-Type: application/json' \
--data-raw '{
    "id": "1",
    "first_name": "Tobias el perro",
    "last_name": "Aglione",
    "email": "haglione0@g.co",
    "gender": "Male",
    "ip_address": "31.105.231.163",
    "carro": "Truck",
    "Raza": "Comanche",
    "App": "Sonair"
  }' 

// PUT 2

curl --location --request PUT 'http://localhost:3000/MT/2'

// DELETE 1

curl --location --request DELETE 'http://localhost:3000/MT/4'

//DELETE 2

curl --location --request DELETE 'http://localhost:3000/MT/8'

//POST 3

 curl --location 'http://localhost:3000/MT' \
--header 'Content-Type: application/json' \
--data-raw '{
    "id": "14",
    "first_name": "Temmie",
    "last_name": "Hoshimi",
    "email": "Temmie@discuz.net",
    "gender": "Temmie",
    "ip_address": "Temmie",
    "carro": "Temmie",
    "Raza": "Temmie",
    "App": "Temmie"
  }'


   POST 4 

  curl --location 'http://localhost:3000/MT' \
--header 'Content-Type: application/json' \
--data-raw '{
    "id": "15",
    "first_name": "Zhao",
    "last_name": "Kalabali",
    "email": "carrot@discuz.net",
    "gender": "Female",
    "ip_address": "123.34.32.124",
    "carro": "Ferrari",
    "Raza": "Marroqui",
    "App": "Minecraft"
  }' */