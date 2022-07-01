
import NavBar from "./NavBar";
import NavItem from "./NavItem";

function Layout({ children }: any) {
  return (
      <body className="container">
        <NavBar title="Movies">
          <NavItem title="Home" href="/" />
          <NavItem title="Movies" href="/movie" /> 
        </NavBar>

        <main className="container">          
          {children}
        </main>

        <footer className=""></footer>
      </body>
  );
}

export default Layout;
