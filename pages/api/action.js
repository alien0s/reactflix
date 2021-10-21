import { apiKey, baseApi } from '../../lib/tmdb'
export default async (req,res) => {
    const results = await fetch(`${baseApi}discover/movie?api_key=${apiKey}&with_genres=28&language=pt-BR`)
    const json = await results.json()

    res.status(200).json({
        list: json.results
    })
}