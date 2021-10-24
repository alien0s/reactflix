import { apiKey, baseApi } from '../../../lib/tmdb'
export default async (req,res) => {
    const results = await fetch(`${baseApi}movie/${req.query.id}/similar?api_key=${apiKey}&language=pt-BR`)
    const json = await results.json()

    res.status(200).json({
        list: json.results
    })
}