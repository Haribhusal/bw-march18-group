import HeaderComponent from './components/Header'

function App() {
  let myName = "Hari"
  let showMessage = () => {
    return "I am interesting"
  }
  return (
    <div>
      <HeaderComponent />
      <h1>Hello {showMessage()}</h1>
      <p>I am a paragraph returned by App function</p>
    </div>
  );
}

export default App;
