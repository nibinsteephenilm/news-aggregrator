import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NewsCard from "../components/NewsCard";
import WeatherCard from "../components/weatherCard";
import Slider from "react-slick";
import { useSearchParams } from "react-router-dom";
export default function Home() {
    const [news, setNews] = useState();
    const [searchNews, setSearchNews] = useState();
    const [headlines, setHeadlines] = useState();
    const [error, setError] = useState();
    const [searchParams, setSearchParams] = useSearchParams();
    const [location, setLocation] = useState({
        latitude: null,
        longitude: null,
    });
    const [locationError, setLocationError] = useState("");
    const [weather, setWeather] = useState([]);

    const search = searchParams.get("search") || null;

    const fetchHeadlines = async () => {
        try {
            const { data } = await axios.get(
                "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=ee63b7265d7f4b599435142af972872d"
            );
            if (data.status === "ok") {
                setHeadlines(data.articles);
                console.log(data.articles);
            } else {
                console.log("Error fetching data");
            }
        } catch (error) {
            console.error("Error fetching data", error);
        }
    };

    const fetchNews = async () => {
        try {
            const { data } = await axios.get(
                `https://newsapi.org/v2/everything?q=${search}&apiKey=ee63b7265d7f4b599435142af972872d`
            );
            if (data.totalResults !== 0) {
                setNews(data.articles);
                console.log(data.articles);
                setError(null);
            } else {
                setNews();
                setError("No related news found");
            }
        } catch (error) {
            console.error("Error fetching data", error);
        }
    };

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                },
                (error) => {
                    setLocationError(error.message);
                }
            );
        } else {
            setError("Geolocation is not supported by this browser.");
        }
    };

    useEffect(() => {
        getLocation();
    }, []);

    useEffect(() => {
        fetchweather();
    }, [location]);

    console.log(location);

    const fetchweather = async () => {
        try {
            const { data } = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=fa666fc7a255bec66185059c3f4c83df`
            );
            if (data) {
                setWeather(data);
                console.log(data,"++++++++++++++++++++++++++++++++++++");
            } else {
                console.log("error fetching data");
            }
        } catch (error) {
            console.error("Error fetching data", error);
        }
    };

    console.log(weather?.weather?.length ? weather.weather[0] :null,"=====================================");

    useEffect(() => {
        fetchHeadlines();
    }, []);

    useEffect(() => {
        fetchNews();
    }, [search]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Section className="wrapper">
            <Content>
                {!search && (
                    <Highlights>
                        <div className="weather">
                            <WeatherCard 
                                location={weather.name}
                                // temp={Weather.main.temp}
                                // description={weather.weather.map(Weather => Weather.description)}
                                // icon={Weather.weather[0].icon}
                            />
                        </div>
                        <Slider {...settings} className="main-news-slick">
                            {headlines &&
                                headlines.map((item, i) => (
                                    <div className="main-news" key={i}>
                                        <NewsCard
                                            title={item.title}
                                            image={item.urlToImage}
                                            content={item.content}
                                            publishedAt={item.publishedAt}
                                            source={item.source.name}
                                        />
                                    </div>
                                ))}
                            {!headlines && <p>Loading...</p>}
                        </Slider>
                    </Highlights>
                )}
                <AllNews>
                    {news &&
                        news.map((item, i) => (
                            <div className="each-news" key={i}>
                                <NewsCard
                                    title={item.title}
                                    image={item.urlToImage}
                                    content={item.content}
                                    publishedAt={item.publishedAt}
                                    source={item.source.name}
                                />
                            </div>
                        ))}
                    {!news && !error && <p className="loading">Loading...</p>}
                    {error && <p className="loading">No related news found</p>}
                </AllNews>
            </Content>
        </Section>
    );
}

const Section = styled.section``;
const Content = styled.div``;

const Highlights = styled.div`
    display: flex;
    gap: 30px;
    .weather,
    .main-news {
        width: 50%;
        height: 300px;
    }
    .main-news-slick {
        display: flex;
        flex-direction: column;
        width: 50%;
    }
`;

const AllNews = styled.div`
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    position: relative;
    .each-news {
        height: 300px;
    }
    .loading {
        position: absolute;
        width: 100%;
        text-align: center;
    }
`;
