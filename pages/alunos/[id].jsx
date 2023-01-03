export function getStaticPaths() {
    return {
        fallback: false, // significa que se eu passar um id diferente para os parâmetros, ele vai gerar como resultado um erro 404
        paths: [
            { params: { id: '107'} }, // a partir desse componente, gero 3 páginas estáticas
            { params: { id: '203'} },
            { params: { id: '1345'} },
        ]
    } // qualquer valor diferente de um desses 3 id's, retornará um erro 404
}

export function getStaticProps() {
    return {
        props: {}
    }
}

export default function AlunoPorId() {
    return (
        <div>
            <h1>Detalhes do Aluno</h1>
        </div>
    )
}