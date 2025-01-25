import { Suspense } from "react"
import Header from "./components/Header"
import HistorySection from "./components/HistorySection"
import Invitation from "./components/Invitation"
import UpButton from "./components/UpButton"
import Loading from "./loading"


const Home = () => {
  return (
    <main>
      <Suspense fallback={<Loading />}>
      <Header />
      <HistorySection />
      <Invitation />
      <UpButton />
      </Suspense>
    </main>
  )
}

export default Home
