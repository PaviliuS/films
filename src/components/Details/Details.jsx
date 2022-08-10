import React from 'react';
import { NavLink } from 'react-router-dom';
import * as Style from './Style';
import { VscStarFull, VscDesktopDownload } from 'react-icons/vsc'
import { AiTwotoneLike } from 'react-icons/ai'
import { BiTimeFive } from 'react-icons/bi'
import Loader from '../common/Loader/Loader';
import StatisticItem from './StatisticItem/StatisticItem';
import Comments from './Comments/Comments';
import Torrent from './TorrentItem/Torrent';
import Genre from './GenreItem/GenreItem';
  // <Style
const Details = (props) => {
    if (props.isFetchingFilm) {
        return <Loader />
    }
    else {
        let genresList = props.film.genres.map((value) => { return <Genre text={value} />});
        let torrentsList = props.film.torrents.map(item => { return <Torrent href={item.url} quality={item.quality} type={item.type} size={item.size}/> });
  
        return (
            <Style.Details>
                <Style.BackgroundImage src={props.film.background_image_original}></Style.BackgroundImage>
                <Style.Content>
                    <Style.ContentTitle>
                        <NavLink to={'/films/'}>Films / {props.film.title}</NavLink>
                    </Style.ContentTitle>

                    <Style.Data>
                        <Style.Image>
                            <Style.Img src={props.film.large_cover_image}></Style.Img>
                            <Style.Buttons>
                                <Style.DownloadButton href={props.film.url}>DownLoad</Style.DownloadButton>
                                <Style.WatchButton href={props.film.url}>Watch Now</Style.WatchButton>
                            </Style.Buttons>
                        </Style.Image> 
                      
 
                        <Style.Description>
                            <Style.Title>
                                {props.film.title}
                            </Style.Title>

                            <Style.Year>
                                {props.film.year + ' ' + props.film.language}
                            </Style.Year>

                            <Style.Genres>
                                {genresList}
                            </Style.Genres>

                            <Style.DescriptionFull>
                                {props.film.description_full}
                            </Style.DescriptionFull>

                            <Style.Statistic>
                                <StatisticItem icon={<VscStarFull />} text= {props.film.rating}></StatisticItem>
                                <StatisticItem icon={<AiTwotoneLike />} text= {props.film.like_count}></StatisticItem>
                                <StatisticItem icon={<BiTimeFive />} text= {props.film.runtime}></StatisticItem>
                                <StatisticItem icon={<VscDesktopDownload />} text= {props.film.download_count}></StatisticItem>
                            </Style.Statistic>
                            <Style.TorrentsTitle>
                                Downloads:
                            </Style.TorrentsTitle>
                            <Style.Torrents>
                                {torrentsList}
                            </Style.Torrents>
                        </Style.Description>
                    </Style.Data>

                    <Comments comments={props.comments}  deleteComment={props.deleteComment} filmId={props.film.id}  setComment={props.setComment}></Comments>
                </Style.Content>
            </Style.Details>
        );
    }
}

export default Details;