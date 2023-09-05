
import ifpr from "../../assets/images/ifpr.svg"

import { Container, Content } from "./styles";

export function Header() {
    return (
        <Container>
            <Content>
                <div className="page-details">
                    <h2>CAMPUS CASCAVEL</h2>
                </div>

                <img src={ifpr} alt="prova" />
            </Content>
        </Container>
    );
}