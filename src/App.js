import {BrowserRouter, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container, Navbar} from 'react-bootstrap';
import TournamentsListPage from './pages/TournamentsListPage';
import TournamentDetailsPage from './pages/TournamentDetailsPage';
import TournamentFormPage from './pages/TournamentFormPage';

function App() {
    return (<>
        <Navbar bg="dark" variant="dark" className="mb-4">
            <Container>
                <Navbar.Brand href="/">Tourney</Navbar.Brand>
            </Container>
        </Navbar>
        <Container>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TournamentsListPage/>}/>
                    <Route path="/tournaments/create" element={<TournamentFormPage/>}/>
                    <Route path="/tournaments/:slug" element={<TournamentDetailsPage/>}/>
                </Routes>
            </BrowserRouter>
        </Container>
    </>);
}

export default App;
