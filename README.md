# Validador de Cartão de Crédito

**Esta biblioteca se destina à validação dos números do cartão de crédito, para uso em aplicações web.**
Na versão atual é capaz de através dos números do cartão de crédito validar se ele é verdadeiro ou não.


## Os métodos utilizados na biblioteca são:

#### **cardValidator(number);**

Exemplo de uso:

```
$node
> let convert = require("chayote-lib")
> convert(1); //'um'
```

## instalação

- você deverá ter o node + npm instalados. Para guia de instalação, visite [o site oficial](https://www.npmjs.com/get-npm).
- proceda com a instalação com `$npm install validatorgihirao`


## roadmap oficial do projeto

#### versão 1.0.1
- correção de bugs de 
- implementação da opção "letras maiúsculas ou minúsculas";
- implementação da opção de incluir moeda na conversão.

#### versão 1.0.0
- valida quantidade de números.
- valida autenticidade do cartão.