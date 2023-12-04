# React Recap Project

## Music Collection App

In this 5 day recap project, the students create a music collection app in 10 parts.

## Session Guide

Hand out the challenges to the students, they will find a link to the [instructions](https://www.github.com/neuefische/web-extercises/tree/main/sessions/reacap-project-react).
There is an [example solution](https://github.com/neuefische/web-react-recap-project-solution/tree/main) with a checkpoint for every part.

## Custom API

The students will use a custom build proxy API [https://neuefische-spotify-proxy.vercel.app/](https://neuefische-spotify-proxy.vercel.app/) for fetching data from spotify. The API has the following endpoints:

- `/api/featured`: a fixed list of 20 Albums
- `/api/search?artist=beatles&offset=20`: returns Albums matching search parameter, with optional offset
- `/api/albums?ids=[...albumIds]`: fetches specific list of album by id array (array needs to be stringified in the url)
- `/api/tracks?ids=[...trackIds]`: fetches specific list of tracks by id array (array needs to be stringified in the url)
