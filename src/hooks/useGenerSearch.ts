import useGenre from "./useGenre";

const useGenreSearch = (id ?:number) => {
    const { data: genres } = useGenre();
    return genres.results.find((g) => g.id === id);
}

export default useGenreSearch;