#include <WiFi.h>
#include <PubSubClient.h>

// Dados da rede Wi-Fi e servidor MQTT
const char* ssid = "Wokwi-GUEST";
const char* password = "";
const char* mqttServer = "broker.hivemq.com";
const int mqttPort = 1883;
const char* mqttTopic = "hospital/wokwi/chamada";

// Pinos do LED e Buzzer
const int ledExternoPin = 2;
const int buzzerPin = 4;

// Objetos de rede e MQTT
WiFiClient espClient;
PubSubClient client(espClient);

// Controle de chamada e piscar
bool chamadaAtiva = false;
unsigned long ultimoTempoPisca = 0;
const int intervaloPisca = 500;

// Controle do buzzer
unsigned long tempoInicioBuzzer = 0;
const unsigned long duracaoMaximaBuzzer = 5000; // 10 segundos

void setup() {
  Serial.begin(115200);

  pinMode(ledExternoPin, OUTPUT);
  pinMode(buzzerPin, OUTPUT);
  digitalWrite(ledExternoPin, LOW);
  digitalWrite(buzzerPin, LOW);

  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\nConectado ao WiFi");

  client.setServer(mqttServer, mqttPort);
  client.setCallback(mqttCallback);
  reconectarMQTT();
}

void loop() {
  if (!client.connected()) {
    reconectarMQTT();
  }
  client.loop();

  if (chamadaAtiva) {
    // Pisca LED
    if (millis() - ultimoTempoPisca >= intervaloPisca) {
      digitalWrite(ledExternoPin, !digitalRead(ledExternoPin));
      ultimoTempoPisca = millis();
    }

    // Buzzer só por 10 segundos
    if (millis() - tempoInicioBuzzer <= duracaoMaximaBuzzer) {
      tone(buzzerPin, 1000);
    } else {
      noTone(buzzerPin);
    }

  } else {
    digitalWrite(ledExternoPin, LOW);
    noTone(buzzerPin);
  }
}

void mqttCallback(char* topic, byte* payload, unsigned int length) {
  String message = "";
  for (int i = 0; i < length; i++) {
    message += (char)payload[i];
  }

  Serial.print("Mensagem recebida: ");
  Serial.println(message);

  if (message != "0") {
    chamadaAtiva = true;
    tempoInicioBuzzer = millis();  // Marca o início da chamada para o controle do buzzer
    Serial.println("Chamada ATIVADA - LED piscando + Buzzer (5s)");
  } else {
    chamadaAtiva = false;
    Serial.println("Chamada DESATIVADA");
  }
}

void reconectarMQTT() {
  while (!client.connected()) {
    Serial.print("Conectando ao MQTT...");
    if (client.connect("WokwiClient")) {
      Serial.println("conectado");
      client.subscribe(mqttTopic);
    } else {
      Serial.print("falhou, rc=");
      Serial.print(client.state());
      Serial.println(" tentando novamente em 5 segundos");
      delay(5000);
    }
  }
}
