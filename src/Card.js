const Card = card => {
    return `<li>
    <h5>${card.name}</h5>
    <h5><a href=${card.html_url}>${card.login}</a></h5>
    <img src=${card.avatar_url} style='width:100px;' />
    <p>Repos: <b>${card.public_repos}</b> </p>
    <p>${card.bio ? `bio: ${card.bio}`: ""}</p>
    </li>
    `;
}

export default Card;