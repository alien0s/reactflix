import { apiKey, baseApi } from '../../lib/tmdb'
export default async (req,res) => {
    
    let query = req.query.query
    const results = await fetch(`${baseApi}search/movie?api_key=${apiKey}&language=pt-BR&query=${query}`)
    const json = await results.json()

    res.status(200).json({
        list: json.results
    })
}