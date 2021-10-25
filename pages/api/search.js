import { apiKey, baseApi } from '../../lib/tmdb'
export default async (req,res) => {
    
    const results = await fetch(`${baseApi}search/movie?api_key=${apiKey}&language=pt-BR&query=${req.query.query}`)
    const json = await results.json()

    res.status(200).json({
        list: json.results
    })
}