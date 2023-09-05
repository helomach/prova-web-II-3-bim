import { Board, OrdersContainer } from "./styles";

interface OrdersBaordProps {
    icon: string;
    title:string;
}

export function BoardItems({icon, title}:OrdersBaordProps) {
    return (
        <Board>
                <header>
                    <span>{icon}</span>
                    <strong>{title}</strong>
                    <span>(1)</span>
                </header>

                <OrdersContainer>
                    <button type="button">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </button>
                    <button type="button">
                        <p>is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </button>
                </OrdersContainer>
            </Board>
    );
}

