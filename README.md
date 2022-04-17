## Nestjs-Mysql-TypeOrm

### Database Config/Connection
**change your database settings on file** `ormconfig.json`

**setup database on docker** `docker run --name nestjs-stocks-api -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=db-stocks -p 3306:3306 -d mysql:8.0`