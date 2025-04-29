Sistema de Chamada Infantil com ESP32 – Projeto de Interação Lúdica para Clínicas e Hospitais

Descrição geral do projeto:

Este projeto foi idealizado com o objetivo de transformar a espera de crianças em ambientes hospitalares em algo mais leve e interativo. Muitas vezes, crianças ficam ansiosas ou inquietas ao aguardar atendimento, e pensando nisso, foi criado um sistema de chamada que une tecnologia, com som para avisá-las de forma divertida que chegou a sua vez de ser atendida.

Como o sistema funciona:

1- O sistema é composto por uma placa ESP32 conectada à internet via Wi-Fi, e um buzzer. A comunicação com o sistema acontece através do protocolo MQTT, utilizando um broker público. Através de uma interface (como um botão em um site ou aplicativo), é possível enviar um comando para o ESP32, que está escutando atentamente a um tópico específico de mensagens.

2- Quando o botão "Chamar" é pressionado, o sistema recebe a mensagem e interpreta que há uma chamada ativa. A partir disso, dois efeitos são acionados simultaneamente:

3- O buzzer emite um som agudo por exatamente 5 segundos, reforçando o aviso de maneira sonora.

4- Ao mesmo tempo, na interface de controle, o botão muda de "Chamar" para "Chamado", indicando que o aviso foi disparado com sucesso.

5- Depois dos 5 segundos, o som do buzzer é automaticamente interrompido.

Propósito e impacto social:

O foco deste projeto vai além da tecnologia. Ele visa criar uma experiência mais humana, acessível e acolhedora para crianças que estão em um ambiente geralmente desconfortável. Ao transformar o chamado em algo lúdico, com sons, o momento de ser atendido se torna mais agradável e menos estressante.

Além disso, o sistema é de fácil adaptação, podendo ser implementado em clínicas, hospitais pediátricos ou qualquer local onde crianças precisem esperar por atendimento.

Resumo das funcionalidades:

- Conexão automática do ESP32 ao Wi-Fi e ao broker MQTT.

- Monitoramento contínuo de um tópico específico para receber comandos.

- Buzzer tocando por 5 segundos para reforçar o alerta sonoro.

- Interface visual que informa o status da chamada, alternando entre "Chamar" e "Chamado".

Projeto com foco na inclusão e conforto infantil.

Considerações finais:

Este sistema é simples, funcional e atende a uma necessidade real do cotidiano hospitalar. Ao unir componentes eletrônicos básicos com uma lógica intuitiva e amigável, ele proporciona uma experiência mais tranquila para crianças e também facilita a comunicação entre a equipe de atendimento e os pequenos pacientes.
