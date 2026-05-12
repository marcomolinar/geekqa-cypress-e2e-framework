# Reto 3 - Automatización Cypress

## Objetivo

Realizar una automatización End to End (E2E) utilizando Cypress sobre el sitio web GeekQA Store, validando el flujo completo de compra desde la selección del producto hasta el proceso de pago.

---

## Tecnologías utilizadas

- Cypress
- JavaScript
- Node.js
- Chrome Browser

---

## Flujo automatizado

La automatización ejecuta las siguientes acciones:

1. Abrir sitio web
2. Ingresar a categoría Phones
3. Seleccionar producto Samsung Galaxy S22
4. Agregar producto al carrito
5. Validar carrito
6. Configurar Gift Wrapping
7. Checkout
8. Checkout como invitado
9. Captura de datos guest
10. Creación de dirección de facturación
11. Selección de dirección
12. Continuar a Payments
13. Captura de tarjeta dentro de iframe
14. Ejecución de pago

---

## Arquitectura utilizada

Se implementó el patrón POM (Page Object Model) para separar:
- lógica de negocio
- localizadores
- flujo principal de prueba

Estructura:

```bash
reto-3-cypress/
│
├── cypress/
│   ├── e2e/
│   │   └── geekqa_checkout.cy.js
│   │
│   ├── pages/
│   │   ├── homePage.js
│   │   ├── cartPage.js
│   │   ├── checkoutGuestPage.js
│   │   ├── billingAddressPage.js
│   │   └── paymentPage.js
│   │
│   ├── fixtures/
│   │   └── example.json
│   │
│   └── support/
│       ├── commands.js
│       └── e2e.js
│
├── cypress.config.js
├── package.json
├── package-lock.json
└── README.md
```

---

## Instalación del proyecto

```bash
npm install
```

---

## Ejecución del proyecto

Abrir Cypress:

```bash
npm run cy:open
```

Ejecución en terminal:

```bash
npm run test:e2e
```

---

## Resultado esperado

La prueba debe finalizar correctamente mostrando:

```bash
1 passing
All specs passed
```

---

## API Testing with Postman

The project also includes API automation testing using Postman over Swagger Petstore.

### CRUD operations implemented:
- Create User
- Get User
- Update User
- Delete User

### Features:
- Environment variables
- Dynamic data generation
- Assertions
- Collection Runner execution
- Response validation
- Response time validation

### Files:
- `postman/Petstore_User_API_MarcoMolina.postman_collection.json`
- `postman/Petstore_User_API_MarcoMolina_ENV.postman_environment.json`

## Autor

Marco Antonio Molina Rodríguez