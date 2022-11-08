import styled from "styled-components"

const StyledFavorites = styled.section`
        width: 100vw;
        padding: 0px 32px;

        h2 {
            font-size: 16px;
            font-weight: 700;
            margin-bottom: 16px;
        }

        .favorite-list {
            display: flex;
        }
         
        .favorite-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-right: 16px;
            
            img {
                width: 80px;
                height: 80px;
                border-radius: 50%;
            }

            p {
                font-size: 14px;
            }
        }
    `
export default function Favorites({ favorites }) {


    return (
        <StyledFavorites>
            <h2>Favorites</h2>
            <section className="favorite-list">
                {favorites.map((favorite, index) => {
                    return (
                        <div className="favorite-item" key={index}>
                            <img src={`https://github.com/${favorite.profilePicture}.png`} />
                            <p>{`@${favorite.userName}`}</p>
                        </div>
                    )
                })}
            </section>
        </StyledFavorites>
    )
}