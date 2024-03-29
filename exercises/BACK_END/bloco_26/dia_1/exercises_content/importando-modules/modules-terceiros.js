// Módulos de terceiros

// Módulos de terceiros são importados da mesma forma que os módulos internos: passando seu nome como parâmetro para a função require . A diferença é que, como esses módulos não são nativos do Node.js, precisamos primeiro instalá-los na pasta do projeto em que queremos utilizá-los. O registro oficial do Node.js, em que milhares de pacotes estão disponíveis para serem instalados, é o npm . Além disso, npm também é o nome da ferramenta de linha de comando (CLI - command line interface ) responsável por baixar e instalar esses pacotes. O CLI npm é instalado juntamente com o Node.js.

// Quando importamos um módulo que não é nativo do Node.js, e não aponta para um arquivo local, o Node inicia uma busca por esse módulo. Essa busca acontece na pasta node_modules . Caso um módulo não seja encontrado na node_modules mais próxima do arquivo que o chamou, o Node procurará por uma pasta node_modules na pasta que contém a pasta atual. Caso encontrado, o módulo é carregado. Do contrário, o processo é repetido em um nível de pasta acima. Isso acontece até que o módulo seja encontrado, ou até que uma pasta node_modules não exista no local em que o Node está procurando.

// Aproveitando que estamos falando sobre módulos de terceiros, vamos falar melhor do NPM: você entenderá melhor o que ele é e como utilizar os principais comandos do seu CLI. Bora lá!
