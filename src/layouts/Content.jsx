import { Route, Routes } from "react-router-dom";
import routes from "../routes/routes";
import Header, { HeaderDerecho, HeaderIzquierdo } from "./Header";

const Contenido = ({ children }) => {
    return (
        <div className="wrapper">
            {children}
        </div>
    );
}

const Content = () => {
    return (
        <>
            <Contenido >
                <Header>
                    <HeaderIzquierdo>
                       <img src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-vector-users-icon-png-image_4144740.jpg" width="50" alt="" />
                    </HeaderIzquierdo>
                    <HeaderDerecho>
                        Estamos al lado derecho
                    </HeaderDerecho>
                </Header>
                <main className="content">
                    <Routes>
                        {
                            routes.map((route) => (
                                <Route key={route.path} path={route.path} element={route.element}></Route>
                            ))
                        }
                    </Routes>
                </main>
            </Contenido>
        </>
    );
}

export default Content;