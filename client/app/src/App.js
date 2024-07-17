import React from 'react'
import {BrowserRounter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './elements/Home'
import Create from './elements/Create'
import Edit from './elements/Edit'
import Read from './elements/Read'
function App() {
  return(
    <BrowserRounter>
    <Route>
      <Route path='/' element={<Home />} />
      <Route path='/create' element={<Create />} />
      <Route path='/edit/:id' element={<Edit />} />
      <Route path='/read/ :id' element={<Read />} />

    </Route>
    </BrowserRounter>
  )
  
}

export default App