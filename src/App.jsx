import Container from "./ui/container"

function App() {
  return (
    <Container className="min-h-screen bg-gradient-to-br from-purple-800 via-indigo-900 to-black text-white p-8">
      <h1 className="text-5xl font-bold mb-6">🔮 Tarot Frontend</h1>
      <p className="text-lg text-gray-300">
        Welcome to your magical tarot reading app ✨
      </p>
    </Container>
  )
}

export default App
