import { Suspense } from "react"
import Invitation from "./components/Invitation"
import UpButton from "./components/UpButton"
import History from "./components/History"
import Header from "./components/Header"
import Loading from "./loading"
import Place from "./components/Place"
import Footer from "./components/Footer"


const Home = () => {
  return (
    <main>
      <Suspense fallback={<Loading />}>
      <Header />
      <History />
      <Invitation />
      <Place />
      <UpButton />
      <Footer />
      </Suspense>
    </main>
  )
}

export default Home
