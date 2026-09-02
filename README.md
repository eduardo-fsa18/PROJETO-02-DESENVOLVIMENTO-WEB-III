# 📚 Projeto Disciplinas - 3º Semestre (FATEC Diadema)

Este projeto é uma aplicação web desenvolvida para a disciplina de **Desenvolvimento Web III** do curso de **Desenvolvimento de Software Multiplataforma (DSM)** na FATEC Diadema.

A aplicação consome dados dinâmicos de um arquivo JSON local via requisições assíncronas (`fetch API`) para listar e navegar pelas disciplinas do 3º semestre, apresentando uma interface moderna e responsiva.

---

## 🚀 Tecnologias Utilizadas

* **Front-end:** HTML5, CSS3 (Modern Glassmorphism & Flexbox/Grid), JavaScript (ES6+ / Fetch API)
* **Back-end / Servidor:** Node.js, Express.js (Servidor de arquivos estáticos)
* **Formato de Dados:** JSON

---

## ⚙️ Funcionalidades

* 📌 **Carregamento Dinâmico:** Leitura do arquivo `dados.json` para renderizar as disciplinas da grade sem atualizar a página manualmente.
* 🧭 **Menu de Navegação:** Barra superior fixa (*sticky navbar*) para navegação rápida entre o início e as páginas das matérias.
* 🎨 **Interface Moderna:** Design responsivo com suporte a modo escuro (*Dark Mode*) e efeitos translúcidos (*Glassmorphism*).
* ⚠️ **Tratamento de Erros:** Página personalizada 404 para rotas não encontradas.

---

## 📂 Estrutura do Projeto

```text
Principal/
├── app.js                   # Servidor Node.js / Express
└── public/
    ├── css/
    │   └── style.css        # Estilos globais da aplicação
    ├── dados/
    │   └── dados.json       # Base de dados em JSON
    ├── disciplinas/         # Páginas individuais das matérias
    │   ├── agl.html
    │   ├── bdn.html
    │   ├── dsw.html
    │   ├── gps.html
    │   ├── ihc.html
    │   ├── ing.html
    │   └── tp2.html
    ├── erro404.html         # Página de erro customizada
    └── index.html           # Página principal
