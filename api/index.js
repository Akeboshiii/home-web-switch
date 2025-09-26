let store = [] // In-memory storage (resets on cold start)

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(store)
  } 
  else if (req.method === 'POST') {
    store.push(req.body)
    res.status(200).json({ message: 'Saved in memory', data: store })
  } 
  else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}
