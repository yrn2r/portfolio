import { Routes, Route } from 'react-router-dom'
import PortfolioHome from './pages/PortfolioHome'
import AuraApp from './projects/aura/AuraApp'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioHome />} />
      <Route path="/projects/aura/*" element={<AuraApp />} />
    </Routes>
  )
}
