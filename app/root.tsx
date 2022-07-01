import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Layout from "./components/Shared/Layout";


export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Remix Movie Manager",
  viewport: "width=device-width,initial-scale=1",
});

// added links function to import bootstrap
export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      crossOrigin: "anonymous",
      integrity: "sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3",
      href: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
    },
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.1/font/bootstrap-icons.css"
    }
  ];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      
      {/* <body className="container"> replaced with custom Layout component */}
      <Layout>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </Layout>
      {/* </body> */}
    </html>
  );
}
