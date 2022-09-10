import { Routes, Route, BrowserRouter } from 'react-router-dom';
import App from './containers/App';
import Home from './containers/Home';
import Launch from './containers/Launch';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route path="" element={<Home />} />
                    <Route path="launch/:flightNumber" element={<Launch />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;