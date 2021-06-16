import {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from "../pages/home";
import Blog from "../pages/blog";
import Registro from "../pages/registro";
import E404 from "../pages/e404";

function Router(){
    return (
        <BrowserRouter basename="Make-Up_Courses-React-2057129">
        <Switch>
            <Route path="/" exact>
                <Home />      
            </Route>
            <Route path="/blog" exact>
                <Blog />
            </Route>
            <Route path="/registro" exact>
                <Registro />
            </Route>
            <Route>
                <E404 />
            </Route>
        </Switch>
        </BrowserRouter>


    )
}

export default Router;