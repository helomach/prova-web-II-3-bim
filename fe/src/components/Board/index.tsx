import { BoardItems } from "../BoardItems";
import { Container } from "./styles";

export function Board() {
    return (
        <Container>
            <BoardItems
            icon="📰"
            title="Notícias"/>
            <BoardItems
            icon="ℹ️"
            title="Informações"/>
            <BoardItems
            icon="🆕"
            title="Matérias"/>
            <BoardItems
            icon="🖥️"
            title="Feed"/>
        </Container>
    )
}