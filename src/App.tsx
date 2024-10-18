import { BrowserRouter ,Route , Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Onboarding from './pages/Onboarding'
import JobListing from './pages/Job-Listing'
import JobPage from './pages/Job'
import PostJob from './pages/Post-Job'
import SavedJobs from './pages/Saved-Jobs'
import MyJobs from './pages/My-Jobs'
import Header from './components/Header'





function App() {

  return (
    <div > 
      
          <div className='grid-background h-screen w-screen fixed '>
          </div>

        <main className='min-h-screen '>
        <BrowserRouter>
          <Header/>
            <Routes>

                 <Route path="/"  element={<Landing />} />
                 <Route path="/onboarding"  element={<Onboarding />} />
                 <Route path="/jobs"  element={<JobListing />} />
                 <Route path="/jobs/:id"  element={<JobPage />} />
                 <Route path="/post-Job"  element={<PostJob />} />
                 <Route path="/saved-Jobs"  element={<SavedJobs />} />
                 <Route path="/my-jobs"  element={<MyJobs />} />


            </Routes>
        </BrowserRouter>
        </main>  
        <footer className='text-center bg-[#010718] text-white p-10'>
        Creating web experiences that connect, engage, and inspire.
        
        </footer>  
        


        </div>    
  )
}

export default App
