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


# Perguntas Técnicas
## 1. Quanto tempo você usou para completar a solução apresentada? O que você faria se tivesse mais tempo?

**R1> Cerca de 3~5h, estava cuidado do meu filho e programando, então não sei ao certo o tempo gasto.**
- Fazia um tempo que não manipulava .csv, então me tomou um tempo pra explorar a dependencia.
- Depois de achar as funcionalidades necessárias, desenvolver a lógica foi super simples e rápido.
- Realizar testes e correções de código.
- Documentar => `PerguntasTecnicas.md` e `README.md`
- Bati em alguns problemas na hora `dockerizar` o projeto... Mas solucionar problemas é a parte divertida de programar!

**R1.2> Gosto de ser bem objetivo quanto ao que fazer, a solução desenvolvida atende bem, mas...**
- Meu tempo disponível para realizar a tarefa estava curto(motivos pessoais)...
- Com mais tempo dedicaria na parte de testes!
  
## 2. Se usou algum framework, qual foi o motivo de ter usado este? Caso contrário, por que não utilizou nenhum?**

**R2> Segue a lista de tudo que foi utilizado, incluindo ferramentas e dependencias fora o projeto base.**
- Postman.
- Docker, Docker-compose.
- fs/promises, typeorm, @nestjs/typeorm, @nestjs/config, pg.