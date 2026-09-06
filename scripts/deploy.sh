#!/bin/sh

echo "Iniciando deploy do TaskFlow..."

docker compose down

docker compose up --build -d

echo "Deploy concluído com sucesso!"