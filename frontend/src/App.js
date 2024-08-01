import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import NotFound from './pages/NotFound';
import Features from './pages/Features';
import Piges from "./pages/Piges";
import CreationPiges from "./pages/CreationPiges";
import MyPige from "./pages/MyPige";
import ForgotPwd from "./pages/ForgotPwd";
import QuiJaiPige from "./pages/QuiJaiPige";
import CreateAccount from "./pages/CreateAccount";
import UpdateAccount from "./pages/UpdateAccount";
import MyAccount from "./pages/MyAccount";
import MyWishList from "./pages/MyWishList";
import AddWish from "./pages/AddWish";
import PrivateRoute from "./components/PrivateRoute";
import AddUserToPige from "./pages/AddUserToPige";
import UpdatePige from "./pages/UpdatePige";
import Invitations from "./pages/Invitations";
import ModifPseudoImagePige from "./pages/ModifPseudoImagePige";
import LogOut from "./components/LogOut";
import Email from "./pages/Email";
import Convos from "./pages/Convos";


function App() {
    return (
        <BrowserRouter>
            <NavBar/>
            <div>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/faq' element={<FAQ/>}/>
                    {/*<Route path='/features' element={<Features/>}/>*/}
                    <Route path='*' element={<NotFound/>}/>
                    <Route path='/create-account' element={<CreateAccount/>}/>

                    <Route path='/piges/:pigeName/UpdatePseudoImage' element={<PrivateRoute/>}>
                        <Route path='/piges/:pigeName/UpdatePseudoImage' element={<ModifPseudoImagePige/>}/>
                    </Route>

                    <Route path='/piges' element={<PrivateRoute/>}>
                        <Route path='/piges' element={<Piges/>}/>
                    </Route>

                    <Route path='/piges/creation-piges' element={<PrivateRoute/>}>
                        <Route path='/piges/creation-piges' element={<CreationPiges/>}/>
                    </Route>

                    <Route path='/piges/:pigeName/UpdatePige' element={<PrivateRoute/>}>
                        <Route path='/piges/:pigeName/UpdatePige' element={<UpdatePige/>}/>
                    </Route>

                    <Route path='/addPeople' element={<PrivateRoute/>}>
                        <Route path='/addPeople' element={<AddUserToPige/>}/>
                    </Route>

                    <Route path='/piges/:pigeName' element={<PrivateRoute/>}>
                        <Route path='/piges/:pigeName' element={<MyPige/>}/>
                    </Route>

                    <Route path='/forgotPwd' element={<ForgotPwd/>}/>

                    <Route path='/pige/picked' element={<PrivateRoute/>}>
                        <Route path='/pige/picked' element={<QuiJaiPige/>}/>
                    </Route>

                    <Route path='/myaccount/updateaccount' element={<PrivateRoute/>}>
                        <Route path='/myaccount/updateaccount' element={<UpdateAccount/>}/>
                    </Route>

                    <Route path='/myaccount' element={<PrivateRoute/>}>
                        <Route path='/myaccount' element={<MyAccount/>}/>
                    </Route>

                    <Route path='/piges/:pigeName/myWishList' element={<PrivateRoute/>}>
                        <Route path='/piges/:pigeName/myWishList' element={<MyWishList/>}/>
                    </Route>

                    <Route path='/pige/myWishList/addWish' element={<PrivateRoute/>}>
                        <Route path='/pige/myWishList/addWish' element={<AddWish/>}/>
                    </Route>

                    <Route path='/email' element={<PrivateRoute/>}>
                        <Route path='/email' element={<Email/>}/>
                    </Route>

                    <Route path='/logOut' element={<PrivateRoute/>}>
                        <Route path='/logOut' element={<LogOut/>}/>
                    </Route>

                    <Route path='/inv' element={<PrivateRoute/>}>
                        <Route path='/inv' element={<Invitations/>}/>
                    </Route>

                    <Route path='/convos' element={<PrivateRoute/>}>
                        <Route path='/convos' element={<Convos/>}/>
                    </Route>

                </Routes>
            </div>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
