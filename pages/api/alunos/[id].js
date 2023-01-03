export default function handler (req, res) {
    const id = Number(req.query.id)
    res.status(200).json({
        id: id,
        nome: `João Almeida ${id}`,
        email: `jojohahammmmmmmm${id}@gmail.com`
    })
}