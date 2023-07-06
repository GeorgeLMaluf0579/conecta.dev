# Conecta.Dev Code Challenge
This solutions is a suggestion to solve Conecta.Dev [code challenge](./Conecta%20code%20challenge.pdf)

This solution is splited into two projects:
* Backend
* Frontend

Both are in respective docker containers and work together as one.

## 🧪 Technologies
This solution was developed using the following technologies:
<table>
  <tr>
    <td style="vertical-align: center;text-align: left;">
      <a href="https://www.docker.com">
      <img height="28" width="28" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg">
      Docker</a>
    </td>
    <td style="vertical-align: center;text-align: left;">
      <a href="https://www.ruby-lang.org/">
      <img height="28" width="28" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain.svg">
      Ruby</a>
    </td>
    <td style="vertical-align: center;text-align: left;">
      <a href="https://rubyonrails.org/">
      <img height="28" width="28" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg">
      Rails</a>
    </td>
    <td style="vertical-align: center;text-align: left;">
      <a href="https://rspec.info/">
      <img height="28" width="28" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rspec/rspec-original.svg">
      RSpec</a>
    </td>
  </tr>
  <tr>
    <td style="vertical-align: center;text-align: left;">
      <a href="https://www.postgresql.org">
      <img height="28" width="28" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg">
      PostgreSQL</a>
    </td>
    <td style="vertical-align: center;text-align: left;">
      <a href="https://www.ruby-lang.org/">
      <img height="28" width="28" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg">
      React</a>
    </td>
    <td style="vertical-align: center;text-align: left;">
      <a href="https://jestjs.io/">
      <img height="28" width="28" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg">
      Jest</a>
    </td>
    <td />
  </tr>
</table>

## 📦 Setup
### 1. Extract the content of the zip file or clone the repo from Github:
  ```bash
  $ git clone https://github.com/GeorgeLMaluf0579/conecta.dev.git && cd conecta.dev
  ```
### 2. Build the docker images
  ```bash
  $ make docker-build
  ```
  This process will take some time, it depends of your internet connection and speed of your CPU.

### 3. Setup the project database
  After build the docker images, you need setup the project database. To do that, follow the command:
  ```bash
  $ make docker-setupdb
  ```
## 🏎 How to execute
  After execute all procedures from Setup section, you can execute the project using the line bellow:
  ```bash
  $ make docker-run
  ```
  Open your favorite browser and access the following url:
  ```
  http://localhost:8080
  ```
  You can use the sample file (example_input.tab) on project root folder to test the import process

## 🤖 Automated Testing and Code coverage
To execute backend test suite:
```
$ make docker-back-tests
```

After the exection of test suite, a subfolder called coverage will be created or update inside of backend project.

## 👨🏻‍💻 Autor
Made by George Luiz 'Maverick' Maluf

<b> 📫 How to reach me</b>
<div>
  <a href="https://www.linkedin.com/in/%F0%9F%91%A8%F0%9F%8F%BB%E2%80%8D%F0%9F%92%BB-george-l-maluf-24225733/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a>
  <a href="https://api.whatsapp.com/send?phone=554298337945"><img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"></a>
  <a href="mailto:georgelmaluf286@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"></a>
</div>