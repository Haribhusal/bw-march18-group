import AllNews from "./components/AllNews"
import Counter from "./components/Counter"
import Header from "./components/Header"

function App() {

  let newsTitle = "News Website"

  return (
    <>
      <Header title={newsTitle} />
      {/* <Counter /> */}
      <AllNews />
    </>
  )
}

export default App
