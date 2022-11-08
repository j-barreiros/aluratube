import config from "../config.json"
import styled from "styled-components"
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { Timeline } from "../src/components/Timeline";
import Favorites from "../src/components/Favorites";

export default function HomePage() {
    return (
        <>
            <CSSReset />
            <div>
                <Menu />
                <Banner bannerUrl={config.banner} bannerAlt={config.bannerAlt} />
                <Header />
                <Timeline playlists={config.playlists} />
                <Favorites favorites={config.favorites} />
            </div>
        </>
    )
}

const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }

    .user-info > p {
        color: #666;
        font-weight: 400;
    }
`;

function Header(props) {
    return (

        <StyledHeader>
            {/* <img src="banner" /> */}
            <section className="user-info">
                <img alt="profile picture" src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>{config.name}</h2>
                    <p>{config.description}</p>
                </div>
            </section>
        </StyledHeader>
    )
}

const StyledBanner = styled.div`
    width: 100vw;
    height: 230px;
    margin-top: 50px;
    overflow: hidden;
    background-image: url(${props => props.bannerUrl});
    background-position: center;
    background-size: cover;

    img {
        width: 100vw;
        height: auto;
    }
`;
function Banner({ bannerUrl, bannerAlt }) {

    return (
        <StyledBanner bannerUrl={bannerUrl} title={bannerAlt} />
    )
}