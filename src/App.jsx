import { Routes, Route } from 'react-router-dom'

import Navigation from './components/navigation/Navigation'
import Home from './components/home/Home'
import Comments from './components/comments/Comments'
import Contacts from './components/contacts/Contacts'

import './app.scss'

const App = () => {
    return <div className="main welcome">
        <Routes>
            <Route path="/autokat-group/" element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path="/autokat-group/comments" element={<Comments />} />
                <Route path="/autokat-group/contacts" element={<Contacts />} />
            </Route>
        </Routes>
    </div>
}

export default App