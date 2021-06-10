import { useEffect, useState } from "react"
import { Clube } from "../../models/Clube"
import { api } from "../../services/api"

import { Container } from "./styles";

export function Clubes() {
    const [clubes, setClubes] = useState<Clube[]>([]);

    useEffect(() => {
        api.get<Clube[]>('clubes').then(resposta => setClubes(resposta.data));
    }, [])


    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Rakeback</th>
                        <th>Data Entrada</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Clube AGF</td>
                        <td>0%</td>
                        <td>10/01/2020</td>
                    </tr>
                    <tr>
                        <td>Clube AGF</td>
                        <td>0%</td>
                        <td>10/01/2020</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}