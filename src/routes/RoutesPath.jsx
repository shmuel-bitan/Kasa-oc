import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "../layouts/Layout"
import Accueil from "../pages/Accueil/Accueil";
import Erreur404 from "../pages/erreur404/404";
import Fiche from '../pages/logements/Fiches';
import APropos from "../pages/About/APropos";


function RoutesPath() {
    return(
        <HashRouter>
            <Layout>
                <Routes>
                    <Route element={<Navigate replace to="/accueil" />} path="/" />
                    <Route path="/accueil" element={<Accueil />}/>
                    <Route path="*" element={<Erreur404 />}/>
                    <Route path="/logement/:id" element={<Fiche />}/>
                    <Route path="/a-propos" element={<APropos />}/>
                </Routes>
            </Layout>
        </HashRouter>
    );
}

export default RoutesPath;