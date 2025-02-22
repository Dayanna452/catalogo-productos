# Proyecto de Catálogo de Productos con Next.js

Este es un proyecto de catálogo de productos desarrollado con Next.js utilizando el App Router. Incluye TypeScript, TailwindCSS para el diseño, React Query para la gestión de datos, React Hook Form para el manejo de formularios y Jest con React Testing Library para pruebas.

## Tecnologías utilizadas

- [Next.js](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [React Query](https://tanstack.com/query/latest)
- [React Hook Form](https://react-hook-form.com/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/)

## Instalación y Configuración

1. Clona el repositorio:

   ```sh
   git clone https://github.com/Dayanna452/catalogo-productos
   cd catalogo-productos
   ```

2. Instala las dependencias:

   ```sh
   npm install
   # o
   yarn install
   ```

3. Configura las variables de entorno:
   Crea un archivo `.env.local` en la raíz del proyecto y define las variables necesarias.

   ```env
   NEXT_PUBLIC_API_URL=https://fakestoreapi.com/products
   ```

4. Inicia el servidor de desarrollo:
   ```sh
   npm run dev
   # o
   yarn dev
   ```

## Estructura del Proyecto

```
/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   ├── components/
│   ├── hooks/
│   ├── lib/
│   ├── styles/
│   ├── types/
│   ├── utils/
│   ├── tests/
│   ├── services/
│   ├── store/
├── public/
├── .env.local
├── next.config.ts
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
├── jest.config.js
├── README.md
```

## Uso de React Query

Ejemplo de configuración de React Query:

```tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
```

## Formularios con React Hook Form

Ejemplo de uso:

```tsx
import { useForm } from "react-hook-form";

export default function ProductForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} placeholder="Nombre del producto" />
      <button type="submit">Enviar</button>
    </form>
  );
}
```

## Pruebas con Jest y React Testing Library

Ejemplo de prueba de un componente:

```tsx
import { render, screen } from "@testing-library/react";
import ProductForm from "../components/ProductForm";

test("renderiza el formulario", () => {
  render(<ProductForm />);
  expect(
    screen.getByPlaceholderText("Nombre del producto")
  ).toBeInTheDocument();
});
```

## Construcción y Despliegue

1. Construye la aplicación:
   ```sh
   npm run build
   # o
   yarn build
   ```
2. Ejecuta en modo producción:
   ```sh
   npm run start
   # o
   yarn start
   ```
3. Desplegar en Vercel:
   ```sh
   vercel
   ```

## Contribuciones

Si deseas contribuir, por favor abre un issue o un pull request.

## Licencia

Este proyecto está bajo la licencia MIT.
