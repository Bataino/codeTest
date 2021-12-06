import Game from "../types/Game";

export async function sortByScore_A(array: Game[]){
    return array.sort(function (a:Game, b:Game) {
        return a.rating - b.rating;
    });
}
export async function sortByScore_D(array:Game[]){
    return array.sort(function (a:Game, b:Game) {
        return b.rating - a.rating;
    });
}

export async function sortByDate_A(array:Game[]){
    return array.sort(function (a:Game, b:Game) {
        return a.first_release_date - b.first_release_date;
    });
}
export async function sortByDate_D(array:Game[]){
    return array.sort(function (a:Game, b:Game) {
        return b.first_release_date - a.first_release_date;
    });
}