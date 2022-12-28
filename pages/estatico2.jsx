export function getStaticProps() {
    return {
        props: {
            numero: Math.random()
        }
    }
} // com esse método (retorna as propriedades do componente) significa que estaremos trabalhando com componente estático, gerado uma única vez (produção)

export default function Estatico2(props) {
    return (
        <div>
            <h1>Estático #02</h1>
            <h2>{props.numero}</h2>
        </div>
    )
}