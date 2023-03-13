import React, { useState } from 'react';
import { Container, Table } from "./styles";
import MockData from "../../mock.json";

const BaseTable: React.FC = () => {
    const [data, setData] = useState(MockData);
    const [order, setOrder] = useState("ASC");

    const sorting = (col: string) =>{

        if(order === "ASC") {
            const sorted = [...data].sort((a: any,b: any) =>
                a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
            );

            setData(sorted);
            setOrder("DSC");
        }

        if(order === "DSC") {
            const sorted = [...data].sort((a: any,b: any) =>
                a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
            );
            setData(sorted);
            setOrder("ASC");
        }
    }

    return(
        <Container>
            <Table>
                <thead>
                    <tr>
                        <th onClick={()=>sorting("name")}>Name</th>
                        <th onClick={()=>sorting("type")}>Type</th>
                        <th onClick={()=>sorting("hp")}>HP</th>
                        <th onClick={()=>sorting("attack")}>Attack</th>
                        <th onClick={()=>sorting("defense")}>Defense</th>
                        <th onClick={()=>sorting("spAttack")}>Sp.Attack</th>
                        <th onClick={()=>sorting("spDefense")}>Sp.Defense</th>
                        <th onClick={()=>sorting("speed")}>Speed</th>
                        <th onClick={()=>sorting("total")}>Total</th>
                    </tr>
                </thead>
                <tbody>
                    { data.map((d) => (
                        <tr key={d.id}>
                            <td>{d.name}</td>
                            <td>{d.type}</td>
                            <td>{d.hp}</td>
                            <td>{d.attack}</td>
                            <td>{d.defense}</td>
                            <td>{d.spAttack}</td>
                            <td>{d.spDefense}</td>
                            <td>{d.speed}</td>
                            <td>{d.total}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}

export default BaseTable;