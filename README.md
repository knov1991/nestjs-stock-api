# Iniciar projeto
``docker-compose up``

# Config/Endpoints
### Pasta para os arquivos .csv
**src/assets**
### Ler Csv > salvar DB - 'stocks/:arquivo/:ano' = stocks/MGLU3/2019
**GET** http://localhost:3000/stocks/MGLU3/2019

**GET** http://localhost:3000/stocks/PETR4/2001

**GET** http://localhost:3000/stocks/VALE3/2005

### Get informação DB - stocks/db/:stock/:ano = stocks/db/MGLU3/2019
**GET** http://localhost:3000/stocks/db/MGLU3/2019

### Get informação DB - stocks/db/all
**GET** http://localhost:3000/stocks/db/all