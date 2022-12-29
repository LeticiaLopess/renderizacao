export function getStaticProps() {
    return {
        revalidate: 7, // a cada 7 seg o conteúdo será renovado (só conseguimos ver isso no modo produção)
        props: {
            numero: Math.random()
        }
    }
}

export default function Estatico3(props) {
    return (
        <div>
            <h1>Estático #03</h1>
            <h2>{props.numero}</h2>
        </div>
    )
}