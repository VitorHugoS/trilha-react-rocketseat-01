import { RepositoryItem } from "./RepositoryItem";
import { useState, useEffect } from "react";

import '../styles/repositories.scss';

function loadRepoFromExternalUrl(setRepositories) {
    fetch("https://api.github.com/orgs/rocketseat/repos")
        .then(response => response.json())
        .then(data => setRepositories(data))
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState([]);

    function onLoadPage() {
        loadRepoFromExternalUrl(setRepositories);
    }

    useEffect(onLoadPage, []);

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                { repositories.map(repository => <RepositoryItem key={repository.name} repository={repository}/>)}
            </ul>
        </section>
    );
}