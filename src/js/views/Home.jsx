import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Characters } from "./Characters.jsx";
import { Planets } from "./Planets.jsx";

export const Home = () => {
    return (
        <>
            {/* <Characters />
        <Planets /> */}

            <div>
                <div class="card text-center">
                    <div class="card-header">
                        {/* {store.item.name} */} Nombre
                    </div>
                    <div class="card-body d-flex">
                        <div>
                            <img src="" />
                        </div>
                        <div>
                            <ul class="list-group list-group-flush text-start">
                                <li class="list-group-item">Height:  </li>
                                <li class="list-group-item">Mass: </li>
                                <li class="list-group-item">Hair color:</li>
                                <li class="list-group-item">Skin color:</li>
                                <li class="list-group-item">Birth year: </li>
                                <li class="list-group-item">Gender: </li>
                                <li class="list-group-item">Planet: </li>
                            </ul>
                        </div>
                    </div>
                    <div class="card-footer text-body-secondary">
                        2 days ago
                    </div>
                </div>
            </div>

        </>
    );
};
