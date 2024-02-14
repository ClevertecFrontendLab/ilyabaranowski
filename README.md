# CleverFIT

## Инструкция к спринту №2 https://docs.google.com/document/d/1YifOvaNldwf5tW7mcdszEZr7WjFPxCBdKmf9aRZkbek/edit?usp=sharing

## Установка Node.js, npm, nvm, Yarn

Эта инструкция предоставляет пошаговое руководство по установке Node.js, npm, nvm (Node Version Manager) и Yarn на вашем компьютере.

#### 1. Установка Node.js с помощью nvm (Node Version Manager)

---

**Windows:**

Скачайте и установите [nvm-windows](https://github.com/coreybutler/nvm-windows).

Откройте терминал (например, Command Prompt или PowerShell) и выполните команду:<br>
`nvm install latest`

---

**macOS:**

Установите nvm через Homebrew:
`brew install nvm`

Добавьте следующую строку в ваш файл ~/.bashrc, ~/.bash_profile или ~/.zshrc:
`export NVM_DIR="$HOME/.nvm" [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"`

Используйте ~/.bash_profile или ~/.zshrc, если у вас есть Zsh.

В новом терминале выполните:
`nvm install node`

---

#### 2. Установка Yarn

Установка через npm (пакетный менеджер Node.js)
`npm install -g yarn`

| Проверьте версии установленных компонентов | Описание                               |
| ------------------------------------------ | -------------------------------------- |
| `node -v`                                  | `Выведет установленную версию Node.js` |
| `npm -v`                                   | `Выведет установленную версию npm`     |
| `nvm -v`                                   | `Выведет установленную версию nvm`     |
| `yarn -v`                                  | `Выведет установленную версию Yarn`    |

---

#### 3. Установка и запуска проекта

| Установка и запуска проекта | Описание                                                                        |
| --------------------------- | ------------------------------------------------------------------------------- |
| `nvm install 20.10.0`       | `Установить версию Node.js 20.10.0 с использованием Node Version Manager (nvm)` |
| `nvm use 20.10.0`           | `Активировать установленную версию Node.js 20.10.0`                             |
| `yarn install`              | `Установить зависимости проекта с помощью Yarn`                                 |
| `yarn start`                | `Запустить проект`                                                              |

---

| Основные команды    | Описание                               |
| ------------------- | -------------------------------------- |
| `yarn start`        | `Запуск проекта`                       |
| `yarn build`        | `Сборка проекта`                       |
| `yarn lint:css`     | `Запуск stylelint для css файлов`      |
| `yarn lint:scripts` | `Запуск eslint для ts(x)/js(x) файлов` |
| `yarn lint`         | `Запуск stylelint и eslint`            |
| `yarn cy:e2e`       | `Запуск e2e тестов cypress`            |

---

#### Прекоммитные проверки

В этом проекте используются прекоммитные проверки, настроенные через [lint-staged](https://classic.yarnpkg.com/en/package/lint-staged). Они автоматически проверяют и форматируют изменения перед коммитом.

**Как это работает:**

[lint-staged](https://classic.yarnpkg.com/en/package/lint-staged) запускает заданные команды только для файлов, добавленных в коммит. Это позволяет автоматически форматировать и проверять только измененные файлы, что помогает поддерживать высокое качество кода в проекте.

Из-за прекоммитных проверок могут возникнуть проблемы при попытке сделать коммит, если ваш код не соответствует установленным правилам форматирования или стилю кода.

**Команды, запускаемые перед коммитом:**

```
"lint-staged": {
    "*.{ts,tsx,js,jsx}": [
        "prettier --write",
        "eslint"
        ],
    "*.json": [
        "prettier --write"
    ],
    "*.css": [
        "prettier --write",
        "stylelint"
    ]
}
```

Эти команды запускаются перед каждым коммитом и проверяют/форматируют файлы с расширениями .ts, .tsx, .js, .jsx, .json и .css с помощью [prettier](https://classic.yarnpkg.com/en/package/prettier), [eslint](https://classic.yarnpkg.com/en/package/eslint) и [stylelint](https://classic.yarnpkg.com/en/package/stylelint).

**Если у вас возникли проблемы** с коммитом из-за прекоммитных проверок, рекомендуется проверить вывод консоли на наличие предупреждений или ошибок, а затем **внести необходимые изменения в соответствии с правилами форматирования и стиля кода**.

---

#### Рекомендации к именам коммитов

-   Названия коммитов следует соблюдать согласно [гайдлайну](https://www.conventionalcommits.org/en/v1.0.0/)
-   Тип коммита может быть только в нижнием регистре (`feat`, `fix`, `refactor`, `docs` и т.д.)
-   Может использоваться present tense ("add feature" not "added feature")
-   Может использоваться imperative mood ("move cursor to..." not "moves cursor to...")

#### Примеры имен коммитов

-   `init:` - используется для начала проекта/таска. Примеры:

```
init: start sprint-1
init: start html-coding task
```

-   `feat:` - это реализованная новая функциональность из технического задания (добавил поддержку зумирования, добавил footer, добавил карточку продукта). Примеры:

```
feat: add basic page layout
feat: implement search box
```

-   `fix:` - исправил ошибку в ранее реализованной функциональности. Примеры:

```
fix: change layout for video items to fix bugs
fix: relayout header for firefox
```

-   `refactor:` - новой функциональности не добавлял / поведения не менял. Файлы в другие места положил, удалил, добавил. Изменил форматирование кода (white-space, formatting, missing semi-colons, etc). Улучшил алгоритм, без изменения функциональности. Примеры:

```
refactor: change the structure of the project
refactor: rename vars for better readability
```

-   `docs:` - используется при работе с документацией/readme проекта. Примеры:

```
docs: update readme with additional information
docs: update description of run() method
```

---
