## 📁 Estructura de proyecto

src/
├── app/
│   ├── core/  👁️                   ← Código cargado 1 sola vez
│   │   ├── services/
│   │   │   └── auth.service.ts
│   │   ├── guards/
│   │   │   └── admin.guard.ts
│   │   └── interceptors/
│   │       └── auth.interceptor.ts
│
│   ├── shared/                   
│   │   ├── ui/                   
│   │   │   ├── navbar/
│   │   │   └── footer/
│   │   └── pipes/, directives/ 👁️  ← Pipes y directivas
│
│   ├── features/                 ← Funcionalidad por dominio
│   │   ├── events/
│   │   │   ├── components/       ← Subcomponentes: calendar...
│   │   │   ├── pages/
│   │   │   │   ├── events-list/  ← Página de lista de eventos
│   │   │   │   └── event-edit/   ← Edición de evento (admin)
│   │   │   ├── services/
│   │   │   │   └── events.service.ts 👁️
│   │   │   └── events.routes.ts 👁️
│   │   
│   │   ├── books/
│   │   │   ├── pages/
│   │   │   │   ├── books-list/
│   │   │   │   └── book-edit/    ← Edición de libros (admin)
│   │   │   └── services/
│   │   │       └── books.service.ts 👁️
│   │   │   └── books.routes.ts 👁️
│   │   
│   |   ├── auth/
|   |   |   ├── pages/
│   │   │   │   ├── login/
│   │   │   │   ├── login.page.html
│   │   │   |   └── login.page.css
|   |   |   ├── services/
|   |   |   │   └── auth.service.ts           ← Lógica de login, tokens, etc.
|   |   |   ├── auth.routes.ts                ← Rutas locales (login, registro)
|      
│   ├── layout/                   ← Layout base
│   │   ├── main-layout.component.ts
│   │   └── (si quieres: admin-layout.component.ts)
│
│   ├── app.component.ts         ← Componente raíz (usa RouterOutlet + Navbar/Footer)
│   ├── app.routes.ts            ← Todas las rutas base
│   └── app.config.ts            ← Configuración global (providers, router)
│
├── assets/
├── main.ts
└── styles.css

Layout

----------------------------
|        Navbar           |
----------------------------
|                          |
|   ← RouterOutlet aquí   |  ← Página dinámica (events, home, etc.)
|                          |
----------------------------
|        Footer           |
----------------------------

main-layout.component.ts

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../shared/ui/navbar/navbar.component';
import { FooterComponent } from '../../shared/ui/footer/footer.component';

@Component({
selector: 'app-main-layout',
standalone: true,
imports: [RouterOutlet, NavbarComponent, FooterComponent],
templateUrl: './main-layout.component.html',
})
export class MainLayoutComponent {}

--------------------------------------

<app-navbar></app-navbar>

<main>
  <router-outlet></router-outlet> <!-- Aquí se cargan las páginas -->
</main>

<app-footer></app-footer>


features/
└── events/
├── components/              ← Componentes de UI usados en varias páginas
│   ├── calendar/
│   │   ├── calendar.component.ts
│   │   ├── calendar.component.html
│   │   └── calendar.component.css
│   ├── event-card/
│   │   ├── event-card.component.ts
│   │   ├── event-card.component.html
│   │   └── event-card.component.css
│   └── filter/
│       ├── filter.component.ts
│       ├── filter.component.html
│       └── filter.component.css
    ├── pages/                   ← Páginas navegables del feature
    │   ├── events-list/
    │   │   ├── events-list.component.ts
    │   │   ├── events-list.component.html
    │   │   └── events-list.component.css
    │   └── event-edit/
    │       ├── event-edit.component.ts
    │       ├── event-edit.component.html
    │       └── event-edit.component.css
    ├── services/                ← Servicios específicos del feature
    │   └── events.service.ts
    └── events.routes.ts         ← Definición de rutas de este feature

