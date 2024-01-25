import conf from "../conf/conf";

export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZGZkY2NiMGM0ODQ2NzkyYTZkOWNjZGJhOWQ3ZGExOCIsInN1YiI6IjY1YWVhYzMzYmQ1ODhiMDBhZDk1OWNhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ALmEJl_TFCABw5AfN0viqBv3F9ilfVhs2jCjx6gKRvs`
    }
}

export const nowPlayingUrl = 'https://api.themoviedb.org/3/movie/now_playing?page=1';
export const IMG_CDN="https://image.tmdb.org/t/p/w500/"
export const Bg_IMG="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg"