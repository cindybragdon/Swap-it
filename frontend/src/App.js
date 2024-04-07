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
                    <Route path='/features' element={<Features/>}/>
                    <Route path='*' element={<NotFound/>}/>
                    <Route path='/create-account' element={<CreateAccount/>}/>

                    <Route path='/piges' element={<PrivateRoute/>}>
                        <Route path='/piges' element={<Piges/>}/>
                    </Route>

                    <Route path='/piges/creation-piges' element={<PrivateRoute/>}>
                        <Route path='/piges/creation-piges' element={<CreationPiges/>}/>
                    </Route>

                    <Route path='/addPeople' element={<PrivateRoute/>}>
                        <Route path='/addPeople' element={<AddUserToPige/>}/>
                    </Route>

                    <Route path='/piges/:pigeName' element={<PrivateRoute/>}>
                        <Route path='/piges/:pigeName' element={<MyPige/>}/>
                    </Route>

                    <Route path='/forgotPwd' element={<PrivateRoute/>}>
                        <Route path='/forgotPwd' element={<ForgotPwd/>}/>
                    </Route>

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
                </Routes>
            </div>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
