# Projeto: Codificação e Decodificação de Palavras com Substituição de Caracteres

## Descrição
Este projeto é uma aplicação web simples que permite codificar e decodificar palavras usando o método de substituição personalizada de caracteres. O usuário pode inserir um texto, que será validado para garantir que não contenha letras maiúsculas ou caracteres acentuados. Após a validação, o texto pode ser codificado, exibindo o resultado na tela. O projeto também oferece a funcionalidade de decodificar o texto previamente codificado.

## Funcionalidades
- **Codificação:** Transforma o texto inserido pelo usuário em uma string codificada substituindo as vogais a, e, i, o, u por ai, enter, imes, obter, ufat respectivamente.
- **Decodificação:** Reverte o processo de codificação, transformando a string codificada de volta ao texto original.
- **Validação de Input:** Garante que o texto inserido não contenha letras maiúsculas ou caracteres acentuados. Se houver caracteres inválidos, uma mensagem de erro é exibida.


## Estrutura do Projeto
- `index.html`: O arquivo HTML principal que contém a estrutura da página e os elementos de interface, como campos de entrada e botões.
- `decod.js`: O arquivo JavaScript que contém as funções responsáveis pela validação, codificação, e decodificação do texto.
- `style.css`: Arquivo de css que contem toda estilizacao do projeto

## Como Usar
1. **Clone o Repositório:**
```bash
Copiar código
git clone https://github.com/MaiaraMendes25/decodificador.git
cd decodificador
```

2. **Abra o arquivo `index.html` em seu navegador:**
- O arquivo index.html contém a interface da aplicação.
- Você verá um campo de texto onde poderá inserir a palavra ou frase que deseja codificar ou decodificar.

3. **Insira o texto e clique em "Codificar" ou "Decodificar":**
- Após inserir o texto, clique no botão correspondente para realizar a ação desejada.
- O resultado será exibido ao lado.

4. **Mensagens de erro:**
- Se o texto contiver letras maiúsculas ou caracteres acentuados, uma mensagem de erro será exibida, solicitando a correção do texto.

## Requisitos
Navegador moderno (Chrome, Firefox, Edge, etc.)
Conhecimento básico de HTML e JavaScript (opcional, para personalização do projeto)

## Personalização
Você pode modificar as funções de substituição e codificação/decodificação para atender a necessidades específicas. Além disso, estilos adicionais podem ser aplicados para personalizar a aparência da interface.

## Contribuição
Sinta-se à vontade para contribuir com este projeto enviando pull requests ou relatando problemas. Todas as formas de contribuição são bem-vindas!
