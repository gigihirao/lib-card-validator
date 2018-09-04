# Validador de Cartão de Crédito

**Esta biblioteca se destina à validação dos números do cartão de crédito, para uso em aplicações web.**
Na versão atual é capaz de através dos números do cartão de crédito validar se ele é verdadeiro ou não.


## Os métodos utilizados na biblioteca são:

#### **cardValidator(number);**

Exemplo de uso:

```
$node
> let validate = require('validatorgihirao')
> validate(4402955352166921); // true
```

## instalação

- você deverá ter o node + npm instalados. Para guia de instalação, visite [o site oficial](https://www.npmjs.com/get-npm).
- proceda com a instalação com `$npm install validatorgihirao`


## roadmap oficial do projeto

#### versão 2.0.0 (no ETA)
- validação de cartões de crédito com números variádos.

#### versão 1.0.1 (released)
- correção da validação de autenticidade para true ou false.
- correção dos bugs de uso de variável errada.

#### versão 1.0.0 (released)
- valida quantidade de números.
- valida autenticidade do cartão.