export async function getStaticProps() { // lado servidor
    console.log('[Server] gerando props para o componente...')
    const resp = await fetch('http://localhost:3000/api/produtos')
    const produtos = await resp.json()

    return {
        props: {
            produtos
        }
    }
} // com esse método (retorna as propriedades do componente) significa que estaremos trabalhando com componente estático, gerado uma única vez (produção)

export default function Estatico4(props) {
    console.log('[Cliente] renderizando o componente...')

    function renderizarProdutos() {
        return props.produtos.map(
            produto => {
                return <li key={produto.id}>{produto.nome} tem preço de R$ {produto.preco}</li>
            })
    }

    return (
        <div>
            <h1>Estático #04</h1>
            <ul>
                {renderizarProdutos()}
            </ul>
        </div>
    )
}