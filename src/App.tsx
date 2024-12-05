import Content from './components/Content'
import Footer from './layout/Footer'
import Header from './layout/Header'

function App() {
  return (
    <div className='flex overflow-y-auto h-full w-full flex-col'>
      <Header />

      <Content />

      <Footer />
    </div>
  )
}

export default App
