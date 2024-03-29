import { RepositoryItem } from "./RepositoryItem";
import { useState, useEffect } from "react";

import '../styles/repositories.scss';

interface Repository {
    name: string;
    description: string;
    html_url: string;
};

export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([]);

    function onLoadPage() {
        fetch("https://api.github.com/orgs/rocketseat/repos")
        .then(response => response.json())
        .then(data => setRepositories(data))
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