import React from "react";
import route from './../../public/assets/exampleRoute.json'
import { Polyline } from "@react-google-maps/api";

const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

export default function Poly() {
    return (
        <>
            {route.features[0].geometry.coordinates.map((coord: any, index: number) => {
                const lineArray: any[] = [];
                lineArray.push({ lat: coord[1], lng: coord[0] });
                return (
                    <Polyline
                        key={index}
                        path={lineArray}
                        options={{
                            strokeColor: "#276EF1",
                            strokeWeight: 2,
                        }}
                    />)
            })}
        </>
    );
}