import Card from "../components/Card/Card"

export default function Home(){
    return(
        <main>
            <Card 
            title="Test1" 
            img="./logo512.png" 
            rating={4} 
            price={13.37}
            stock={42}
            location="Test"/>
        </main>
    )
}